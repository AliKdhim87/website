import { TOC } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TOC> = {
  title: 'Components/TOC',
  component: TOC,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TOC>;

export const Default: Story = {
  args: {
    label: 'Table of Contents',
    toc: [
      {
        id: 'TOC-content-2-1',
        textContent: 'TOC Content h2-1',
        level: 'h2',
      },
      {
        id: 'TOC-content-2-2',
        textContent: 'TOC Content h2-2',
        level: 'h2',
        nestedH3: [
          {
            id: 'TOC-content-3',
            textContent: 'TOC Content h3',
            level: 'h3',
            nestedH4: [],
          },
          {
            id: 'TOC-content-3',
            textContent: 'TOC Content h3',
            level: 'h3',
            nestedH4: [
              {
                id: 'TOC-content-4',
                textContent: 'TOC Content h4',
                level: 'h4',
                nestedH5: [
                  {
                    id: 'TOC-content-5',
                    textContent: 'TOC Content h5',
                    level: 'h5',
                    nestedH6: [
                      {
                        id: 'TOC-content-6',
                        textContent: 'TOC Content h6',
                        level: 'h6',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
