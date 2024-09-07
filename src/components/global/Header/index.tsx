import { ReactNode } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';
import { Grid } from '../../reusable/Grid';

const css = classNames.bind(styles);
interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <Grid container as="header" className={css('header')}>
    {children}
  </Grid>
);
