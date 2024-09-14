import { Header } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    children: 'Header Component',
  },
};
