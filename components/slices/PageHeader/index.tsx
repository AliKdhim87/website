import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';
import { Maybe } from 'graphql/jsutils/Maybe';
import Image, { ImageProps } from 'next/image';

import { Container, Typography, Grid, Heading } from '@/components/reusable';

import styles from './PageHeader.module.scss';

const css = classNames.bind(styles);

export interface PageHeaderProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'title'> {
  title?: Maybe<string>;
  body?: Maybe<string>;
  image?: ImageProps;
}

export const PageHeader = ({ title, body, image, children }: PropsWithChildren<PageHeaderProps>) => {
  const rootClasses = css('page-header-section');
  return (
    <section className={rootClasses}>
      <Container>
        <Grid container spacing={image ? 'md' : undefined}>
          <Grid item md={image ? 9 : undefined}>
            <hgroup className={css('page-header__heading-group')}>
              {title && (
                <Heading level={1} className={css('page-header__title')}>
                  {title}
                </Heading>
              )}
              {body && (
                <Typography variant="subtitle" className={css('page-header__subtitle')}>
                  {body}
                </Typography>
              )}
            </hgroup>
          </Grid>
          {image && image.src && image.alt && (
            <Grid item md={3} justifyContent="center">
              <Image src={image.src} width={image.width} height={image.height} alt={image.alt} />
            </Grid>
          )}
        </Grid>
        {children}
      </Container>
    </section>
  );
};
