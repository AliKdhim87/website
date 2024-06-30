import { ForwardedRef, forwardRef } from 'react';

import classnames from 'classnames/bind';
import Link from 'next/link';

import { Card, CardProps, CTA, Heading } from '@/components/reusable';
import { Cta, Maybe } from '@/graphql-types';
import { uuidv4 } from '@/utils';

import styles from './styles.module.scss';

const cx = classnames.bind(styles);

export interface PostListItemProps extends Readonly<CardProps> {
  href: string;
  title: string;
  body: string;
  publishedAt: string;
}

export type BlogType = {
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
};

export interface PostListProps extends Pick<PostListItemProps, 'headingOptions'> {
  title?: Maybe<string>;
  blog?: BlogType[];
  cta?: Maybe<Cta>;
}

export const PostListItem = forwardRef(
  ({ body, href, publishedAt, title, ...restProps }: PostListItemProps, ref: ForwardedRef<HTMLAnchorElement>) => (
    <Link ref={ref} href={href} className={cx('post-list__item')}>
      <Card title={title} body={body} publishedAt={publishedAt} {...restProps} />
    </Link>
  ),
);

PostListItem.displayName = 'PostListItem';

export const PostList = ({ blog, cta, title, ...restProps }: PostListProps) => (
  <section className={cx('post-list')}>
    {title && (
      <Heading level={2} variant="h3" className="post-list__title">
        {title}
      </Heading>
    )}
    {Array.isArray(blog) &&
      blog.map(
        ({ slug, title: blogTitle, excerpt, publishedAt }) =>
          slug.current && (
            <PostListItem
              {...restProps}
              key={uuidv4()}
              title={blogTitle}
              body={excerpt}
              publishedAt={publishedAt}
              href={`/blog/${slug.current}`}
            />
          ),
      )}
    {cta && cta.route && (
      <CTA href={cta.route} className={cx('post-list__cta')}>
        {cta.title}
      </CTA>
    )}
  </section>
);
