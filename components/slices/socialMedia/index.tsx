import classNames from 'classnames/bind';
import { Maybe } from 'graphql/jsutils/Maybe';

import { Container, Grid, Typography, Icon, IconsType } from '@/components/reusable';
import { uuidv4 } from '@/utils';
import { Social } from 'generated/graphql';

import styles from './SocialMedia.module.scss';

const css = classNames.bind(styles);

interface SocialMediaProps {
  title: Maybe<string>;
  socialMedia: Maybe<Maybe<Social>[]>;
}

export const SocialMedia = ({ title, socialMedia }: SocialMediaProps) => (
  <section className={css('social-media')}>
    <Container>
      <Grid container alignItems="center">
        <Grid item sm={6} justifyContent="center" justifyContentMd="flex-start">
          {title && (
            <Typography bodyWeight="bold" variant="body" as="h2" className={css('social-media__title')}>
              {title}
            </Typography>
          )}
        </Grid>
        <Grid item sm={3} justifyContent="center">
          {socialMedia &&
            socialMedia.map(
              (item) =>
                item &&
                item.title &&
                item.url &&
                item.icon && (
                  <a
                    href={item.url}
                    key={uuidv4()}
                    title={item.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css('social-media__link')}
                  >
                    <Icon name={item.icon as keyof typeof IconsType} aria-label={title} />
                  </a>
                ),
            )}
        </Grid>
      </Grid>
    </Container>
  </section>
);
