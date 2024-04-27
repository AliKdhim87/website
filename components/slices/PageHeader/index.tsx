import classNames from 'classnames/bind';
import { Maybe } from 'graphql/jsutils/Maybe';
import Image, { ImageProps } from 'next/image';

import { Container, Typography, Grid, CTA, Heading } from '@/components/reusable';
import { Cta } from '@/graphql-types';

import styles from './PageHeader.module.scss';

const css = classNames.bind(styles);

export type PageHeader = {
  title?: Maybe<string>;
  body?: Maybe<string>;
  image?: ImageProps;
  titleDistancedBottom?: boolean;
  cta?: Maybe<Cta>;
  backgroundColor?: 'primary' | 'transparent';
};

export const PageHeader = ({
  title,
  body,
  image,
  titleDistancedBottom,
  cta,
  backgroundColor = 'primary',
}: PageHeader) => {
  const content = (
    <>
      {title && (
        <Heading level={1} className={css({ 'space-mb-end-3': titleDistancedBottom })}>
          {title}
        </Heading>
      )}
      {body && (
        <Typography as="span" variant="subtitle">
          {body}
        </Typography>
      )}
      {cta && cta.route && cta.title && (
        <CTA href={cta.route} className={css('space-mb-start-4', 'space-auto')}>
          {cta.title}
        </CTA>
      )}
    </>
  );

  const rootClasses = css('page-header-section', { [`page-header-section--bg-${backgroundColor}`]: backgroundColor });
  return (
    <section className={rootClasses}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item md={10}>
            <Grid container>
              {image ? (
                <>
                  <Grid item md={8} sm={6}>
                    {content}
                  </Grid>
                  {image && image.src && image.alt && (
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      justifyContent="center"
                      className={css('page-header-section__image')}
                    >
                      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} />
                    </Grid>
                  )}
                </>
              ) : (
                <Grid item md={12}>
                  {content}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
