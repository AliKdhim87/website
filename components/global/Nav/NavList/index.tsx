import classNames from 'classnames/bind';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from '../index.module.scss';

const css = classNames.bind(styles);

export interface NavListProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  mobile?: boolean;
  children?: React.ReactNode;
}

export const NavList = ({ children, mobile, ...props }: NavListProps) => {
  const classes = css('nav__list', 'modal-content', {
    'nav__list--mobile': mobile,
  });
  return (
    <ul data-state={mobile ? 'mobile' : 'desktop'} className={classes} {...props}>
      {children}
    </ul>
  );
};
