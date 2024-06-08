import classnames from 'classnames/bind';
import Link from 'next/link';
import { forwardRef } from 'react';

import { Container, Grid, Card, CardProps, CTA, Heading } from '@/components/reusable';
import { Cta, Maybe } from '@/graphql-types';
import { uuidv4 } from '@/utils';

import styles from './styles.module.scss';

const cx = classnames.bind(styles);

export interface PostItemProps extends Readonly<CardProps> {
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

export interface PostListProps extends Pick<PostItemProps, 'headingOptions'> {
  title?: Maybe<string>;
  blog?: BlogType[];
  cta?: Maybe<Cta>;
}

export const PostItem = forwardRef(({ body, href, publishedAt, title, ...restProps }: PostItemProps) => (
  <Link href={href} className={cx('post__item')}>
    <Card title={title} body={body} publishedAt={publishedAt} {...restProps} />
  </Link>
));

PostItem.displayName = 'PostItem';

export const PostList = ({ blog, cta, title, ...restProps }: PostListProps) => (
  <section className="space-pb-4">
    <Container>
      <Grid container justifyContent="center">
        <Grid md={10}>
          {title && (
            <Heading level={2} variant="h3" className="text-align-md--center">
              {title}
            </Heading>
          )}
          {blog &&
            blog.map(
              ({ slug, title: blogTitle, excerpt, publishedAt }) =>
                slug &&
                slug.current && (
                  <PostItem
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
            <CTA href={cta.route} className="space-mb-start-5">
              {cta.title}
            </CTA>
          )}
        </Grid>
      </Grid>
    </Container>
  </section>
);
