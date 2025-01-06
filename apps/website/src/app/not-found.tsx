import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';

import { Grid, CTA, PageHeader } from '@/components';
import type { GetNotFoundPageQuery } from '@/graphql-types';
import { GET_NOT_FOUND_PAGE } from '@/queries/index.graphql';
import { sanityGraphqlAPIUrl, fetchData } from '@/utils';
export const dynamic = 'force-dynamic';

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const Custom404 = async () => {
  const draft = await draftMode();
  const data = await fetchData<GetNotFoundPageQuery>({
    query: GET_NOT_FOUND_PAGE,
    variables: { slug: 'page-not-found' },
    isDraftMode: draft.isEnabled,
    apiUrl,
  });
  const page = data?.allRoute[0]?.page;
  return (
    <>
      {Array.isArray(page?.content) &&
        page.content.map((component, index: number) => {
          if (component?.__typename === 'PageHeader')
            <PageHeader title={component?.title} body={component?.body} key={`page-header${index}`} />;
          return null;
        })}
      <Grid item justifyContent="center" className="space-mb-start-4 ">
        <CTA Link={Link} href="/">
          Back To Home
        </CTA>
      </Grid>
    </>
  );
};
export default Custom404;
