import classNames from 'classnames/bind';

import { Container } from '../Container';
import { Typography } from '../Typography';

import styles from './BlogPostTitle.module.scss';

const css = classNames.bind(styles);
interface BlogPostTitleProps {
  title?: string;
}
export const BlogPostTitle = ({ title }: BlogPostTitleProps) =>
  title ? (
    <div className={css('blog-post-title')}>
      <Container>
        <Typography as="h1" variant="h3">
          {title}
        </Typography>
      </Container>
    </div>
  ) : null;
