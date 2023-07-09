import wretch from 'wretch';

import { BlogType, PageHeader, RecentPosts } from '@/components/slices';
import { GetAllCategoryIdQuery } from 'generated/graphql';
import { GET_ALL_BLOG_BY_CATEGORY_ID, GET_ALL_CATEGORY_ID } from 'queries/index.graphql';

const fetchData = async (id: string) => {
  try {
    const response = wretch(process.env.SCHEMA_URL as any).post({
      query: GET_ALL_BLOG_BY_CATEGORY_ID,
      variables: { categoryId: id },
    });

    const { data } = await response.json<{ data: any }>();

    return data;
  } catch (error) {
    throw new Error('Error fetching site settings');
  }
};

const fetchAllCategoryIds = async () => {
  try {
    const response = wretch(process.env.SCHEMA_URL as any).post({
      query: GET_ALL_CATEGORY_ID,
    });

    const { data } = await response.json<{ data: GetAllCategoryIdQuery }>();

    return data;
  } catch (error) {
    throw new Error('Error fetching site settings');
  }
};

export async function generateStaticParams() {
  const allCategoryIds = await fetchAllCategoryIds();
  return allCategoryIds.allCategory.map((category) => ({ params: { id: category._id } }));
}

const BlogCategories = async ({ params: { id } }: any) => {
  const data = await fetchData(id);

  return (
    <div>
      {data.Category?.title && <PageHeader title={data.Category.title} />}
      <RecentPosts blog={data.allPost as BlogType[]} />
    </div>
  );
};

export default BlogCategories;
