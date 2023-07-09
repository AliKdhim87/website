import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
      crawlDelay: 3,
    },
    host: process.env.SITE_URL,
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  };
}
