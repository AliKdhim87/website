import classNames from 'classnames/bind';

import {
  Container,
  Grid,
  Card,
  CardProps,
  PortableTextComponents,
  type PortableTextConfigProps,
} from '@/components/reusable';
import { BulletIcon } from '@/components/reusable/icons';
import { uuidv4, orderBy } from '@/utils';

import styles from './MoreAbout.module.scss';

const css = classNames.bind(styles);

export type MoreAboutItem = CardProps;

export type MoreAboutProps = PortableTextConfigProps & {
  value?: any;
  moreAboutItems?: MoreAboutItem[];
};

export const MoreAbout = ({ value, moreAboutItems, dataset, projectId }: MoreAboutProps) => (
  <section className={css('more-about')}>
    <Container>
      <Grid container justifyContent="center">
        <Grid item md={10}>
          {value && (
            <div className={css('space-mb-3')}>
              <PortableTextComponents value={value} dataset={dataset} projectId={projectId} />
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
