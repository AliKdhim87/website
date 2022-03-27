import Image from 'next/image';
import classNames from 'classnames/bind';
import { Container, Typography, Grid, CTA } from '@/components/reusable';

import styles from './PageHeader.module.scss';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Cta } from 'generated/graphql';

const css = classNames.bind(styles);

type ImageTypes = {
  src: string;
  alt: string;
  height: string;
  width: string;
};

export type PageHeader = {
  title?: Maybe<string>;
  body?: Maybe<string>;
  image?: ImageTypes;
  titleDistancedBottom?: boolean;
  cta?: Maybe<Cta>;
  backgroundColor?: 'primary' | 'transparent';
};

export const PageHeader: React.FC<PageHeader> = ({
  title,
  body,
  image,
  titleDistancedBottom,
  cta,
  backgroundColor = 'primary',
}) => {
  const content = (
    <>
      {title && (
        <Typography as="h1" variant="h1" className={css({ 'space-mb-end-3': titleDistancedBottom })}>
          {title}
        </Typography>
      )}
      {body && (
        <Typography as="span" variant="subtitle">
          {body}
        </Typography>
      )}
      {cta && cta.route && cta.title && (
        <CTA href={cta.route} text={cta.title} variant="primary" className={css('space-mb-start-4', 'space-auto')} />
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
                      <Image src={image.src} width={image.width} height={image.height} alt={image.alt} layout="fixed" />
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
