import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from '@/components/reusable';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Textarea>;

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
