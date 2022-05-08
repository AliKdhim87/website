import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Default as NavLinks } from './MenuLinks.stories';

import { Backdrop } from '@/components/reusable/Backdrop';

export default {
  title: 'components/Backdrop',
  component: Backdrop,
  argTypes: {},
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = (args) => <Backdrop {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <NavLinks {...NavLinks.args} mobile />,
};
