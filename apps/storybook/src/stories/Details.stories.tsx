import { Details, Typography } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Details> = {
  title: 'Components/Details',
  component: Details,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Details>;

export const Default: Story = {
  args: {
    label: 'Table Of Content',
    children: (
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ea. Saepe necessitatibus error maiores
        exercitationem, atque unde, omnis fuga qui architecto iure asperiores fugiat debitis alias, sit possimus sequi
        ipsa?
      </Typography>
    ),
  },
};
