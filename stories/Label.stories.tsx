import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Label } from '@/components/reusable';

export default {
  title: 'components/Label',
  component: Label,
  argTypes: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  htmlFor: 'fullName',
  required: true,
};
