import type { Metadata } from 'next';
import Image from 'next/image';

import {
  Container,
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
import { fetchData } from 'utils/fetchData';

type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const data = await fetchData<GetAllBlogSlugsQuery>({
    query: GET_ALL_BLOG_SLUGS,
    options: {
      cache: 'force-cache',
    },
  });
  return data.allPost.length > 0
    ? data.allPost?.map(({ slug }) => ({
        slug: slug?.current,
      }))
    : [];
}

export async function generateMetadata({ params: { slug } }: Params): Promise<Metadata> {
  const data = await fetchData<GetBlogBySlugQuery>({
    query: GET_BLOG_BY_SLUG,
    variables: { slug },
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
  });
  const page = data.allPost[0];
  const { title, bodyRaw, categories, mainImage, publishedAt, updatedAt } = page;

  return (
    <>
      {mainImage &&
        mainImage.alt &&
        mainImage.asset &&
        mainImage.asset.url &&
        mainImage.asset.metadata?.dimensions?.width &&
        mainImage.asset.metadata?.dimensions?.height && (
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
          <Typography as="p" variant="body" bodySize="mobile">
            Published: {formattedDate(publishedAt)}
          </Typography>
          {updatedAt && (
            <Typography as="p" variant="body" bodySize="mobile">
              Last Updated: {formattedDate(updatedAt)}
            </Typography>
          )}
        </Container>
        {title && <BlogPostTitle title={title} />}
        <Container>
          {/* TODO: CREATE BODY COMPONENT FOR PORTABLE TEXT */}
          {categories && <Tags tags={categories} />}
          <PortableText onMissingComponent={false} value={bodyRaw} components={PortableTextComponents} />
          <GraphComment />
        </Container>
      </>
    </>
  );
};

export default PostPage;
