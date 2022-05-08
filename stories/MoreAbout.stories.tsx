import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { MoreAbout } from '@/components/slices';

export default {
  title: 'components/MoreAbout',
  component: MoreAbout,
  argTypes: {},
} as ComponentMeta<typeof MoreAbout>;

const Template: ComponentStory<typeof MoreAbout> = (args) => <MoreAbout {...args} />;

export const MoreAboutDefault = Template.bind({});
MoreAboutDefault.args = {
  introduction:
    'Ipsam molestiae vitae autem laudantium consequuntur accusamus dicta nisi. Magni et consequatur doloribus neque et. Autem omnis ut consequatur dignissimos autem earum. Dignissimos at omnis nihil non velit sit exercitationem delectus dolores. Voluptatem dolor ea aut perspiciatis.',
  moreAboutItems: [
    {
      title: 'SMTP Granite Kids',
      body: 'Itaque officia voluptates soluta quam voluptates omnis aut fuga. Et et explicabo libero tempore. Minima id est tenetur voluptate.',
      publishedAt: '2018 - Present',
    },
  ],
};
