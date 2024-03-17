import classNames from 'classnames/bind';

import { Container } from '../Container';
import { Heading } from '../Heading';

import styles from './BlogPostTitle.module.scss';

const css = classNames.bind(styles);
interface BlogPostTitleProps {
  title?: string;
}
export const BlogPostTitle = ({ title }: BlogPostTitleProps) =>
  title ? (
    <div className={css('blog-post-title')}>
      <Container>
        <Heading level={1} variant="h3">
          {title}
        </Heading>
      </Container>
    </div>
  ) : null;
