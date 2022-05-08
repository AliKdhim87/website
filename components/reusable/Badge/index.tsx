import classNames from 'classnames/bind';
import React, { forwardRef } from 'react';

import styles from './Badge.module.scss';

import { Typography } from '@/components/reusable';

const css = classNames.bind(styles);

type BadgeProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

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
