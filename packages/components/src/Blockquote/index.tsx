import type { BlockquoteHTMLAttributes, DetailedHTMLProps, ForwardedRef, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';

const css = classNames.bind(styles);

type BlockquoteProps = DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>;

export const Blockquote = forwardRef<HTMLQuoteElement, PropsWithChildren<BlockquoteProps>>(
  ({ children, className, ...restProps }, ref: ForwardedRef<HTMLQuoteElement>) => (
    <blockquote {...restProps} className={css('ali-dev-blockquote', className)} ref={ref}>
      {children}
    </blockquote>
  ),
);
Blockquote.displayName = 'Blockquote';
