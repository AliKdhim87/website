import { Footer, LayoutContainer, Nav, Typography } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LayoutContainer> = {
  title: 'Components/LayoutContainer',
  component: LayoutContainer,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LayoutContainer>;

export const Default: Story = {
  render: (args) => (
    <LayoutContainer {...args}>
      <Nav
        navLinks={[
          {
            title: 'Home',
            route: '/',
          },
          {
            title: 'About',
            route: '/about',
          },
          {
            title: 'Contact',
            route: '/contact',
          },
        ]}
        logo={{
          src: '/Logo-v2.svg',
          alt: 'Ali Dev Logo',
          width: 185,
          height: 50,
        }}
      />
      <main>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias doloremque ea perferendis placeat maiores.
          Debitis molestias doloribus ipsam similique possimus facere, ex, dolor suscipit, labore inventore alias
        </Typography>
      </main>
      <Footer>Footer</Footer>
    </LayoutContainer>
  ),
};
