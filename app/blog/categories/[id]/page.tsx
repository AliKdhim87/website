import { BlogType, PageHeader, RecentPosts } from '@/components/slices';
import { GetAllBlogByCategoryIdQuery, GetAllCategoryIdQuery } from '@/graphql-types';
import { GET_ALL_BLOG_BY_CATEGORY_ID, GET_ALL_CATEGORY_ID } from 'queries/index.graphql';
import { fetchData } from 'utils/fetchData';

export async function generateStaticParams() {
  const allCategoryIds = await fetchData<GetAllCategoryIdQuery>({
    query: GET_ALL_CATEGORY_ID,
    options: { cache: 'force-cache' },
  });
  return allCategoryIds.allCategory.map((category) => ({ params: { id: category._id } }));
}

const BlogCategories = async ({ params: { id } }: any) => {
  const data = await fetchData<GetAllBlogByCategoryIdQuery>({
    query: GET_ALL_BLOG_BY_CATEGORY_ID,
    variables: { categoryId: id },
  });

  return (
    <>
      {data.Category?.title && <PageHeader title={data.Category.title} />}
      <RecentPosts blog={data.allPost as BlogType[]} />
    </>
  );
};

export default BlogCategories;
