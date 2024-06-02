import classNames from 'classnames';
import Link from 'next/link';

import { Container, Grid, Card, CardProps, CTA, Heading } from '@/components/reusable';
import { Cta, Maybe } from '@/graphql-types';
import { uuidv4 } from '@/utils';

export type BlogType = {
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
};
export interface RecentPostsProps extends Readonly<CardProps> {
  title?: Maybe<string>;
  blog?: BlogType[];
  cta?: Maybe<Cta>;
}

export const RecentPosts = ({ blog, cta, title, ...props }: RecentPostsProps) => (
  <section className="space-pb-4">
    <Container>
      <Grid container justifyContent="center">
        <Grid md={10}>
          {title && (
            <Heading level={2} variant="h3" className={classNames('text-align-md--center')}>
              {title}
            </Heading>
          )}
          {blog &&
            blog.map(
              ({ slug, title: blogTitle, excerpt, publishedAt }) =>
                slug &&
                slug.current && (
                  <Link href={`/blog/${slug.current}`} key={uuidv4()}>
                    <Card title={blogTitle} body={excerpt} publishedAt={publishedAt} {...props} />
                  </Link>
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
