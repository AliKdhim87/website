import type { AnchorHTMLAttributes, DetailedHTMLProps, ElementType } from 'react';

import classNames from 'classnames/bind';

import styles from './Badge.module.scss';

const css = classNames.bind(styles);

interface BadgeProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  Link?: ElementType;
}

export const Badge = ({ children, Link: Component = 'a', className, ...restProps }: BadgeProps) => (
  <Component {...restProps} className={css('ali-dev-badge', className)}>
    {children}
  </Component>
);
