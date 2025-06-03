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
            dateTime: `2025-0${index}-01T12:00:00Z`,
            formatted: `March ${index}, 2025`,
            label: 'Published on',
          }}
          updatedAt={{
            dateTime: `2025-0${index}-10T12:00:00Z`,
            formatted: `March ${index + 9}, 2025`,
            label: 'Updated on',
          }}
        />
      ))}
      <CardListLoadMoreLink href="#">Load More Items</CardListLoadMoreLink>
    </CardList>
  ),
};
