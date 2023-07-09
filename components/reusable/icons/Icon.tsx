import {
  Calendar,
  CloseIcon,
  GithubIcon,
  HamburgerIcon,
  InstagramIcon,
  LinkedInIcon,
  Mail,
  TwitterIcon,
  BulletIcon,
} from './index';

export const IconsType = {
  calender: Calendar,
  close: CloseIcon,
  github: GithubIcon,
  hamburger: HamburgerIcon,
  instagram: InstagramIcon,
  linkedIn: LinkedInIcon,
  email: Mail,
  twitter: TwitterIcon,
  bullet: BulletIcon,
};

interface IconsProps {
  name: keyof typeof IconsType;
}

export const Icon = ({ name }: IconsProps) => {
  const Component = IconsType[name];
  return <Component />;
};
