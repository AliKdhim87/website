import { MetadataRoute } from 'next';
import { draftMode } from 'next/headers';

import { GetAllPagesAndBlogsAndCategoriesQuery } from '@/graphql-types';
import { fetchData, sanityGraphqlAPIUrl } from '@/utils';
import { GET_ALL_PAGES_AND_BLOGS_AND_CATEGORIES } from 'queries/index.graphql';

const URL = process.env.SITE_URL;

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchData<GetAllPagesAndBlogsAndCategoriesQuery>({
    query: GET_ALL_PAGES_AND_BLOGS_AND_CATEGORIES,
    variables: { slug: 'blog' },
    apiUrl,
    isDraftMode: draftMode().isEnabled,
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
