import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputField } from '@/components/reusable';

export default {
  title: 'components/InputField',
  component: InputField,
  argTypes: {},
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Full Name',
  placeholder: 'Writ your full name here',
  required: true,
  helperText: 'Helper text',
  error: true,
  disabled: false,
};
