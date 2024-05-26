import { BlogType, PageHeader, RecentPosts } from '@/components/slices';
import { GetAllBlogByCategoryIdQuery, GetAllCategoryIdQuery } from '@/graphql-types';
import { fetchData, sanityGraphqlAPIUrl } from '@/utils';
import { GET_ALL_BLOG_BY_CATEGORY_ID, GET_ALL_CATEGORY_ID } from 'queries/index.graphql';

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

const BlogCategories = async ({ params: { id } }: any) => {
  const data = await fetchData<GetAllBlogByCategoryIdQuery>({
    query: GET_ALL_BLOG_BY_CATEGORY_ID,
    variables: { categoryId: id },
    apiUrl,
  });

  return (
    <>
      {data.Category?.title && <PageHeader title={data.Category.title} />}
      <RecentPosts blog={data.allPost as BlogType[]} />
    </>
  );
};

export default BlogCategories;
