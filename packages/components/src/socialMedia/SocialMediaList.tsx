import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './SocialMedia.module.scss';

const css = classNames.bind(styles);
export const SocialMediaList = ({
  children,
  ...restProps
}: PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>>) => (
  <ul className={css('ali-dev-social-media__list')} {...restProps}>
    {children}
  </ul>
);

export const SocialMediaListItem = ({
  children,
  ...restProps
}: PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>>) => (
  <li className={css('ali-dev-social-media__list-item')} {...restProps}>
    {children}
  </li>
);
