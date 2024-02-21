import classNames from 'classnames/bind';

import { Badge } from '@/components/reusable';
import { uuidv4 } from '@/utils';
import { Category, Maybe } from 'generated/graphql';

import styles from './Tags.module.scss';

const css = classNames.bind(styles);

interface TagsProps {
  tags: Maybe<Category>[];
}

export const Tags = ({ tags }: TagsProps) => (
  <ul className={css('tags')}>
    {tags &&
      tags.map((tag) => (
        <li className={css('tags__item')} key={uuidv4()}>
          {tag && <Badge href={`categories/${tag._id}`}>{tag.title}</Badge>}
        </li>
      ))}
  </ul>
);
