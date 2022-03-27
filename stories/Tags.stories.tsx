import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tags } from '@/components/slices';

export default {
  title: 'components/Tags',
  component: Tags,
  argTypes: {},
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const TagsDefault = Template.bind({});
TagsDefault.args = {
  tags: [
    {
      title: '#JavaScript',
      _id: '#',
    },
    {
      title: '#React',
      _id: '#',
    },
    {
      title: '#CSS',
      _id: '#',
    },
    {
      title: '#HTML',
      _id: '#',
    },
  ],
};
