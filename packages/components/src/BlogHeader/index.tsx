import type { HTMLAttributes } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';
import { Container } from '../Container';
import { Heading } from '../Heading';

const css = classNames.bind(styles);
export interface BlogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}
export const BlogHeader = ({ title, className, ...restProps }: BlogHeaderProps) => (
  <div {...restProps} className={css(className, 'ali-dev-blog-header')}>
    <Container>
      <Heading level={1} variant="h3">
        {title}
      </Heading>
    </Container>
  </div>
);
