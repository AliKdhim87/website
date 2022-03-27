import * as nextImageExports from 'next/image';

import '../styles/globals.scss';
const NextImage = nextImageExports.default;

// Modify 'next/image' and replace the default export `Image` with our `UnoptimizedImage` wrapper,
// so all components are affected automagically.
Object.defineProperty(nextImageExports, 'default', {
  configurable: true,
  value: (props) => <NextImage {...props} unoptimized />,
});

export const decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#073B4C',
      },
    ],
  },
};
