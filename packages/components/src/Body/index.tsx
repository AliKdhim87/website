import { HTMLAttributes, PropsWithChildren } from 'react';

import classnames from 'classnames/bind';

import styles from './index.module.scss';

const css = classnames.bind(styles);

export interface BodyProps extends HTMLAttributes<HTMLBodyElement> {}

export const Body = ({ children, ...restProps }: PropsWithChildren<BodyProps>) => (
  <body {...restProps} className={css('ali-dev-body')}>
    {children}
  </body>
);
