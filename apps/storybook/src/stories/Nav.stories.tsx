import { LogoImage, LogoWrapper, Nav } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  args: {
    logo: (
      <LogoWrapper>
        <LogoImage />
      </LogoWrapper>
    ),
    navLinks: [
      { route: '/blog', title: 'Blog' },
      { route: '/contact', title: 'Contact' },
      { route: '/about', title: 'About' },
    ],
  },
};
