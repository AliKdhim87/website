import { Textarea } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    helperText: {
      control: 'text',
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Writ your Message here',
    required: true,
  },
};
export const Error: Story = {
  args: {
    label: 'Message',
    placeholder: 'Writ your Message here',
    required: true,
    helperText: 'Helper text',
    error: true,
  },
};
export const Disabled: Story = {
  args: {
    label: 'Message',
    placeholder: 'Writ your Message here',
    disabled: true,
  },
};
export const WithHelperText: Story = {
  args: {
    label: 'Message',
    placeholder: 'Writ your Message here',
    required: true,
    helperText: 'Helper text',
  },
};
export const Hovered: Story = {
  args: {
    label: 'Message',
    placeholder: 'Writ your Message here',
    required: true,
    helperText: 'Helper text',
  },
  parameters: {
    pseudo: { hover: true },
  },
};
export const Focused: Story = {
  args: {
    label: 'Message',
    placeholder: 'Writ your Message here',
    required: true,
    helperText: 'Helper text',
  },
  parameters: {
    pseudo: { focus: true },
  },
};
