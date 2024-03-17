import classNames from 'classnames/bind';

import { Maybe } from 'generated/graphql';

import { Typography } from '../Typography';
import { Heading, HeadingProps } from '../Heading';

import styles from './Card.module.scss';

const css = classNames.bind(styles);

export interface CardProps {
  title?: Maybe<string>;
  blogTitleOptions?: HeadingProps;
  body?: string;
  publishedAt?: string;
}

export const Card = ({ title, body, publishedAt, blogTitleOptions }: CardProps) => (
  <div className={css('card')}>
    {title && (
      <Heading level={3} variant={blogTitleOptions?.variant || 'h4'}>
        {title}
      </Heading>
    )}
    {body && <Typography className={css('space-mb-1')}>{body}</Typography>}
    {publishedAt && <Typography>{publishedAt}</Typography>}
  </div>
);
