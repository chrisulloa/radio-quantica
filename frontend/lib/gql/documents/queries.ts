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

export const showArchiveBySlug = graphql(`
  query ArchiveBySlug($where: Archive_where) {
    Archives(where: $where) {
      docs {
        show {
          id
          slug
        }
        fullTitle
        date
        hosts {
          name
        }
        subtitle
        slug
        images {
          imageUrl640
          imageUrl320
          imageUrl1080
        }
        archiveUploads {
          id
          url
          service
          description
        }
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

export const showArchivesQuery = graphql(`
  query Archives(
    $where: Archive_where
    $limit: Int
    $sort: String
    $page: Int
  ) {
    Archives(where: $where, limit: $limit, sort: $sort, page: $page) {
      docs {
        fullTitle
        subtitle
        hosts {
          name
        }
        slug
        date
        archiveUploads {
          description
        }
      }
      page
      hasNextPage
      hasPrevPage
    }
  }
`);

export const showByName = graphql(`
  query Archive($where: Archive_where) {
    Archives(where: $where) {
      docs {
        id
        createdAt
        updatedAt
        slug
        categories {
          id
          createdAt
          updatedAt
          name
        }
        date
        subtitle
        fullTitle
        hosts {
          id
          createdAt
          updatedAt
          name
          email
        }
        show {
          id
          createdAt
          updatedAt
          showName
          slug
          description
          primaryHosts {
            id
            createdAt
            updatedAt
            name
            email
          }
        }
        archiveUploads {
          id
          createdAt
          updatedAt
          archive {
            id
            createdAt
            updatedAt
            slug
            date
            subtitle
            fullTitle
          }
          service
          url
          description
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

export const allArchivesQuery = graphql(
  `
    query AllArchives(
      $page: Int
      $limit: Int
      $sort: String
      $where: Archive_where
    ) {
      Archives(page: $page, limit: $limit, sort: $sort, where: $where) {
        hasNextPage
        hasPrevPage
        page
        docs {
          id
          show {
            slug
            showName
            id
          }
          images {
            imageUrl640
            imageUrl320
            imageUrl1080
          }
          hosts {
            name
          }
          archiveUploads {
            description
          }
          subtitle
          fullTitle
          date
          slug
        }
      }
    }
  `
);

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

export const archivePicksQuery = graphql(`
  query ArchivesPicks($limit: Int, $where: Archive_where, $sort: String) {
    Archives(limit: $limit, where: $where, sort: $sort) {
      docs {
        id
        show {
          slug
          showName
          id
        }
        images {
          imageUrl640
          imageUrl320
          imageUrl1080
        }
        hosts {
          name
        }
        archiveUploads {
          description
        }
        subtitle
        fullTitle
        date
        slug
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
