import type { Meta, StoryObj } from '@storybook/react';

import { PageHeader } from '@/components/slices';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const PageHeaderWithImage: Story = {
  args: {
    title: 'Hello!',
    body: 'Pariatur quas consequatur aut. Dolorum est quis eum. Placeat dolorem provident animi aliquam molestias sunt asp.',
    image: {
      src: '/public/Logo-v2.svg',
      alt: 'ali dev',
      width: '225',
      height: '225',
    },
  },
};

export const PageHeaderWithoutImage: Story = {
  args: {
    title: "I'm Ali Amouri Kadhim",
    body: 'I am a full-stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.',
  },
};

export const PageHeaderWithOnlyTitle: Story = {
  args: {
    title: 'Get in touch',
  },
};
