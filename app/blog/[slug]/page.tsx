import type { Metadata } from 'next';
import Image from 'next/image';

import {
  Container,
  Typography,
  BlogPostTitle,
  GraphComment,
  TOC,
  PortableTextComponents,
  Grid,
} from '@/components/reusable';
import { Tags } from '@/components/slices';
import { GetAllBlogSlugsQuery, GetBlogBySlugQuery } from '@/graphql-types';
import { getTableOfContent, sanityGraphqlAPIUrl } from '@/utils';
import { GET_TOC_GROQ_QUERY } from 'queries/groq';
import { GET_ALL_BLOG_SLUGS, GET_BLOG_BY_SLUG } from 'queries/index.graphql';
import { fetchData } from 'utils/fetchData';
import { formattedDate } from 'utils/formattedDate';
import { nestHeadings } from 'utils/nestHeading';

type Params = {
  params: {
    slug: string;
  };
};

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});

const sanityGROQURL = `https://${process.env.SANITY_PROJECT_ID}.api.sanity.io/${process.env.SANITY_GROQ_API_VERSION}/data/query/${process.env.SANITY_DATASET}`;
export async function generateStaticParams() {
  const data = await fetchData<GetAllBlogSlugsQuery>({
    query: GET_ALL_BLOG_SLUGS,
    options: {
      cache: 'force-cache',
    },
    apiUrl,
  });
  return Array.isArray(data.allPost)
    ? data.allPost.map(({ slug }) => ({
        slug: slug?.current,
      }))
    : [];
}

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const data = await fetchData<GetBlogBySlugQuery>({
    query: GET_BLOG_BY_SLUG,
    variables: { slug },
    apiUrl,
  });

  const openGraph = {
    title: data.allPost[0].title,
    description: data.allPost[0].excerpt,
    schemaOrg: {
      images: data.allPost[0].mainImage,
      websiteURL: data.allSiteSettings[0].schemaOrg?.website,
      siteName: data.allSiteSettings[0].schemaOrg?.openGraph?.title,
      publishedTime: data.allPost[0].publishedAt,
      modifiedTime: data.allPost[0].updatedAt,
      tags: data.allPost[0].categories?.map((category) => category?.title),
    },
  };

  return {
    title: openGraph.title,
    description: openGraph.description,
    openGraph: {
      images: openGraph.schemaOrg.images?.asset?.url || undefined,
      url: `${openGraph.schemaOrg.websiteURL}/blog/${slug}`,
      title: openGraph.title || undefined,
      type: 'article',
      description: openGraph.description || undefined,
      siteName: openGraph.schemaOrg.siteName || undefined,
      publishedTime: openGraph.schemaOrg.publishedTime,
      modifiedTime: openGraph.schemaOrg.modifiedTime,
      locale: 'en',
      tags: openGraph.schemaOrg.tags as string[],
    },
  };
}

const PostPage = async ({ params: { slug } }: Params) => {
  const data = await fetchData<GetBlogBySlugQuery>({
    query: GET_BLOG_BY_SLUG,
    variables: { slug },
    apiUrl,
  });
  const page = data.allPost[0];
  const { title, bodyRaw, categories, mainImage, publishedAt, updatedAt } = page;
  const result = await getTableOfContent({ slug, query: GET_TOC_GROQ_QUERY, url: sanityGROQURL });

  return (
    <>
      {mainImage &&
        mainImage.alt &&
        mainImage.asset &&
        mainImage.asset.url &&
        mainImage.asset.metadata?.dimensions?.width &&
        mainImage.asset.metadata.dimensions.height && (
          <Image
            src={mainImage.asset.url}
            alt={mainImage.alt}
            width={mainImage.asset.metadata.dimensions.width}
            height={mainImage.asset.metadata.dimensions.height}
            loading="eager"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        )}
      <>
        <Container className="space-pb-3">
          <Typography bodySize="mobile">Published: {formattedDate(publishedAt)}</Typography>
          {updatedAt && <Typography bodySize="mobile">Last Updated: {formattedDate(updatedAt)}</Typography>}
        </Container>
        {title && <BlogPostTitle title={title} />}
        <Container>
          {categories && <Tags tags={categories} />}
          <Grid
            container
            spacing="lg"
            justifyContent="space-between"
            flexDirection="column-reverse"
            flexDirectionSM="column-reverse"
          >
            <Grid item md={7}>
              <PortableTextComponents
                onMissingComponent={false}
                value={bodyRaw}
                dataset={process.env.SANITY_DATASET as string}
                projectId={process.env.SANITY_PROJECT_ID as string}
              />
            </Grid>
            <Grid item md={5}>
              <TOC toc={nestHeadings(result.toc)} label="Table Of Content" aria-label="Table Of Content" />
            </Grid>
          </Grid>
          <GraphComment />
        </Container>
      </>
    </>
  );
};

export default PostPage;
