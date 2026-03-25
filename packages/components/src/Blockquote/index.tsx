import type { BlockquoteHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const css = classNames.bind(styles);

type BlockquoteProps = DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;

export const Blockquote = ({ children, className, ...restProps }: PropsWithChildren<BlockquoteProps>) => (
  <blockquote {...restProps} className={css('ali-dev-blockquote', className)}>
    {children}
  </blockquote>
);
