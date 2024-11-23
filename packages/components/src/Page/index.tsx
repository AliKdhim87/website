import type { PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);

export const Page = forwardRef<HTMLDivElement, PropsWithChildren>(({ children, ...restProps }, ref) => (
  <div className={css('ali-dev-page')} ref={ref} {...restProps}>
    {children}
  </div>
));
Page.displayName = 'Page';
