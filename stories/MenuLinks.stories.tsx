import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { NavLinks, NavLinksItem, NavLink } from '@/components/global/Nav';

export default {
  title: 'components/NavLinks',
  component: NavLinks,
  argTypes: {},
} as ComponentMeta<typeof NavLinks>;

const Template: ComponentStory<typeof NavLinks> = (args) => <NavLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <NavLinksItem>
        <NavLink href="#!" text="Blog" active={false} />
      </NavLinksItem>
      <NavLinksItem>
        <NavLink href="#!" text="Contact" active={false} />
      </NavLinksItem>
      <NavLinksItem>
        <NavLink href="#!" text="About" active />
      </NavLinksItem>
    </>
  ),
};
