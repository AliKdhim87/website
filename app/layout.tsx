import { Metadata } from 'next';
import wretch from 'wretch';

import '@fontsource/roboto';
import '@/styles/globals.scss';

import { Nav, Main, MainWrapper, Footer, NavLinks } from '@/components/global';
import { GET_SITE_SETTINGS } from 'queries/index.graphql';

import { GetSiteSettingsQuery } from '../generated/graphql';

export interface LayoutProps {
  children: React.ReactNode;
}

const fetchData = async () => {
  try {
    const response = wretch(process.env.SCHEMA_URL as any).post({
      query: GET_SITE_SETTINGS,
    });

    const { data } = await response.json<{ data: GetSiteSettingsQuery }>();

    const logo = {
      src: data.SiteSettings?.navigation?.logo?.asset?.url,
      alt: data.SiteSettings?.navigation?.logo?.alt,
      width: data.SiteSettings?.navigation?.logo?.asset?.metadata?.dimensions?.width,
      height: data.SiteSettings?.navigation?.logo?.asset?.metadata?.dimensions?.height,
    };
    return {
      logo,
      nav: data.SiteSettings?.navigation?.items,
      footer: data.SiteSettings?.footer?.copyright,
      schemaOrg: data.SiteSettings?.schemaOrg,
    };
  } catch (error) {
    throw new Error('Error fetching site settings');
  }
};
/*
TODO
- fetch the color from CMS / website settings
- fetch all icons from CMS / website settings
*/

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchData();
  const openGraphImage = data?.schemaOrg?.openGraph?.image?.asset?.url;
  const openGraphEmail = data.schemaOrg?.email;
  const openGraphDescription = data.schemaOrg?.openGraph?.description;
  const openGraphTitle = data?.schemaOrg?.openGraph?.title;

  return {
    title: {
      template: `%s | ${data.schemaOrg?.openGraph?.title}`,
      default: `${data.schemaOrg?.openGraph?.title}`,
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
  const data = await fetchData();

  const schemaJsonData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    email: `mailto:${data.schemaOrg?.email}`,
    image: data.schemaOrg?.openGraph?.image?.asset?.url,
    jobTitle: data.schemaOrg?.jobTitle,
    name: data.schemaOrg?.name,
    telephone: data.schemaOrg?.telephone,
    url: data.schemaOrg?.website,
  };

  return (
    <html lang="en">
      <body id="root">
        <MainWrapper>
          <Nav navLinks={data.nav as NavLinks[]} logo={data.logo} />
          <Main>{children}</Main>
          <Footer copyright={data.footer} />
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
