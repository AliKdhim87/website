import classNames from 'classnames/bind';
import { Maybe } from 'graphql/jsutils/Maybe';
import { AnchorHTMLAttributes, DetailedHTMLProps, ForwardedRef, PropsWithChildren, forwardRef } from 'react';

import { Grid, Icon, IconsType, Heading } from '@/components/reusable';
import { uuidv4 } from '@/utils';
import { Social } from '@/graphql-types';
import type { HeadingProps } from '@/components/reusable/Heading';

import styles from './SocialMedia.module.scss';

const css = classNames.bind(styles);

interface SocialMediaProps {
  title: Maybe<string>;
  socialMedia: Maybe<Maybe<Social>[]>;
}

export type SocialMediaTitleProps = Omit<HeadingProps, 'level'>;

export const SocialMediaTitle = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<SocialMediaTitleProps>, ref: ForwardedRef<HTMLHeadingElement>) => (
    <Heading
      {...restProps}
      ref={ref}
      id="social-media-title"
      variant="h4"
      level={2}
      className={css('social-media__title')}
    >
      {children}
    </Heading>
  ),
);
SocialMediaTitle.displayName = 'SocialMediaTitle';

export type SocialMediaLinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
  title?: string;
  icon?: keyof typeof IconsType;
};
export const SocialMediaLink = forwardRef(
  ({ icon, ...restProps }: PropsWithChildren<SocialMediaLinkProps>, ref: ForwardedRef<HTMLAnchorElement>) => (
    <a ref={ref} {...restProps} className={css('social-media__link')} rel="noopener noreferrer" target="_blank">
      {icon && <Icon role="presentation" name={icon as keyof typeof IconsType} />}
    </a>
  ),
);
SocialMediaLink.displayName = 'SocialMediaLink';
SocialMediaLink.defaultProps = {
  title: undefined,
  icon: undefined,
};

export const SocialMedia = forwardRef(({ title, socialMedia }: SocialMediaProps) => (
  <section className={css('social-media')} aria-labelledby="social-media-title">
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item sm={6} justifyContent="center" justifyContentMd="flex-start">
        {title && <SocialMediaTitle>{title}</SocialMediaTitle>}
      </Grid>
      <Grid item sm={3} justifyContent="center" justifyContentMd="flex-end">
        {Array.isArray(socialMedia) &&
          socialMedia.map(
            (item) =>
              item &&
              item?.url && (
                <SocialMediaLink
                  href={item.url}
                  key={uuidv4()}
                  title={item?.title || undefined}
                  aria-label={item?.title || undefined}
                  icon={item.icon as keyof typeof IconsType}
                />
              ),
          )}
      </Grid>
    </Grid>
  </section>
));
SocialMedia.displayName = 'SocialMedia';
