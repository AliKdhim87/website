import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { HelperText } from '@/components/reusable';

const meta: Meta<typeof HelperText> = {
  title: 'Components/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof HelperText>;

export const HelperTextDefault: Story = {
  args: {
    helperText: 'Helper text',
    error: false,
  },
};

export const HelperTextError: Story = {
  args: {
    helperText: 'Helper text',
    error: true,
  },
};
