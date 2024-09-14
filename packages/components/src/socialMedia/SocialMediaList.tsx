import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './SocialMedia.module.scss';

const css = classNames.bind(styles);
export const SocialMediaList = forwardRef(
  (
    {
      children,
      ...restProps
    }: PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>>,
    ref: ForwardedRef<HTMLUListElement>,
  ) => (
    <ul className={css('ali-dev-social-media__list')} ref={ref} {...restProps}>
      {children}
    </ul>
  ),
);
SocialMediaList.displayName = 'SocialMediaList';

export const SocialMediaListItem = forwardRef(
  (
    { children, ...restProps }: PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => (
    <li className={css('ali-dev-social-media__list-item')} ref={ref} {...restProps}>
      {children}
    </li>
  ),
);
SocialMediaListItem.displayName = 'SocialMediaListItem';
