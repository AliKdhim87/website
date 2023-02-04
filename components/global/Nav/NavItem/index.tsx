import classNames from 'classnames/bind';
import { DetailedHTMLProps, LiHTMLAttributes } from 'react';

import styles from '../index.module.scss';

export type NavLinksItemProps = DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>;

const css = classNames.bind(styles);
export const NavItem = ({ children, className, ...props }: NavLinksItemProps) => (
  <li className={css('nav-links-item', className)} {...props}>
    {children}
  </li>
);
