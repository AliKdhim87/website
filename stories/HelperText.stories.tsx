import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HelperText } from '@/components/reusable';

export default {
  title: 'components/HelperText',
  component: HelperText,
  argTypes: {},
} as ComponentMeta<typeof HelperText>;

const Template: ComponentStory<typeof HelperText> = (args) => <HelperText {...args} />;

export const HelperTextDefault = Template.bind({});
HelperTextDefault.args = {
  helperText: 'Helper text',
  error: false,
};

export const HelperTextError = Template.bind({});
HelperTextError.args = {
  helperText: 'Helper text',
  error: true,
};
