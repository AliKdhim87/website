import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import classnames from 'classnames/bind';

import styles from '../index.module.scss';

const css = classnames.bind(styles);
interface NavLinkBaseProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export type NavLinkProps<T extends ElementType> = NavLinkBaseProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof NavLinkBaseProps>;

export const NavLink = forwardRef(
  <T extends ElementType = 'a'>(
    { children, as: Component = 'a', className, ...restProps }: PropsWithChildren<NavLinkProps<T>>,
    ref: React.Ref<React.ElementRef<T>>,
  ) => (
    <Component className={css('ali-dev-nav__link', className)} ref={ref} {...restProps}>
      {children}
    </Component>
  ),
);

NavLink.displayName = 'NavLink';
