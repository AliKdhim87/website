import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';
import { createElement, forwardRef } from 'react';

import classnames from 'classnames/bind';

import styles from './styles.module.scss';

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  type?: 'unordered' | 'ordered';
}
export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {}

const css = classnames.bind(styles);
export const List = forwardRef(
  ({ children, type, className, ...restProps }: PropsWithChildren<ListProps>, ref: ForwardedRef<HTMLUListElement>) => {
    const mapTypeToClassName = {
      unordered: 'ul',
      ordered: 'ol',
    };
    const component = type ? mapTypeToClassName[type] : mapTypeToClassName.unordered;
    const classes = css(className, 'ali-dev-list');
    return createElement(component, { ref, className: classes, ...restProps }, children);
  },
);

List.displayName = 'List';
List.defaultProps = {
  type: 'unordered',
};

export const ListItem = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<ListItemProps>, ref: ForwardedRef<HTMLLIElement>) => (
    <li ref={ref} className={css(className, 'ali-dev-list__item')} {...restProps}>
      {children}
    </li>
  ),
);

ListItem.displayName = 'ListItem';
