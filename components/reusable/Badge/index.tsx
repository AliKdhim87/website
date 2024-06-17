import React, { ReactNode } from 'react';

import classNames from 'classnames/bind';
import Link, { LinkProps } from 'next/link';

import styles from './Badge.module.scss';

const css = classNames.bind(styles);

interface BadgeProps extends LinkProps {
  children: ReactNode;
}

export const Badge = ({ href, children }: BadgeProps) => (
  <Link className={css('badge')} href={href}>
    {children && children}
  </Link>
);
