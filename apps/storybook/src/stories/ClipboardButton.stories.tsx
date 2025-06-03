import { ClipboardButton } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ClipboardButton> = {
  title: 'Components/Clipboard Button',
  component: ClipboardButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: 'text',
      description: 'The code to be copied to the clipboard',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    timeoutDuration: {
      control: 'number',
      description: 'Duration in milliseconds before the button reverts to the copy icon',
      defaultValue: 1000,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1000' },
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ClipboardButton>;
export const Default: Story = {
  args: {
    code: 'console.log("Hello, World!");',
    timeoutDuration: 1000,
  },
};
