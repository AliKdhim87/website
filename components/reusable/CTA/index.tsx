import React, { forwardRef } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { Typography } from '@/components/reusable';

import styles from './CTA.module.scss';

const css = classNames.bind(styles);

interface ButtonProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  text?: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
}
export const forwardRefLink = (
  { href, text, variant = 'primary', className }: ButtonProps,
  ref: React.LegacyRef<HTMLAnchorElement> | undefined,
) => {
  const classes = css('cta', className, {
    [`cta--${variant}`]: variant,
  });

  return href ? (
    <Link href={href} passHref>
      <a className={classes} ref={ref}>
        {text && (
          <Typography as="span" variant="body">
            {text}
          </Typography>
        )}
      </a>
    </Link>
  ) : null;
};

export const CTA = forwardRef(forwardRefLink);
