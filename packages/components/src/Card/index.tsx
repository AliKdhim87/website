import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes } from 'react';
import { forwardRef, memo } from 'react';

import classNames from 'classnames/bind';

import styles from './Card.module.scss';
import { Heading, HeadingProps } from '../Heading';
import { Typography } from '../Typography';

const css = classNames.bind(styles);
export interface CardProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'title'> {
  body?: string;
  headingOptions?: Partial<HeadingProps>; // Allows `headingOptions` to be partially specified
  publishedAt?: string;
  updatedAt?: string;
  title?: string;
}

const CardDate = memo(({ publishedAt, updatedAt }: { publishedAt?: string; updatedAt?: string }) => (
  <div className={css('ali-dev-card__date')}>
    {publishedAt && <Typography variant="sm">{publishedAt}</Typography>}
    {updatedAt && <Typography variant="sm">{updatedAt}</Typography>}
  </div>
));
CardDate.displayName = 'CardDate';

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
      {(publishedAt || updatedAt) && <CardDate publishedAt={publishedAt} updatedAt={updatedAt} />}
      {body && (
        <div className={css('ali-dev-card__body')}>
          <Typography>{body}</Typography>
        </div>
      )}
    </div>
  ),
);
Card.displayName = 'Card';
