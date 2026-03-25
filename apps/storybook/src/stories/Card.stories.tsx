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
      control: 'object',
      description: 'Published date object (TimestampData)',
    },
    updatedAt: {
      control: 'object',
      description: 'Updated date object (TimestampData)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    body: 'Card body',
    title: 'Card title',
    publishedAt: { dateTime: '2023-10-01', formatted: 'Oct 1, 2023', label: 'Published' },
    updatedAt: { dateTime: '2023-10-02', formatted: 'Oct 2, 2023', label: 'Updated' },
    headingOptions: {
      level: 2,
      //   variant: 'h',
    },
  },
};
