import classNames from 'classnames/bind';
import Link from 'next/link';
import React, { forwardRef } from 'react';

import styles from './CTA.module.scss';

import { Typography } from '@/components/reusable';

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
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
