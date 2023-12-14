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
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query ShowByFields($where: Show_where) {\n    Shows(where: $where) {\n      docs {\n        id\n      }\n    }\n  }\n": types.ShowByFieldsDocument,
    "\n  query ArchiveBySlug($where: Archive_where) {\n    Archives(where: $where) {\n      docs {\n        show {\n          id\n          slug\n        }\n        fullTitle\n        date\n        hosts {\n          name\n        }\n        subtitle\n        slug\n        images {\n          imageUrl640\n          imageUrl320\n          imageUrl1080\n        }\n        archiveUploads {\n          id\n          url\n          service\n          description\n        }\n      }\n    }\n  }\n": types.ArchiveBySlugDocument,
    "\n  query Shows($where: Show_where) {\n    Shows(where: $where) {\n      docs {\n        slug\n      }\n    }\n  }\n": types.ShowsDocument,
    "\n  query Archives(\n    $where: Archive_where\n    $limit: Int\n    $sort: String\n    $page: Int\n  ) {\n    Archives(where: $where, limit: $limit, sort: $sort, page: $page) {\n      docs {\n        fullTitle\n        subtitle\n        hosts {\n          name\n        }\n        slug\n        date\n        archiveUploads {\n          description\n        }\n      }\n      page\n      hasNextPage\n      hasPrevPage\n    }\n  }\n": types.ArchivesDocument,
    "\n  query Archive($where: Archive_where) {\n    Archives(where: $where) {\n      docs {\n        id\n        createdAt\n        updatedAt\n        slug\n        categories {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n        date\n        subtitle\n        fullTitle\n        hosts {\n          id\n          createdAt\n          updatedAt\n          name\n          email\n        }\n        show {\n          id\n          createdAt\n          updatedAt\n          showName\n          slug\n          description\n          primaryHosts {\n            id\n            createdAt\n            updatedAt\n            name\n            email\n          }\n        }\n        archiveUploads {\n          id\n          createdAt\n          updatedAt\n          archive {\n            id\n            createdAt\n            updatedAt\n            slug\n            date\n            subtitle\n            fullTitle\n          }\n          service\n          url\n          description\n        }\n      }\n      totalDocs\n      offset\n      limit\n      totalPages\n      page\n      pagingCounter\n      hasPrevPage\n      hasNextPage\n      prevPage\n      nextPage\n    }\n  }\n": types.ArchiveDocument,
    "\n  query AllShowIDs($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        slug\n        id\n        showName\n        primaryHosts {\n          name\n        }\n      }\n    }\n  }\n": types.AllShowIDsDocument,
    "\n  query ShowsQuery($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        id\n        active\n        slug\n        createdAt\n        showName\n        description\n        primaryHosts {\n          id\n          createdAt\n          updatedAt\n          name\n          email\n        }\n        categories {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n      }\n      totalDocs\n      offset\n      limit\n      totalPages\n      page\n      pagingCounter\n      hasPrevPage\n      hasNextPage\n      prevPage\n      nextPage\n    }\n  }\n": types.ShowsQueryDocument,
    "\n    query AllArchives(\n      $page: Int\n      $limit: Int\n      $sort: String\n      $where: Archive_where\n    ) {\n      Archives(page: $page, limit: $limit, sort: $sort, where: $where) {\n        hasNextPage\n        hasPrevPage\n        page\n        docs {\n          id\n          show {\n            slug\n            showName\n            id\n          }\n          images {\n            imageUrl640\n            imageUrl320\n            imageUrl1080\n          }\n          hosts {\n            name\n          }\n          archiveUploads {\n            description\n          }\n          subtitle\n          fullTitle\n          date\n          slug\n        }\n      }\n    }\n  ": types.AllArchivesDocument,
    "\n    query Categories($limit: Int) {\n      Categories(limit: $limit) {\n        docs {\n          name\n        }\n      }\n    }\n  ": types.CategoriesDocument,
    "\n  query ShowsByCategory($categoryName: String!) {\n    ShowsByCategory(categoryName: $categoryName) {\n      docs {\n        showName\n        id\n        slug\n        createdAt\n        description\n        categories {\n          name\n        }\n        primaryHosts {\n          name\n        }\n      }\n      limit\n    }\n  }\n": types.ShowsByCategoryDocument,
    "\n  query ShowBySlug($slug: String!) {\n    ShowBySlug(slug: $slug) {\n      slug\n      showName\n      id\n      description\n      createdAt\n      categories {\n        name\n      }\n      primaryHosts {\n        name\n      }\n    }\n  }\n": types.ShowBySlugDocument,
    "\n  query NewsPosts(\n    $limit: Int\n    $page: Int\n    $where: NewsPost_where\n    $sort: String\n  ) {\n    NewsPosts(limit: $limit, page: $page, where: $where, sort: $sort) {\n      docs {\n        id\n        blurb\n        slug\n        publishDate\n        title\n        updatedAt\n        authorName\n        authorId\n      }\n    }\n  }\n": types.NewsPostsDocument,
    "\n  query NewsPost($newsPostId: String!, $draft: Boolean) {\n    NewsPost(id: $newsPostId, draft: $draft) {\n      authorId\n      authorName\n      blurb\n      content\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      tags {\n        name\n        id\n      }\n    }\n  }\n": types.NewsPostDocument,
    "\n  query NewsPostBySlug($slug: String!) {\n    NewsPostBySlug(slug: $slug) {\n      authorId\n      authorName\n      blurb\n      content\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      tags {\n        name\n        id\n      }\n    }\n  }\n": types.NewsPostBySlugDocument,
    "\n  query Tags($where: Tag_where) {\n    Tags(where: $where) {\n      docs {\n        id\n        name\n      }\n    }\n  }\n": types.TagsDocument,
    "\n  query ArchivesPicks($limit: Int, $where: Archive_where, $sort: String) {\n    Archives(limit: $limit, where: $where, sort: $sort) {\n      docs {\n        id\n        show {\n          slug\n          showName\n          id\n        }\n        images {\n          imageUrl640\n          imageUrl320\n          imageUrl1080\n        }\n        hosts {\n          name\n        }\n        archiveUploads {\n          description\n        }\n        subtitle\n        fullTitle\n        date\n        slug\n      }\n    }\n  }\n": types.ArchivesPicksDocument,
    "\n  query SearchHosts($where: Host_where, $limit: Int) {\n    Hosts(where: $where, limit: $limit) {\n      docs {\n        name\n        id\n      }\n    }\n  }\n": types.SearchHostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ShowByFields($where: Show_where) {\n    Shows(where: $where) {\n      docs {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query ShowByFields($where: Show_where) {\n    Shows(where: $where) {\n      docs {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ArchiveBySlug($where: Archive_where) {\n    Archives(where: $where) {\n      docs {\n        show {\n          id\n          slug\n        }\n        fullTitle\n        date\n        hosts {\n          name\n        }\n        subtitle\n        slug\n        images {\n          imageUrl640\n          imageUrl320\n          imageUrl1080\n        }\n        archiveUploads {\n          id\n          url\n          service\n          description\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ArchiveBySlug($where: Archive_where) {\n    Archives(where: $where) {\n      docs {\n        show {\n          id\n          slug\n        }\n        fullTitle\n        date\n        hosts {\n          name\n        }\n        subtitle\n        slug\n        images {\n          imageUrl640\n          imageUrl320\n          imageUrl1080\n        }\n        archiveUploads {\n          id\n          url\n          service\n          description\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Shows($where: Show_where) {\n    Shows(where: $where) {\n      docs {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query Shows($where: Show_where) {\n    Shows(where: $where) {\n      docs {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Archives(\n    $where: Archive_where\n    $limit: Int\n    $sort: String\n    $page: Int\n  ) {\n    Archives(where: $where, limit: $limit, sort: $sort, page: $page) {\n      docs {\n        fullTitle\n        subtitle\n        hosts {\n          name\n        }\n        slug\n        date\n        archiveUploads {\n          description\n        }\n      }\n      page\n      hasNextPage\n      hasPrevPage\n    }\n  }\n"): (typeof documents)["\n  query Archives(\n    $where: Archive_where\n    $limit: Int\n    $sort: String\n    $page: Int\n  ) {\n    Archives(where: $where, limit: $limit, sort: $sort, page: $page) {\n      docs {\n        fullTitle\n        subtitle\n        hosts {\n          name\n        }\n        slug\n        date\n        archiveUploads {\n          description\n        }\n      }\n      page\n      hasNextPage\n      hasPrevPage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Archive($where: Archive_where) {\n    Archives(where: $where) {\n      docs {\n        id\n        createdAt\n        updatedAt\n        slug\n        categories {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n        date\n        subtitle\n        fullTitle\n        hosts {\n          id\n          createdAt\n          updatedAt\n          name\n          email\n        }\n        show {\n          id\n          createdAt\n          updatedAt\n          showName\n          slug\n          description\n          primaryHosts {\n            id\n            createdAt\n            updatedAt\n            name\n            email\n          }\n        }\n        archiveUploads {\n          id\n          createdAt\n          updatedAt\n          archive {\n            id\n            createdAt\n            updatedAt\n            slug\n            date\n            subtitle\n            fullTitle\n          }\n          service\n          url\n          description\n        }\n      }\n      totalDocs\n      offset\n      limit\n      totalPages\n      page\n      pagingCounter\n      hasPrevPage\n      hasNextPage\n      prevPage\n      nextPage\n    }\n  }\n"): (typeof documents)["\n  query Archive($where: Archive_where) {\n    Archives(where: $where) {\n      docs {\n        id\n        createdAt\n        updatedAt\n        slug\n        categories {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n        date\n        subtitle\n        fullTitle\n        hosts {\n          id\n          createdAt\n          updatedAt\n          name\n          email\n        }\n        show {\n          id\n          createdAt\n          updatedAt\n          showName\n          slug\n          description\n          primaryHosts {\n            id\n            createdAt\n            updatedAt\n            name\n            email\n          }\n        }\n        archiveUploads {\n          id\n          createdAt\n          updatedAt\n          archive {\n            id\n            createdAt\n            updatedAt\n            slug\n            date\n            subtitle\n            fullTitle\n          }\n          service\n          url\n          description\n        }\n      }\n      totalDocs\n      offset\n      limit\n      totalPages\n      page\n      pagingCounter\n      hasPrevPage\n      hasNextPage\n      prevPage\n      nextPage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllShowIDs($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        slug\n        id\n        showName\n        primaryHosts {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllShowIDs($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        slug\n        id\n        showName\n        primaryHosts {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ShowsQuery($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        id\n        active\n        slug\n        createdAt\n        showName\n        description\n        primaryHosts {\n          id\n          createdAt\n          updatedAt\n          name\n          email\n        }\n        categories {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n      }\n      totalDocs\n      offset\n      limit\n      totalPages\n      page\n      pagingCounter\n      hasPrevPage\n      hasNextPage\n      prevPage\n      nextPage\n    }\n  }\n"): (typeof documents)["\n  query ShowsQuery($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        id\n        active\n        slug\n        createdAt\n        showName\n        description\n        primaryHosts {\n          id\n          createdAt\n          updatedAt\n          name\n          email\n        }\n        categories {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n      }\n      totalDocs\n      offset\n      limit\n      totalPages\n      page\n      pagingCounter\n      hasPrevPage\n      hasNextPage\n      prevPage\n      nextPage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query AllArchives(\n      $page: Int\n      $limit: Int\n      $sort: String\n      $where: Archive_where\n    ) {\n      Archives(page: $page, limit: $limit, sort: $sort, where: $where) {\n        hasNextPage\n        hasPrevPage\n        page\n        docs {\n          id\n          show {\n            slug\n            showName\n            id\n          }\n          images {\n            imageUrl640\n            imageUrl320\n            imageUrl1080\n          }\n          hosts {\n            name\n          }\n          archiveUploads {\n            description\n          }\n          subtitle\n          fullTitle\n          date\n          slug\n        }\n      }\n    }\n  "): (typeof documents)["\n    query AllArchives(\n      $page: Int\n      $limit: Int\n      $sort: String\n      $where: Archive_where\n    ) {\n      Archives(page: $page, limit: $limit, sort: $sort, where: $where) {\n        hasNextPage\n        hasPrevPage\n        page\n        docs {\n          id\n          show {\n            slug\n            showName\n            id\n          }\n          images {\n            imageUrl640\n            imageUrl320\n            imageUrl1080\n          }\n          hosts {\n            name\n          }\n          archiveUploads {\n            description\n          }\n          subtitle\n          fullTitle\n          date\n          slug\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Categories($limit: Int) {\n      Categories(limit: $limit) {\n        docs {\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    query Categories($limit: Int) {\n      Categories(limit: $limit) {\n        docs {\n          name\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ShowsByCategory($categoryName: String!) {\n    ShowsByCategory(categoryName: $categoryName) {\n      docs {\n        showName\n        id\n        slug\n        createdAt\n        description\n        categories {\n          name\n        }\n        primaryHosts {\n          name\n        }\n      }\n      limit\n    }\n  }\n"): (typeof documents)["\n  query ShowsByCategory($categoryName: String!) {\n    ShowsByCategory(categoryName: $categoryName) {\n      docs {\n        showName\n        id\n        slug\n        createdAt\n        description\n        categories {\n          name\n        }\n        primaryHosts {\n          name\n        }\n      }\n      limit\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ShowBySlug($slug: String!) {\n    ShowBySlug(slug: $slug) {\n      slug\n      showName\n      id\n      description\n      createdAt\n      categories {\n        name\n      }\n      primaryHosts {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query ShowBySlug($slug: String!) {\n    ShowBySlug(slug: $slug) {\n      slug\n      showName\n      id\n      description\n      createdAt\n      categories {\n        name\n      }\n      primaryHosts {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NewsPosts(\n    $limit: Int\n    $page: Int\n    $where: NewsPost_where\n    $sort: String\n  ) {\n    NewsPosts(limit: $limit, page: $page, where: $where, sort: $sort) {\n      docs {\n        id\n        blurb\n        slug\n        publishDate\n        title\n        updatedAt\n        authorName\n        authorId\n      }\n    }\n  }\n"): (typeof documents)["\n  query NewsPosts(\n    $limit: Int\n    $page: Int\n    $where: NewsPost_where\n    $sort: String\n  ) {\n    NewsPosts(limit: $limit, page: $page, where: $where, sort: $sort) {\n      docs {\n        id\n        blurb\n        slug\n        publishDate\n        title\n        updatedAt\n        authorName\n        authorId\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NewsPost($newsPostId: String!, $draft: Boolean) {\n    NewsPost(id: $newsPostId, draft: $draft) {\n      authorId\n      authorName\n      blurb\n      content\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      tags {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query NewsPost($newsPostId: String!, $draft: Boolean) {\n    NewsPost(id: $newsPostId, draft: $draft) {\n      authorId\n      authorName\n      blurb\n      content\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      tags {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NewsPostBySlug($slug: String!) {\n    NewsPostBySlug(slug: $slug) {\n      authorId\n      authorName\n      blurb\n      content\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      tags {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query NewsPostBySlug($slug: String!) {\n    NewsPostBySlug(slug: $slug) {\n      authorId\n      authorName\n      blurb\n      content\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      tags {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Tags($where: Tag_where) {\n    Tags(where: $where) {\n      docs {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Tags($where: Tag_where) {\n    Tags(where: $where) {\n      docs {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ArchivesPicks($limit: Int, $where: Archive_where, $sort: String) {\n    Archives(limit: $limit, where: $where, sort: $sort) {\n      docs {\n        id\n        show {\n          slug\n          showName\n          id\n        }\n        images {\n          imageUrl640\n          imageUrl320\n          imageUrl1080\n        }\n        hosts {\n          name\n        }\n        archiveUploads {\n          description\n        }\n        subtitle\n        fullTitle\n        date\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query ArchivesPicks($limit: Int, $where: Archive_where, $sort: String) {\n    Archives(limit: $limit, where: $where, sort: $sort) {\n      docs {\n        id\n        show {\n          slug\n          showName\n          id\n        }\n        images {\n          imageUrl640\n          imageUrl320\n          imageUrl1080\n        }\n        hosts {\n          name\n        }\n        archiveUploads {\n          description\n        }\n        subtitle\n        fullTitle\n        date\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchHosts($where: Host_where, $limit: Int) {\n    Hosts(where: $where, limit: $limit) {\n      docs {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchHosts($where: Host_where, $limit: Int) {\n    Hosts(where: $where, limit: $limit) {\n      docs {\n        name\n        id\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;