import classNames from 'classnames/bind';

import styles from './SocialMedia.module.scss';
import { SocialMediaLink } from './SocialMediaLink';
import { SocialMediaList, SocialMediaListItem } from './SocialMediaList';
import type { IconsType } from '../icons/Icon';

const css = classNames.bind(styles);

export type SocialMediaListType = {
  title: string;
  url: string;
  icon?: keyof typeof IconsType;
};

export interface SocialMediaProps {
  list?: SocialMediaListType[];
  heading?: string;
  className?: string;
}

export const SocialMedia = ({ list = [], heading, className }: SocialMediaProps) => (
  <section
    className={css('ali-dev-social-media', className)}
    aria-labelledby={heading ? 'social-media-heading' : undefined}
  >
    {heading && (
      <h2 id="social-media-heading" className={css('ali-dev-social-media__heading')}>
        {heading}
      </h2>
    )}

    {list.length > 0 ? (
      <SocialMediaList>
        {list.map((item, index) => (
          <SocialMediaListItem key={index}>
            <SocialMediaLink
              href={item.url}
              title={item.title}
              aria-label={item.title}
              icon={item.icon as keyof typeof IconsType}
            />
          </SocialMediaListItem>
        ))}
      </SocialMediaList>
    ) : null}
  </section>
);
