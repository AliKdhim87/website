import type { ComponentPropsWithoutRef, ElementType, HTMLAttributes, PropsWithChildren } from 'react';

import classnames from 'classnames/bind';

import styles from '../index.module.scss';

const css = classnames.bind(styles);
interface NavLinkBaseProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

export type NavLinkProps<T extends ElementType> = NavLinkBaseProps &
  Omit<ComponentPropsWithoutRef<T>, keyof NavLinkBaseProps>;

export const NavLink = <T extends ElementType = 'a'>({
  children,
  as: Component = 'a',
  className,
  ref,
  ...restProps
}: PropsWithChildren<NavLinkProps<T>>) => (
  <Component className={css('ali-dev-nav__link', className)} ref={ref} {...restProps}>
    {children}
  </Component>
);
