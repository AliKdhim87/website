import type { GetStaticProps, NextPage } from 'next';

import { Layout } from '@/components/global';
import { PageHeader, RecentPosts, SocialMedia } from '@/components/slices';
import { GET_LATEST_BLOG, GET_PAGE_BY_SLUG } from 'queries/index.graphql';
import { client, uuidv4, createNavData } from '@/utils';
import { Post, Route, SiteSettings } from 'generated/graphql';
interface HomeProps {
  allPost?: Array<Post>;
  SiteSettings: SiteSettings;
  Route: Route;
}

const Home: NextPage<HomeProps> = ({ allPost, SiteSettings: { navigation, footer }, Route: { openGraph, page } }) => (
  <Layout seo={openGraph} footer={footer?.copyright} nav={createNavData(navigation)}>
    {page?.content?.map((component) => {
      switch (component?.__typename) {
        case 'PageHeader':
          return <PageHeader key={uuidv4()} title={component.title} body={component.body} titleDistancedBottom />;
        case 'SocialCollection':
          return <SocialMedia title={component.title} socialMedia={component?.items} key={uuidv4()} />;
        case 'BlogList':
          return <RecentPosts title={component.title} blog={allPost} cta={component.cta} key={uuidv4()} />;
        default:
          return null;
      }
    })}
  </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data: recentBlog } = await client.query({
    query: GET_LATEST_BLOG,
  });

  const { data: pageData } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: { slug: 'front-page' },
  });

  return {
    props: {
      ...recentBlog,
      Route: pageData.allRoute[0],
      SiteSettings: pageData.SiteSettings,
    },
    revalidate: 60,
  };
};
