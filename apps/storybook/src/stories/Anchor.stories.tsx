import { Anchor } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Anchor> = {
  title: 'Components/Anchor',
  component: Anchor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
  args: { onClick: fn(), href: '#' },
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const Hovered: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    children: 'Hovered',
  },
};

export const Focused: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    children: 'Focused',
  },
};
