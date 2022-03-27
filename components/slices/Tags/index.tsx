import classNames from 'classnames/bind';
import { Container, Grid, Badge } from '@/components/reusable';

import styles from './Tags.module.scss';
import { uuidv4 } from '@/utils';
import { Category, Maybe } from 'generated/graphql';

const css = classNames.bind(styles);

type TagsDataTypes = {
  title: string;
  _id: string;
};

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
