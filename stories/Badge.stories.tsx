import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Badge } from '@/components/reusable';

export default {
  title: 'components/Badge',
  component: Badge,
  argTypes: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const BadgeDefault = Template.bind({});
BadgeDefault.args = {
  children: '#javaScript',
  href: '#',
};
