export const gql = (query: any) => query;

export const GET_ALL_BLOG = gql(`
  query getAllBlog {
    allPost(sort:{_updatedAt: DESC}) {
      _id
      title
      publishedAt
      slug {
        current
      }
      excerpt
    }
  }
`);

export const GET_ALL_BLOG_BY_CATEGORY_ID = gql(`
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
`);

export const GET_BLOG_BY_SLUG = gql(`
  query getBlogBySlug($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }, limit: 1) {
      title
      _id
      publishedAt
      updatedAt:_updatedAt
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
      updatedAt: _updatedAt
      publishedAt 
      categories {
        _id
        title
      }
      bodyRaw
    }
    allSiteSettings {
      schemaOrg {
        website
        openGraph {
        title
        }
      }
    }
  }
`);

export const GET_SITE_SETTINGS = gql(`
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
        name
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
`);

export const GET_CONTACT_PAGE = gql(`
  query getContactPage($slug: String) {
    allRoute(where: { slug: { current: { eq: $slug } } }) {
      slug {
        current
      }
      openGraph {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      page {
        content {
          __typename
          ... on PageHeader {
            title
          }
        }
      }
    }
    allSiteSettings {
      schemaOrg {
        website
        openGraph {
        title
        }
      }
    }
  }
`);

export const GET_BLOG_PAGE = gql(`
 query getBlogPage($slug: String) {
  allRoute(where: { slug: { current: { eq: $slug } } }) {
    slug {
      current
    }
    openGraph {
      title
      description
      image {
        asset {
          url
        }
      }
    }
    page {
      content {
        __typename
        ... on PageHeader {
          title
        }
      }
    }
  }
  allSiteSettings {
    schemaOrg {
      website
      openGraph {
        title
      }
    }
  }
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
`);

export const GET_NOT_FOUND_PAGE = gql(`
  query getNotFoundPage($slug: String) {
    allRoute(where: { slug: { current: { eq: $slug } } }) {
      openGraph {
        title
        description
      }
      page {
        content {
          __typename
          ... on PageHeader {
            title
            body
            cta {
              title
              route
            } #TODO remove this field
            titleDistancedBottom #TODO remove this field
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
        }
      }
    }
  }
`);

export const GET_HOME_PAGE = gql(`
  query getHomePage($slug: String) {
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
            titleDistancedBottom #TODO remove this field
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

        }
      }
    }
    allPost(sort:{_updatedAt: DESC}, limit: 3) {
      _id
      title
      publishedAt
      slug {
        current
      }
      excerpt
    }
  }
`);

export const GET_ALL_BLOG_SLUGS = gql(`
  query getAllBlogSlugs {
    allPost {
      slug {
        current
      }
    }
  }
`);

export const GET_ALL_CATEGORY_ID = gql(`
  query getAllCategoryId {
    allCategory {
      _id
    }
  }
`);

export const GET_ABOUT_PAGE = gql(`
query getAboutPage($slug: String) {
  allRoute(where: { slug: { current: { eq: $slug } } }) {
    slug {
      current
    }
    openGraph {
      title
      description
      image {
        asset {
          url
        }
      }
    }
    page {
      content {
        ... on PageHeader {
          __typename
          title
          titleDistancedBottom #TODO remove this field
          body
          image {
            asset {
              url
              metadata {
                dimensions {
                  height
                  width
                }
              }
            }
            alt
          }
        }
        ... on AboutMe {
          __typename
          aboutIntroductionRaw
          aboutMeItems {
            title
            publishedAt
            body
          }
        }
      }
    }
  }
  allSiteSettings {
      schemaOrg {
        website
        openGraph {
        title
        }
      }
    }
}
`);

export const GET_CURRENT_PAGE = gql(`
query getCurrentPage($slug: String) {
  allRoute(where: { slug: { current: { eq: $slug } } }) {
    slug {
      current
    }
  }
}
`);

export const GET_ALL_PAGES_AND_BLOGS_AND_CATEGORIES = gql(`
query getAllPagesAndBlogsAndCategories{
  allRoute (sort:{_updatedAt: DESC}, where:{_:{is_draft: false},includeInSitemap: {eq: true}}){
    updatedAt:_updatedAt
    slug{
      current
    }
  }
  allCategory(sort:{_updatedAt: DESC}, where: {_: {is_draft: false}}){
    updatedAt:_updatedAt
    id:_id
  }
  allPost(sort:{_updatedAt: DESC}, where:{_: { is_draft: false}}){
 	updatedAt:_updatedAt
    slug {
      current
    }
  }
}
`);
