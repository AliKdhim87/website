import { SocialMedia } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SocialMedia> = {
  title: 'Components/SocialMedia',
  component: SocialMedia,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SocialMedia>;

export const Default: Story = {
  args: {
    title: 'Find me across the internet:',
    list: [
      { url: '#', icon: 'github', title: 'Github' },
      { url: '#', icon: 'linkedIn', title: 'LinkedIn' },
      { url: '#', icon: 'twitter', title: 'Twitter' },
      { url: '#', icon: 'email', title: 'Email' },
    ],
  },
};
