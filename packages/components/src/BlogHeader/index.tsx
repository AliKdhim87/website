import type { ForwardedRef, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames/bind';

import styles from './styles.module.scss';
import { Container } from '../Container';
import { Heading } from '../Heading';

const css = classNames.bind(styles);
export interface BlogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}
export const BlogHeader = forwardRef(
  ({ title, className, ...restProps }: BlogHeaderProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={css(className, 'ali-dev-blog-header')} ref={ref}>
      <Container>
        <Heading level={1} variant="h3">
          {title}
        </Heading>
      </Container>
    </div>
  ),
);
BlogHeader.displayName = 'BlogHeader';
