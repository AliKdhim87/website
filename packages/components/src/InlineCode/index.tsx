import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const css = classNames.bind(styles);

type InlineCodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const InlineCode = ({ children, className, ...restProps }: PropsWithChildren<InlineCodeProps>) => (
  <code {...restProps} className={css(className, 'ali-dev-inline-code')}>
    {children}
  </code>
);
