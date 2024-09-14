import { ForwardedRef, forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './Tags.module.scss';
import { Badge } from '../Badge';

const css = classNames.bind(styles);

export type TagsTypes = {
  href: string;
  text: string;
};

export interface TagsProps {
  tags: TagsTypes[];
}

export const Tags = forwardRef(({ tags, ...restProps }: TagsProps, ref: ForwardedRef<HTMLUListElement>) => (
  <ul className={css('ali-dev-tags')} ref={ref} {...restProps}>
    {Array.isArray(tags) &&
      tags.map((tag, index: number) => (
        <li className={css('ali-dev-tags__item')} key={index}>
          <Badge href={tag.href}>{tag.text}</Badge>
        </li>
      ))}
  </ul>
));
Tags.displayName = 'Tags';
