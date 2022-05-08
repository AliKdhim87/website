import classNames from 'classnames/bind';

import styles from './Tags.module.scss';

import { Grid, Badge } from '@/components/reusable';
import { uuidv4 } from '@/utils';
import { Category, Maybe } from 'generated/graphql';

const css = classNames.bind(styles);

interface TagsProps {
  tags: Maybe<Category>[];
}

export const Tags: React.FC<TagsProps> = ({ tags }) => (
  <Grid as="ul" container className={css('tags')}>
    {tags &&
      tags.map((tag) => (
        <Grid as="li" item key={uuidv4()} className={css('tags__item')}>
          {tag && <Badge href={`categories/${tag._id}`}>{tag.title}</Badge>}
        </Grid>
      ))}
  </Grid>
);
