import { PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './SocialMedia.module.scss';
import { Heading, HeadingProps } from '../Heading';

export type SocialMediaTitleProps = Omit<HeadingProps, 'level'>;

const css = classNames.bind(styles);

export const SocialMediaTitle = ({ children, ...restProps }: PropsWithChildren<SocialMediaTitleProps>) => (
  <Heading
    id="social-media-title"
    dimension={false}
    variant="h4"
    level={2}
    className={css('ali-dev-social-media__title')}
    {...restProps}
  >
    {children}
  </Heading>
);
