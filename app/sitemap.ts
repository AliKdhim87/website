import wretch from 'wretch';

import { GET_ALL_PAGES_AND_BLOGS_AND_CATEGORIES } from 'queries/index.graphql';
import { GetAllPagesAndBlogsAndCategoriesQuery } from 'generated/graphql';

const fetchData = async () => {
  try {
    const response = wretch(process.env.SCHEMA_URL as any).post({
      query: GET_ALL_PAGES_AND_BLOGS_AND_CATEGORIES,
      variables: { slug: 'blog' },
    });
    const { data } = await response.json<{ data: GetAllPagesAndBlogsAndCategoriesQuery }>();

    return {
      pagesData: data.allRoute,
      blogs: data.allPost,
      catagoriesData: data.allCategory,
    };
  } catch (error) {
    throw new Error('Error fetching site settings');
  }
};

const URL = process.env.SITE_URL;

export default async function sitemap() {
  const { blogs, catagoriesData, pagesData } = await fetchData();

  const posts = blogs.map(({ slug, updatedAt }) => ({
    url: `${URL}/blog/${slug?.current}`,
    lastModified: updatedAt,
  }));

  const pages = pagesData.map(({ slug, updatedAt }) => ({
    url: `${URL}/${slug?.current?.includes('front-page') ? '' : slug?.current}`,
    lastModified: updatedAt,
  }));

  const catagories = catagoriesData.map(({ id, updatedAt }) => ({
    url: `${URL}/blog/categories/${id}`,
    lastModified: updatedAt,
  }));

  return [...pages, ...posts, ...catagories];
}
