import type { HTMLAttributes, SVGProps } from 'react';

import classnames from 'classnames/bind';

import {
  Calendar,
  CloseIcon,
  GithubIcon,
  HamburgerIcon,
  LinkedInIcon,
  Mail,
  BulletIcon,
  XIcon,
  Asterisk,
  Check,
  Copy,
  UpdatedAt,
  PublishedAt,
} from './index';
import styles from './index.module.scss';

const css = classnames.bind(styles);

export const IconsType = {
  calender: Calendar,
  close: CloseIcon,
  github: GithubIcon,
  hamburger: HamburgerIcon,
  linkedIn: LinkedInIcon,
  email: Mail,
  twitter: XIcon,
  bullet: BulletIcon,
  asterisk: Asterisk,
  copy: Copy,
  check: Check,
  updatedAt: UpdatedAt,
  publishedAt: PublishedAt,
};

interface IconsProps extends HTMLAttributes<SVGSVGElement> {
  name: keyof typeof IconsType;
}

export const Icon = ({ name, ...restProps }: IconsProps) => {
  const Component = IconsType[name];
  return <Component className={css('ali-dev-icon')} {...restProps} />;
};

export interface SVGRProps extends SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}
