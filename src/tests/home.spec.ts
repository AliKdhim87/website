import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.SITE_URL ?? 'http://localhost:3000');
  });
  test.describe('SEO', () => {
    test('renders title', async ({ page }) => {
      await expect(page).toHaveTitle(/Home page | Ali Dev/);
    });
    test('renders meta description', async ({ page }) => {
      const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
      expect(metaDescription).toBe(
        'Ali Dev - specializes in expert web development services, creating modern, responsive, and user-friendly websites. Elevate your online presence today!',
      );
    });
    test('renders Open Graph title correctly', async ({ page }) => {
      const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
      expect(ogTitle).toBe('ALI DEV');
    });
    test('renders Open Graph description correctly', async ({ page }) => {
      const ogTitle = await page.locator('meta[property="og:description"]').getAttribute('content');
      expect(ogTitle).toBe(
        'Ali Dev - specializes in expert web development services, creating modern, responsive, and user-friendly websites. Elevate your online presence today!',
      );
    });
    test('renders Open Graph locale correctly', async ({ page }) => {
      const ogLocale = await page.locator('meta[property="og:locale"]').getAttribute('content');
      expect(ogLocale).toBe('en');
    });
    test('renders Open Graph image correctly', async ({ page }) => {
      const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
      expect(ogImage).toBe(
        'https://cdn.sanity.io/images/nz7mz6t7/production/f23d2cce01d87cdce663f85590ed13dcd07d1b24-640x513.jpg',
      );
    });
    test('renders Open Graph type correctly', async ({ page }) => {
      const ogType = await page.locator('meta[property="og:type"]').getAttribute('content');
      expect(ogType).toBe('website');
    });
    test('renders Twitter card correctly', async ({ page }) => {
      const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute('content');
      expect(twitterCard).toBe('summary_large_image');
    });
    test('renders Twitter title correctly', async ({ page }) => {
      const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute('content');
      expect(twitterTitle).toBe('ALI DEV');
    });
    test('renders Twitter description correctly', async ({ page }) => {
      const twitterDescription = await page.locator('meta[name="twitter:description"]').getAttribute('content');
      expect(twitterDescription).toBe(
        'Ali Dev - specializes in expert web development services, creating modern, responsive, and user-friendly websites. Elevate your online presence today!',
      );
    });
    test('renders Twitter image correctly', async ({ page }) => {
      const twitterImage = await page.locator('meta[name="twitter:image"]').getAttribute('content');
      expect(twitterImage).toBe(
        'https://cdn.sanity.io/images/nz7mz6t7/production/f23d2cce01d87cdce663f85590ed13dcd07d1b24-640x513.jpg',
      );
    });
  });
  test.describe('Favicon', () => {
    test('renders favicon correctly', async ({ page }) => {
      const favicon = await page.getAttribute('link[rel="icon"]', 'href');
      expect(favicon).toBe('/favicon_io/favicon.ico');
    });
    test('renders apple-touch-icon correctly', async ({ page }) => {
      const appleTouchIcon = await page.locator('link[rel="apple-touch-icon"]').getAttribute('href');
      expect(appleTouchIcon).toBe('/favicon_io/apple-touch-icon.png');
    });
    test('renders manifest correctly', async ({ page }) => {
      const manifest = await page.locator('link[rel="manifest"]').getAttribute('href');
      expect(manifest).toBe('/favicon_io/site.webmanifest');
    });
    test('renders android-chrome-192x192 correctly', async ({ page }) => {
      const androidChrome192x192 = await page.locator('link[rel="icon"][sizes="192x192"]').getAttribute('href');
      expect(androidChrome192x192).toBe('/favicon_io/android-chrome-192x192.png');
    });
    test('renders android-chrome-512x512 correctly', async ({ page }) => {
      const androidChrome512x512 = await page.locator('link[rel="icon"][sizes="512x512"]').getAttribute('href');
      expect(androidChrome512x512).toBe('/favicon_io/android-chrome-512x512.png');
    });
    test('renders favicon-16x16 correctly', async ({ page }) => {
      const favicon16x16 = await page.locator('link[rel="icon"][sizes="16x16"]').getAttribute('href');
      expect(favicon16x16).toBe('/favicon_io/favicon-16x16.png');
    });
    test('renders favicon-32x32 correctly', async ({ page }) => {
      const favicon32x32 = await page.locator('link[rel="icon"][sizes="32x32"]').getAttribute('href');
      expect(favicon32x32).toBe('/favicon_io/favicon-32x32.png');
    });
  });
});
