import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import { Layout, SEOTypes } from '@/components/global';
import { PageHeader, RecentPostsProps } from '@/components/slices';
import { client, createNavData } from '@/utils';
import { GetAllBlogQuery, Post, Route, SiteSettings } from 'generated/graphql';
import { GET_ALL_BLOG, GET_PAGE_BY_SLUG } from 'queries/index.graphql';

const RecentPosts = dynamic<RecentPostsProps>(
  () => import('@/components/slices').then(({ RecentPosts: RecentPostsComponents }) => RecentPostsComponents),
  {
    ssr: false,
  },
);

interface BlogPageProps {
  allPost?: Array<Post>;
  SiteSettings: SiteSettings;
  Route: Route;
}

const Blog: NextPage<BlogPageProps> = ({
  allPost,
  SiteSettings: { navigation, footer, schemaOrg },
  Route: { openGraph },
}) => (
  <Layout seo={openGraph as SEOTypes} footer={footer?.copyright} nav={createNavData(navigation)} schemaOrg={schemaOrg}>
    <PageHeader title="Blog" />
    <RecentPosts blog={allPost} />
  </Layout>
);
export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const { data: pageData } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: { slug: 'blog' },
  });

  const { data } = await client.query<GetAllBlogQuery>({
    query: GET_ALL_BLOG,
  });

  return {
    props: {
      ...data,
      Route: pageData.allRoute[0],
      SiteSettings: pageData.SiteSettings,
    },
  };
};
