import { PageHeader } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

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
    title: 'Hey there!',
    body: `I'm a passionate front-end web developer with a focus on Design System, dedicated to making the web a better place, one line of code at a time. I thrive on seeking innovative solutions and creating captivating user experiences.`,
    image: {
      src: '/public/example.svg',
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
