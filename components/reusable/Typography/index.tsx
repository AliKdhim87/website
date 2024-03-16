import classNames from 'classnames/bind';
import { HTMLAttributes, createElement, forwardRef, PropsWithChildren, ForwardedRef } from 'react';

import styles from './Typography.module.scss';

export type AsHTMLElement = 'span' | 'p';
export type TypographyVariant = 'subtitle' | 'body';

export interface TypographyProps extends React.DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  as?: AsHTMLElement;
  variant?: TypographyVariant;
  bodySize?: 'mobile' | 'secondary';
}
const css = classNames.bind(styles);

export const Typography = forwardRef(
  (
    { as = 'p', variant = 'body', bodySize, children, className, ...restProps }: PropsWithChildren<TypographyProps>,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const classes = css('typography', className, {
      [`typography-${variant}`]: variant,
      [`typography-body--size-${bodySize}`]: bodySize,
    });

    return createElement(as, { className: classes, ref, ...restProps }, children);
  },
);

Typography.displayName = 'Typography';

Typography.defaultProps = {
  as: 'p',
  variant: 'body',
  bodySize: undefined,
};
