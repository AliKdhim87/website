import { BlockCode } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';
const meta: Meta<typeof BlockCode> = {
  title: 'Components/Block Code',
  component: BlockCode,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    code: {
      control: 'text',
      description: 'The code to be highlighted',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    language: {
      control: 'text',
      description: 'The language of the code',
      defaultValue: '',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    highlightedLinesPosition: {
      control: 'object',
      description: 'The lines to be highlighted',
      defaultValue: [],
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[]' },
      },
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof BlockCode>;
export const Default: Story = {
  args: {
    code: 'console.log("Hello, World!");',
    language: 'javascript',
    highlightedLinesPosition: [],
  },
};
export const WithHighlightedLines: Story = {
  args: {
    code: 'console.log("Hello, World!");\nconsole.log("This is a test.");\nconsole.log("Another line.");',
    language: 'javascript',
    highlightedLinesPosition: [1, 3],
  },
};
