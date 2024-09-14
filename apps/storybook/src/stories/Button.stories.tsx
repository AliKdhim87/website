import { Button } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};
export const PrimaryLoading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
  },
};
export const PrimaryDisabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};

export const PrimaryHovered: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    children: 'Hovered Button',
  },
};

export const PrimaryFocused: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    children: 'Focused Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};
export const SecondaryLoading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
    variant: 'secondary',
  },
};
export const SecondaryDisabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'secondary',
  },
};
export const SecondaryHovered: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    children: 'Hovered Button',
    variant: 'secondary',
  },
};
export const SecondaryFocused: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    children: 'Focused Button',
    variant: 'secondary',
  },
};
