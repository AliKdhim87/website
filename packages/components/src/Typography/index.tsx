import type { HTMLAttributes, PropsWithChildren, DetailedHTMLProps } from 'react';
import { createElement } from 'react';

import classNames from 'classnames/bind';

import styles from './Typography.module.scss';

export type AsHTMLElement = 'span' | 'p';
export type TypographyVariant = 'sm' | 'md' | 'lg' | 'xl';

export interface TypographyProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  as?: AsHTMLElement;
  variant?: TypographyVariant;
  dimension?: boolean;
}
const css = classNames.bind(styles);

export const Typography = ({
  as = 'p',
  variant = 'md',
  children,
  className,
  dimension = true,
  ...restProps
}: PropsWithChildren<TypographyProps>) => {
  const classes = css('ali-dev-typography', className, {
    [`ali-dev-typography--${variant}`]: variant,
    ['ali-dev-typography--dimension']: dimension,
  });

  return createElement(as, { className: classes, ...restProps }, children);
};
