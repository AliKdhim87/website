import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { InputField } from '@/components/reusable';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'Writ your full name here',
    required: true,
    helperText: 'Helper text',
    error: true,
    disabled: false,
  },
};
