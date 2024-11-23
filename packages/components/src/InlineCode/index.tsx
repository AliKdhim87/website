import { DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const css = classNames.bind(styles);

type InlineCodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const InlineCode = forwardRef<HTMLDivElement, PropsWithChildren<InlineCodeProps>>(
  ({ children, className, ...restProps }, ref: ForwardedRef<HTMLDivElement>) => (
    <code {...restProps} className={css(className, 'ali-dev-inline-code')} ref={ref}>
      {children}
    </code>
  ),
);
InlineCode.displayName = 'InlineCode';
