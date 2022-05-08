import classNames from 'classnames/bind';

import styles from './BlogPostTitle.module.scss';

import { Container, Typography } from '@/components/reusable';
import { Maybe } from 'generated/graphql';

const css = classNames.bind(styles);

export const BlogPostTitle: React.FC<{ title?: Maybe<string> }> = ({ title }) =>
  title ? (
    <div className={css('blog-post-title')}>
      <Container>
        <Typography as="h1" variant="h3">
          {title}
        </Typography>
      </Container>
    </div>
  ) : null;
