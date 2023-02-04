import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { NavItem } from '@/components/global/Nav/NavItem';
import { NavLink } from '@/components/global/Nav/NavLink';
import { NavList } from '@/components/global/Nav/NavList';

export default {
  title: 'components/NavList',
  component: NavList,
  argTypes: {},
} as ComponentMeta<typeof NavList>;

const Template: ComponentStory<typeof NavList> = (args) => <NavList {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <NavItem>
        <NavLink href="#!" text="Blog" active={false} />
      </NavItem>
      <NavItem>
        <NavLink href="#!" text="Contact" active={false} />
      </NavItem>
      <NavItem>
        <NavLink href="#!" text="About" active />
      </NavItem>
    </>
  ),
};
