import type { Metadata } from 'next';
import { draftMode } from 'next/headers';

import { BlogType, PageHeader, RecentPosts, SocialMedia } from '@/components/slices';
import { fetchData, sanityGraphqlAPIUrl, uuidv4 } from '@/utils';
import type { GetHomePageQuery } from '@/graphql-types';
import { GET_HOME_PAGE } from 'queries/index.graphql';

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchData<GetHomePageQuery>({
    query: GET_HOME_PAGE,
    variables: { slug: 'front-page' },
    isDraftMode: draftMode().isEnabled,
    apiUrl,
  });
  const openGraph = data.allRoute[0]?.openGraph;
  return {
    title: openGraph?.title,
    description: openGraph?.description,
  };
}

const Home = async () => {
  const data = await fetchData<GetHomePageQuery>({
    query: GET_HOME_PAGE,
    variables: { slug: 'front-page' },
    isDraftMode: draftMode().isEnabled,
    apiUrl,
  });
  const page = data.allRoute[0]?.page;
  const recentPosts = data?.allPost;
  return (
    <div>
      {page?.content?.map((component) => {
        switch (component?.__typename) {
          case 'PageHeader':
            return <PageHeader key={uuidv4()} title={component.title} body={component.body} titleDistancedBottom />;
          case 'SocialCollection':
            return <SocialMedia title={component.title} socialMedia={component?.items} key={uuidv4()} />;
          case 'BlogList':
            return (
              <RecentPosts
                title={component.title}
                blog={recentPosts as BlogType[]}
                cta={component.cta}
                key={uuidv4()}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Home;
// TODO build a custom field in the CMS to display the recent posts instead of fetch it from the API
