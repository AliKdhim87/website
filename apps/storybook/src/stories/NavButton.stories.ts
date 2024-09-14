import { NavButton } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof NavButton> = {
  title: 'Components/NavButton',
  component: NavButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
    name: {
      control: 'select',
      options: ['open', 'close'],
    },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof NavButton>;

export const Default: Story = {};
export const Close: Story = {
  args: {
    name: 'close',
  },
};
export const Hover: Story = {
  parameters: {
    pseudo: {
      hover: true,
    },
  },
};
export const Focus: Story = {
  parameters: {
    pseudo: {
      focus: true,
    },
  },
};
