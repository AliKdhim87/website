import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './SocialMedia.module.scss';
import { SocialMediaLink } from './SocialMediaLink';
import { SocialMediaList, SocialMediaListItem } from './SocialMediaList';
import { SocialMediaTitle } from './SocialMediaTitle';
import { Grid } from '../Grid';
import type { IconsType } from '../icons/Icon';

const css = classNames.bind(styles);
export type SocialMediaListType = {
  title?: string;
  url?: string;
  icon?: keyof typeof IconsType;
};
export interface SocialMediaProps {
  title?: string;
  list?: SocialMediaListType[];
}

export const SocialMedia = forwardRef(({ title, list }: SocialMediaProps, ref: ForwardedRef<HTMLElement>) => (
  <section ref={ref} className={css('ali-dev-social-media')} aria-labelledby="social-media-title">
    <Grid container rowGap="sm">
      <Grid item sm={6} justifyContent="center" justifyContentMd="flex-start">
        {title && <SocialMediaTitle>{title}</SocialMediaTitle>}
      </Grid>
      <Grid item sm={6} justifyContent="center">
        <SocialMediaList>
          {Array.isArray(list) &&
            list.map(
              (item, index: number) =>
                item.url && (
                  <SocialMediaListItem key={index}>
                    <SocialMediaLink
                      href={item.url}
                      title={item.title}
                      aria-label={item.title}
                      icon={item.icon as keyof typeof IconsType}
                    />
                  </SocialMediaListItem>
                ),
            )}
        </SocialMediaList>
      </Grid>
    </Grid>
  </section>
));
SocialMedia.displayName = 'SocialMedia';
