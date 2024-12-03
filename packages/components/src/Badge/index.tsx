import { forwardRef } from 'react';
import type { PropsWithChildren, ForwardedRef, ComponentType, AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import classNames from 'classnames/bind';

import styles from './Badge.module.scss';

const css = classNames.bind(styles);

interface BadgeProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  Link?: ComponentType<any>;
}

export const Badge = forwardRef<HTMLAnchorElement, PropsWithChildren<BadgeProps>>(
  ({ children, Link: Component = 'a', className, ...restProps }, ref: ForwardedRef<HTMLAnchorElement>) => (
    <Component {...restProps} className={css('ali-dev-badge', className)} ref={ref}>
      {children}
    </Component>
  ),
);
Badge.displayName = 'Badge';
