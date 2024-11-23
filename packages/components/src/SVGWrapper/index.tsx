import type { PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';
import { Container } from '../Container';

const css = classNames.bind(styles);

interface SVGWrapperProps {
  mode: 'dark' | 'light';
}

export const SVGWrapper = ({ children, mode }: PropsWithChildren<SVGWrapperProps>) => (
  <Container fluid>
    <div className={css(`svg-wrapper--${mode}`)}>{children}</div>
  </Container>
);
