import { Typography } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'select' },
    },
    as: {
      options: ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'Default Typography',
  },
};

export const SM: Story = {
  args: {
    children: 'SM Typography',
    variant: 'sm',
  },
};
export const MD: Story = {
  args: {
    children: 'MD Typography',
    variant: 'md',
  },
};
export const LG: Story = {
  args: {
    children: 'LG Typography',
    variant: 'lg',
  },
};

export const XL: Story = {
  args: {
    children: 'XL Typography',
    variant: 'xl',
  },
};

export const LongText: Story = {
  args: {
    children: 'This is a long text example to demonstrate the wrapping behavior of the Typography component.',
  },
};
export const MultipleLines: Story = {
  render: () => (
    <div>
      <Typography>
        This is a long text example to demonstrate the wrapping behavior of the Typography component.
      </Typography>
      <Typography>
        This is another long text example to demonstrate the wrapping behavior of the Typography component.
      </Typography>
    </div>
  ),
};
