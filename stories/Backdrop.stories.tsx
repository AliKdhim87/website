import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Default as NavListItems } from './MenuLinks.stories';

import { NavList } from '@/components/global/Nav/NavList';
import { Backdrop } from '@/components/reusable/Backdrop';

export default {
  title: 'components/Backdrop',
  component: Backdrop,
  argTypes: {},
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <NavList mobile>
      <NavListItems {...NavListItems.args} mobile />
    </NavList>
  ),
  parent: 'root',
};
