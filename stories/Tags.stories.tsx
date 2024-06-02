import type { Meta, StoryObj } from '@storybook/react';

import { Tags } from '@/components/slices';

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags',
  component: Tags,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Tags>;

export const TagsDefault: Story = {
  args: {
    tags: [
      {
        title: '#JavaScript',
        _id: '#',
      },
      {
        title: '#React',
        _id: '#',
      },
      {
        title: '#CSS',
        _id: '#',
      },
      {
        title: '#HTML',
        _id: '#',
      },
    ],
  },
};
