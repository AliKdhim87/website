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
      <CardListTitle level={2}>Example Card List</CardListTitle>
      {[1, 2, 3].map((index) => (
        <CardListItem
          key={index}
          href={`#item-${index}`}
          title={`Card Item ${index}`}
          body={`This is the description for Card Item ${index}.`}
          publishedAt={{
            dateTime: '2025-03-22T20:23:26+01:00',
            formatted: 'March 22, 2025',
            label: 'Published',
          }}
          updatedAt={{
            dateTime: '2025-03-22T20:23:26+01:00',
            formatted: 'March 22, 2025',
            label: 'Updated',
          }}
        />
      ))}
      <CardListLoadMoreLink href="#">Load More Items</CardListLoadMoreLink>
    </CardList>
  ),
};
