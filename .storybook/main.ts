import * as path from 'path';

import type { StorybookConfigVite } from '@storybook/builder-vite';
import type { StorybookConfig } from '@storybook/nextjs';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig & StorybookConfigVite = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite' as any,
  },
  staticDirs: ['../public'],
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    return mergeConfig(config, {
      plugins: [react(), svgr()],
      define: {
        'process.env': process.env,
      },

      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
          '@components': path.resolve(__dirname, '../components'),
          '@styles': path.resolve(__dirname, '../styles'),
          '@utils': path.resolve(__dirname, '../utils'),
        },
      },
    });
  },
  docs: {
    autodocs: true,
  },
};

export default config;
