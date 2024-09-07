import { DetailedHTMLProps, type ForwardedRef, forwardRef, HTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import { Maybe } from '@/graphql-types';
import { formattedDate } from '@/utils';

import styles from './Card.module.scss';
import { Heading, HeadingProps } from '../Heading';
import { Typography } from '../Typography';

const css = classNames.bind(styles);

export interface CardProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
  body?: string;
  headingOptions?: HeadingProps;
  publishedAt?: string;
  updatedAt?: string;
  title?: Maybe<string>;
}

export const Card = forwardRef(
  (
    { body, headingOptions, publishedAt, updatedAt, title, className, ...restProps }: CardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div className={css('card', className)} ref={ref} {...restProps}>
      {title && (
        <Heading level={headingOptions?.level || 3} variant={headingOptions?.variant || 'h4'}>
          {title}
        </Heading>
      )}
      <div className={css('card__date')}>
        {publishedAt && <Typography bodySize="secondary">Published on: {formattedDate(publishedAt)}</Typography>}
        {updatedAt && <Typography bodySize="secondary">Updated on: {formattedDate(updatedAt)}</Typography>}
      </div>
      {body && (
        <div className={css('card__body')}>
          <Typography>{body}</Typography>
        </div>
      )}
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
