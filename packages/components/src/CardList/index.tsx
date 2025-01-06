import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

import classnames from 'classnames/bind';

import styles from './styles.module.scss';
import { Card } from '../Card';
import type { CardProps } from '../Card';
import type { CTAProps } from '../CTA';
import { CTA } from '../CTA';
import { Heading, HeadingProps } from '../Heading';
const css = classnames.bind(styles);

export interface CardListItemProps extends Readonly<CardProps> {
  href: string;
}

export interface CardListProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export const CardListItem = ({ body, href, publishedAt, updatedAt, title, headingOptions }: CardListItemProps) => (
  <a href={href} className={css('ali-dev-card-list__item')}>
    <Card title={title} body={body} publishedAt={publishedAt} updatedAt={updatedAt} headingOptions={headingOptions} />
  </a>
);

export const CardListTitle = ({ children, level, ...restProps }: HeadingProps) => (
  <Heading {...restProps} level={level || 2} className={css('ali-dev-card-list__title')} variant="h3">
    {children}
  </Heading>
);

export const CardListLoadMoreLink = ({ children, ...restProps }: PropsWithChildren<CTAProps>) => (
  <CTA {...restProps} className={css('ali-dev-card-list__load-more-link')}>
    {children}
  </CTA>
);

export const CardList = ({ children, ...restProps }: CardListProps) => (
  <section {...restProps} className={css('ali-dev-card-list')}>
    {children}
  </section>
);
