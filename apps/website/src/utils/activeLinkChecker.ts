import { Maybe } from '@/graphql-types';

export const activeLinkChecker = (link?: Maybe<string>, currentPath?: string) => link === currentPath;
