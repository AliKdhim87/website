import { createElement } from 'react';
import type { HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: number;
  variant?: HeadingVariant;
  dimension?: boolean;
}
const css = classNames.bind(styles);
export const Heading = ({
  children,
  level,
  className,
  dimension = true,
  variant = 'h1',
  ...restProps
}: PropsWithChildren<HeadingProps>) => {
  return level > 6 || level === 0
    ? createElement(
        'h1',
        {
          className: css(className, `ali-dev-heading--1`, { 'ali-dev-heading--h1-dimension': dimension }),
          ...restProps,
        },
        children,
      )
    : createElement(
        `h${level}`,
        {
          className: css(className, `ali-dev-heading--h${level}`, {
            [`ali-dev-heading--${variant}`]: variant,
            [`ali-dev-heading--h${level}-dimension`]: dimension,
          }),
          ...restProps,
        },
        children,
      );
};
