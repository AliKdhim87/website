import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '@/components/reusable';

export default {
  title: 'components/Textarea',
  component: Textarea,
  argTypes: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Full Name',
  placeholder: 'Writ your full name here',
  required: true,
  helperText: 'Helper text',
  error: true,
  disabled: false,
};
