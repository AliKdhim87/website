import { Metadata } from 'next';

import '@fontsource/roboto';
import '@/styles/globals.scss';

import { Nav, Main, MainWrapper, Footer, NavLinks } from '@/components/global';
import { GET_SITE_SETTINGS } from 'queries/index.graphql';
import { fetchData } from 'utils/fetchData';

import { GetSiteSettingsQuery } from '../generated/graphql';

export interface LayoutProps {
  children: React.ReactNode;
}
/*
TODO
- fetch the color from CMS / website settings
- fetch all icons from CMS / website settings
*/

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchData<GetSiteSettingsQuery>({
    query: GET_SITE_SETTINGS,
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
    themeColor: '#ffd166',
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
    manifest: '/favicon_io/site.webmanifest',
    openGraph: {
      images: openGraphImage || undefined,
      emails: openGraphEmail || undefined,
      type: 'website',
      description: openGraphDescription || undefined,
      locale: 'en',
      title: openGraphTitle || undefined,
    },
  };
}

const Layout = async ({ children }: LayoutProps) => {
  const data = await fetchData<GetSiteSettingsQuery>({
    query: GET_SITE_SETTINGS,
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
      <body id="root">
        <MainWrapper>
          <Nav navLinks={nav as NavLinks[]} logo={logo} />
          <Main>{children}</Main>
          <Footer copyright={footer} />
        </MainWrapper>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonData) }}
        />
      </body>
    </html>
  );
};
export default Layout;
