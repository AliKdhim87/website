import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SocialMedia } from '@/components/slices/socialMedia';

export default {
  title: 'components/SocialMedia',
  component: SocialMedia,
  argTypes: {},
} as ComponentMeta<typeof SocialMedia>;

const Template: ComponentStory<typeof SocialMedia> = (args) => <SocialMedia {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Find me across the internet:',
  socialMedia: [
    { url: '#', icon: 'github', title: 'Github' },
    { url: '#', icon: 'instagram', title: 'Instagram' },
    { url: '#', icon: 'linkedIn', title: 'LinkedIn' },
    { url: '#', icon: 'twitter', title: 'Twitter' },
    { url: '#', icon: 'email', title: 'Email' },
  ],
};
