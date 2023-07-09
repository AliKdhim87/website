import classNames from 'classnames/bind';

import { Grid, Badge } from '@/components/reusable';
import { uuidv4 } from '@/utils';
import { Category, Maybe } from 'generated/graphql';

import styles from './Tags.module.scss';

const css = classNames.bind(styles);

interface TagsProps {
  tags: Maybe<Category>[];
}

export const Tags = ({ tags }: TagsProps) => (
  <Grid as="ul" container className={css('tags')}>
    {tags &&
      tags.map((tag) => (
        <Grid as="li" item key={uuidv4()} className={css('tags__item')}>
          {tag && <Badge href={`categories/${tag._id}`}>{tag.title}</Badge>}
        </Grid>
      ))}
  </Grid>
);
