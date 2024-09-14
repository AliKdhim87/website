import { MoreAbout } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof MoreAbout> = {
  title: 'Components/MoreAbout',
  component: MoreAbout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MoreAbout>;

export const MoreAboutDefault: Story = {
  args: {
    value:
      'Ipsam molestiae vitae autem laudantium consequuntur accusamus dicta nisi. Magni et consequatur doloribus neque et. Autem omnis ut consequatur dignissimos autem earum. Dignissimos at omnis nihil non velit sit exercitationem delectus dolores. Voluptatem dolor ea aut perspiciatis.',
    moreAboutItems: [
      {
        title: 'SMTP Granite Kids',
        body: 'Itaque officia voluptates soluta quam voluptates omnis aut fuga. Et et explicabo libero tempore. Minima id est tenetur voluptate.',
        publishedAt: '2018 - Present',
      },
    ],
  },
};
