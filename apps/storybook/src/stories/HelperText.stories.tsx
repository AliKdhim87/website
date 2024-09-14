import { HelperText } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof HelperText> = {
  title: 'Components/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'boolean' },
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const HelperTextDefault: Story = {
  args: {
    children: 'Helper text',
    error: false,
  },
};

export const HelperTextError: Story = {
  args: {
    children: 'Helper text',
    error: true,
  },
};
