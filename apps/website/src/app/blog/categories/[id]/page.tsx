import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CardList, CardListItem, PageHeader } from '@/components';
import { GetAllBlogByCategoryIdQuery, GetAllCategoryIdQuery, GetCategoryByIdQuery } from '@/graphql-types';
import { GET_ALL_BLOG_BY_CATEGORY_ID, GET_ALL_CATEGORY_ID, GET_CATEGORY_BY_ID } from '@/queries/index.graphql';
import { fetchData, sanityGraphqlAPIUrl } from '@/utils';
interface CategoriesPageProps {
  params: {
    id: string;
  };
}

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});
export async function generateStaticParams() {
  const allCategoryIds = await fetchData<GetAllCategoryIdQuery>({
    query: GET_ALL_CATEGORY_ID,
    apiUrl,
  });
  return allCategoryIds.allCategory.map((category) => ({ params: { id: category._id } }));
}

export async function generateMetadata({ params }: CategoriesPageProps): Promise<Metadata> {
  const { Category } = await fetchData<GetCategoryByIdQuery>({
    query: GET_CATEGORY_BY_ID,
    variables: { id: params.id },
    apiUrl,
  });

  return {
    title: `${Category?.title} Articles`,
    description: `Find all articles related to ${Category?.title} on our blog.`,
    alternates: {
      canonical: `/blog/categories/${params.id}`,
    },
  };
}

const BlogCategories = async ({ params: { id } }: CategoriesPageProps) => {
  const data = await fetchData<GetAllBlogByCategoryIdQuery>({
    query: GET_ALL_BLOG_BY_CATEGORY_ID,
    variables: { categoryId: id },
    apiUrl,
  });

  if (data.allPost.length === 0) {
    notFound();
  }
  return (
    <>
      {data.Category?.title && <PageHeader title={`${data.Category.title} Articles`} />}
      <CardList>
        {Array.isArray(data.allPost) &&
          data.allPost.map(({ title, excerpt, publishedAt, updatedAt, slug }, index: number) => (
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

export default BlogCategories;
