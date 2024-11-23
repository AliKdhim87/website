import type { ReactNode } from 'react';

import type { LinkType } from '@ali-dev/components';
import type { Viewport, Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import '@fontsource/roboto';
import '../styles/globals.scss';
import '@ali-dev/components/dist/components.css';
import '@ali-dev/theme/build/web/variables.css';
import 'highlight.js/styles/github-dark.css';

import { Body, Footer, Nav, LayoutContainer, Logo } from '@/components';
import type { ImageType } from '@/components';
import { GetSiteSettingsQuery } from '@/graphql-types';
import { GET_SITE_SETTINGS } from '@/queries/index.graphql';
import { fetchData, sanityGraphqlAPIUrl } from '@/utils';

export interface LayoutProps {
  children: ReactNode;
}

const apiUrl = sanityGraphqlAPIUrl({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
});

/*
TODO
- fetch the color from CMS / website settings
- fetch all icons from CMS / website settings
*/
export const viewport: Viewport = {
  themeColor: '#ffd166',
};
export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchData<GetSiteSettingsQuery>({
    query: GET_SITE_SETTINGS,
    apiUrl,
  });

  const schemaOrg = data.SiteSettings?.schemaOrg;
  const openGraphImage = schemaOrg?.openGraph?.image?.asset?.url;
  const openGraphEmail = schemaOrg?.email;
  const openGraphDescription = schemaOrg?.openGraph?.description;
  const openGraphTitle = schemaOrg?.openGraph?.title;

  return {
    title: {
      template: `%s | ${schemaOrg?.openGraph?.title}`,
      default: `${schemaOrg?.openGraph?.title}`,
    },
    icons: {
      icon: [
        {
          url: '/favicon_io/favicon.ico',
        },
        {
          url: '/favicon_io/android-chrome-192x192.png',
          type: 'image/png',
          sizes: '192x192',
        },
        {
          url: '/favicon_io/android-chrome-512x512.png',
          type: 'image/png',
          sizes: '512x512',
        },
        {
          url: '/favicon_io/favicon-32x32.png',
          type: 'image/png',
          sizes: '32x32',
        },
        {
          url: '/favicon_io/favicon-16x16.png',
          type: 'image/png',
          sizes: '16x16',
        },
      ],
      apple: [{ url: '/favicon_io/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
    },
    metadataBase: new URL(schemaOrg?.website ?? ''),
    manifest: '/favicon_io/site.webmanifest',
    openGraph: {
      images: openGraphImage || undefined,
      emails: openGraphEmail || undefined,
      type: 'website',
      description: openGraphDescription || undefined,
      locale: 'en',
      title: openGraphTitle || undefined,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: 'yandex',
      yahoo: 'yahoo',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const Layout = async ({ children }: LayoutProps) => {
  const data = await fetchData<GetSiteSettingsQuery>({
    query: GET_SITE_SETTINGS,
    apiUrl,
  });
  const logo = {
    src: data.SiteSettings?.navigation?.logo?.asset?.url,
    alt: data.SiteSettings?.navigation?.logo?.alt,
    width: data.SiteSettings?.navigation?.logo?.asset?.metadata?.dimensions?.width,
    height: data.SiteSettings?.navigation?.logo?.asset?.metadata?.dimensions?.height,
  };

  const nav = data.SiteSettings?.navigation?.items;
  const footer = data.SiteSettings?.footer?.copyright;
  const schemaOrg = data.SiteSettings?.schemaOrg;
  const schemaJsonData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    email: `mailto:${schemaOrg?.email}`,
    image: schemaOrg?.openGraph?.image?.asset?.url,
    jobTitle: schemaOrg?.jobTitle,
    name: schemaOrg?.name,
    telephone: schemaOrg?.telephone,
    url: schemaOrg?.website,
  };

  return (
    <html lang="en">
      <Body id="root">
        <LayoutContainer>
          <Nav
            navLinks={nav as LinkType[]}
            logo={
              <Link href="/">
                <Logo logo={logo as ImageType} Image={Image} />
              </Link>
            }
            linkProps={{
              as: Link,
            }}
          />
          <main>{children}</main>
          <Footer>{footer}</Footer>
        </LayoutContainer>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonData) }} />
      </Body>
    </html>
  );
};
export default Layout;
