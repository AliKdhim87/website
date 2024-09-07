import type { Meta, StoryObj } from '@storybook/react';

import { SocialMediaLink } from '@/components/slices/socialMedia';

const meta: Meta<typeof SocialMediaLink> = {
  title: 'Components/SocialMedia/SocialMediaLink',
  component: SocialMediaLink,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: ['twitter', 'github', 'linkedIn', 'email'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialMediaLink>;

export const Default: Story = {
  args: {
    icon: 'twitter',
    href: '#',
    'aria-label': 'X (Twitter)',
    title: 'X (Twitter)',
  },
};
