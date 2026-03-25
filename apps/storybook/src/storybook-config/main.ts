import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/nextjs-vite';
import svgr from 'vite-plugin-svgr';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/preset-scss',
    '@chromatic-com/storybook',
    'storybook-addon-pseudo-states',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  async viteFinal(config: any) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      plugins: [svgr()],
      resolve: {
        alias: {
          '@': resolve(__dirname, '../'),
        },
      },
    });
  },
};

export default config;
