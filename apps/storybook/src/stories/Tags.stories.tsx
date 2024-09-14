import { Tags } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

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
const tagsData = [
  {
    text: '#JavaScript',
    href: '#',
  },
  {
    text: '#React',
    href: '#',
  },
  {
    text: '#CSS',
    href: '#',
  },
  {
    text: '#HTML',
    href: '#',
  },
];
export const TagsDefault: Story = {
  args: {
    tags: tagsData,
  },
};
