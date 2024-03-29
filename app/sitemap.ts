import { GET_ALL_PAGES_AND_BLOGS_AND_CATEGORIES } from 'queries/index.graphql';
import { GetAllPagesAndBlogsAndCategoriesQuery } from 'generated/graphql';
import { fetchData } from 'utils/fetchData';

const URL = process.env.SITE_URL;

export default async function sitemap() {
  const data = await fetchData<GetAllPagesAndBlogsAndCategoriesQuery>({
    query: GET_ALL_PAGES_AND_BLOGS_AND_CATEGORIES,
    variables: { slug: 'blog' },
  });
  const blogs = data.allPost;
  const catagoriesData = data.allCategory;
  const pagesData = data.allRoute;
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
