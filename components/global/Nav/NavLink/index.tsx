import classNames from 'classnames/bind';
import Link, { LinkProps } from 'next/link';
import { forwardRef, PropsWithChildren } from 'react';

import styles from '../index.module.scss';

import { Typography } from '@/components/reusable';

export type LinkType = {
  text: string;
  href: string;
  active?: boolean;
};

export interface NavLinkProps extends Omit<LinkProps, 'href'>, LinkType {}
const css = classNames.bind(styles);

const forwardRefLink = (
  { href, text, active, ...props }: PropsWithChildren<NavLinkProps>,
  ref: React.LegacyRef<HTMLAnchorElement> | undefined,
) => {
  const classes = css('nav-link', {
    [css(`nav-link--active`)]: active,
  });
  return (
    <Link href={href} passHref {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={classes} ref={ref} aria-current={active && 'page'}>
        <Typography as="span" variant="body">
          {text}
        </Typography>
      </a>
    </Link>
  );
};

export const NavLink = forwardRef(forwardRefLink);
