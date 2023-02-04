import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { NavLink } from '@/components/global/Nav/NavLink';

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
