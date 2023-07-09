import wretch from 'wretch';
import type { Metadata } from 'next';

import { BlogType, PageHeader, RecentPosts } from '@/components/slices';
import { GetBlogPageQuery } from 'generated/graphql';
import { GET_BLOG_PAGE } from 'queries/index.graphql';
import { uuidv4 } from 'utils/uuid-v4';

const fetchData = async () => {
  try {
    const response = wretch(process.env.SCHEMA_URL as any).post({
      query: GET_BLOG_PAGE,
      variables: { slug: 'blog' },
    });
    const { data } = await response.json<{ data: GetBlogPageQuery }>();

    return {
      allPost: data.allPost,
      openGraph: data.allRoute[0].openGraph,
      schemaOrg: data.allSiteSettings[0].schemaOrg,
      page: data.allRoute[0].page,
    };
  } catch (error) {
    throw new Error('Error fetching site settings');
  }
};

export async function generateMetadata(): Promise<Metadata> {
  const { openGraph, schemaOrg } = await fetchData();
  const slug = 'blog';

  return {
    title: openGraph?.title,
    description: openGraph?.description,
    openGraph: {
      images: openGraph?.image?.asset?.url || undefined,
      description: openGraph?.description || undefined,
      url: `${schemaOrg?.website}/${slug}`,
      title: schemaOrg?.openGraph?.title || undefined,
      type: 'website',
      locale: 'en',
    },
  };
}

const Blog = async () => {
  const { allPost, page } = await fetchData();

  return (
    <>
      {page?.content?.map(
        (component) => component?.__typename === 'PageHeader' && <PageHeader title={component.title} key={uuidv4()} />,
      )}
      <RecentPosts
        blogTitleOptions={{
          level: 'h2',
        }}
        blog={allPost as BlogType[]}
      />
    </>
  );
};
export default Blog;
