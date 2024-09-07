import { forwardRef } from 'react';
import type { HTMLAttributes, PropsWithChildren, ForwardedRef } from 'react';

import classNames from 'classnames/bind';
import Link, { LinkProps } from 'next/link';

import styles from './Badge.module.scss';

const css = classNames.bind(styles);

interface BadgeProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {}

export const Badge = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<BadgeProps>, ref: ForwardedRef<HTMLAnchorElement>) => (
    <Link {...restProps} className={css('badge', restProps.className)} ref={ref}>
      {children}
    </Link>
  ),
);
Badge.displayName = 'Badge';
