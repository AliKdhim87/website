import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CTA } from '@/components/reusable';

const meta: Meta<typeof CTA> = {
  title: 'Components/CTA',
  component: CTA,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
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
type Story = StoryObj<typeof CTA>;

export const Default: Story = {
  args: {
    children: 'Default CTA',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary CTA',
    variant: 'primary',
  },
};

export const PrimaryHovered: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    children: 'Hovered CTA',
  },
};

export const PrimaryFocused: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    children: 'Focused CTA',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary CTA',
    variant: 'secondary',
  },
};

export const SecondaryHovered: Story = {
  parameters: {
    pseudo: { hover: true },
  },
  args: {
    children: 'Hovered CTA',
    variant: 'secondary',
  },
};
export const SecondaryFocused: Story = {
  parameters: {
    pseudo: { focus: true },
  },
  args: {
    children: 'Focused CTA',
    variant: 'secondary',
  },
};
