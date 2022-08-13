import classNames from 'classnames/bind';

import { Container } from '../Container';

import styles from './index.module.scss';

import { Children } from 'global';

const css = classNames.bind(styles);

interface SVGWrapperProps {
  mode: 'dark' | 'light';
  children: Children;
}

export const SVGWrapper: React.FC<SVGWrapperProps> = ({ children, mode }) => (
  <Container fluid>
    <div className={css(`svg-wrapper--${mode}`)}>{children}</div>
  </Container>
);
