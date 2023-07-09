import { PortableText } from '@portabletext/react';
import classNames from 'classnames/bind';

import { Container, Grid, Card, CardProps, PortableTextComponents } from '@/components/reusable';
import { BulletIcon } from '@/components/reusable/icons';
import { uuidv4, orderBy } from '@/utils';

import styles from './MoreAbout.module.scss';

const css = classNames.bind(styles);

export type MoreAboutItem = CardProps;

export type MoreAboutProps = {
  introduction?: any;
  moreAboutItems?: MoreAboutItem[];
};

export const MoreAbout = ({ introduction, moreAboutItems }: MoreAboutProps) => (
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
              orderBy(moreAboutItems).map((item: MoreAboutItem) => (
                <li className={css('more-about__list-item')} key={uuidv4()}>
                  <BulletIcon className={css('more-about__list-item-icon')} />
                  <Card title={item?.title} publishedAt={item?.publishedAt} body={item?.body} />
                </li>
              ))}
          </ul>
        </Grid>
      </Grid>
    </Container>
  </section>
);
