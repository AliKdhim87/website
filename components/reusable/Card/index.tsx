import classNames from 'classnames/bind';

import styles from './Card.module.scss';

import { AsHTMLElement, Typography, TypographyVariant } from '@/components/reusable';
import { Maybe } from 'generated/graphql';

const css = classNames.bind(styles);

export interface CardProps {
  title?: Maybe<string>;
  blogTitleOptions?: {
    level?: AsHTMLElement;
    variant?: TypographyVariant;
  };
  body?: string;
  publishedAt?: string;
}

export const Card: React.FC<CardProps> = ({ title, body, publishedAt, blogTitleOptions }) => (
  <div className={css('card')}>
    {title && (
      <Typography as={blogTitleOptions?.level || 'h3'} variant={blogTitleOptions?.variant || 'h4'}>
        {title}
      </Typography>
    )}
    {body && (
      <Typography as="p" variant="body" className={css('space-mb-1')}>
        {body}
      </Typography>
    )}
    {publishedAt && (
      <Typography as="p" variant="body">
        {publishedAt}
      </Typography>
    )}
  </div>
);
