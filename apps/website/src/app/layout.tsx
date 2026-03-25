import { cache } from 'react';
import type { ReactNode } from 'react';

import type { LinkType } from '@ali-dev/components';
import type { Viewport, Metadata } from 'next';
import Link from 'next/link';

import '@fontsource/roboto';
import '../styles/globals.scss';
import '@ali-dev/components/components.css';
import '@ali-dev/theme/build/web/variables.css';

// import 'highlight.js/styles/github-dark.css';

import { Navigation } from '@/components';
import { Body, Footer, LayoutContainer, LogoImage, LogoWrapper, Surface } from '@/components/server';
import { GetSiteSettingsQuery } from '@/graphql-types';
import { GET_SITE_SETTINGS } from '@/queries/index.graphql';
import { fetchData, sanityGraphqlAPIUrl } from '@/utils';

export interface LayoutProps {
  children: ReactNode;
}

const getApiUrl = () =>
  sanityGraphqlAPIUrl({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: process.env.SANITY_GRAPHQL_API_VERSION,
  });

const getSiteSettings = cache(async () => {
  try {
    const data = await fetchData<GetSiteSettingsQuery>({
      query: GET_SITE_SETTINGS,
      apiUrl: getApiUrl(),
    });
    return data.SiteSettings;
  } catch (error) {
    console.error('Failed to fetch site settings:', error);
    return null;
  }
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
  const settings = await getSiteSettings();

  const schemaOrg = settings?.schemaOrg;
  const openGraphImage = schemaOrg?.openGraph?.image?.asset?.url;
  const openGraphEmail = schemaOrg?.email;
  const openGraphDescription = schemaOrg?.openGraph?.description;
  const openGraphTitle = schemaOrg?.openGraph?.title || 'Ali Dev';

  let metadataBase: URL | undefined;
  try {
    metadataBase = schemaOrg?.website ? new URL(schemaOrg.website) : undefined;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    console.error('Invalid website URL in SiteSettings:', schemaOrg?.website);
  }

  return {
    title: {
      template: `%s | ${openGraphTitle}`,
      default: `${openGraphTitle}`,
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
    metadataBase,
    manifest: '/favicon_io/site.webmanifest',
    openGraph: {
      images: openGraphImage ? [openGraphImage] : undefined,
      emails: openGraphEmail || undefined,
      type: 'website',
      description: openGraphDescription || undefined,
      locale: 'en',
      title: openGraphTitle || undefined,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const Layout = async ({ children }: LayoutProps) => {
  const settings = await getSiteSettings();

  const nav = settings?.navigation?.items;
  const footer = settings?.footer?.copyright;
  const schemaOrg = settings?.schemaOrg;
  const schemaJsonData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    email: schemaOrg?.email ? `mailto:${schemaOrg.email}` : undefined,
    image: schemaOrg?.openGraph?.image?.asset?.url,
    jobTitle: schemaOrg?.jobTitle,
    name: schemaOrg?.name,
    telephone: schemaOrg?.telephone,
    url: schemaOrg?.website,
  };

  return (
    <html lang="en">
      <Body id="root">
        <Surface>
          <LayoutContainer>
            <Navigation
              navLinks={nav as LinkType[]}
              logo={
                <Link href="/">
                  <LogoWrapper>
                    <LogoImage />
                  </LogoWrapper>
                </Link>
              }
            />
            <main>{children}</main>
            <Footer>{footer}</Footer>
          </LayoutContainer>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemaJsonData).replace(/</g, '\\u003c'),
            }}
          />
        </Surface>
      </Body>
    </html>
  );
};
export default Layout;
