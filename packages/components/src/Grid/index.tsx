import React, { PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './Grid.module.scss';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';

type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between';
type AlignItems = 'flex-start' | 'center' | 'flex-end';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const css = classNames.bind(styles);

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * If `true`, the component will be a flex container.
   * @default false
   * @example <Grid container>...</Grid>
   * */
  container?: boolean;
  /**
   * If `true`, the component will be a flex item.
   * @default false
   * @example <Grid item>...</Grid>
   * */
  item?: boolean;
  /**
   * The number of columns the component should span.
   * @example <Grid item xs={6}>...</Grid>
   * */
  xs?: Cols;
  /**
   * The number of columns the component should span on small screens.
   * @example <Grid item sm={6}>...</Grid>
   * */
  sm?: Cols;
  /**
   * The number of columns the component should span on medium screens.
   * @example <Grid item md={6}>...</Grid>
   * */
  md?: Cols;
  /**
   * The number of columns the component should span on large screens.
   * @example <Grid item lg={6}>...</Grid>
   * */
  lg?: Cols;
  /**
   * The gap between columns.
   * @example <Grid container columnGap="md">...</Grid>
   * */
  columnGap?: Spacing;
  /**
   * The gap between rows.
   * @example <Grid container rowGap="md">...</Grid>
   * */
  rowGap?: Spacing;
  /**
   * The justify content of the grid items.
   * @example <Grid container justifyContent="center">...</Grid>
   * */
  justifyContent?: JustifyContent;
  /**
   * The justify content of the grid items on medium screens.
   * @example <Grid container justifyContentMd="space-between">...</Grid>
   * */
  justifyContentMd?: JustifyContent;
  /**
   * The flex direction of the grid items.
   * @example <Grid container flexDirection="column">...</Grid>
   * */
  flexDirection?: FlexDirection;
  /**
   * The flex direction of the grid items on small screens.
   * @example <Grid container flexDirectionSM="row-reverse">...</Grid>
   * */
  flexDirectionSM?: FlexDirection;
  /**
   * The alignment of the grid items.
   * @example <Grid container alignItems="center">...</Grid>
   * */
  alignItems?: AlignItems;
  /**
   * The component to render as the root element. Defaults to `div`.
   * @default 'div'
   * @example <Grid as="section">...</Grid>
   * */
  as?: React.ElementType;
  /**
   * The class hide the component on specific screens.
   * @example <Grid onlyOn="lg">...</Grid>
   * */
  onlyOn?: 'lg' | 'md' | 'sm' | 'xs';
}
/**
 * Grid component for creating responsive layouts.
 * @param {PropsWithChildren<GridProps>} props - The props for the Grid component.
 * @param {React.ForwardedRef<HTMLElement>} ref - The ref for the Grid component.
 * @returns {React.ReactElement} - The Grid component.
 * @example
 * <Grid container>
 *   <Grid item xs={12} sm={6} md={4} lg={3}>
 *     <Box>Item 1</Box>
 *   </Grid>
 *   <Grid item xs={12} sm={6} md={4} lg={3}>
 *     <Box>Item 2</Box>
 *   </Grid>
 * </Grid>
 *
 * */
export const Grid = ({
  children,
  container = false,
  item = false,
  xs,
  sm,
  md,
  lg,
  columnGap,
  rowGap,
  justifyContent,
  justifyContentMd,
  alignItems,
  as: Component = 'div',
  className,
  onlyOn,
  flexDirection,
  flexDirectionSM,
  ...props
}: PropsWithChildren<GridProps>) => {
  const classes = css(className, {
    ['ali-dev-grid__container']: container,
    ['ali-dev-grid__item']: item,
    [`ali-dev-grid__item--xs-${xs}`]: xs,
    [`ali-dev-grid__item--sm-${sm}`]: sm,
    [`ali-dev-grid__item--md-${md}`]: md,
    [`ali-dev-grid__item-lg--${lg}`]: lg,
    [`ali-dev-grid__item--only-on-${onlyOn}`]: onlyOn,
    [`ali-dev-grid--column-gap-${columnGap}`]: columnGap,
    [`ali-dev-grid--row-gap-${rowGap}`]: rowGap,
    [`ali-dev-grid--justifyContent-${justifyContent}`]: justifyContent,
    [`ali-dev-grid--justifyContent-sm-${justifyContentMd}`]: justifyContentMd,
    [`ali-dev-grid--flex-direction-${flexDirection}`]: flexDirection,
    [`ali-dev-grid--flex-direction-sm-${flexDirectionSM}`]: flexDirectionSM,
    [`ali-dev-grid--alignItems-${alignItems}`]: alignItems,
  });

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
