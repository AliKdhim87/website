import { InlineCode } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof InlineCode> = {
  title: 'Components/InlineCode',
  component: InlineCode,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof InlineCode>;

export const Default: Story = {
  args: {
    children: 'InlineCode',
  },
};
