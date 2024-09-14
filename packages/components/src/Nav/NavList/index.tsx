import { ForwardedRef, forwardRef, type DetailedHTMLProps, type HTMLAttributes, type PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

// import { activeLinkChecker } from '@/utils';
export const activeLinkChecker = (link?: string, currentPath?: string) => link === currentPath;

import styles from '../index.module.scss';

const css = classNames.bind(styles);

export type LinkType = {
  title: string;
  route: string;
};
export interface NavListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  mobile?: boolean;
}

const classes = (mobile?: boolean) =>
  css('ali-dev-nav__list', 'modal-content', {
    'ali-dev-nav__list--mobile': mobile,
  });

export const NavList = forwardRef(
  ({ children, mobile, ...restProps }: PropsWithChildren<NavListProps>, ref: ForwardedRef<HTMLUListElement>) => (
    <ul {...restProps} className={classes(mobile)} ref={ref}>
      {children}
    </ul>
  ),
);

NavList.displayName = 'NavList';
NavList.defaultProps = {
  mobile: false,
};
