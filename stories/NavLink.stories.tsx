import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavLink } from '@/components/global/Nav';

export default {
  title: 'components/NavLink',
  component: NavLink,
  argTypes: {},
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'NavLinks',
  href: '!#',
};
