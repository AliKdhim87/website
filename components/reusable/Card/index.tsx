import { type ForwardedRef, forwardRef } from 'react';

import classNames from 'classnames/bind';

import { Maybe } from '@/graphql-types';

import styles from './Card.module.scss';
import { Heading, HeadingProps } from '../Heading';
import { Typography } from '../Typography';

const css = classNames.bind(styles);

export interface CardProps {
  body?: string;
  headingOptions?: HeadingProps;
  publishedAt?: string;
  title?: Maybe<string>;
}

export const Card = forwardRef(
  ({ body, headingOptions, publishedAt, title }: CardProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div className={css('card')} ref={ref}>
      {title && (
        <Heading level={headingOptions?.level || 3} variant={headingOptions?.variant || 'h4'}>
          {title}
        </Heading>
      )}
      {body && <Typography className={css('space-mb-1')}>{body}</Typography>}
      {publishedAt && <Typography>{publishedAt}</Typography>}
    </div>
  ),
);
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
