'use client';
import type { ComponentType } from 'react';

import dynamic from 'next/dynamic';

import { MainImage } from './MainImage';

export { Surface } from '@ali-dev/components/src/Surface';
export { LogoImage } from '@ali-dev/components/src/LogoImage';
export { LogoWrapper } from '@ali-dev/components/src/Logo';
export { Anchor } from '@ali-dev/components/src/Anchor';
export { BlogHeader } from '@ali-dev/components/src/BlogHeader';
export { Body } from '@ali-dev/components/src/Body';
export { Button } from '@ali-dev/components/src/Button';
export { CardList, CardListItem, CardListLoadMoreLink, CardListTitle } from '@ali-dev/components/src/CardList';
export { Container } from '@ali-dev/components/src/Container';
export { CTA } from '@ali-dev/components/src/CTA';
export { Footer } from '@ali-dev/components/src/Footer';
export { Form } from '@ali-dev/components/src/Form';
export { Grid } from '@ali-dev/components/src/Grid';
export { Header } from '@ali-dev/components/src/Header';
export { Heading } from '@ali-dev/components/src/Heading';
export { Icon } from '@ali-dev/components/src/icons/Icon';
export { InputField } from '@ali-dev/components/src/InputField';
export { LayoutContainer } from '@ali-dev/components/src/LayoutContainer';
export { List, ListItem } from '@ali-dev/components/src/List';
export { Nav } from '@ali-dev/components/src/Nav';
export { Navigation } from './Navigation';
export { Page } from '@ali-dev/components/src/Page';
export { PageHeader } from '@ali-dev/components/src/PageHeader';
export { SocialMedia } from '@ali-dev/components/src/socialMedia';
export { Tags } from '@ali-dev/components/src/Tags';
export { Textarea } from '@ali-dev/components/src/Textarea';
export { Typography } from '@ali-dev/components/src/Typography';
export const TOC = dynamic(
  async () => {
    const Component = (await import('@ali-dev/components/src/TOC')).TOC;
    return { default: Component };
  },
  { ssr: false },
);
export const GraphComment = dynamic(
  async () => {
    const Component = (await import('@ali-dev/components/src/GraphComments')).GraphComment;
    return { default: Component };
  },
  { ssr: false },
);
export const PortableTextComponents: ComponentType<any> = dynamic(
  async () => {
    const Component = (await import('@ali-dev/components/src/PortableTextComponents')).PortableTextComponents;
    return { default: Component };
  },
  { ssr: false },
);
interface MarkdownProps {
  dataset: string;
  projectId: string;
  value?: any;
}

export const PortableText = ({ dataset, projectId, value }: MarkdownProps) => {
  return (
    <PortableTextComponents
      value={value}
      components={{
        types: {
          mainImage: ({ value }: { value: any }) => <MainImage dataset={dataset} projectId={projectId} value={value} />,
        },
      }}
    />
  );
};

export type { AnchorProps } from '@ali-dev/components/src/Anchor';
export type { BlogHeaderProps } from '@ali-dev/components/src/BlogHeader';
export type { ButtonProps } from '@ali-dev/components/src/Button';
export type { CardListItemProps, CardListProps } from '@ali-dev/components/src/CardList';
export type { CTAProps } from '@ali-dev/components/src/CTA';
export type { GridProps } from '@ali-dev/components/src/Grid';
export type { HeadingProps, HeadingVariant } from '@ali-dev/components/src/Heading';
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
} from '@ali-dev/components/src/TOC';
export type { PageHeaderProps } from '@ali-dev/components/src/PageHeader';
export type { SocialMediaListType } from '@ali-dev/components/src/socialMedia';
export type { SocialMediaLinkProps } from '@ali-dev/components/src/socialMedia/SocialMediaLink';
export type { TagsProps, TagsTypes } from '@ali-dev/components/src/Tags';
export type { TypographyProps } from '@ali-dev/components/src/Typography';
