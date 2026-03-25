import type { HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);
interface HeaderProps extends HTMLAttributes<HTMLElement> {}

export const Header = ({ children, ...restProps }: PropsWithChildren<HeaderProps>) => (
  <header {...restProps} className={css('ali-dev-header')}>
    {children}
  </header>
);
