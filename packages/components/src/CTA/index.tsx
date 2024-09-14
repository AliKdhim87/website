import { forwardRef } from 'react';
import type { PropsWithChildren, ForwardedRef } from 'react';

import classNames from 'classnames/bind';
import Link from 'next/link';
import type { LinkProps } from 'next/link';

import styles from './CTA.module.scss';

const css = classNames.bind(styles);

export interface CTAProps extends LinkProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const CTA = forwardRef(
  (
    { children, variant, className, ...restProps }: PropsWithChildren<CTAProps>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    const classes = css('ali-dev-cta', className, {
      [`ali-dev-cta--${variant}`]: variant,
    });

    return (
      <Link ref={ref} className={classes} {...restProps}>
        {children}
      </Link>
    );
  },
);

CTA.displayName = 'CTA';
CTA.defaultProps = {
  className: undefined,
  variant: 'primary',
};
