import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { NavItem } from '@/components/global/Nav/NavItem';
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
      <NavItem>{/* <a href="#!" text="Blog" active={false} /> */}</NavItem>
      <NavItem>{/* <a href="#!" text="Contact" active={false} /> */}</NavItem>
      <NavItem>{/* <a href="#!" text="About" active /> */}</NavItem>
    </>
  ),
};
