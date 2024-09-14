import { Badge } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { href: '#' },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: '#javaScript',
    href: '#',
  },
};

export const Hovered: Story = {
  args: {
    children: '#javaScript',
  },
  parameters: {
    pseudo: { hover: true },
  },
};
export const Focused: Story = {
  args: {
    children: '#javaScript',
  },
  parameters: {
    pseudo: { focus: true },
  },
};
