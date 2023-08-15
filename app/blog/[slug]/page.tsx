import type { Metadata } from 'next';
import Image from 'next/image';
import wretch from 'wretch';

import {
  Container,
  Grid,
  Typography,
  BlogPostTitle,
  PortableTextComponents,
  GraphComment,
  PortableText,
} from '@/components/reusable';
import { Tags } from '@/components/slices';
import { GetAllBlogSlugsQuery, GetBlogBySlugQuery } from 'generated/graphql';
import { GET_ALL_BLOG_SLUGS, GET_BLOG_BY_SLUG } from 'queries/index.graphql';
import { formattedDate } from 'utils/formattedDate';

type Params = {
  params: {
    slug: string;
  };
};

const fetchData = async (slug: string) => {
  try {
    const response = await wretch(process.env.SCHEMA_URL).post({
      query: GET_BLOG_BY_SLUG,
      variables: { slug },
    });
    const { data } = await response.json<{ data: GetBlogBySlugQuery }>();

    return {
      openGraph: {
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
      },
      page: data.allPost[0],
    };
  } catch (error) {
    throw new Error('Error fetching site settings');
  }
};

const fetchSlugs = async () => {
  try {
    const response = await wretch(process.env.SCHEMA_URL).post({
      query: GET_ALL_BLOG_SLUGS,
    });
    const { data } = await response.json<{ data: GetAllBlogSlugsQuery }>();
    return data;
  } catch (error) {
    throw new Error('Error fetching site settings');
  }
};

export async function generateStaticParams() {
  const { allPost } = await fetchSlugs();
  return allPost?.map(({ slug }) => ({
    slug: slug?.current,
  }));
}

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const { openGraph } = await fetchData(slug);

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
  const { page } = await fetchData(slug);

  const { title, bodyRaw, categories, mainImage, publishedAt, updatedAt } = page;

  return (
    <>
      {mainImage &&
        mainImage.alt &&
        mainImage.asset &&
        mainImage.asset.url &&
        mainImage.asset.metadata?.dimensions?.width &&
        mainImage.asset.metadata?.dimensions?.height && (
          <Container>
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
          </Container>
        )}
      <>
        <Container className="space-pb-3">
          <Typography as="span" variant="body" bodySize="mobile">
            Published: {formattedDate(publishedAt)}
          </Typography>
          {updatedAt && (
            <Typography as="span" variant="body" bodySize="mobile">
              Last Updated: {formattedDate(updatedAt)}
            </Typography>
          )}
        </Container>
        {title && <BlogPostTitle title={title} />}
        <Container>
          <Grid container justifyContent="center">
            <Grid md={10} item>
              {categories && <Tags tags={categories} />}
              <PortableText onMissingComponent={false} value={bodyRaw} components={PortableTextComponents} />
            </Grid>
          </Grid>
          <GraphComment />
        </Container>
      </>
    </>
  );
};

export default PostPage;
