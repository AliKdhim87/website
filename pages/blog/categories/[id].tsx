import { ParsedUrlQuery } from 'querystring';

import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { Layout } from '@/components/global';
import { BlogType, PageHeader, RecentPosts } from '@/components/slices';
import { client, createNavData } from '@/utils';
import {
  Category,
  GetAllBlogByCategoryIdQuery,
  GetAllCategoryIdQuery,
  GetSiteSettingsQuery,
  Post,
  SiteSettings,
} from 'generated/graphql';
import { GET_ALL_BLOG_BY_CATEGORY_ID, GET_ALL_CATEGORY_ID, GET_SITE_SETTINGS } from 'queries/index.graphql';

interface BlogCategoriesProps {
  allPost: Post[];
  Category: Category;
  siteSettings: SiteSettings;
}

const BlogCategories: NextPage<BlogCategoriesProps> = ({
  allPost,
  Category: category,
  siteSettings: { footer, navigation, schemaOrg },
}) => (
  <Layout
    nav={createNavData(navigation)}
    seo={{
      title: category?.title,
      description: category?.description,
      ogTitle: category?.title,
      ogUrl: `${schemaOrg?.website}${useRouter().asPath}`,
    }}
    footer={footer?.copyright}
    schemaOrg={schemaOrg}
  >
    {category && category.title && <PageHeader title={category.title} />}
    <RecentPosts blog={allPost as BlogType[]} />
  </Layout>
);

export default BlogCategories;

export async function getStaticPaths() {
  const { data: allCategoryData } = await client.query<GetAllCategoryIdQuery>({
    query: GET_ALL_CATEGORY_ID,
  });
  const paths = allCategoryData.allCategory.map((category) => ({ params: { id: category._id } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;

  const { data } = await client.query<GetAllBlogByCategoryIdQuery>({
    query: GET_ALL_BLOG_BY_CATEGORY_ID,
    variables: { categoryId: id },
  });

  const {
    data: { SiteSettings: siteSettings },
  } = await client.query<GetSiteSettingsQuery>({
    query: GET_SITE_SETTINGS,
  });

  if (data.allPost.length === 0) {
    return {
      notFound: true,
      props: {
        siteSettings,
      },
    };
  }
  return { props: { ...data, siteSettings } };
};
