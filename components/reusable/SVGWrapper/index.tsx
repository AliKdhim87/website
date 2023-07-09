import classNames from 'classnames/bind';

import { Container } from '../Container';

import styles from './index.module.scss';

const css = classNames.bind(styles);

interface SVGWrapperProps {
  mode: 'dark' | 'light';
  children: React.ReactNode;
}

export const SVGWrapper = ({ children, mode }: SVGWrapperProps) => (
  <Container fluid>
    <div className={css(`svg-wrapper--${mode}`)}>{children}</div>
  </Container>
);
