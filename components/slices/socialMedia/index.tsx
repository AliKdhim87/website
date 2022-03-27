import classNames from 'classnames/bind';
import { Container, Grid, Typography, Icon, IconsType } from '@/components/reusable';
import { uuidv4 } from '@/utils';

import styles from './SocialMedia.module.scss';
import { Maybe } from 'graphql/jsutils/Maybe';
import { Social } from 'generated/graphql';

const css = classNames.bind(styles);

interface SocialMediaProps {
  title: Maybe<string>;
  socialMedia: Maybe<Maybe<Social>[]>;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({ title, socialMedia }) => (
  <section className={css('social-media')}>
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={10}>
          <Grid container>
            <Grid item xs={12} lg={5} sm={6} justifyContent="center" justifyContentMd="flex-start">
              {title && (
                <Typography bodyWeight="bold" variant="body" as="h2" className={css('social-media__title')}>
                  {title}
                </Typography>
              )}
            </Grid>
            <Grid lg={5} sm={6} xs={12} alignItems="center" justifyContent="space-between">
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
        </Grid>
      </Grid>
    </Container>
  </section>
);
