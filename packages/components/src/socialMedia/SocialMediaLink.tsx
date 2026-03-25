import type { AnchorHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './SocialMedia.module.scss';
import { IconsType, Icon } from '../icons/Icon';
const css = classNames.bind(styles);

export type SocialMediaLinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  title?: string;
  icon?: keyof typeof IconsType;
};
export const SocialMediaLink = ({ icon, ...restProps }: PropsWithChildren<SocialMediaLinkProps>) => (
  <a className={css('ali-dev-social-media__link')} rel="noopener noreferrer" target="_blank" {...restProps}>
    {icon && <Icon role="presentation" name={icon as keyof typeof IconsType} />}
  </a>
);
