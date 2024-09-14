import { Body, Typography } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Body> = {
  title: 'Components/Body',
  component: Body,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Body>;

export const Default: Story = {
  args: {
    children: (
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloremque ea perferendis placeat maiores.
        Debitis molestias doloribus ipsam similique possimus facere, ex, dolor suscipit, labore inventore alias
        doloremque eos odio.
      </Typography>
    ),
  },
};
