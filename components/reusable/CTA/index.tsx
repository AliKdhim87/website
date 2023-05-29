import classNames from 'classnames/bind';
import Link, { LinkProps } from 'next/link';
import React from 'react';

import styles from './CTA.module.scss';

const css = classNames.bind(styles);

interface ButtonProps extends LinkProps {
  text?: string | React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const CTA = ({ href, text, variant = 'primary', className }: ButtonProps) => {
  const classes = css('cta', className, {
    [`cta--${variant}`]: variant,
  });
  return (
    <Link href={href} passHref className={classes}>
      {text}
    </Link>
  );
};
