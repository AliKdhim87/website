import { ContentTimestamps } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

export interface ContentTimestampsProps {
  publishedAt: {
    dateTime: string;
    formatted: string;
    label: string;
  };
  updatedAt?: {
    dateTime: string;
    formatted: string;
    label: string;
  };
}

const meta: Meta<typeof ContentTimestamps> = {
  title: 'Components/ContentTimestamps',
  component: ContentTimestamps,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    publishedAt: {
      control: {
        type: 'object',
      },
      description: 'Published date and time',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'undefined' },
      },
    },
    updatedAt: {
      control: {
        type: 'object',
      },
      description: 'Updated date and time',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContentTimestamps>;

export const Default: Story = {
  args: {
    publishedAt: {
      dateTime: '2023-10-01T12:00:00Z',
      formatted: 'October 1, 2023',
      label: 'Published on',
    },
    updatedAt: {
      dateTime: '2023-10-02T12:00:00Z',
      formatted: 'October 2, 2023',
      label: 'Updated on',
    },
  },
};
