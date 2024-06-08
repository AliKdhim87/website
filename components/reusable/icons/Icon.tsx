import { Calendar, CloseIcon, GithubIcon, HamburgerIcon, LinkedInIcon, Mail, BulletIcon, XIcon } from './index';

export const IconsType = {
  calender: Calendar,
  close: CloseIcon,
  github: GithubIcon,
  hamburger: HamburgerIcon,
  linkedIn: LinkedInIcon,
  email: Mail,
  twitter: XIcon,
  bullet: BulletIcon,
};

interface IconsProps extends React.HTMLAttributes<SVGSVGElement> {
  name: keyof typeof IconsType;
}

export const Icon = ({ name, ...restProps }: IconsProps) => {
  const Component = IconsType[name];
  return <Component {...restProps} />;
};
