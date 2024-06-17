import { forwardRef, type DetailedHTMLProps, type HTMLAttributes, type PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import { activeLinkChecker, uuidv4 } from '@/utils';

import styles from '../index.module.scss';
import { NavItem } from '../NavItem';
import { NavLink } from '../NavLink';

const css = classNames.bind(styles);

export type LinkType = {
  title: string;
  route: string;
};
export interface NavListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  mobile?: boolean;
  list: LinkType[];
  pathname: string;
}

const classes = (mobile?: boolean) =>
  css('nav__list', 'modal-content', {
    'nav__list--mobile': mobile,
  });

export const NavList = forwardRef(
  ({ children, pathname, mobile, list, ...restProps }: PropsWithChildren<NavListProps>) => (
    <ul className={classes(mobile)} {...restProps}>
      {children}
      {Array.isArray(list) &&
        list.map(({ route, title }) => (
          <NavItem key={uuidv4()}>
            {route && title && (
              <NavLink
                href={route}
                aria-current={activeLinkChecker(route, pathname) && 'page'}
                className={css('nav-link')}
              >
                {title}
              </NavLink>
            )}
          </NavItem>
        ))}
    </ul>
  ),
);

NavList.displayName = 'NavList';
NavList.defaultProps = {
  mobile: false,
};
