import classNames from 'classnames/bind';
import { forwardRef } from 'react';

import { Maybe } from '@/graphql-types';

import { Typography } from '../Typography';
import { Heading, HeadingProps } from '../Heading';

import styles from './Card.module.scss';

const css = classNames.bind(styles);

export interface CardProps {
  body?: string;
  headingOptions?: HeadingProps;
  publishedAt?: string;
  title?: Maybe<string>;
}

export const Card = forwardRef(({ body, headingOptions, publishedAt, title }: CardProps) => (
  <div className={css('card')}>
    {title && (
      <Heading level={headingOptions?.level || 3} variant={headingOptions?.variant || 'h4'}>
        {title}
      </Heading>
    )}
    {body && <Typography className={css('space-mb-1')}>{body}</Typography>}
    {publishedAt && <Typography>{publishedAt}</Typography>}
  </div>
));
Card.displayName = 'Card';
Card.defaultProps = {
  body: undefined,
  headingOptions: {
    level: 3,
    variant: 'h4',
  },
  publishedAt: undefined,
  title: undefined,
};
