import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import Image, { ImageProps } from 'next/image';

import { Container, Grid, Page, PageHeader, PortableText } from '@/components';
import { GetAboutPageQuery } from '@/graphql-types';
import { GET_ABOUT_PAGE } from '@/queries/index.graphql';
import { sanityGraphqlAPIUrl, uuidv4, fetchData } from '@/utils';

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});

export async function generateMetadata(): Promise<Metadata> {
  const { allRoute, allSiteSettings } = await fetchData<GetAboutPageQuery>({
    query: GET_ABOUT_PAGE,
    variables: { slug: 'about' },
    apiUrl,
    isDraftMode: draftMode().isEnabled,
  });

  const { openGraph } = allRoute[0];
  const { schemaOrg } = allSiteSettings[0];

  const slug = 'about';
  return {
    title: openGraph?.title,
    description: openGraph?.description,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      images: openGraph?.image?.asset?.url || undefined,
      description: openGraph?.description || undefined,
      url: `${schemaOrg?.website}/${slug}`,
      title: schemaOrg?.openGraph?.title || undefined,
      type: 'website',
      locale: 'en',
    },
  };
}

const AboutPage = async () => {
  const { allRoute } = await fetchData<GetAboutPageQuery>({
    query: GET_ABOUT_PAGE,
    variables: { slug: 'about' },
    apiUrl,
    isDraftMode: draftMode().isEnabled,
  });
  const { page } = allRoute[0];

  return (
    <div>
      {page?.content?.map((component) => {
        switch (component?.__typename) {
          case 'PageHeader': {
            const image = {
              src: component.image?.asset?.url,
              alt: component.image?.alt,
              width: 300,
              height: 300,
            } as ImageProps;

            return (
              <PageHeader
                title={component.title}
                body={component.body}
                image={
                  {
                    ...image,
                    ImageComponent: Image,
                  } as any
                }
                key={uuidv4()}
              />
            );
          }
          case 'AboutMe':
            return (
              <Page>
                <Container>
                  <Grid container justifyContent="center">
                    <Grid item md={10}>
                      <PortableText
                        value={component.aboutIntroductionRaw}
                        key={uuidv4()}
                        dataset={process.env.SANITY_DATASET as string}
                        projectId={process.env.SANITY_PROJECT_ID as string}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Page>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default AboutPage;
