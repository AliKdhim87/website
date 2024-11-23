import type { Preview } from '@storybook/react';
import '@ali-dev/components/dist/components.css';
import '@ali-dev/theme/build/web/variables.css';
import 'highlight.js/styles/github-dark.css';

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
          value: '#393e46',
        },
        {
          name: 'light',
          value: '#fff',
        },
      ],
    },
  },
};

export default preview;
