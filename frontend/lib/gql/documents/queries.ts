import { graphql } from "../types";

export const getShowByFields = graphql(`
  query ShowByFields($where: Show_where) {
    Shows(where: $where) {
      docs {
        id
      }
    }
  }
`);

export const getShowSlug = graphql(`
  query Shows($where: Show_where) {
    Shows(where: $where) {
      docs {
        slug
      }
    }
  }
`);

export const allShowIDs = graphql(`
  query AllShowIDs($limit: Int) {
    Shows(limit: $limit) {
      docs {
        slug
        id
        showName
        primaryHosts {
          name
        }
      }
    }
  }
`);

export const showsQuery = graphql(`
  query ShowsQuery($limit: Int) {
    Shows(limit: $limit) {
      docs {
        id
        active
        slug
        createdAt
        showName
        description
        primaryHosts {
          id
          createdAt
          updatedAt
          name
          email
        }
        categories {
          id
          createdAt
          updatedAt
          name
        }
      }
      totalDocs
      offset
      limit
      totalPages
      page
      pagingCounter
      hasPrevPage
      hasNextPage
      prevPage
      nextPage
    }
  }
`);

export const allCategories = graphql(
  `
    query Categories($limit: Int) {
      Categories(limit: $limit) {
        docs {
          name
        }
      }
    }
  `
);

export const showsByCategory = graphql(`
  query ShowsByCategory($categoryName: String!) {
    ShowsByCategory(categoryName: $categoryName) {
      docs {
        showName
        id
        slug
        createdAt
        description
        categories {
          name
        }
        primaryHosts {
          name
        }
      }
      limit
    }
  }
`);

export const showBySlug = graphql(`
  query ShowBySlug($slug: String!) {
    ShowBySlug(slug: $slug) {
      slug
      showName
      id
      description
      createdAt
      categories {
        name
      }
      primaryHosts {
        name
      }
    }
  }
`);

export const latestNewsQuery = graphql(`
  query NewsPosts(
    $limit: Int
    $page: Int
    $where: NewsPost_where
    $sort: String
  ) {
    NewsPosts(limit: $limit, page: $page, where: $where, sort: $sort) {
      docs {
        id
        blurb
        slug
        publishDate
        title
        updatedAt
        authorName
        authorId
        previewBanner {
          url
        }
      }
    }
  }
`);

export const draftNewsPostQuery = graphql(`
  query NewsPost($newsPostId: String!, $draft: Boolean) {
    NewsPost(id: $newsPostId, draft: $draft) {
      authorId
      authorName
      blurb
      content
      createdAt
      id
      publishDate
      slug
      title
      previewBanner {
        url
      }
      tags {
        name
        id
      }
    }
  }
`);

export const newsPostBySlugQuery = graphql(`
  query NewsPostBySlug($slug: String!) {
    NewsPostBySlug(slug: $slug) {
      authorId
      authorName
      blurb
      content
      createdAt
      id
      publishDate
      slug
      title
      tags {
        name
        id
      }
    }
  }
`);

export const tagLookupQuery = graphql(`
  query Tags($where: Tag_where) {
    Tags(where: $where) {
      docs {
        id
        name
      }
    }
  }
`);

export const searchHostsQuery = graphql(`
  query SearchHosts($where: Host_where, $limit: Int) {
    Hosts(where: $where, limit: $limit) {
      docs {
        name
        id
      }
    }
  }
`);

export const merchPreviewsQuery = graphql(`
  query MerchPreviews($limit: Int) {
    MerchPreviews(limit: $limit) {
      docs {
        id
        blurb
        image {
          url
        }
        title
        url
      }
    }
  }
`);
