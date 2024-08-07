import { draftMode } from 'next/headers';

import { CTA, Grid } from '@/components/reusable';
import { PageHeader } from '@/components/slices';
import type { GetNotFoundPageQuery } from '@/graphql-types';
import { sanityGraphqlAPIUrl, uuidv4, fetchData } from '@/utils';
import { GET_NOT_FOUND_PAGE } from 'queries/index.graphql';

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});

const Custom404 = async () => {
  const data = await fetchData<GetNotFoundPageQuery>({
    query: GET_NOT_FOUND_PAGE,
    variables: { slug: 'page-not-found' },
    isDraftMode: draftMode().isEnabled,
    apiUrl,
  });
  const page = data.allRoute[0]?.page;
  return (
    <>
      {page?.content?.map((component) => {
        if (component?.__typename === 'PageHeader') {
          // TODO make this nicer
          return <PageHeader title={component.title} body={component.body} key={uuidv4()} />;
        }
        return null;
      })}
      <Grid item justifyContent="center" className="space-mb-start-4 ">
        <CTA href="/">Back To Home</CTA>
      </Grid>
    </>
  );
};
export default Custom404;
