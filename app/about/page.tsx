import type { Metadata } from 'next';
import { ImageProps } from 'next/image';
import wretch from 'wretch';

import { MoreAbout, MoreAboutItem, PageHeader } from '@/components/slices';
import { uuidv4 } from '@/utils';
import { GetAboutPageQuery } from 'generated/graphql';
import { GET_ABOUT_PAGE } from 'queries/index.graphql';

async function fetchData() {
  try {
    const response = await wretch(process.env.SCHEMA_URL).post({
      query: GET_ABOUT_PAGE,
      variables: { slug: 'about' },
    });
    const { data } = await response.json<{ data: GetAboutPageQuery }>();

    return {
      openGraph: data.allRoute[0].openGraph,
      page: data.allRoute[0].page,
      schemaOrg: data.allSiteSettings[0].schemaOrg,
    };
  } catch (error) {
    throw new Error('Server error');
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const { openGraph, schemaOrg } = await fetchData();
  const slug = 'contact';
  return {
    title: openGraph?.title,
    description: openGraph?.description,
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
  const { page } = await fetchData();

  return (
    <div>
      {page?.content?.map((component) => {
        switch (component?.__typename) {
          case 'PageHeader': {
            const image = {
              src: component.image?.asset?.url,
              alt: component.image?.alt,
              width: component.image?.asset?.metadata?.dimensions?.width,
              height: component.image?.asset?.metadata?.dimensions?.height,
            } as ImageProps;

            return (
              <PageHeader
                title={component.title}
                body={component.body}
                image={image}
                titleDistancedBottom
                key={uuidv4()}
              />
            );
          }
          case 'AboutMe':
            return (
              <MoreAbout
                introduction={component.aboutIntroductionRaw}
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
