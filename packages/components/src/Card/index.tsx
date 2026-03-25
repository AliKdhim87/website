import type { DetailedHTMLProps, HTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from './Card.module.scss';
import { ContentTimestamps, type TimestampData } from '../ContentTimestamps';
import { Heading, HeadingProps } from '../Heading';
import { Typography } from '../Typography';

const css = classNames.bind(styles);
export interface CardProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'title' | 'publishedAt' | 'updatedAt'
  > {
  publishedAt?: TimestampData;
  updatedAt?: TimestampData;
  body?: string;
  headingOptions?: Partial<HeadingProps>; // Allows `headingOptions` to be partially specified
  title?: string;
}

export const Card = ({
  body,
  headingOptions = { level: 3, variant: 'h4' },
  publishedAt,
  updatedAt,
  title,
  className,
  ...restProps
}: CardProps) => (
  <div className={css('ali-dev-card', className)} {...restProps}>
    {title && (
      <Heading level={headingOptions.level ?? 3} variant={headingOptions.variant}>
        {title}
      </Heading>
    )}
    {publishedAt && <ContentTimestamps publishedAt={publishedAt} updatedAt={updatedAt} />}
    {body && (
      <div className={css('ali-dev-card__body')}>
        <Typography>{body}</Typography>
      </div>
    )}
  </div>
);
Card.displayName = 'Card';
