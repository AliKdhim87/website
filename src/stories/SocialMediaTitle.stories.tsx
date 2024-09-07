import type { Meta, StoryObj } from '@storybook/react';

import { SocialMediaTitle } from '@/components/slices/socialMedia';

const meta: Meta<typeof SocialMediaTitle> = {
  title: 'Components/SocialMedia/SocialMediaTitle',
  component: SocialMediaTitle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SocialMediaTitle>;

export const Default: Story = {
  args: {
    children: 'Find me across the internet:',
  },
};
