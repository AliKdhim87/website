import classNames from 'classnames/bind';

import { Container } from '../Container';

import styles from './index.module.scss';

const css = classNames.bind(styles);

interface SVGWrapperProps {
  mode: 'dark' | 'light';
}

export const SVGWrapper: React.FC<SVGWrapperProps> = ({ children, mode }) => (
  <Container fluid>
    <div className={css(`svg-wrapper--${mode}`)}>{children}</div>
  </Container>
);
