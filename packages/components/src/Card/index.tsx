import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './Card.module.scss';
import { ContentTimestamps, type ContentTimestampsProps } from '../ContentTimestamps';
import { Heading, HeadingProps } from '../Heading';
import { Typography } from '../Typography';

const css = classNames.bind(styles);
export interface CardProps
  extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'>,
    ContentTimestampsProps {
  body?: string;
  headingOptions?: Partial<HeadingProps>; // Allows `headingOptions` to be partially specified
  title?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { body, headingOptions = { level: 3, variant: 'h4' }, publishedAt, updatedAt, title, className, ...restProps },
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div className={css('ali-dev-card', className)} ref={ref} {...restProps}>
      {title && (
        <Heading level={headingOptions.level ?? 3} variant={headingOptions.variant}>
          {title}
        </Heading>
      )}
      <ContentTimestamps publishedAt={publishedAt} updatedAt={updatedAt} />
      {body && (
        <div className={css('ali-dev-card__body')}>
          <Typography>{body}</Typography>
        </div>
      )}
    </div>
  ),
);
Card.displayName = 'Card';
