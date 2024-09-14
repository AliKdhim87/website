import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);
interface HeaderProps extends HTMLAttributes<HTMLElement> {}

export const Header = forwardRef<HTMLDivElement, PropsWithChildren<HeaderProps>>(
  ({ children, ...restProps }, ref: ForwardedRef<HTMLDivElement>) => (
    <header {...restProps} ref={ref} className={css('ali-dev-header')}>
      {children}
    </header>
  ),
);

Header.displayName = 'Header';
