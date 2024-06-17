import { ForwardedRef, HTMLAttributes, PropsWithChildren, forwardRef } from 'react';

import classnames from 'classnames/bind';

import styles from './styles.module.scss';

type ListItemProps = HTMLAttributes<HTMLLIElement>;
const cx = classnames.bind(styles);
export const ListItem = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<ListItemProps>, ref: ForwardedRef<HTMLLIElement>) => (
    <li ref={ref} className={cx('list-item')} {...restProps}>
      {children}
    </li>
  ),
);

ListItem.displayName = 'ListItem';
