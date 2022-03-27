import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import { Typography } from '@/components/reusable';

import styles from './Badge.module.scss';

const css = classNames.bind(styles);

interface BadgeProps
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {}

export const forwardRefBadge = (
  { href, children }: BadgeProps,
  ref: React.LegacyRef<HTMLAnchorElement> | undefined,
) => (
  <a className={css('badge')} href={href} ref={ref}>
    {children && (
      <Typography as="span" variant="body">
        {children}
      </Typography>
    )}
  </a>
);

export const Badge = forwardRef(forwardRefBadge);
