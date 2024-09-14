import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';

import styles from './index.module.scss';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Typography } from '../Typography';

const css = classNames.bind(styles);

export interface FooterProps {}

export const Footer = forwardRef<HTMLDivElement, PropsWithChildren<FooterProps>>(
  ({ children }, ref: ForwardedRef<HTMLDivElement>) => (
    <footer className={css('ali-dev-footer')} ref={ref}>
      <Container>
        <Grid container justifyContent="center" alignItems="center">
          {children && (
            <Typography as="span" variant="sm">
              {children}
            </Typography>
          )}
        </Grid>
      </Container>
    </footer>
  ),
);
Footer.displayName = 'Footer';
