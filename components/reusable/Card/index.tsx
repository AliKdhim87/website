import classNames from 'classnames/bind';
import { Typography } from '@/components/reusable';

import styles from './Card.module.scss';
import { Maybe } from 'generated/graphql';

const css = classNames.bind(styles);

interface CardProps {
  title?: Maybe<string>;
  body?: Maybe<string>;
  date?: Maybe<string>;
}

export const Card: React.FC<CardProps> = ({ title, body, date }) => {
  return (
    <div className={css('card')}>
      {title && (
        <Typography as="h3" variant="h4">
          {title}
        </Typography>
      )}
      {body && (
        <Typography as="p" variant="body" className={css('space-mb-1')}>
          {body}
        </Typography>
      )}
      {date && (
        <Typography as="p" variant="body">
          {date}
        </Typography>
      )}
    </div>
  );
};
