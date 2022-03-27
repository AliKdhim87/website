import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Nav } from '@/components/global/Nav';

export default {
  title: 'components/Nav',
  component: Nav,
  argTypes: {},
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: { src: '/Logo.svg', width: 180, height: 69, alt: 'Ali dev logo' },
  navLinks: [
    { href: '/blog', text: 'Blog' },
    { href: '/contact', text: 'Contact' },
    { href: '/about', text: 'About' },
  ],
};
