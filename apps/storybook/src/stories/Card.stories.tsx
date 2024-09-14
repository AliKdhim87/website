import { Card } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headingOptions: {
      control: 'object',
    },
    body: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    publishedAt: {
      control: 'text',
    },
    updatedAt: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    body: 'Card body',
    title: 'Card title',
    publishedAt: '2024-01-01',
    updatedAt: '2024-01-01',
    headingOptions: {
      level: 2,
      //   variant: 'h',
    },
  },
};
