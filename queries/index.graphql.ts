import { gql } from '@apollo/client';

export const GET_ALL_BLOG = gql`
  query getAllBlog {
    allPost(sort: { publishedAt: DESC }) {
      _id
      title
      publishedAt
      slug {
        current
      }
      excerpt
    }
  }
`;

export const GET_LATEST_BLOG = gql`
  query getLatestBlog {
    allPost(sort: { publishedAt: DESC }, limit: 3) {
      _id
      title
      publishedAt
      slug {
        current
      }
      excerpt
    }
  }
`;

export const GET_ALL_BLOG_BY_CATEGORY_ID = gql`
  query getAllBlogByCategoryId($categoryId: ID!) {
    allPost(where: { _: { references: $categoryId } }) {
      title
      slug {
        current
      }
      publishedAt
      excerpt
    }
    Category(id: $categoryId) {
      title
      description
    }
  }
`;

export const GET_BLOG_BY_SLUG = gql`
  query getBlogBySlug($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }, limit: 1) {
      title
      _id
      publishedAt
      mainImage {
        alt
        asset {
          metadata {
            dimensions {
              width
              height
            }
          }
          url
        }
      }
      excerpt
      categories {
        _id
        title
      }
      bodyRaw
    }
  }
`;

export const GET_SITE_SETTINGS = gql`
  query getSiteSettings {
    SiteSettings(id: "siteSettings") {
      navigation {
        logo {
          alt
          asset {
            metadata {
              dimensions {
                height
                width
              }
            }
            url
          }
        }
        items {
          title
          route
          kind
        }
      }
      footer {
        copyright
      }
      schemaOrg {
        email
        jobTitle
        telephone
        website
        openGraph {
          title
          description
          image {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = gql`
  query getPageBuSlug($slug: String) {
    allRoute(where: { slug: { current: { eq: $slug } } }) {
      openGraph {
        title
        description
      }
      page {
        content {
          __typename
          ... on SocialCollection {
            title
            items {
              title
              url
              icon
            }
          }
          ... on PageHeader {
            title
            body
            cta {
              title
              route
            }
            titleDistancedBottom
            image {
              alt
              asset {
                url
                metadata {
                  dimensions {
                    width
                    height
                  }
                }
              }
            }
          }
          ... on BlogList {
            title
            cta {
              title
              route
            }
          }
          ... on AboutMe {
            aboutIntroductionRaw
            aboutMeItems {
              title
              body
              publishedAt
            }
          }
        }
      }
    }
    SiteSettings(id: "siteSettings") {
      navigation {
        logo {
          alt
          asset {
            metadata {
              dimensions {
                height
                width
              }
            }
            url
          }
        }
        items {
          title
          route
          kind
        }
      }
      footer {
        copyright
      }
      schemaOrg {
        email
        name
        jobTitle
        telephone
        website
        openGraph {
          title
          description
          image {
            asset {
              url
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_BLOG_SLUGS = gql`
  query getAllBlogSlugs {
    allPost {
      slug {
        current
      }
    }
  }
`;

export const GET_ALL_CATEGORY_ID = gql`
  query getAllCategoryId {
    allCategory {
      _id
    }
  }
`;
