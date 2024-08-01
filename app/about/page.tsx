import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { ImageProps } from 'next/image';

import { MoreAbout, MoreAboutItem, PageHeader } from '@/components/slices';
import { GetAboutPageQuery } from '@/graphql-types';
import { sanityGraphqlAPIUrl, uuidv4, fetchData } from '@/utils';
import { GET_ABOUT_PAGE } from 'queries/index.graphql';

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

  const slug = 'contact';
  return {
    title: openGraph?.title,
    description: openGraph?.description,
    alternates: {
      canonical: '/about',
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

            return <PageHeader title={component.title} body={component.body} image={image} key={uuidv4()} />;
          }
          case 'AboutMe':
            return (
              <MoreAbout
                value={component.aboutIntroductionRaw}
                dataset={process.env.SANITY_DATASET as string}
                projectId={process.env.SANITY_PROJECT_ID as string}
                moreAboutItems={component.aboutMeItems as MoreAboutItem[]}
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

export default AboutPage;
