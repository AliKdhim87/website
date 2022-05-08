import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import classNames from 'classnames/bind';

import styles from './MoreAbout.module.scss';

import { Container, Typography, Grid, Card } from '@/components/reusable';
import { BulletIcon } from '@/components/reusable/icons';
import { uuidv4 } from '@/utils';
import { Maybe, Card as CardType } from 'generated/graphql';

const css = classNames.bind(styles);

export type MoreAboutProps = {
  introduction?: any[] | string;
  moreAboutItems?: Maybe<Maybe<CardType>[]>;
};

const components: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <Typography as="p" variant="body" className="space-mb-1">
        {children}
      </Typography>
    ),
  },
};

export const MoreAbout: React.FC<MoreAboutProps> = ({ introduction, moreAboutItems }) => (
  <section className={css('more-about')}>
    <Container>
      <Grid container justifyContent="center">
        <Grid item md={10}>
          {introduction && (
            <div className={css('space-mb-3')}>
              <PortableText value={introduction} components={components} />
            </div>
          )}
          <ul className={css('more-about__list')}>
            {moreAboutItems &&
              moreAboutItems.map((item) => (
                <li className={css('more-about__list-item')} key={uuidv4()}>
                  <BulletIcon className={css('more-about__list-item-icon')} />
                  <Card title={item?.title} date={item?.publishedAt} body={item?.body} />
                </li>
              ))}
          </ul>
        </Grid>
      </Grid>
    </Container>
  </section>
);
