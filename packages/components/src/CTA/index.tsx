import { forwardRef } from 'react';
import type { PropsWithChildren, ForwardedRef, AnchorHTMLAttributes, DetailedHTMLProps, ComponentType } from 'react';

import classNames from 'classnames/bind';

import styles from './CTA.module.scss';

const css = classNames.bind(styles);

export interface CTAProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  Link?: ComponentType<any>;
}

export const CTA = forwardRef<HTMLAnchorElement, PropsWithChildren<CTAProps>>(
  ({ children, variant, Link: Component = 'a', className, ...restProps }, ref: ForwardedRef<HTMLAnchorElement>) => {
    const classes = css('ali-dev-cta', className, {
      [`ali-dev-cta--${variant}`]: variant,
    });

    return (
      <Component ref={ref} className={classes} {...restProps}>
        {children}
      </Component>
    );
  },
);

CTA.displayName = 'CTA';
CTA.defaultProps = {
  className: undefined,
  variant: 'primary',
};
