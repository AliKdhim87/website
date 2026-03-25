import type { Preview } from '@storybook/nextjs-vite';
import '@ali-dev/components/components.css';
import '@ali-dev/theme/build/web/variables.css';
import 'highlight.js/styles/github-dark.css';

const preview: Preview = {
  parameters: {
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
