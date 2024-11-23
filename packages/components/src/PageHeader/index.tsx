import type { ComponentType, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

import classNames from 'classnames/bind';
import { Maybe } from 'graphql/jsutils/Maybe';

import styles from './PageHeader.module.scss';
import { Container } from '../Container';
import { Grid } from '../Grid';
import { Heading } from '../Heading';
import { Typography } from '../Typography';

const css = classNames.bind(styles);

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  ImageComponent?: ComponentType<any>;
};

export interface PageHeaderProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'title'> {
  title?: Maybe<string>;
  body?: Maybe<string>;
  image?: ImageProps;
}

export const PageHeader = ({ title, body, image, children }: PropsWithChildren<PageHeaderProps>) => {
  const ImageComponent = image?.ImageComponent || 'img';
  return (
    <div className={css('ali-dev-page-header')}>
      <Container>
        <Grid container justifyContent="center" rowGap="lg">
          {image && image.src && image.alt && (
            <Grid item>
              <ImageComponent
                className={css('ali-dev-page-header__image')}
                src={image.src}
                width={image.width}
                height={image.height}
                alt={image.alt}
              />
            </Grid>
          )}
          <Grid item md={10}>
            <hgroup className={css('ali-dev-page-header__heading-group')}>
              {title && (
                <Heading level={1} className={css('ali-dev-page-header__title')}>
                  {title}
                </Heading>
              )}
              {body && (
                <Typography variant="lg" className={css('ali-dev-page-header__subtitle')}>
                  {body}
                </Typography>
              )}
            </hgroup>
          </Grid>
        </Grid>
        {children}
      </Container>
    </div>
  );
};
