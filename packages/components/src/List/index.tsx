import type { HTMLAttributes, PropsWithChildren } from 'react';
import { createElement } from 'react';

import classnames from 'classnames/bind';

import styles from './styles.module.scss';

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  type?: 'unordered' | 'ordered';
}
export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {}

const css = classnames.bind(styles);
export const List = ({ children, type = 'unordered', className, ...restProps }: PropsWithChildren<ListProps>) => {
  const mapTypeToClassName = {
    unordered: 'ul',
    ordered: 'ol',
  };
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const component = type ? mapTypeToClassName[type] : mapTypeToClassName.unordered;
  const classes = css(className, 'ali-dev-list');
  return createElement(component, { className: classes, ...restProps }, children);
};

export const ListItem = ({ children, className, ...restProps }: PropsWithChildren<ListItemProps>) => (
  <li className={css(className, 'ali-dev-list__item')} {...restProps}>
    {children}
  </li>
);
