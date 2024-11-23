import { BlogHeader } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BlogHeader> = {
  title: 'Components/Blog Header',
  component: BlogHeader,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BlogHeader>;

export const Default: Story = {
  args: {
    title: 'Blog Header',
  },
};
