import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import classnames from 'classnames/bind';
import Link, { LinkProps } from 'next/link';

import styles from '../index.module.scss';

const css = classnames.bind(styles);

export interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement>, LinkProps {}

export const NavLink = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<NavLinkProps>, ref: ForwardedRef<HTMLAnchorElement>) => (
    <Link {...restProps} className={css('nav-link')} ref={ref}>
      {children}
    </Link>
  ),
);
