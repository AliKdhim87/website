import type { Meta, StoryObj } from '@storybook/react';

import { Nav } from '@/components/global/Nav';

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  args: {
    logo: { src: '/public/Logo-v2.svg', width: '180', height: '69', alt: 'Ali dev logo' },
    navLinks: [
      { route: '/blog', title: 'Blog' },
      { route: '/contact', title: 'Contact' },
      { route: '/about', title: 'About' },
    ],
  },
};
