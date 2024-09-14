import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

import classnames from 'classnames/bind';

import styles from './index.module.scss';

const css = classnames.bind(styles);

export interface BodyProps extends HTMLAttributes<HTMLBodyElement> {}

export const Body = forwardRef<HTMLBodyElement, PropsWithChildren<BodyProps>>(
  ({ children, ...restProps }, ref: ForwardedRef<HTMLBodyElement>) => (
    <body {...restProps} ref={ref} className={css('ali-dev-body')}>
      {children}
    </body>
  ),
);
Body.displayName = 'Body';
