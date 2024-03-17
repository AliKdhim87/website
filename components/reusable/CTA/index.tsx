import classNames from 'classnames/bind';
import Link from 'next/link';
import React, { forwardRef } from 'react';
import type { LinkProps } from 'next/link';
import type { PropsWithChildren, ForwardedRef, Ref } from 'react';

import styles from './CTA.module.scss';

const css = classNames.bind(styles);

interface ButtonProps extends LinkProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const CTA = forwardRef(
  ({ children, variant, className, ...restProps }: PropsWithChildren<ButtonProps>, ref: ForwardedRef<LinkProps>) => {
    const classes = css('cta', className, {
      [`cta--${variant}`]: variant,
    });

    return (
      <Link ref={ref as Ref<HTMLAnchorElement>} className={classes} {...restProps}>
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
