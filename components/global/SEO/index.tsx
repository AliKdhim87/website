import { Maybe } from 'graphql/jsutils/Maybe';
import Head from 'next/head';
import Script from 'next/script';

import { OpenGraph, SchemaOrg } from 'generated/graphql';

export type SEOTypes = Maybe<OpenGraph> & Partial<{ ogUrl?: Maybe<string>; ogTitle?: Maybe<string> }>;

export interface SEOProps {
  seo?: SEOTypes;
  schemaOrg?: Maybe<SchemaOrg>;
}

export const SEO: React.FC<SEOProps> = ({ seo, schemaOrg }) => {
  const defaultSEOImage = schemaOrg?.openGraph?.image?.asset?.url || '';
  const SEOImage = seo?.image?.asset?.url || defaultSEOImage;
  const defaultOgURL = schemaOrg?.website || '';
  const ogURL = seo?.ogUrl || defaultOgURL;
  const defaultOgTitle = schemaOrg?.openGraph?.title || '';
  const ogTitle = seo?.ogTitle || defaultOgTitle;

  return (
    <Head>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description ?? ''} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:url" content={ogURL} />
      <meta property="og:image" content={SEOImage} />
      <meta name="theme-color" content="#ffd166" />
      <link rel="icon" href="/favicon.ico" />
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              email: `mailto:${schemaOrg?.email}`,
              image: schemaOrg?.openGraph?.image?.asset?.url,
              jobTitle: schemaOrg?.jobTitle,
              name: schemaOrg?.name,
              telephone: schemaOrg?.telephone,
              url: schemaOrg?.website,
            }),
          ),
        }}
      />
    </Head>
  );
};
