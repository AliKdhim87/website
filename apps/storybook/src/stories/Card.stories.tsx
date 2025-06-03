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
      description: 'Object containing dateTime, formatted, and label for published date',
      type: {
        name: 'object',
        value: {
          dateTime: { name: 'string', required: true },
          formatted: { name: 'string', required: true },
          label: { name: 'string', required: true },
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    body: 'Card body',
    title: 'Card title',
    publishedAt: {
      dateTime: '2023-10-01T12:00:00Z',
      formatted: 'October 1, 2023',
      label: 'Published on',
    },
    updatedAt: {
      dateTime: '2023-10-01T12:00:00Z',
      formatted: 'October 1, 2023',
      label: 'Updated on',
    },
    headingOptions: {
      level: 2,
      //   variant: 'h',
    },
  },
};
