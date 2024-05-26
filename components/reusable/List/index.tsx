import classnames from 'classnames/bind';
import { ForwardedRef, HTMLAttributes, PropsWithChildren, createElement, forwardRef } from 'react';

import styles from './styles.module.scss';

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  type?: 'unordered' | 'ordered';
}

const cx = classnames.bind(styles);
export const List = forwardRef(
  ({ children, type, className, ...restProps }: PropsWithChildren<ListProps>, ref: ForwardedRef<HTMLUListElement>) => {
    const mapTypeToClassName = {
      unordered: 'ul',
      ordered: 'ol',
    };
    const component = type ? mapTypeToClassName[type] : mapTypeToClassName.unordered;
    const classes = cx(className, 'list');
    return createElement(component, { ref, className: classes, ...restProps }, children);
  },
);

List.displayName = 'List';

List.defaultProps = {
  type: 'unordered',
};
