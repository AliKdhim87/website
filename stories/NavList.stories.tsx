import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { NavList } from '@/components/global/Nav/NavList';

const meta: Meta<typeof NavList> = {
  title: 'Components/NavList',
  component: NavList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof NavList>;
const navListData = [
  {
    id: 1,
    title: 'Blog',
    route: '/blog',
  },
  {
    id: 2,
    title: 'Contact',
    route: '/contact',
  },
  {
    id: 3,
    title: 'About',
    route: '/about',
  },
];
export const Default: Story = {
  args: {
    list: navListData,
    pathname: '/blog',
  },
};

export const Mobile: Story = {
  args: {
    list: navListData,
    pathname: '/blog',
    mobile: true,
  },
};
