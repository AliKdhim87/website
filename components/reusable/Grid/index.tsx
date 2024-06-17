import React, { FunctionComponent, LegacyRef, ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './Grid.module.scss';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';

type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between';
type AlignItems = 'flex-start' | 'center' | 'flex-end';
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

const css = classNames.bind(styles);

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  justifyContentMd?: JustifyContent;
  flexDirection?: FlexDirection;
  flexDirectionSM?: FlexDirection;
  alignItems?: AlignItems;
  as?: React.ElementType;
  ref?: LegacyRef<any>;
  onlyOn?: 'lg' | 'md' | 'sm' | 'xs';
}

export const Grid: FunctionComponent<GridProps> = ({
  children,
  container = false,
  item = false,
  xs,
  sm,
  md,
  lg,
  spacing,
  justifyContent,
  justifyContentMd,
  alignItems,
  as: Component = 'div',
  className,
  ref,
  onlyOn,
  flexDirection,
  flexDirectionSM,
  ...props
}) => {
  const classes = css(className, {
    grid__container: container,
    grid__item: item,
    [`grid__item--xs-${xs}`]: xs,
    [`grid__item--sm-${sm}`]: sm,
    [`grid__item--md-${md}`]: md,
    [`grid__item-lg--${lg}`]: lg,
    [`grid__item--only-on-${onlyOn}`]: onlyOn,
    [`grid--spacing-${spacing}`]: spacing,
    [`grid--justifyContent-${justifyContent}`]: justifyContent,
    [`grid--justifyContent-sm-${justifyContentMd}`]: justifyContentMd,
    [`grid--flex-direction-${flexDirection}`]: flexDirection,
    [`grid--flex-direction-sm-${flexDirectionSM}`]: flexDirectionSM,
    [`grid--alignItems-${alignItems}`]: alignItems,
  });

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  );
};
