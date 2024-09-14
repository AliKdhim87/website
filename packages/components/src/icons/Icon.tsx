import type { SVGProps } from 'react';

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
} from './index';

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
};

interface IconsProps extends React.HTMLAttributes<SVGSVGElement> {
  name: keyof typeof IconsType;
}

export const Icon = ({ name, ...restProps }: IconsProps) => {
  const Component = IconsType[name];
  return <Component {...restProps} />;
};

export interface SVGRProps extends SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}
