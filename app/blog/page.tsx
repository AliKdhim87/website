import type { Metadata } from 'next';

import { BlogType, PageHeader, RecentPosts } from '@/components/slices';
import { GetBlogPageQuery } from 'generated/graphql';
import { GET_BLOG_PAGE } from 'queries/index.graphql';
import { uuidv4 } from 'utils/uuid-v4';
import { fetchData } from 'utils/fetchData';

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchData<GetBlogPageQuery>({
    query: GET_BLOG_PAGE,
    variables: { slug: 'blog' },
  });
  const openGraph = data.allRoute[0]?.openGraph;
  const schemaOrg = data.allSiteSettings[0]?.schemaOrg;

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
  const data = await fetchData<GetBlogPageQuery>({
    query: GET_BLOG_PAGE,
    variables: { slug: 'blog' },
  });

  const { allPost } = data;
  const page = data.allRoute[0]?.page;

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
