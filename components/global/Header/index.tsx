import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import { Grid } from '../../reusable/Grid';

import styles from './index.module.scss';

const css = classNames.bind(styles);

export const Header: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Grid container as="header" className={css('header')}>
    {children}
  </Grid>
);
