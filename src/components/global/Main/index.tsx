import { type DetailedHTMLProps, forwardRef, type HTMLAttributes, PropsWithChildren, ForwardedRef } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';

const css = classNames.bind(styles);

type MainWrapperProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type MainProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const MainWrapper = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<MainWrapperProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <div className={css('main-wrapper')} ref={ref} {...restProps}>
      {children}
    </div>
  ),
);

export const Main = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<MainProps>, ref: ForwardedRef<HTMLElement>) => (
    <main className={css('main')} ref={ref} {...restProps}>
      {children}
    </main>
  ),
);

MainWrapper.displayName = 'MainWrapper';
Main.displayName = 'Main';
