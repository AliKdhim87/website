import type { Metadata } from 'next';
import { draftMode } from 'next/headers';

import {
  CardList,
  CardListItem,
  CardListLoadMoreLink,
  CardListTitle,
  PageHeader,
  SocialMedia,
  type SocialMediaListType,
} from '@/components';
import type { GetHomePageQuery } from '@/graphql-types';
import { GET_HOME_PAGE } from '@/queries/index.graphql';
import { fetchData, sanityGraphqlAPIUrl } from '@/utils';

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
    alternates: {
      canonical: '/',
    },
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
  const recentPosts = data.allPost;
  return (
    <div>
      {page?.content?.map((component, index: number) => {
        switch (component?.__typename) {
          case 'PageHeader':
            return <PageHeader key={`${index}-page-header`} title={component.title} body={component.body} />;
          case 'SocialCollection':
            return (
              <SocialMedia
                title={component.title as string}
                list={component.items as SocialMediaListType[]}
                key={`${index}-social-media`}
              />
            );
          case 'BlogList':
            return (
              <CardList>
                <CardListTitle level={2}>{component.title}</CardListTitle>
                {Array.isArray(recentPosts) &&
                  recentPosts.map(({ title, excerpt, publishedAt, updatedAt, slug }, index: number) => (
                    <CardListItem
                      key={index}
                      title={title as string}
                      body={excerpt as string}
                      updatedAt={updatedAt}
                      publishedAt={publishedAt}
                      href={`/blog/${slug?.current}`}
                    />
                  ))}
                {component.cta?.route && (
                  <CardListLoadMoreLink href={component.cta.route}>{component.cta.title}</CardListLoadMoreLink>
                )}
              </CardList>
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
