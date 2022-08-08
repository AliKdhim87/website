import { PortableText } from '@portabletext/react';
import classNames from 'classnames/bind';

import styles from './MoreAbout.module.scss';

import { Container, Grid, Card, PortableTextComponents } from '@/components/reusable';
import { BulletIcon } from '@/components/reusable/icons';
import { uuidv4 } from '@/utils';
import { Maybe, Card as CardType } from 'generated/graphql';

const css = classNames.bind(styles);

export type MoreAboutProps = {
  introduction?: any[] | string;
  moreAboutItems?: Maybe<Maybe<CardType>[]>;
};

export const MoreAbout: React.FC<MoreAboutProps> = ({ introduction, moreAboutItems }) => (
  <section className={css('more-about')}>
    <Container>
      <Grid container justifyContent="center">
        <Grid item md={10}>
          {introduction && (
            <div className={css('space-mb-3')}>
              <PortableText value={introduction} components={PortableTextComponents} />
            </div>
          )}
          <ul className={css('more-about__list')}>
            {moreAboutItems &&
              moreAboutItems
                .slice()
                .sort((a, b) => parseFloat(b?.publishedAt) - parseFloat(a?.publishedAt))
                .map((item) => (
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
