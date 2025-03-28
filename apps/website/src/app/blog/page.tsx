import type { Metadata } from 'next';
import { draftMode } from 'next/headers';

import { CardList, CardListItem, PageHeader } from '@/components';
import type { GetBlogPageQuery } from '@/graphql-types';
import { GET_BLOG_PAGE } from '@/queries/index.graphql';
import { uuidv4, fetchData, sanityGraphqlAPIUrl } from '@/utils';

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchData<GetBlogPageQuery>({
    query: GET_BLOG_PAGE,
    variables: { slug: 'blog' },
    isDraftMode: draftMode().isEnabled,
    apiUrl,
  });
  const openGraph = data.allRoute[0]?.openGraph;
  const schemaOrg = data.allSiteSettings[0]?.schemaOrg;

  const slug = 'blog';

  return {
    title: openGraph?.title,
    description: openGraph?.description,
    alternates: {
      canonical: `/${slug}`,
    },
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
    isDraftMode: draftMode().isEnabled,
    apiUrl,
  });

  const { allPost } = data;
  const page = data.allRoute[0]?.page;

  return (
    <>
      {page?.content?.map(
        (component) => component?.__typename === 'PageHeader' && <PageHeader title={component.title} key={uuidv4()} />,
      )}
      <CardList>
        {Array.isArray(allPost) &&
          allPost.map(({ title, excerpt, publishedAt, updatedAt, slug }, index: number) => (
            <CardListItem
              key={index}
              title={title as string}
              body={excerpt as string}
              updatedAt={updatedAt}
              publishedAt={publishedAt}
              href={`/blog/${slug?.current}`}
              headingOptions={{
                level: 3,
                variant: 'h3',
              }}
            />
          ))}
      </CardList>
    </>
  );
};
export default Blog;
