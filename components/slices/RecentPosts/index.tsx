import classNames from 'classnames/bind';
import Link from 'next/link';

import { Container, Grid, Typography, Card, CTA } from '@/components/reusable';
import { Cta, Maybe, Post } from 'generated/graphql';
import { uuidv4 } from 'utils';

export interface RecentPostsProps {
  title?: Maybe<string>;
  blog?: Post[];
  cta?: Maybe<Cta>;
}

export const RecentPosts: React.FC<RecentPostsProps> = ({ blog, cta, title }) => (
  <section className="space-pb-4">
    <Container>
      <Grid container justifyContent="center">
        <Grid md={10}>
          {title && (
            <Typography as="h2" variant="h3" className={classNames('text-align-md--center')}>
              {title}
            </Typography>
          )}
          {blog &&
            blog.map(
              ({ slug, title: blogTitle, excerpt, publishedAt }) =>
                slug &&
                slug.current && (
                  <Link href={`/blog/${slug.current}`} passHref key={uuidv4()}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                      <Card title={blogTitle} body={excerpt} date={publishedAt} />
                    </a>
                  </Link>
                ),
            )}
          {cta && cta.route && <CTA href={cta.route} text={cta.title} variant="primary" className="space-mb-start-5" />}
        </Grid>
      </Grid>
    </Container>
  </section>
);
