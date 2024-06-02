import type { Preview } from '@storybook/react';
import '../styles/globals.scss';

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#222831',
        },
      ],
    },
  },
};

export default preview;
