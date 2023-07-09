import classNames from 'classnames/bind';
import { ReactNode } from 'react';

import { Grid } from '../../reusable/Grid';

import styles from './index.module.scss';

const css = classNames.bind(styles);
interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <Grid container as="header" className={css('header')}>
    {children}
  </Grid>
);
