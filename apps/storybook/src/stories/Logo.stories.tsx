import { LogoWrapper, LogoImage } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LogoWrapper> = {
  title: 'Components/LogoWrapper',
  component: LogoWrapper,
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
type Story = StoryObj<typeof LogoWrapper>;

export const Default: Story = {
  args: {
    children: <LogoImage />,
  },
};
