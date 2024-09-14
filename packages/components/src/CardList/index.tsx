import type { DetailedHTMLProps, ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';
import { forwardRef } from 'react';

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

export const CardListItem = forwardRef(
  (
    { body, href, publishedAt, updatedAt, title, headingOptions }: CardListItemProps,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => (
    <a ref={ref} href={href} className={css('ali-dev-card-list__item')}>
      <Card title={title} body={body} publishedAt={publishedAt} updatedAt={updatedAt} headingOptions={headingOptions} />
    </a>
  ),
);

CardListItem.displayName = 'CardListItem';

export const CardListTitle = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level, ...restProps }, ref: ForwardedRef<HTMLHeadingElement>) => (
    <Heading {...restProps} level={level || 2} className={css('ali-dev-card-list__title')} variant="h3" ref={ref}>
      {children}
    </Heading>
  ),
);
CardListTitle.displayName = 'CardListTitle';

export const CardListLoadMoreLink = forwardRef<HTMLAnchorElement, PropsWithChildren<CTAProps>>(
  ({ children, ...restProps }, ref: ForwardedRef<HTMLAnchorElement>) => (
    <CTA {...restProps} className={css('ali-dev-card-list__load-more-link')} ref={ref}>
      {children}
    </CTA>
  ),
);
CardListLoadMoreLink.displayName = 'CardListLoadMoreLink';

export const CardList = forwardRef<HTMLDivElement, CardListProps>(({ children, ...restProps }) => (
  <section {...restProps} className={css('ali-dev-card-list')}>
    {children}
  </section>
));
CardList.displayName = 'CardList';
