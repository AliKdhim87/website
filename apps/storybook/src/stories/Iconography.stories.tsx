import { Icon } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  title: 'Components/Iconography/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    name: {
      control: { type: 'select' },
      options: ['email', 'asterisk', 'bullet', 'calender', 'close', 'github', 'hamburger', 'linkedIn', 'twitter'],
    },
  },
  render: (args) => (
    <div style={{ color: 'white', fontSize: '32px' }}>
      <Icon {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Email: Story = {
  args: {
    name: 'email',
  },
};
export const Asterisk: Story = {
  args: {
    name: 'asterisk',
  },
};
export const Bullet: Story = {
  args: {
    name: 'bullet',
  },
};
export const Calender: Story = {
  args: {
    name: 'calender',
  },
};
export const Close: Story = {
  args: {
    name: 'close',
  },
};
export const Github: Story = {
  args: {
    name: 'github',
  },
};
export const Hamburger: Story = {
  args: {
    name: 'hamburger',
  },
};
export const LinkedIn: Story = {
  args: {
    name: 'linkedIn',
  },
};
export const Twitter: Story = {
  args: {
    name: 'twitter',
  },
};
