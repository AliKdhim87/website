import { createElement, forwardRef } from 'react';
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: number;
  variant?: HeadingVariant;
}
const css = classNames.bind(styles);
export const Heading = forwardRef(
  (
    { children, level, className, variant = 'h1', ...restProps }: PropsWithChildren<HeadingProps>,
    ref: ForwardedRef<HTMLHeadingElement>,
  ) => {
    const variantClass = { [`heading--${variant.toString().replace('h', '')}`]: variant };

    return level > 6 || level === 0
      ? createElement('h1', { ref, className: css(className, `heading--1`, variantClass), ...restProps }, children)
      : createElement(
          `h${level}`,
          { ref, className: css(className, `heading--${level}`, variantClass), ...restProps },
          children,
        );
  },
);

Heading.displayName = 'Heading';
Heading.defaultProps = {
  variant: undefined,
};
