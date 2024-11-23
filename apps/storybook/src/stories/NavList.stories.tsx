import { NavList, NavItem, NavLink } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof NavList> = {
  title: 'Components/NavList',
  component: NavList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    mobile: {
      control: 'boolean',
    },
  },
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
  render: (args) => (
    <NavList {...args}>
      {navListData.map((item) => (
        <NavItem key={item.id}>
          <NavLink href={item.route}>{item.title}</NavLink>
        </NavItem>
      ))}
    </NavList>
  ),
};

export const Mobile: Story = {
  args: {
    mobile: true,
  },
  render: (args) => (
    <NavList {...args}>
      {navListData.map((item) => (
        <NavItem key={item.id}>
          <NavLink href={item.route}>{item.title}</NavLink>
        </NavItem>
      ))}
    </NavList>
  ),
};
