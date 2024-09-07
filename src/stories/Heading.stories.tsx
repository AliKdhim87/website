import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from '@/components/reusable';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Default Heading',
  },
};
export const H1: Story = {
  args: {
    children: 'H1 Heading',
    level: 1,
  },
};
export const H2: Story = {
  args: {
    children: 'H2 Heading',
    level: 2,
  },
};
export const H3: Story = {
  args: {
    children: 'H3 Heading',
    level: 3,
  },
};
export const H4: Story = {
  args: {
    children: 'H4 Heading',
    level: 4,
  },
};
export const H5: Story = {
  args: {
    children: 'H5 Heading',
    level: 5,
  },
};
export const H6: Story = {
  args: {
    children: 'H6 Heading',
    level: 6,
  },
};
export const WithCustomVariant: Story = {
  args: {
    children: 'Heading with custom variant',
    level: 1,
    variant: 'h2',
  },
};
export const WithCustomClassName: Story = {
  args: {
    children: 'Heading with custom class name',
    level: 1,
    className: 'custom-class',
  },
};

export const WithChildren: Story = {
  args: {
    level: 1,
  },
  render: (args) => (
    <Heading {...args}>
      <span>Heading with children</span>
    </Heading>
  ),
};
export const WithCustomStyles: Story = {
  args: {
    children: 'Heading with custom styles',
    level: 1,
    style: { color: 'red' },
  },
};
