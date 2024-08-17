import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/api/', '/_next/', '/404', '/500', '/public/'],
      },
    ],
    host: process.env.SITE_URL,
    sitemap: `${process.env.SITE_URL}/sitemap.xml`,
  };
}
