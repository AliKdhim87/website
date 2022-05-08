import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { PageHeader } from '@/components/slices';

export default {
  title: 'components/PageHeader',
  component: PageHeader,
  argTypes: {},
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const PageHeaderWithIamge = Template.bind({});
PageHeaderWithIamge.args = {
  title: 'Hello!',
  body: 'Pariatur quas consequatur aut. Dolorum est quis eum. Placeat dolorem provident animi aliquam molestias sunt asp.',
  image: {
    src: '/ali.png',
    alt: 'ali dev',
    width: '225',
    height: '225',
  },
};

export const PageHeaderWithoutIamge = Template.bind({});
PageHeaderWithoutIamge.args = {
  title: "I'm Ali Amouri Kadhim",
  body: 'I am a full-stack web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.',
};

export const PageHeaderWithOnlyTitle = Template.bind({});
PageHeaderWithOnlyTitle.args = {
  title: 'Get in touch',
};
