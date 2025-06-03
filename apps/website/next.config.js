import path from 'path';

export default {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  webpack(config) {
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes('scss') && rule.use) {
        rule.use.forEach((loader) => {
          // loader can be string or object, so guard it
          if (
            (typeof loader === 'object' || typeof loader === 'function') &&
            loader.loader &&
            loader.loader.includes('sass-loader')
          ) {
            loader.options = {
              ...loader.options,
              sassOptions: {
                ...(loader.options?.sassOptions || {}),
                includePaths: [path.resolve(__dirname, 'node_modules')],
              },
            };
          }
        });
      }
    });

    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ['@svgr/webpack'],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};
