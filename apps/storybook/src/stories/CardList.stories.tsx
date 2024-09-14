import { CardList, CardListItem, CardListTitle, CardListLoadMoreLink } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CardList> = {
  title: 'Components/CardList',
  component: CardList,
  parameters: {
    // layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Default: Story = {
  render: (args) => (
    <CardList {...args}>
      <CardListTitle level={2}>Card List Title</CardListTitle>
      <CardListItem
        href="#"
        title="Card List Item"
        body="Card List Item"
        publishedAt="2024-01-01"
        updatedAt="2024-01-01"
      />
      <CardListItem
        href="#"
        title="Card List Item"
        body="Card List Item"
        publishedAt="2024-01-01"
        updatedAt="2024-01-01"
      />
      <CardListItem
        href="#"
        title="Card List Item"
        body="Card List Item"
        publishedAt="2024-01-01"
        updatedAt="2024-01-01"
      />
      <CardListLoadMoreLink href="#">Load More</CardListLoadMoreLink>
    </CardList>
  ),
};
