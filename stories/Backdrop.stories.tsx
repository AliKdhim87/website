import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Backdrop } from '@/components/reusable/Backdrop';
import { Default as NavLinks } from './MenuLinks.stories';

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
