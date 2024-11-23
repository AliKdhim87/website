'use client';
import dynamic from 'next/dynamic';

export { Anchor } from '@ali-dev/components';
export { BlogHeader } from '@ali-dev/components';
export { Body } from '@ali-dev/components';
export { Button } from '@ali-dev/components';
export { CardList, CardListItem, CardListLoadMoreLink, CardListTitle } from '@ali-dev/components';
export { Container } from '@ali-dev/components';
export { CTA } from '@ali-dev/components';
export { Footer } from '@ali-dev/components';
export { Form } from '@ali-dev/components';
export { Grid } from '@ali-dev/components';
export { Header } from '@ali-dev/components';
export { Heading } from '@ali-dev/components';
export { Icon } from '@ali-dev/components';
export { InputField } from '@ali-dev/components';
export { LayoutContainer } from '@ali-dev/components';
export { List, ListItem } from '@ali-dev/components';
export { Logo } from '@ali-dev/components';
export { Nav } from '@ali-dev/components';
export { Page } from '@ali-dev/components';
export { PageHeader } from '@ali-dev/components';
export { SocialMedia } from '@ali-dev/components';
export { Tags } from '@ali-dev/components';
export { Textarea } from '@ali-dev/components';
export { Typography } from '@ali-dev/components';
export const TOC = dynamic(
  async () => {
    const Component = (await import('@ali-dev/components')).TOC;
    return { default: Component };
  },
  { ssr: false },
);
export const GraphComment = dynamic(
  async () => {
    const Component = (await import('@ali-dev/components')).GraphComment;
    return { default: Component };
  },
  { ssr: false },
);
export const PortableTextComponents = dynamic(
  async () => {
    const Component = (await import('@ali-dev/components')).PortableTextComponents;
    return { default: Component };
  },
  { ssr: false },
);
export type { AnchorProps } from '@ali-dev/components';
export type { BlogHeaderProps } from '@ali-dev/components';
export type { ButtonProps } from '@ali-dev/components';
export type { CardListItemProps, CardListProps } from '@ali-dev/components';
export type { CTAProps } from '@ali-dev/components';
export type { GridProps } from '@ali-dev/components';
export type { HeadingProps, HeadingVariant } from '@ali-dev/components';
export type {
  HeadingType,
  HeadingBase,
  HeadingH2,
  HeadingH3,
  HeadingH4,
  HeadingH5,
  HeadingH6,
  HeadingsArray,
  TOCListProps,
  TOCProps,
} from '@ali-dev/components';
export type { ImageType } from '@ali-dev/components';
export type { PageHeaderProps } from '@ali-dev/components';
export type { SocialMediaLinkProps, SocialMediaListType } from '@ali-dev/components';
export type { TagsProps, TagsTypes } from '@ali-dev/components';
export type { TypographyProps } from '@ali-dev/components';
