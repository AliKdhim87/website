import type { PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);

export const Page = ({ children, ...restProps }: PropsWithChildren) => (
  <div className={css('ali-dev-page')} {...restProps}>
    {children}
  </div>
);
