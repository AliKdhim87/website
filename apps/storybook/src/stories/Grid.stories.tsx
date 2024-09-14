import { PropsWithChildren } from 'react';

import { Grid, Container } from '@ali-dev/components';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
    docs: {
      // page: () => (
      //   <>
      //     <h1>Grid Component</h1>
      //     <p>
      //       The `Grid` component is a flexible and responsive layout component that uses CSS Grid/Flexbox under the
      //       hood. It supports different column spans, responsive breakpoints, alignment options, and gaps between grid
      //       items.
      //     </p>
      //     <h2>Props</h2>
      //     <ul>
      //       <li>
      //         <b>container:</b> Boolean to define if the grid is a container (default: false)
      //       </li>
      //       <li>
      //         <b>item:</b> Boolean to define if the grid is an item within a container (default: false)
      //       </li>
      //       <li>
      //         <b>xs, sm, md, lg:</b> Define the number of columns the grid item should take at different breakpoints
      //       </li>
      //       <li>
      //         <b>columnGap, rowGap:</b> Define the spacing between columns and rows
      //       </li>
      //       <li>
      //         <b>justifyContent, alignItems:</b> Flexbox alignment options
      //       </li>
      //       <li>
      //         <b>flexDirection:</b> The direction of the grid (row, column, etc.)
      //       </li>
      //     </ul>
      //   </>
      // ),
    },
  },
  tags: ['autodocs'],
  argTypes: {
    xs: {
      control: { type: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      description: 'Number of columns on extra-small screens',
    },
    sm: {
      control: { type: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      description: 'Number of columns on small screens',
    },
    columnGap: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
      description: 'Gap between columns',
    },
    justifyContent: {
      control: { type: 'select', options: ['flex-start', 'center', 'flex-end', 'space-between'] },
      description: 'Justify content of grid items',
    },
  },

  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Grid>;
const Box = ({ children }: PropsWithChildren) => (
  <div className="test" style={{ backgroundColor: '#fff' }}>
    {children}
  </div>
);
export const Default: Story = {
  render: () => (
    <Container>
      <Grid container columnGap="md" rowGap="md" justifyContent="center">
        <Grid item md={1}>
          <Box>1</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>2</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>3</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>4</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>5</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>6</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>7</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>8</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>9</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>10</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>11</Box>
        </Grid>
        <Grid item sm={1}>
          <Box>12</Box>
        </Grid>
      </Grid>
    </Container>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Container>
      <Grid container columnGap="md" rowGap="md">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box>Item 4</Box>
        </Grid>
      </Grid>
    </Container>
  ),
};
export const ColumnAndRowGaps: Story = {
  render: () => (
    <Container>
      <Grid container columnGap="lg" rowGap="sm">
        <Grid item sm={3}>
          <Box>Item 1</Box>
        </Grid>
        <Grid item sm={3}>
          <Box>Item 2</Box>
        </Grid>
        <Grid item sm={3}>
          <Box>Item 3</Box>
        </Grid>
        <Grid item sm={3}>
          <Box>Item 4</Box>
        </Grid>
      </Grid>
    </Container>
  ),
};

export const JustifyContentAndAlignItems: Story = {
  render: () => (
    <Container>
      <Grid container justifyContent="space-between" alignItems="center" columnGap="md" rowGap="md">
        <Grid item sm={3}>
          <Box>Start</Box>
        </Grid>
        <Grid item sm={3}>
          <Box>Center</Box>
        </Grid>
        <Grid item sm={3}>
          <Box>End</Box>
        </Grid>
      </Grid>
    </Container>
  ),
};
export const GridWithFlexDirection: Story = {
  render: () => (
    <Container>
      <Grid container flexDirection="column" rowGap="md">
        <Grid item>
          <Box>Item 1</Box>
        </Grid>
        <Grid item>
          <Box>Item 2</Box>
        </Grid>
        <Grid item>
          <Box>Item 3</Box>
        </Grid>
        <Grid item>
          <Box>Item 4</Box>
        </Grid>
      </Grid>
    </Container>
  ),
};
export const GridWithHiddenItems: Story = {
  render: () => (
    <Container>
      <Grid container columnGap="md" rowGap="md">
        <Grid item sm={4} onlyOn="sm">
          <Box>Visible on Small Screens</Box>
        </Grid>
        <Grid item sm={4} onlyOn="md">
          <Box>Visible on Medium Screens</Box>
        </Grid>
        <Grid item sm={4} onlyOn="lg">
          <Box>Visible on Large Screens</Box>
        </Grid>
      </Grid>
    </Container>
  ),
};
export const MixedColumns: Story = {
  render: () => (
    <Container>
      <Grid container columnGap="md" rowGap="md">
        <Grid item sm={6}>
          <Box>Item 1 - Half Width</Box>
        </Grid>
        <Grid item sm={3}>
          <Box>Item 2 - Quarter Width</Box>
        </Grid>
        <Grid item sm={3}>
          <Box>Item 3 - Quarter Width</Box>
        </Grid>
      </Grid>
    </Container>
  ),
};
