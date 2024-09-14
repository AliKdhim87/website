/* eslint-disable */
// @ts-nocheck
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export type AboutMe = {
  __typename?: 'AboutMe';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  aboutIntroductionRaw?: Maybe<Scalars['JSON']['output']>;
  aboutMeItems?: Maybe<Array<Maybe<Card>>>;
};

export type AboutMeFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type AboutMeOrBlogListOrPageHeaderOrSocialCollection = AboutMe | BlogList | PageHeader | SocialCollection;

export type AboutMeSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
};

export type BlockOrCodeOrMainImageOrMath = Block | Code | MainImage | Math;

export type BlogList = {
  __typename?: 'BlogList';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Cta>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BlogListFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  cta?: InputMaybe<CtaFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BlogListSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  cta?: InputMaybe<CtaSorting>;
  title?: InputMaybe<SortOrder>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Card = {
  __typename?: 'Card';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  /** This can be used to schedule post for publishing */
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CardFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CardSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Category = Document & {
  __typename?: 'Category';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Code = {
  __typename?: 'Code';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  highlightedLines?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  language?: Maybe<Scalars['String']['output']>;
};

export type CodeFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  code?: InputMaybe<StringFilter>;
  filename?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
};

export type CodeSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  filename?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
};

export type Color = {
  __typename?: 'Color';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  alpha?: Maybe<Scalars['Float']['output']>;
  hex?: Maybe<Scalars['String']['output']>;
  hsl?: Maybe<HslaColor>;
  hsv?: Maybe<HsvaColor>;
  rgb?: Maybe<RgbaColor>;
};

export type ColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alpha?: InputMaybe<FloatFilter>;
  hex?: InputMaybe<StringFilter>;
  hsl?: InputMaybe<HslaColorFilter>;
  hsv?: InputMaybe<HsvaColorFilter>;
  rgb?: InputMaybe<RgbaColorFilter>;
};

export type ColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alpha?: InputMaybe<SortOrder>;
  hex?: InputMaybe<SortOrder>;
  hsl?: InputMaybe<HslaColorSorting>;
  hsv?: InputMaybe<HsvaColorSorting>;
  rgb?: InputMaybe<RgbaColorSorting>;
};

export type Cta = {
  __typename?: 'Cta';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  landingPageRoute?: Maybe<Route>;
  /** Example: https://www.sanity.io */
  link?: Maybe<Scalars['String']['output']>;
  /** Example: /blog */
  route?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CtaFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  kind?: InputMaybe<StringFilter>;
  landingPageRoute?: InputMaybe<RouteFilter>;
  link?: InputMaybe<StringFilter>;
  route?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CtaSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  kind?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  route?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']['input']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = Document & {
  __typename?: 'Footer';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
};

export type FooterFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  copyright?: InputMaybe<StringFilter>;
};

export type FooterSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  copyright?: InputMaybe<SortOrder>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  alt?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type HslaColor = {
  __typename?: 'HslaColor';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  a?: Maybe<Scalars['Float']['output']>;
  h?: Maybe<Scalars['Float']['output']>;
  l?: Maybe<Scalars['Float']['output']>;
  s?: Maybe<Scalars['Float']['output']>;
};

export type HslaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  l?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
};

export type HslaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  l?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
};

export type HsvaColor = {
  __typename?: 'HsvaColor';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  a?: Maybe<Scalars['Float']['output']>;
  h?: Maybe<Scalars['Float']['output']>;
  s?: Maybe<Scalars['Float']['output']>;
  v?: Maybe<Scalars['Float']['output']>;
};

export type HsvaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
  v?: InputMaybe<FloatFilter>;
};

export type HsvaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
  v?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']['input']>;
  nin?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type Link = {
  __typename?: 'Link';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
};

export type LinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  href?: InputMaybe<StringFilter>;
};

export type LinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  href?: InputMaybe<SortOrder>;
};

export type MainImage = {
  __typename?: 'MainImage';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  /** Important for SEO and accessibility. */
  alt?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityImageAsset>;
  caption?: Maybe<Scalars['String']['output']>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type MainImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  caption?: InputMaybe<StringFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type MainImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type Math = {
  __typename?: 'Math';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  latex?: Maybe<Scalars['String']['output']>;
};

export type MathFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  latex?: InputMaybe<StringFilter>;
};

export type MathOrSpan = Math | Span;

export type MathSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  latex?: InputMaybe<SortOrder>;
};

export type Navigation = Document & {
  __typename?: 'Navigation';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<Array<Maybe<Cta>>>;
  logo?: Maybe<MainImage>;
};

export type NavigationFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  logo?: InputMaybe<MainImageFilter>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  navigationItemUrl?: Maybe<Cta>;
  text?: Maybe<Scalars['String']['output']>;
};

export type NavigationItemFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  navigationItemUrl?: InputMaybe<CtaFilter>;
  text?: InputMaybe<StringFilter>;
};

export type NavigationItemSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  navigationItemUrl?: InputMaybe<CtaSorting>;
  text?: InputMaybe<SortOrder>;
};

export type NavigationSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  logo?: InputMaybe<MainImageSorting>;
};

export type OpenGraph = {
  __typename?: 'OpenGraph';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<MainImage>;
  /** Heads up! This will override the page title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type OpenGraphFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  image?: InputMaybe<MainImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OpenGraphSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  image?: InputMaybe<MainImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Page = Document & {
  __typename?: 'Page';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  content?: Maybe<Array<Maybe<AboutMeOrBlogListOrPageHeaderOrSocialCollection>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageHeader = {
  __typename?: 'PageHeader';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Cta>;
  image?: Maybe<MainImage>;
  title?: Maybe<Scalars['String']['output']>;
  titleDistancedBottom?: Maybe<Scalars['Boolean']['output']>;
};

export type PageHeaderFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  cta?: InputMaybe<CtaFilter>;
  image?: InputMaybe<MainImageFilter>;
  title?: InputMaybe<StringFilter>;
  titleDistancedBottom?: InputMaybe<BooleanFilter>;
};

export type PageHeaderSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  cta?: InputMaybe<CtaSorting>;
  image?: InputMaybe<MainImageSorting>;
  title?: InputMaybe<SortOrder>;
  titleDistancedBottom?: InputMaybe<SortOrder>;
};

export type PageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Post = Document & {
  __typename?: 'Post';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  bodyRaw?: Maybe<Scalars['JSON']['output']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  /** This ends up on summary pages, on Google, when people share your post in social media. */
  excerpt?: Maybe<Scalars['String']['output']>;
  mainImage?: Maybe<MainImage>;
  /** This can be used to schedule post for publishing */
  publishedAt?: Maybe<Scalars['Date']['output']>;
  slug?: Maybe<Slug>;
  /** Titles should be catchy, descriptive, and not too long */
  title?: Maybe<Scalars['String']['output']>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  excerpt?: InputMaybe<StringFilter>;
  mainImage?: InputMaybe<MainImageFilter>;
  publishedAt?: InputMaybe<DateFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  excerpt?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<MainImageSorting>;
  publishedAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type RgbaColor = {
  __typename?: 'RgbaColor';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Float']['output']>;
  g?: Maybe<Scalars['Float']['output']>;
  r?: Maybe<Scalars['Float']['output']>;
};

export type RgbaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<FloatFilter>;
  g?: InputMaybe<FloatFilter>;
  r?: InputMaybe<FloatFilter>;
};

export type RgbaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  b?: InputMaybe<SortOrder>;
  g?: InputMaybe<SortOrder>;
  r?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Category?: Maybe<Category>;
  Document?: Maybe<Document>;
  Footer?: Maybe<Footer>;
  Navigation?: Maybe<Navigation>;
  Page?: Maybe<Page>;
  Post?: Maybe<Post>;
  Route?: Maybe<Route>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SiteSettings?: Maybe<SiteSettings>;
  allCategory: Array<Category>;
  allDocument: Array<Document>;
  allFooter: Array<Footer>;
  allNavigation: Array<Navigation>;
  allPage: Array<Page>;
  allPost: Array<Post>;
  allRoute: Array<Route>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSiteSettings: Array<SiteSettings>;
};

export type RootQueryCategoryArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryDocumentArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryFooterArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryNavigationArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryPageArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryPostArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryRouteArgs = {
  id: Scalars['ID']['input'];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']['input'];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']['input'];
};

export type RootQuerySiteSettingsArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryAllCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CategorySorting>>;
  where?: InputMaybe<CategoryFilter>;
};

export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllFooterArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FooterSorting>>;
  where?: InputMaybe<FooterFilter>;
};

export type RootQueryAllNavigationArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NavigationSorting>>;
  where?: InputMaybe<NavigationFilter>;
};

export type RootQueryAllPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PageSorting>>;
  where?: InputMaybe<PageFilter>;
};

export type RootQueryAllPostArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PostSorting>>;
  where?: InputMaybe<PostFilter>;
};

export type RootQueryAllRouteArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RouteSorting>>;
  where?: InputMaybe<RouteFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};

export type RootQueryAllSiteSettingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SiteSettingsSorting>>;
  where?: InputMaybe<SiteSettingsFilter>;
};

export type Route = Document & {
  __typename?: 'Route';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** UTM for campaings */
  campaign?: Maybe<Scalars['String']['output']>;
  /** Hide this route for search engines like google */
  disallowRobots?: Maybe<Scalars['Boolean']['output']>;
  /** For search engines. Will be generateed to /sitemap.xml */
  includeInSitemap?: Maybe<Scalars['Boolean']['output']>;
  openGraph?: Maybe<OpenGraph>;
  /** The page you want to appear at this path. Remember it needs to be published. */
  page?: Maybe<Page>;
  slug?: Maybe<Slug>;
  /** Use the site settings title as page title instead of the title on the referenced page */
  useSiteTitle?: Maybe<Scalars['Boolean']['output']>;
};

export type RouteFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  campaign?: InputMaybe<StringFilter>;
  disallowRobots?: InputMaybe<BooleanFilter>;
  includeInSitemap?: InputMaybe<BooleanFilter>;
  openGraph?: InputMaybe<OpenGraphFilter>;
  page?: InputMaybe<PageFilter>;
  slug?: InputMaybe<SlugFilter>;
  useSiteTitle?: InputMaybe<BooleanFilter>;
};

export type RouteSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  campaign?: InputMaybe<SortOrder>;
  disallowRobots?: InputMaybe<SortOrder>;
  includeInSitemap?: InputMaybe<SortOrder>;
  openGraph?: InputMaybe<OpenGraphSorting>;
  slug?: InputMaybe<SlugSorting>;
  useSiteTitle?: InputMaybe<SortOrder>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']['output']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']['output']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sha1hash?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sha1hash?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  bottom?: Maybe<Scalars['Float']['output']>;
  left?: Maybe<Scalars['Float']['output']>;
  right?: Maybe<Scalars['Float']['output']>;
  top?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  blurHash?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']['output']>;
  isOpaque?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']['output']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  foreground?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']['input']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']['input']>;
};

export type SchemaOrg = {
  __typename?: 'SchemaOrg';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  openGraph?: Maybe<OpenGraph>;
  telephone?: Maybe<Scalars['Float']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type SchemaOrgFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  openGraph?: InputMaybe<OpenGraphFilter>;
  telephone?: InputMaybe<FloatFilter>;
  website?: InputMaybe<StringFilter>;
};

export type SchemaOrgSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  openGraph?: InputMaybe<OpenGraphSorting>;
  telephone?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type SiteSettings = Document & {
  __typename?: 'SiteSettings';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  footer?: Maybe<Footer>;
  navigation?: Maybe<Navigation>;
  primaryColor?: Maybe<Color>;
  schemaOrg?: Maybe<SchemaOrg>;
  secondaryColor?: Maybe<Color>;
};

export type SiteSettingsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  footer?: InputMaybe<FooterFilter>;
  navigation?: InputMaybe<NavigationFilter>;
  primaryColor?: InputMaybe<ColorFilter>;
  schemaOrg?: InputMaybe<SchemaOrgFilter>;
  secondaryColor?: InputMaybe<ColorFilter>;
};

export type SiteSettingsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  footer?: InputMaybe<FooterSorting>;
  navigation?: InputMaybe<NavigationSorting>;
  primaryColor?: InputMaybe<ColorSorting>;
  schemaOrg?: InputMaybe<SchemaOrgSorting>;
  secondaryColor?: InputMaybe<ColorSorting>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  current?: Maybe<Scalars['String']['output']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
};

export type Social = {
  __typename?: 'Social';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SocialCollection = {
  __typename?: 'SocialCollection';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<Social>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SocialCollectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SocialCollectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SocialFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SocialSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC',
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  marks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text?: Maybe<Scalars['String']['output']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GetAllBlogQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllBlogQuery = {
  __typename?: 'RootQuery';
  allPost: Array<{
    __typename?: 'Post';
    _id?: string | null;
    title?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
};

export type GetAllBlogByCategoryIdQueryVariables = Exact<{
  categoryId: Scalars['ID']['input'];
}>;

export type GetAllBlogByCategoryIdQuery = {
  __typename?: 'RootQuery';
  allPost: Array<{
    __typename?: 'Post';
    title?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
  Category?: { __typename?: 'Category'; title?: string | null; description?: string | null } | null;
};

export type GetBlogBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetBlogBySlugQuery = {
  __typename?: 'RootQuery';
  allPost: Array<{
    __typename?: 'Post';
    title?: string | null;
    _id?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    bodyRaw?: any | null;
    updatedAt?: any | null;
    mainImage?: {
      __typename?: 'MainImage';
      alt?: string | null;
      asset?: {
        __typename?: 'SanityImageAsset';
        url?: string | null;
        metadata?: {
          __typename?: 'SanityImageMetadata';
          dimensions?: { __typename?: 'SanityImageDimensions'; width?: number | null; height?: number | null } | null;
        } | null;
      } | null;
    } | null;
    categories?: Array<{ __typename?: 'Category'; _id?: string | null; title?: string | null } | null> | null;
  }>;
  allSiteSettings: Array<{
    __typename?: 'SiteSettings';
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      website?: string | null;
      openGraph?: { __typename?: 'OpenGraph'; title?: string | null } | null;
    } | null;
  }>;
};

export type GetSiteSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSiteSettingsQuery = {
  __typename?: 'RootQuery';
  SiteSettings?: {
    __typename?: 'SiteSettings';
    navigation?: {
      __typename?: 'Navigation';
      logo?: {
        __typename?: 'MainImage';
        alt?: string | null;
        asset?: {
          __typename?: 'SanityImageAsset';
          url?: string | null;
          metadata?: {
            __typename?: 'SanityImageMetadata';
            dimensions?: { __typename?: 'SanityImageDimensions'; height?: number | null; width?: number | null } | null;
          } | null;
        } | null;
      } | null;
      items?: Array<{
        __typename?: 'Cta';
        title?: string | null;
        route?: string | null;
        kind?: string | null;
      } | null> | null;
    } | null;
    footer?: { __typename?: 'Footer'; copyright?: string | null } | null;
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      email?: string | null;
      jobTitle?: string | null;
      telephone?: number | null;
      name?: string | null;
      website?: string | null;
      openGraph?: {
        __typename?: 'OpenGraph';
        title?: string | null;
        description?: string | null;
        image?: {
          __typename?: 'MainImage';
          asset?: { __typename?: 'SanityImageAsset'; url?: string | null } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetContactPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetContactPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
    openGraph?: {
      __typename?: 'OpenGraph';
      title?: string | null;
      description?: string | null;
      image?: {
        __typename?: 'MainImage';
        asset?: { __typename?: 'SanityImageAsset'; url?: string | null } | null;
      } | null;
    } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | { __typename: 'AboutMe' }
        | { __typename: 'BlogList' }
        | { __typename: 'PageHeader'; title?: string | null }
        | { __typename: 'SocialCollection' }
        | null
      > | null;
    } | null;
  }>;
  allSiteSettings: Array<{
    __typename?: 'SiteSettings';
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      website?: string | null;
      openGraph?: { __typename?: 'OpenGraph'; title?: string | null } | null;
    } | null;
  }>;
};

export type GetBlogPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetBlogPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
    openGraph?: {
      __typename?: 'OpenGraph';
      title?: string | null;
      description?: string | null;
      image?: {
        __typename?: 'MainImage';
        asset?: { __typename?: 'SanityImageAsset'; url?: string | null } | null;
      } | null;
    } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | { __typename: 'AboutMe' }
        | { __typename: 'BlogList' }
        | { __typename: 'PageHeader'; title?: string | null }
        | { __typename: 'SocialCollection' }
        | null
      > | null;
    } | null;
  }>;
  allSiteSettings: Array<{
    __typename?: 'SiteSettings';
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      website?: string | null;
      openGraph?: { __typename?: 'OpenGraph'; title?: string | null } | null;
    } | null;
  }>;
  allPost: Array<{
    __typename?: 'Post';
    _id?: string | null;
    title?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
};

export type GetNotFoundPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetNotFoundPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    openGraph?: { __typename?: 'OpenGraph'; title?: string | null; description?: string | null } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | { __typename: 'AboutMe' }
        | { __typename: 'BlogList' }
        | {
            __typename: 'PageHeader';
            title?: string | null;
            body?: string | null;
            titleDistancedBottom?: boolean | null;
            cta?: { __typename?: 'Cta'; title?: string | null; route?: string | null } | null;
            image?: {
              __typename?: 'MainImage';
              alt?: string | null;
              asset?: {
                __typename?: 'SanityImageAsset';
                url?: string | null;
                metadata?: {
                  __typename?: 'SanityImageMetadata';
                  dimensions?: {
                    __typename?: 'SanityImageDimensions';
                    width?: number | null;
                    height?: number | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          }
        | { __typename: 'SocialCollection' }
        | null
      > | null;
    } | null;
  }>;
};

export type GetHomePageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetHomePageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    openGraph?: { __typename?: 'OpenGraph'; title?: string | null; description?: string | null } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | { __typename: 'AboutMe' }
        | {
            __typename: 'BlogList';
            title?: string | null;
            cta?: { __typename?: 'Cta'; title?: string | null; route?: string | null } | null;
          }
        | {
            __typename: 'PageHeader';
            title?: string | null;
            body?: string | null;
            titleDistancedBottom?: boolean | null;
            cta?: { __typename?: 'Cta'; title?: string | null; route?: string | null } | null;
            image?: {
              __typename?: 'MainImage';
              alt?: string | null;
              asset?: {
                __typename?: 'SanityImageAsset';
                url?: string | null;
                metadata?: {
                  __typename?: 'SanityImageMetadata';
                  dimensions?: {
                    __typename?: 'SanityImageDimensions';
                    width?: number | null;
                    height?: number | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          }
        | {
            __typename: 'SocialCollection';
            title?: string | null;
            items?: Array<{
              __typename?: 'Social';
              title?: string | null;
              url?: string | null;
              icon?: string | null;
            } | null> | null;
          }
        | null
      > | null;
    } | null;
  }>;
  allPost: Array<{
    __typename?: 'Post';
    _id?: string | null;
    title?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
};

export type GetAllBlogSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllBlogSlugsQuery = {
  __typename?: 'RootQuery';
  allPost: Array<{ __typename?: 'Post'; slug?: { __typename?: 'Slug'; current?: string | null } | null }>;
};

export type GetAllCategoryIdQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCategoryIdQuery = {
  __typename?: 'RootQuery';
  allCategory: Array<{ __typename?: 'Category'; _id?: string | null; title?: string | null }>;
};

export type GetCategoryByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetCategoryByIdQuery = {
  __typename?: 'RootQuery';
  Category?: {
    __typename?: 'Category';
    _id?: string | null;
    title?: string | null;
    description?: string | null;
  } | null;
};

export type GetAboutPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetAboutPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
    openGraph?: {
      __typename?: 'OpenGraph';
      title?: string | null;
      description?: string | null;
      image?: {
        __typename?: 'MainImage';
        asset?: { __typename?: 'SanityImageAsset'; url?: string | null } | null;
      } | null;
    } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | {
            __typename: 'AboutMe';
            aboutIntroductionRaw?: any | null;
            aboutMeItems?: Array<{
              __typename?: 'Card';
              title?: string | null;
              publishedAt?: any | null;
              body?: string | null;
            } | null> | null;
          }
        | { __typename?: 'BlogList' }
        | {
            __typename: 'PageHeader';
            title?: string | null;
            titleDistancedBottom?: boolean | null;
            body?: string | null;
            image?: {
              __typename?: 'MainImage';
              alt?: string | null;
              asset?: {
                __typename?: 'SanityImageAsset';
                url?: string | null;
                metadata?: {
                  __typename?: 'SanityImageMetadata';
                  dimensions?: {
                    __typename?: 'SanityImageDimensions';
                    height?: number | null;
                    width?: number | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          }
        | { __typename?: 'SocialCollection' }
        | null
      > | null;
    } | null;
  }>;
  allSiteSettings: Array<{
    __typename?: 'SiteSettings';
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      website?: string | null;
      openGraph?: { __typename?: 'OpenGraph'; title?: string | null } | null;
    } | null;
  }>;
};

export type GetCurrentPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetCurrentPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{ __typename?: 'Route'; slug?: { __typename?: 'Slug'; current?: string | null } | null }>;
};

export type GetAllPagesAndBlogsAndCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPagesAndBlogsAndCategoriesQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
  allCategory: Array<{ __typename?: 'Category'; updatedAt?: any | null; id?: string | null }>;
  allPost: Array<{
    __typename?: 'Post';
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
};

export const GetAllBlogDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAllBlog' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_updatedAt' },
                      value: { kind: 'EnumValue', value: 'DESC' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllBlogQuery, GetAllBlogQueryVariables>;
export const GetAllBlogByCategoryIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAllBlogByCategoryId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'categoryId' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'references' },
                            value: { kind: 'Variable', name: { kind: 'Name', value: 'categoryId' } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'updatedAt' },
                  name: { kind: 'Name', value: '_updatedAt' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Category' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'categoryId' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllBlogByCategoryIdQuery, GetAllBlogByCategoryIdQueryVariables>;
export const GetBlogBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getBlogBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              { kind: 'Argument', name: { kind: 'Name', value: 'limit' }, value: { kind: 'IntValue', value: '1' } },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'updatedAt' },
                  name: { kind: 'Name', value: '_updatedAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'mainImage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'asset' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'metadata' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'dimensions' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'updatedAt' },
                  name: { kind: 'Name', value: '_updatedAt' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'categories' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'bodyRaw' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allSiteSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'schemaOrg' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'website' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'openGraph' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBlogBySlugQuery, GetBlogBySlugQueryVariables>;
export const GetSiteSettingsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSiteSettings' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteSettings' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'StringValue', value: 'siteSettings', block: false },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'navigation' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'logo' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'asset' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'metadata' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'dimensions' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                              { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'route' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'kind' } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'footer' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'copyright' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'schemaOrg' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'jobTitle' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'telephone' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'website' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'openGraph' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                            { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'asset' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSiteSettingsQuery, GetSiteSettingsQueryVariables>;
export const GetContactPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getContactPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allRoute' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'openGraph' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'asset' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageHeader' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allSiteSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'schemaOrg' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'website' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'openGraph' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetContactPageQuery, GetContactPageQueryVariables>;
export const GetBlogPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getBlogPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allRoute' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'openGraph' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'asset' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageHeader' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allSiteSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'schemaOrg' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'website' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'openGraph' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'publishedAt' },
                      value: { kind: 'EnumValue', value: 'DESC' },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'updatedAt' },
                  name: { kind: 'Name', value: '_updatedAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBlogPageQuery, GetBlogPageQueryVariables>;
export const GetNotFoundPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getNotFoundPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allRoute' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'openGraph' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageHeader' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'cta' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'route' } },
                                      ],
                                    },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'titleDistancedBottom' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'image' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'asset' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'metadata' },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'dimensions' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                                          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNotFoundPageQuery, GetNotFoundPageQueryVariables>;
export const GetHomePageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getHomePage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allRoute' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'openGraph' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'SocialCollection' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'items' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'icon' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageHeader' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'cta' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'route' } },
                                      ],
                                    },
                                  },
                                  { kind: 'Field', name: { kind: 'Name', value: 'titleDistancedBottom' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'image' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'asset' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'metadata' },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'dimensions' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                                          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'BlogList' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'cta' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'route' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_updatedAt' },
                      value: { kind: 'EnumValue', value: 'DESC' },
                    },
                  ],
                },
              },
              { kind: 'Argument', name: { kind: 'Name', value: 'limit' }, value: { kind: 'IntValue', value: '3' } },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'updatedAt' },
                  name: { kind: 'Name', value: '_updatedAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'excerpt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetAllBlogSlugsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAllBlogSlugs' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPost' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllBlogSlugsQuery, GetAllBlogSlugsQueryVariables>;
export const GetAllCategoryIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAllCategoryId' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allCategory' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllCategoryIdQuery, GetAllCategoryIdQueryVariables>;
export const GetCategoryByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCategoryByID' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Category' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>;
export const GetAboutPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAboutPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allRoute' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'openGraph' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'image' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'asset' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [{ kind: 'Field', name: { kind: 'Name', value: 'url' } }],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'page' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'PageHeader' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'titleDistancedBottom' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'image' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'asset' },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              { kind: 'Field', name: { kind: 'Name', value: 'url' } },
                                              {
                                                kind: 'Field',
                                                name: { kind: 'Name', value: 'metadata' },
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: { kind: 'Name', value: 'dimensions' },
                                                      selectionSet: {
                                                        kind: 'SelectionSet',
                                                        selections: [
                                                          { kind: 'Field', name: { kind: 'Name', value: 'height' } },
                                                          { kind: 'Field', name: { kind: 'Name', value: 'width' } },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        { kind: 'Field', name: { kind: 'Name', value: 'alt' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: { kind: 'NamedType', name: { kind: 'Name', value: 'AboutMe' } },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                                  { kind: 'Field', name: { kind: 'Name', value: 'aboutIntroductionRaw' } },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'aboutMeItems' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'publishedAt' } },
                                        { kind: 'Field', name: { kind: 'Name', value: 'body' } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allSiteSettings' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'schemaOrg' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'website' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'openGraph' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [{ kind: 'Field', name: { kind: 'Name', value: 'title' } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAboutPageQuery, GetAboutPageQueryVariables>;
export const GetCurrentPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCurrentPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allRoute' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'current' },
                            value: {
                              kind: 'ObjectValue',
                              fields: [
                                {
                                  kind: 'ObjectField',
                                  name: { kind: 'Name', value: 'eq' },
                                  value: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCurrentPageQuery, GetCurrentPageQueryVariables>;
export const GetAllPagesAndBlogsAndCategoriesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getAllPagesAndBlogsAndCategories' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allRoute' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_updatedAt' },
                      value: { kind: 'EnumValue', value: 'DESC' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'is_draft' },
                            value: { kind: 'BooleanValue', value: false },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'includeInSitemap' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'BooleanValue', value: true },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'updatedAt' },
                  name: { kind: 'Name', value: '_updatedAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allCategory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_updatedAt' },
                      value: { kind: 'EnumValue', value: 'DESC' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'is_draft' },
                            value: { kind: 'BooleanValue', value: false },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'updatedAt' },
                  name: { kind: 'Name', value: '_updatedAt' },
                },
                { kind: 'Field', alias: { kind: 'Name', value: 'id' }, name: { kind: 'Name', value: '_id' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'allPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sort' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_updatedAt' },
                      value: { kind: 'EnumValue', value: 'DESC' },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: '_' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'is_draft' },
                            value: { kind: 'BooleanValue', value: false },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'updatedAt' },
                  name: { kind: 'Name', value: '_updatedAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'slug' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{ kind: 'Field', name: { kind: 'Name', value: 'current' } }],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllPagesAndBlogsAndCategoriesQuery, GetAllPagesAndBlogsAndCategoriesQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
};

export type AboutMe = {
  __typename?: 'AboutMe';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  aboutIntroductionRaw?: Maybe<Scalars['JSON']['output']>;
  aboutMeItems?: Maybe<Array<Maybe<Card>>>;
};

export type AboutMeFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
};

export type AboutMeOrBlogListOrPageHeaderOrSocialCollection = AboutMe | BlogList | PageHeader | SocialCollection;

export type AboutMeSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
};

export type BlockOrCodeOrMainImageOrMath = Block | Code | MainImage | Math;

export type BlogList = {
  __typename?: 'BlogList';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Cta>;
  title?: Maybe<Scalars['String']['output']>;
};

export type BlogListFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  cta?: InputMaybe<CtaFilter>;
  title?: InputMaybe<StringFilter>;
};

export type BlogListSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  cta?: InputMaybe<CtaSorting>;
  title?: InputMaybe<SortOrder>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Card = {
  __typename?: 'Card';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  /** This can be used to schedule post for publishing */
  publishedAt?: Maybe<Scalars['Date']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CardFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  publishedAt?: InputMaybe<DateFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CardSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Category = Document & {
  __typename?: 'Category';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Code = {
  __typename?: 'Code';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  highlightedLines?: Maybe<Array<Maybe<Scalars['Float']['output']>>>;
  language?: Maybe<Scalars['String']['output']>;
};

export type CodeFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  code?: InputMaybe<StringFilter>;
  filename?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
};

export type CodeSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  filename?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
};

export type Color = {
  __typename?: 'Color';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  alpha?: Maybe<Scalars['Float']['output']>;
  hex?: Maybe<Scalars['String']['output']>;
  hsl?: Maybe<HslaColor>;
  hsv?: Maybe<HsvaColor>;
  rgb?: Maybe<RgbaColor>;
};

export type ColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alpha?: InputMaybe<FloatFilter>;
  hex?: InputMaybe<StringFilter>;
  hsl?: InputMaybe<HslaColorFilter>;
  hsv?: InputMaybe<HsvaColorFilter>;
  rgb?: InputMaybe<RgbaColorFilter>;
};

export type ColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alpha?: InputMaybe<SortOrder>;
  hex?: InputMaybe<SortOrder>;
  hsl?: InputMaybe<HslaColorSorting>;
  hsv?: InputMaybe<HsvaColorSorting>;
  rgb?: InputMaybe<RgbaColorSorting>;
};

export type Cta = {
  __typename?: 'Cta';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  landingPageRoute?: Maybe<Route>;
  /** Example: https://www.sanity.io */
  link?: Maybe<Scalars['String']['output']>;
  /** Example: /blog */
  route?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type CtaFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  kind?: InputMaybe<StringFilter>;
  landingPageRoute?: InputMaybe<RouteFilter>;
  link?: InputMaybe<StringFilter>;
  route?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type CtaSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  kind?: InputMaybe<SortOrder>;
  link?: InputMaybe<SortOrder>;
  route?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']['input']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']['input']>;
};

export type Footer = Document & {
  __typename?: 'Footer';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
};

export type FooterFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  copyright?: InputMaybe<StringFilter>;
};

export type FooterSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  copyright?: InputMaybe<SortOrder>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  alt?: Maybe<Scalars['Float']['output']>;
  lat?: Maybe<Scalars['Float']['output']>;
  lng?: Maybe<Scalars['Float']['output']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type HslaColor = {
  __typename?: 'HslaColor';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  a?: Maybe<Scalars['Float']['output']>;
  h?: Maybe<Scalars['Float']['output']>;
  l?: Maybe<Scalars['Float']['output']>;
  s?: Maybe<Scalars['Float']['output']>;
};

export type HslaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  l?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
};

export type HslaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  l?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
};

export type HsvaColor = {
  __typename?: 'HsvaColor';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  a?: Maybe<Scalars['Float']['output']>;
  h?: Maybe<Scalars['Float']['output']>;
  s?: Maybe<Scalars['Float']['output']>;
  v?: Maybe<Scalars['Float']['output']>;
};

export type HsvaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
  v?: InputMaybe<FloatFilter>;
};

export type HsvaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
  v?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']['input']>;
  nin?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type Link = {
  __typename?: 'Link';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
};

export type LinkFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  href?: InputMaybe<StringFilter>;
};

export type LinkSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  href?: InputMaybe<SortOrder>;
};

export type MainImage = {
  __typename?: 'MainImage';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  /** Important for SEO and accessibility. */
  alt?: Maybe<Scalars['String']['output']>;
  asset?: Maybe<SanityImageAsset>;
  caption?: Maybe<Scalars['String']['output']>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type MainImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  caption?: InputMaybe<StringFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type MainImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  caption?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type Math = {
  __typename?: 'Math';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  latex?: Maybe<Scalars['String']['output']>;
};

export type MathFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  latex?: InputMaybe<StringFilter>;
};

export type MathOrSpan = Math | Span;

export type MathSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  latex?: InputMaybe<SortOrder>;
};

export type Navigation = Document & {
  __typename?: 'Navigation';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<Array<Maybe<Cta>>>;
  logo?: Maybe<MainImage>;
};

export type NavigationFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  logo?: InputMaybe<MainImageFilter>;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  navigationItemUrl?: Maybe<Cta>;
  text?: Maybe<Scalars['String']['output']>;
};

export type NavigationItemFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  navigationItemUrl?: InputMaybe<CtaFilter>;
  text?: InputMaybe<StringFilter>;
};

export type NavigationItemSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  navigationItemUrl?: InputMaybe<CtaSorting>;
  text?: InputMaybe<SortOrder>;
};

export type NavigationSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  logo?: InputMaybe<MainImageSorting>;
};

export type OpenGraph = {
  __typename?: 'OpenGraph';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<MainImage>;
  /** Heads up! This will override the page title. */
  title?: Maybe<Scalars['String']['output']>;
};

export type OpenGraphFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  image?: InputMaybe<MainImageFilter>;
  title?: InputMaybe<StringFilter>;
};

export type OpenGraphSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  image?: InputMaybe<MainImageSorting>;
  title?: InputMaybe<SortOrder>;
};

export type Page = Document & {
  __typename?: 'Page';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  content?: Maybe<Array<Maybe<AboutMeOrBlogListOrPageHeaderOrSocialCollection>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageHeader = {
  __typename?: 'PageHeader';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  cta?: Maybe<Cta>;
  image?: Maybe<MainImage>;
  title?: Maybe<Scalars['String']['output']>;
  titleDistancedBottom?: Maybe<Scalars['Boolean']['output']>;
};

export type PageHeaderFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  body?: InputMaybe<StringFilter>;
  cta?: InputMaybe<CtaFilter>;
  image?: InputMaybe<MainImageFilter>;
  title?: InputMaybe<StringFilter>;
  titleDistancedBottom?: InputMaybe<BooleanFilter>;
};

export type PageHeaderSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  body?: InputMaybe<SortOrder>;
  cta?: InputMaybe<CtaSorting>;
  image?: InputMaybe<MainImageSorting>;
  title?: InputMaybe<SortOrder>;
  titleDistancedBottom?: InputMaybe<SortOrder>;
};

export type PageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Post = Document & {
  __typename?: 'Post';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  bodyRaw?: Maybe<Scalars['JSON']['output']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  /** This ends up on summary pages, on Google, when people share your post in social media. */
  excerpt?: Maybe<Scalars['String']['output']>;
  mainImage?: Maybe<MainImage>;
  /** This can be used to schedule post for publishing */
  publishedAt?: Maybe<Scalars['Date']['output']>;
  slug?: Maybe<Slug>;
  /** Titles should be catchy, descriptive, and not too long */
  title?: Maybe<Scalars['String']['output']>;
};

export type PostFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  excerpt?: InputMaybe<StringFilter>;
  mainImage?: InputMaybe<MainImageFilter>;
  publishedAt?: InputMaybe<DateFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  excerpt?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<MainImageSorting>;
  publishedAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type RgbaColor = {
  __typename?: 'RgbaColor';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  a?: Maybe<Scalars['Float']['output']>;
  b?: Maybe<Scalars['Float']['output']>;
  g?: Maybe<Scalars['Float']['output']>;
  r?: Maybe<Scalars['Float']['output']>;
};

export type RgbaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<FloatFilter>;
  g?: InputMaybe<FloatFilter>;
  r?: InputMaybe<FloatFilter>;
};

export type RgbaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  b?: InputMaybe<SortOrder>;
  g?: InputMaybe<SortOrder>;
  r?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Category?: Maybe<Category>;
  Document?: Maybe<Document>;
  Footer?: Maybe<Footer>;
  Navigation?: Maybe<Navigation>;
  Page?: Maybe<Page>;
  Post?: Maybe<Post>;
  Route?: Maybe<Route>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SiteSettings?: Maybe<SiteSettings>;
  allCategory: Array<Category>;
  allDocument: Array<Document>;
  allFooter: Array<Footer>;
  allNavigation: Array<Navigation>;
  allPage: Array<Page>;
  allPost: Array<Post>;
  allRoute: Array<Route>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSiteSettings: Array<SiteSettings>;
};

export type RootQueryCategoryArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryDocumentArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryFooterArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryNavigationArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryPageArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryPostArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryRouteArgs = {
  id: Scalars['ID']['input'];
};

export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']['input'];
};

export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']['input'];
};

export type RootQuerySiteSettingsArgs = {
  id: Scalars['ID']['input'];
};

export type RootQueryAllCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CategorySorting>>;
  where?: InputMaybe<CategoryFilter>;
};

export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};

export type RootQueryAllFooterArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<FooterSorting>>;
  where?: InputMaybe<FooterFilter>;
};

export type RootQueryAllNavigationArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<NavigationSorting>>;
  where?: InputMaybe<NavigationFilter>;
};

export type RootQueryAllPageArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PageSorting>>;
  where?: InputMaybe<PageFilter>;
};

export type RootQueryAllPostArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PostSorting>>;
  where?: InputMaybe<PostFilter>;
};

export type RootQueryAllRouteArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<RouteSorting>>;
  where?: InputMaybe<RouteFilter>;
};

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};

export type RootQueryAllSiteSettingsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<SiteSettingsSorting>>;
  where?: InputMaybe<SiteSettingsFilter>;
};

export type Route = Document & {
  __typename?: 'Route';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** UTM for campaings */
  campaign?: Maybe<Scalars['String']['output']>;
  /** Hide this route for search engines like google */
  disallowRobots?: Maybe<Scalars['Boolean']['output']>;
  /** For search engines. Will be generateed to /sitemap.xml */
  includeInSitemap?: Maybe<Scalars['Boolean']['output']>;
  openGraph?: Maybe<OpenGraph>;
  /** The page you want to appear at this path. Remember it needs to be published. */
  page?: Maybe<Page>;
  slug?: Maybe<Slug>;
  /** Use the site settings title as page title instead of the title on the referenced page */
  useSiteTitle?: Maybe<Scalars['Boolean']['output']>;
};

export type RouteFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  campaign?: InputMaybe<StringFilter>;
  disallowRobots?: InputMaybe<BooleanFilter>;
  includeInSitemap?: InputMaybe<BooleanFilter>;
  openGraph?: InputMaybe<OpenGraphFilter>;
  page?: InputMaybe<PageFilter>;
  slug?: InputMaybe<SlugFilter>;
  useSiteTitle?: InputMaybe<BooleanFilter>;
};

export type RouteSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  campaign?: InputMaybe<SortOrder>;
  disallowRobots?: InputMaybe<SortOrder>;
  includeInSitemap?: InputMaybe<SortOrder>;
  openGraph?: InputMaybe<OpenGraphSorting>;
  slug?: InputMaybe<SlugSorting>;
  useSiteTitle?: InputMaybe<SortOrder>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']['output']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']['output']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sha1hash?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  altText?: Maybe<Scalars['String']['output']>;
  assetId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  extension?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  sha1hash?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']['output']>;
  uploadId?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  bottom?: Maybe<Scalars['Float']['output']>;
  left?: Maybe<Scalars['Float']['output']>;
  right?: Maybe<Scalars['Float']['output']>;
  top?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  aspectRatio?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
  x?: Maybe<Scalars['Float']['output']>;
  y?: Maybe<Scalars['Float']['output']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  blurHash?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']['output']>;
  isOpaque?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']['output']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  background?: Maybe<Scalars['String']['output']>;
  foreground?: Maybe<Scalars['String']['output']>;
  population?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']['input']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']['input']>;
};

export type SchemaOrg = {
  __typename?: 'SchemaOrg';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  openGraph?: Maybe<OpenGraph>;
  telephone?: Maybe<Scalars['Float']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type SchemaOrgFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  jobTitle?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  openGraph?: InputMaybe<OpenGraphFilter>;
  telephone?: InputMaybe<FloatFilter>;
  website?: InputMaybe<StringFilter>;
};

export type SchemaOrgSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  jobTitle?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  openGraph?: InputMaybe<OpenGraphSorting>;
  telephone?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type SiteSettings = Document & {
  __typename?: 'SiteSettings';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']['output']>;
  _key?: Maybe<Scalars['String']['output']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']['output']>;
  /** Document type */
  _type?: Maybe<Scalars['String']['output']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']['output']>;
  footer?: Maybe<Footer>;
  navigation?: Maybe<Navigation>;
  primaryColor?: Maybe<Color>;
  schemaOrg?: Maybe<SchemaOrg>;
  secondaryColor?: Maybe<Color>;
};

export type SiteSettingsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  footer?: InputMaybe<FooterFilter>;
  navigation?: InputMaybe<NavigationFilter>;
  primaryColor?: InputMaybe<ColorFilter>;
  schemaOrg?: InputMaybe<SchemaOrgFilter>;
  secondaryColor?: InputMaybe<ColorFilter>;
};

export type SiteSettingsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  footer?: InputMaybe<FooterSorting>;
  navigation?: InputMaybe<NavigationSorting>;
  primaryColor?: InputMaybe<ColorSorting>;
  schemaOrg?: InputMaybe<SchemaOrgSorting>;
  secondaryColor?: InputMaybe<ColorSorting>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  current?: Maybe<Scalars['String']['output']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
};

export type Social = {
  __typename?: 'Social';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SocialCollection = {
  __typename?: 'SocialCollection';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  items?: Maybe<Array<Maybe<Social>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type SocialCollectionFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SocialCollectionSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type SocialFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  icon?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SocialSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  icon?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC',
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']['output']>;
  _type?: Maybe<Scalars['String']['output']>;
  marks?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  text?: Maybe<Scalars['String']['output']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']['input']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type GetAllBlogQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllBlogQuery = {
  __typename?: 'RootQuery';
  allPost: Array<{
    __typename?: 'Post';
    _id?: string | null;
    title?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
};

export type GetAllBlogByCategoryIdQueryVariables = Exact<{
  categoryId: Scalars['ID']['input'];
}>;

export type GetAllBlogByCategoryIdQuery = {
  __typename?: 'RootQuery';
  allPost: Array<{
    __typename?: 'Post';
    title?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
  Category?: { __typename?: 'Category'; title?: string | null; description?: string | null } | null;
};

export type GetBlogBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetBlogBySlugQuery = {
  __typename?: 'RootQuery';
  allPost: Array<{
    __typename?: 'Post';
    title?: string | null;
    _id?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    bodyRaw?: any | null;
    updatedAt?: any | null;
    mainImage?: {
      __typename?: 'MainImage';
      alt?: string | null;
      asset?: {
        __typename?: 'SanityImageAsset';
        url?: string | null;
        metadata?: {
          __typename?: 'SanityImageMetadata';
          dimensions?: { __typename?: 'SanityImageDimensions'; width?: number | null; height?: number | null } | null;
        } | null;
      } | null;
    } | null;
    categories?: Array<{ __typename?: 'Category'; _id?: string | null; title?: string | null } | null> | null;
  }>;
  allSiteSettings: Array<{
    __typename?: 'SiteSettings';
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      website?: string | null;
      openGraph?: { __typename?: 'OpenGraph'; title?: string | null } | null;
    } | null;
  }>;
};

export type GetSiteSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSiteSettingsQuery = {
  __typename?: 'RootQuery';
  SiteSettings?: {
    __typename?: 'SiteSettings';
    navigation?: {
      __typename?: 'Navigation';
      logo?: {
        __typename?: 'MainImage';
        alt?: string | null;
        asset?: {
          __typename?: 'SanityImageAsset';
          url?: string | null;
          metadata?: {
            __typename?: 'SanityImageMetadata';
            dimensions?: { __typename?: 'SanityImageDimensions'; height?: number | null; width?: number | null } | null;
          } | null;
        } | null;
      } | null;
      items?: Array<{
        __typename?: 'Cta';
        title?: string | null;
        route?: string | null;
        kind?: string | null;
      } | null> | null;
    } | null;
    footer?: { __typename?: 'Footer'; copyright?: string | null } | null;
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      email?: string | null;
      jobTitle?: string | null;
      telephone?: number | null;
      name?: string | null;
      website?: string | null;
      openGraph?: {
        __typename?: 'OpenGraph';
        title?: string | null;
        description?: string | null;
        image?: {
          __typename?: 'MainImage';
          asset?: { __typename?: 'SanityImageAsset'; url?: string | null } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};

export type GetContactPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetContactPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
    openGraph?: {
      __typename?: 'OpenGraph';
      title?: string | null;
      description?: string | null;
      image?: {
        __typename?: 'MainImage';
        asset?: { __typename?: 'SanityImageAsset'; url?: string | null } | null;
      } | null;
    } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | { __typename: 'AboutMe' }
        | { __typename: 'BlogList' }
        | { __typename: 'PageHeader'; title?: string | null }
        | { __typename: 'SocialCollection' }
        | null
      > | null;
    } | null;
  }>;
  allSiteSettings: Array<{
    __typename?: 'SiteSettings';
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      website?: string | null;
      openGraph?: { __typename?: 'OpenGraph'; title?: string | null } | null;
    } | null;
  }>;
};

export type GetBlogPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetBlogPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
    openGraph?: {
      __typename?: 'OpenGraph';
      title?: string | null;
      description?: string | null;
      image?: {
        __typename?: 'MainImage';
        asset?: { __typename?: 'SanityImageAsset'; url?: string | null } | null;
      } | null;
    } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | { __typename: 'AboutMe' }
        | { __typename: 'BlogList' }
        | { __typename: 'PageHeader'; title?: string | null }
        | { __typename: 'SocialCollection' }
        | null
      > | null;
    } | null;
  }>;
  allSiteSettings: Array<{
    __typename?: 'SiteSettings';
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      website?: string | null;
      openGraph?: { __typename?: 'OpenGraph'; title?: string | null } | null;
    } | null;
  }>;
  allPost: Array<{
    __typename?: 'Post';
    _id?: string | null;
    title?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
};

export type GetNotFoundPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetNotFoundPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    openGraph?: { __typename?: 'OpenGraph'; title?: string | null; description?: string | null } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | { __typename: 'AboutMe' }
        | { __typename: 'BlogList' }
        | {
            __typename: 'PageHeader';
            title?: string | null;
            body?: string | null;
            titleDistancedBottom?: boolean | null;
            cta?: { __typename?: 'Cta'; title?: string | null; route?: string | null } | null;
            image?: {
              __typename?: 'MainImage';
              alt?: string | null;
              asset?: {
                __typename?: 'SanityImageAsset';
                url?: string | null;
                metadata?: {
                  __typename?: 'SanityImageMetadata';
                  dimensions?: {
                    __typename?: 'SanityImageDimensions';
                    width?: number | null;
                    height?: number | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          }
        | { __typename: 'SocialCollection' }
        | null
      > | null;
    } | null;
  }>;
};

export type GetHomePageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetHomePageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    openGraph?: { __typename?: 'OpenGraph'; title?: string | null; description?: string | null } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | { __typename: 'AboutMe' }
        | {
            __typename: 'BlogList';
            title?: string | null;
            cta?: { __typename?: 'Cta'; title?: string | null; route?: string | null } | null;
          }
        | {
            __typename: 'PageHeader';
            title?: string | null;
            body?: string | null;
            titleDistancedBottom?: boolean | null;
            cta?: { __typename?: 'Cta'; title?: string | null; route?: string | null } | null;
            image?: {
              __typename?: 'MainImage';
              alt?: string | null;
              asset?: {
                __typename?: 'SanityImageAsset';
                url?: string | null;
                metadata?: {
                  __typename?: 'SanityImageMetadata';
                  dimensions?: {
                    __typename?: 'SanityImageDimensions';
                    width?: number | null;
                    height?: number | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          }
        | {
            __typename: 'SocialCollection';
            title?: string | null;
            items?: Array<{
              __typename?: 'Social';
              title?: string | null;
              url?: string | null;
              icon?: string | null;
            } | null> | null;
          }
        | null
      > | null;
    } | null;
  }>;
  allPost: Array<{
    __typename?: 'Post';
    _id?: string | null;
    title?: string | null;
    publishedAt?: any | null;
    excerpt?: string | null;
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
};

export type GetAllBlogSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllBlogSlugsQuery = {
  __typename?: 'RootQuery';
  allPost: Array<{ __typename?: 'Post'; slug?: { __typename?: 'Slug'; current?: string | null } | null }>;
};

export type GetAllCategoryIdQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCategoryIdQuery = {
  __typename?: 'RootQuery';
  allCategory: Array<{ __typename?: 'Category'; _id?: string | null; title?: string | null }>;
};

export type GetCategoryByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetCategoryByIdQuery = {
  __typename?: 'RootQuery';
  Category?: {
    __typename?: 'Category';
    _id?: string | null;
    title?: string | null;
    description?: string | null;
  } | null;
};

export type GetAboutPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetAboutPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
    openGraph?: {
      __typename?: 'OpenGraph';
      title?: string | null;
      description?: string | null;
      image?: {
        __typename?: 'MainImage';
        asset?: { __typename?: 'SanityImageAsset'; url?: string | null } | null;
      } | null;
    } | null;
    page?: {
      __typename?: 'Page';
      content?: Array<
        | {
            __typename: 'AboutMe';
            aboutIntroductionRaw?: any | null;
            aboutMeItems?: Array<{
              __typename?: 'Card';
              title?: string | null;
              publishedAt?: any | null;
              body?: string | null;
            } | null> | null;
          }
        | { __typename?: 'BlogList' }
        | {
            __typename: 'PageHeader';
            title?: string | null;
            titleDistancedBottom?: boolean | null;
            body?: string | null;
            image?: {
              __typename?: 'MainImage';
              alt?: string | null;
              asset?: {
                __typename?: 'SanityImageAsset';
                url?: string | null;
                metadata?: {
                  __typename?: 'SanityImageMetadata';
                  dimensions?: {
                    __typename?: 'SanityImageDimensions';
                    height?: number | null;
                    width?: number | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          }
        | { __typename?: 'SocialCollection' }
        | null
      > | null;
    } | null;
  }>;
  allSiteSettings: Array<{
    __typename?: 'SiteSettings';
    schemaOrg?: {
      __typename?: 'SchemaOrg';
      website?: string | null;
      openGraph?: { __typename?: 'OpenGraph'; title?: string | null } | null;
    } | null;
  }>;
};

export type GetCurrentPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetCurrentPageQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{ __typename?: 'Route'; slug?: { __typename?: 'Slug'; current?: string | null } | null }>;
};

export type GetAllPagesAndBlogsAndCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllPagesAndBlogsAndCategoriesQuery = {
  __typename?: 'RootQuery';
  allRoute: Array<{
    __typename?: 'Route';
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
  allCategory: Array<{ __typename?: 'Category'; updatedAt?: any | null; id?: string | null }>;
  allPost: Array<{
    __typename?: 'Post';
    updatedAt?: any | null;
    slug?: { __typename?: 'Slug'; current?: string | null } | null;
  }>;
};
