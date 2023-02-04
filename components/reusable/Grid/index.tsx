import classNames from 'classnames/bind';
import React, { FunctionComponent, LegacyRef, ReactNode } from 'react';

import styles from './Grid.module.scss';

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';

type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between';
type AlignItems = 'flex-start' | 'center' | 'flex-end';

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
  alignItems?: AlignItems;
  as?: 'div' | 'ul' | 'li' | 'section' | 'nav' | 'footer' | 'header';
  ref?: LegacyRef<any>;
}

export const Grid: FunctionComponent<GridProps> = ({
  children,
  container,
  item,
  xs,
  sm,
  md,
  lg,
  spacing,
  justifyContent,
  justifyContentMd,
  alignItems,
  as = 'div',
  className,
  ref,
  ...props
}) => {
  const classes = css(className, {
    Grid_container: container,
    Grid_item: item,
    [`Grid_xs_${xs}`]: xs,
    [`Grid_sm_${sm}`]: sm,
    [`Grid_md_${md}`]: md,
    [`Grid_lg_${lg}`]: lg,
    [`Grid_spacing_${spacing}`]: spacing,
    [`Grid_justifyContent_${justifyContent}`]: justifyContent,
    [`Grid_justifyContent_sm_${justifyContentMd}`]: justifyContentMd,
    [`Grid_alignItems_${alignItems}`]: alignItems,
  });

  const Component = as;

  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  );
};
