import { Maybe } from "generated/graphql"

export const activeLinkChecker = (link?: Maybe<string>, currentPath?: string) => link === currentPath

