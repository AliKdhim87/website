/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query getAllBlog {\n    allPost(sort:{_updatedAt: DESC}) {\n      _id\n      title\n      publishedAt\n      slug {\n        current\n      }\n      excerpt\n    }\n  }\n':
    types.GetAllBlogDocument,
  '\n  query getAllBlogByCategoryId($categoryId: ID!) {\n    allPost(where: { _: { references: $categoryId } }) {\n      title\n      slug {\n        current\n      }\n      publishedAt\n      updatedAt:_updatedAt\n      excerpt\n    }\n    Category(id: $categoryId) {\n      title\n      description\n    }\n  }\n':
    types.GetAllBlogByCategoryIdDocument,
  '\n  query getBlogBySlug($slug: String) {\n    allPost(where: { slug: { current: { eq: $slug } } }, limit: 1) {\n      title\n      _id\n      publishedAt\n      updatedAt:_updatedAt\n      mainImage {\n        alt\n        asset {\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n          url\n        }\n      }\n      excerpt\n      updatedAt: _updatedAt\n      publishedAt \n      categories {\n        _id\n        title\n      }\n      bodyRaw\n    }\n    allSiteSettings {\n      schemaOrg {\n        website\n        openGraph {\n        title\n        }\n      }\n    }\n  }\n':
    types.GetBlogBySlugDocument,
  '\n  query getSiteSettings {\n    SiteSettings(id: "siteSettings") {\n      navigation {\n        logo {\n          alt\n          asset {\n            metadata {\n              dimensions {\n                height\n                width\n              }\n            }\n            url\n          }\n        }\n        items {\n          title\n          route\n          kind\n        }\n      }\n      footer {\n        copyright\n      }\n      schemaOrg {\n        email\n        jobTitle\n        telephone\n        name\n        website\n        openGraph {\n          title\n          description\n          image {\n            asset {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.GetSiteSettingsDocument,
  '\n  query getContactPage($slug: String) {\n    allRoute(where: { slug: { current: { eq: $slug } } }) {\n      slug {\n        current\n      }\n      openGraph {\n        title\n        description\n        image {\n          asset {\n            url\n          }\n        }\n      }\n      page {\n        content {\n          __typename\n          ... on PageHeader {\n            title\n          }\n        }\n      }\n    }\n    allSiteSettings {\n      schemaOrg {\n        website\n        openGraph {\n        title\n        }\n      }\n    }\n  }\n':
    types.GetContactPageDocument,
  '\n query getBlogPage($slug: String) {\n  allRoute(where: { slug: { current: { eq: $slug } } }) {\n    slug {\n      current\n    }\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    page {\n      content {\n        __typename\n        ... on PageHeader {\n          title\n        }\n      }\n    }\n  }\n  allSiteSettings {\n    schemaOrg {\n      website\n      openGraph {\n        title\n      }\n    }\n  }\n  allPost(sort: { publishedAt: DESC }) {\n    _id\n    title\n    publishedAt\n    updatedAt:_updatedAt\n    slug {\n      current\n    }\n    excerpt\n  }\n}\n':
    types.GetBlogPageDocument,
  '\n  query getNotFoundPage($slug: String) {\n    allRoute(where: { slug: { current: { eq: $slug } } }) {\n      openGraph {\n        title\n        description\n      }\n      page {\n        content {\n          __typename\n          ... on PageHeader {\n            title\n            body\n            cta {\n              title\n              route\n            } #TODO remove this field\n            titleDistancedBottom #TODO remove this field\n            image {\n              alt\n              asset {\n                url\n                metadata {\n                  dimensions {\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.GetNotFoundPageDocument,
  '\n  query getHomePage($slug: String) {\n    allRoute(where: { slug: { current: { eq: $slug } } }) {\n      openGraph {\n        title\n        description\n      }\n      page {\n        content {\n          __typename\n          ... on SocialCollection {\n            title\n            items {\n              title\n              url\n              icon\n            }\n          }\n          ... on PageHeader {\n            title\n            body\n            cta {\n              title\n              route\n            }\n            titleDistancedBottom #TODO remove this field\n            image {\n              alt\n              asset {\n                url\n                metadata {\n                  dimensions {\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n          ... on BlogList {\n            title\n            cta {\n              title\n              route\n            }\n          }\n\n        }\n      }\n    }\n    allPost(sort:{_updatedAt: DESC}, limit: 3) {\n      _id\n      title\n      publishedAt\n      updatedAt:_updatedAt\n      slug {\n        current\n      }\n      excerpt\n    }\n  }\n':
    types.GetHomePageDocument,
  '\n  query getAllBlogSlugs {\n    allPost {\n      slug {\n        current\n      }\n    }\n  }\n':
    types.GetAllBlogSlugsDocument,
  '\n  query getAllCategoryId {\n    allCategory {\n      _id\n      title\n    }\n  }\n':
    types.GetAllCategoryIdDocument,
  '\n  query getCategoryByID($id: ID!) {\n    Category(id: $id) {\n      _id\n      title\n      description\n    }\n  }\n':
    types.GetCategoryByIdDocument,
  '\nquery getAboutPage($slug: String) {\n  allRoute(where: { slug: { current: { eq: $slug } } }) {\n    slug {\n      current\n    }\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    page {\n      content {\n        ... on PageHeader {\n          __typename\n          title\n          titleDistancedBottom #TODO remove this field\n          body\n          image {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  height\n                  width\n                }\n              }\n            }\n            alt\n          }\n        }\n        ... on AboutMe {\n          __typename\n          aboutIntroductionRaw\n          aboutMeItems {\n            title\n            publishedAt\n            body\n          }\n        }\n      }\n    }\n  }\n  allSiteSettings {\n      schemaOrg {\n        website\n        openGraph {\n        title\n        }\n      }\n    }\n}\n':
    types.GetAboutPageDocument,
  '\nquery getCurrentPage($slug: String) {\n  allRoute(where: { slug: { current: { eq: $slug } } }) {\n    slug {\n      current\n    }\n  }\n}\n':
    types.GetCurrentPageDocument,
  '\nquery getAllPagesAndBlogsAndCategories{\n  allRoute (sort:{_updatedAt: DESC}, where:{_:{is_draft: false},includeInSitemap: {eq: true}}){\n    updatedAt:_updatedAt\n    slug{\n      current\n    }\n  }\n  allCategory(sort:{_updatedAt: DESC}, where: {_: {is_draft: false}}){\n    updatedAt:_updatedAt\n    id:_id\n  }\n  allPost(sort:{_updatedAt: DESC}, where:{_: { is_draft: false}}){\n \tupdatedAt:_updatedAt\n    slug {\n      current\n    }\n  }\n}\n':
    types.GetAllPagesAndBlogsAndCategoriesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getAllBlog {\n    allPost(sort:{_updatedAt: DESC}) {\n      _id\n      title\n      publishedAt\n      slug {\n        current\n      }\n      excerpt\n    }\n  }\n',
): (typeof documents)['\n  query getAllBlog {\n    allPost(sort:{_updatedAt: DESC}) {\n      _id\n      title\n      publishedAt\n      slug {\n        current\n      }\n      excerpt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getAllBlogByCategoryId($categoryId: ID!) {\n    allPost(where: { _: { references: $categoryId } }) {\n      title\n      slug {\n        current\n      }\n      publishedAt\n      updatedAt:_updatedAt\n      excerpt\n    }\n    Category(id: $categoryId) {\n      title\n      description\n    }\n  }\n',
): (typeof documents)['\n  query getAllBlogByCategoryId($categoryId: ID!) {\n    allPost(where: { _: { references: $categoryId } }) {\n      title\n      slug {\n        current\n      }\n      publishedAt\n      updatedAt:_updatedAt\n      excerpt\n    }\n    Category(id: $categoryId) {\n      title\n      description\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getBlogBySlug($slug: String) {\n    allPost(where: { slug: { current: { eq: $slug } } }, limit: 1) {\n      title\n      _id\n      publishedAt\n      updatedAt:_updatedAt\n      mainImage {\n        alt\n        asset {\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n          url\n        }\n      }\n      excerpt\n      updatedAt: _updatedAt\n      publishedAt \n      categories {\n        _id\n        title\n      }\n      bodyRaw\n    }\n    allSiteSettings {\n      schemaOrg {\n        website\n        openGraph {\n        title\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getBlogBySlug($slug: String) {\n    allPost(where: { slug: { current: { eq: $slug } } }, limit: 1) {\n      title\n      _id\n      publishedAt\n      updatedAt:_updatedAt\n      mainImage {\n        alt\n        asset {\n          metadata {\n            dimensions {\n              width\n              height\n            }\n          }\n          url\n        }\n      }\n      excerpt\n      updatedAt: _updatedAt\n      publishedAt \n      categories {\n        _id\n        title\n      }\n      bodyRaw\n    }\n    allSiteSettings {\n      schemaOrg {\n        website\n        openGraph {\n        title\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getSiteSettings {\n    SiteSettings(id: "siteSettings") {\n      navigation {\n        logo {\n          alt\n          asset {\n            metadata {\n              dimensions {\n                height\n                width\n              }\n            }\n            url\n          }\n        }\n        items {\n          title\n          route\n          kind\n        }\n      }\n      footer {\n        copyright\n      }\n      schemaOrg {\n        email\n        jobTitle\n        telephone\n        name\n        website\n        openGraph {\n          title\n          description\n          image {\n            asset {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getSiteSettings {\n    SiteSettings(id: "siteSettings") {\n      navigation {\n        logo {\n          alt\n          asset {\n            metadata {\n              dimensions {\n                height\n                width\n              }\n            }\n            url\n          }\n        }\n        items {\n          title\n          route\n          kind\n        }\n      }\n      footer {\n        copyright\n      }\n      schemaOrg {\n        email\n        jobTitle\n        telephone\n        name\n        website\n        openGraph {\n          title\n          description\n          image {\n            asset {\n              url\n            }\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getContactPage($slug: String) {\n    allRoute(where: { slug: { current: { eq: $slug } } }) {\n      slug {\n        current\n      }\n      openGraph {\n        title\n        description\n        image {\n          asset {\n            url\n          }\n        }\n      }\n      page {\n        content {\n          __typename\n          ... on PageHeader {\n            title\n          }\n        }\n      }\n    }\n    allSiteSettings {\n      schemaOrg {\n        website\n        openGraph {\n        title\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getContactPage($slug: String) {\n    allRoute(where: { slug: { current: { eq: $slug } } }) {\n      slug {\n        current\n      }\n      openGraph {\n        title\n        description\n        image {\n          asset {\n            url\n          }\n        }\n      }\n      page {\n        content {\n          __typename\n          ... on PageHeader {\n            title\n          }\n        }\n      }\n    }\n    allSiteSettings {\n      schemaOrg {\n        website\n        openGraph {\n        title\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n query getBlogPage($slug: String) {\n  allRoute(where: { slug: { current: { eq: $slug } } }) {\n    slug {\n      current\n    }\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    page {\n      content {\n        __typename\n        ... on PageHeader {\n          title\n        }\n      }\n    }\n  }\n  allSiteSettings {\n    schemaOrg {\n      website\n      openGraph {\n        title\n      }\n    }\n  }\n  allPost(sort: { publishedAt: DESC }) {\n    _id\n    title\n    publishedAt\n    updatedAt:_updatedAt\n    slug {\n      current\n    }\n    excerpt\n  }\n}\n',
): (typeof documents)['\n query getBlogPage($slug: String) {\n  allRoute(where: { slug: { current: { eq: $slug } } }) {\n    slug {\n      current\n    }\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    page {\n      content {\n        __typename\n        ... on PageHeader {\n          title\n        }\n      }\n    }\n  }\n  allSiteSettings {\n    schemaOrg {\n      website\n      openGraph {\n        title\n      }\n    }\n  }\n  allPost(sort: { publishedAt: DESC }) {\n    _id\n    title\n    publishedAt\n    updatedAt:_updatedAt\n    slug {\n      current\n    }\n    excerpt\n  }\n}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getNotFoundPage($slug: String) {\n    allRoute(where: { slug: { current: { eq: $slug } } }) {\n      openGraph {\n        title\n        description\n      }\n      page {\n        content {\n          __typename\n          ... on PageHeader {\n            title\n            body\n            cta {\n              title\n              route\n            } #TODO remove this field\n            titleDistancedBottom #TODO remove this field\n            image {\n              alt\n              asset {\n                url\n                metadata {\n                  dimensions {\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getNotFoundPage($slug: String) {\n    allRoute(where: { slug: { current: { eq: $slug } } }) {\n      openGraph {\n        title\n        description\n      }\n      page {\n        content {\n          __typename\n          ... on PageHeader {\n            title\n            body\n            cta {\n              title\n              route\n            } #TODO remove this field\n            titleDistancedBottom #TODO remove this field\n            image {\n              alt\n              asset {\n                url\n                metadata {\n                  dimensions {\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getHomePage($slug: String) {\n    allRoute(where: { slug: { current: { eq: $slug } } }) {\n      openGraph {\n        title\n        description\n      }\n      page {\n        content {\n          __typename\n          ... on SocialCollection {\n            title\n            items {\n              title\n              url\n              icon\n            }\n          }\n          ... on PageHeader {\n            title\n            body\n            cta {\n              title\n              route\n            }\n            titleDistancedBottom #TODO remove this field\n            image {\n              alt\n              asset {\n                url\n                metadata {\n                  dimensions {\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n          ... on BlogList {\n            title\n            cta {\n              title\n              route\n            }\n          }\n\n        }\n      }\n    }\n    allPost(sort:{_updatedAt: DESC}, limit: 3) {\n      _id\n      title\n      publishedAt\n      updatedAt:_updatedAt\n      slug {\n        current\n      }\n      excerpt\n    }\n  }\n',
): (typeof documents)['\n  query getHomePage($slug: String) {\n    allRoute(where: { slug: { current: { eq: $slug } } }) {\n      openGraph {\n        title\n        description\n      }\n      page {\n        content {\n          __typename\n          ... on SocialCollection {\n            title\n            items {\n              title\n              url\n              icon\n            }\n          }\n          ... on PageHeader {\n            title\n            body\n            cta {\n              title\n              route\n            }\n            titleDistancedBottom #TODO remove this field\n            image {\n              alt\n              asset {\n                url\n                metadata {\n                  dimensions {\n                    width\n                    height\n                  }\n                }\n              }\n            }\n          }\n          ... on BlogList {\n            title\n            cta {\n              title\n              route\n            }\n          }\n\n        }\n      }\n    }\n    allPost(sort:{_updatedAt: DESC}, limit: 3) {\n      _id\n      title\n      publishedAt\n      updatedAt:_updatedAt\n      slug {\n        current\n      }\n      excerpt\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getAllBlogSlugs {\n    allPost {\n      slug {\n        current\n      }\n    }\n  }\n',
): (typeof documents)['\n  query getAllBlogSlugs {\n    allPost {\n      slug {\n        current\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getAllCategoryId {\n    allCategory {\n      _id\n      title\n    }\n  }\n',
): (typeof documents)['\n  query getAllCategoryId {\n    allCategory {\n      _id\n      title\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query getCategoryByID($id: ID!) {\n    Category(id: $id) {\n      _id\n      title\n      description\n    }\n  }\n',
): (typeof documents)['\n  query getCategoryByID($id: ID!) {\n    Category(id: $id) {\n      _id\n      title\n      description\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\nquery getAboutPage($slug: String) {\n  allRoute(where: { slug: { current: { eq: $slug } } }) {\n    slug {\n      current\n    }\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    page {\n      content {\n        ... on PageHeader {\n          __typename\n          title\n          titleDistancedBottom #TODO remove this field\n          body\n          image {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  height\n                  width\n                }\n              }\n            }\n            alt\n          }\n        }\n        ... on AboutMe {\n          __typename\n          aboutIntroductionRaw\n          aboutMeItems {\n            title\n            publishedAt\n            body\n          }\n        }\n      }\n    }\n  }\n  allSiteSettings {\n      schemaOrg {\n        website\n        openGraph {\n        title\n        }\n      }\n    }\n}\n',
): (typeof documents)['\nquery getAboutPage($slug: String) {\n  allRoute(where: { slug: { current: { eq: $slug } } }) {\n    slug {\n      current\n    }\n    openGraph {\n      title\n      description\n      image {\n        asset {\n          url\n        }\n      }\n    }\n    page {\n      content {\n        ... on PageHeader {\n          __typename\n          title\n          titleDistancedBottom #TODO remove this field\n          body\n          image {\n            asset {\n              url\n              metadata {\n                dimensions {\n                  height\n                  width\n                }\n              }\n            }\n            alt\n          }\n        }\n        ... on AboutMe {\n          __typename\n          aboutIntroductionRaw\n          aboutMeItems {\n            title\n            publishedAt\n            body\n          }\n        }\n      }\n    }\n  }\n  allSiteSettings {\n      schemaOrg {\n        website\n        openGraph {\n        title\n        }\n      }\n    }\n}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\nquery getCurrentPage($slug: String) {\n  allRoute(where: { slug: { current: { eq: $slug } } }) {\n    slug {\n      current\n    }\n  }\n}\n',
): (typeof documents)['\nquery getCurrentPage($slug: String) {\n  allRoute(where: { slug: { current: { eq: $slug } } }) {\n    slug {\n      current\n    }\n  }\n}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\nquery getAllPagesAndBlogsAndCategories{\n  allRoute (sort:{_updatedAt: DESC}, where:{_:{is_draft: false},includeInSitemap: {eq: true}}){\n    updatedAt:_updatedAt\n    slug{\n      current\n    }\n  }\n  allCategory(sort:{_updatedAt: DESC}, where: {_: {is_draft: false}}){\n    updatedAt:_updatedAt\n    id:_id\n  }\n  allPost(sort:{_updatedAt: DESC}, where:{_: { is_draft: false}}){\n \tupdatedAt:_updatedAt\n    slug {\n      current\n    }\n  }\n}\n',
): (typeof documents)['\nquery getAllPagesAndBlogsAndCategories{\n  allRoute (sort:{_updatedAt: DESC}, where:{_:{is_draft: false},includeInSitemap: {eq: true}}){\n    updatedAt:_updatedAt\n    slug{\n      current\n    }\n  }\n  allCategory(sort:{_updatedAt: DESC}, where: {_: {is_draft: false}}){\n    updatedAt:_updatedAt\n    id:_id\n  }\n  allPost(sort:{_updatedAt: DESC}, where:{_: { is_draft: false}}){\n \tupdatedAt:_updatedAt\n    slug {\n      current\n    }\n  }\n}\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
