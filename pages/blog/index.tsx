import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import { GET_ALL_BLOG, GET_PAGE_BY_SLUG } from 'queries/index.graphql';
import { GetAllBlogQuery, Post, Route, SiteSettings } from 'generated/graphql';
import { client, createNavData } from '@/utils';
import { Layout } from '@/components/global';
import { PageHeader, RecentPostsProps } from '@/components/slices';

const RecentPosts = dynamic<RecentPostsProps>(
  () => import('@/components/slices').then(({ RecentPosts }) => RecentPosts),
  {
    ssr: false,
  },
);

interface BlogPageProps {
  allPost?: Array<Post>;
  SiteSettings: SiteSettings;
  Route: Route;
}

const Blog: NextPage<BlogPageProps> = ({ allPost, SiteSettings: { navigation, footer }, Route: { openGraph } }) => (
  <Layout seo={openGraph} footer={footer?.copyright} nav={createNavData(navigation)}>
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
    revalidate: 60,
  };
};
