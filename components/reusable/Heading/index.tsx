'use client';

import classNames from 'classnames/bind';
import { ForwardedRef, PropsWithChildren, createElement, forwardRef } from 'react';

import styles from './index.module.scss';

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
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

    return level > 5 || level === 0
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
