import { List, ListItem, Typography } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  subcomponents: { ListItem: ListItem as any },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    type: 'unordered',
    children: (
      <>
        <ListItem>
          <Typography>Item 1</Typography>
        </ListItem>
        <ListItem>
          <Typography>Item 2</Typography>
        </ListItem>
        <ListItem>
          <Typography>Item 3</Typography>
        </ListItem>
      </>
    ),
  },
};
export const Ordered: Story = {
  args: {
    type: 'ordered',
    children: (
      <>
        <ListItem>
          <Typography>Item 1</Typography>
        </ListItem>
        <ListItem>
          <Typography>Item 2</Typography>
        </ListItem>
        <ListItem>
          <Typography>Item 3</Typography>
        </ListItem>
      </>
    ),
  },
};
