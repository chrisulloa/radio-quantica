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
    "\n  query Shows($where: Show_where) {\n    Shows(where: $where) {\n      docs {\n        slug\n      }\n    }\n  }\n": types.ShowsDocument,
    "\n  query AllShowIDs($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        slug\n        id\n        showName\n        primaryHosts {\n          name\n        }\n      }\n    }\n  }\n": types.AllShowIDsDocument,
    "\n  query ShowsQuery($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        id\n        active\n        slug\n        createdAt\n        showName\n        description\n        primaryHosts {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n        categories {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n        coverImage {\n          alt\n          sizes {\n            lg {\n              url\n              width\n              height\n            }\n            sm {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n      totalDocs\n      offset\n      limit\n      totalPages\n      page\n      pagingCounter\n      hasPrevPage\n      hasNextPage\n      prevPage\n      nextPage\n    }\n  }\n": types.ShowsQueryDocument,
    "\n    query Categories($limit: Int) {\n      Categories(limit: $limit) {\n        docs {\n          name\n        }\n      }\n    }\n  ": types.CategoriesDocument,
    "\n  query ShowsByCategory($categoryName: String!) {\n    ShowsByCategory(categoryName: $categoryName) {\n      docs {\n        showName\n        id\n        slug\n        createdAt\n        description\n        categories {\n          name\n        }\n        primaryHosts {\n          name\n        }\n        coverImage {\n          alt\n          sizes {\n            lg {\n              url\n              width\n              height\n            }\n            sm {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n      limit\n    }\n  }\n": types.ShowsByCategoryDocument,
    "\n  query ShowBySlug($slug: String!) {\n    ShowBySlug(slug: $slug) {\n      slug\n      showName\n      id\n      description\n      createdAt\n      categories {\n        name\n      }\n      primaryHosts {\n        name\n      }\n      coverImage {\n        alt\n        sizes {\n          lg {\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n  }\n": types.ShowBySlugDocument,
    "\n  query NewsPosts(\n    $limit: Int\n    $page: Int\n    $where: NewsPost_where\n    $sort: String\n  ) {\n    NewsPosts(limit: $limit, page: $page, where: $where, sort: $sort) {\n      docs {\n        id\n        blurb\n        slug\n        publishDate\n        title\n        updatedAt\n        authorName\n        authorId\n        previewBanner {\n          url\n        }\n      }\n      totalDocs\n      totalPages\n    }\n  }\n": types.NewsPostsDocument,
    "\n  query NewsPost($newsPostId: String!, $draft: Boolean) {\n    NewsPost(id: $newsPostId, draft: $draft) {\n      authorId\n      authorName\n      blurb\n      content\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      previewBanner {\n        url\n      }\n      tags {\n        name\n        id\n      }\n    }\n  }\n": types.NewsPostDocument,
    "\n  query NewsPostBySlug($slug: String!) {\n    NewsPostBySlug(slug: $slug) {\n      authorId\n      authorName\n      blurb\n      content\n      heyZineUrl\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      previewBanner {\n        url\n      }\n      tags {\n        name\n        id\n      }\n    }\n  }\n": types.NewsPostBySlugDocument,
    "\n  query NewsPostContentBySlugAndLocale($slug: String!, $locale: String!) {\n    NewsPostBySlug(slug: $slug, locale: $locale) {\n      content\n    }\n  }\n": types.NewsPostContentBySlugAndLocaleDocument,
    "\n  query Tags($where: Tag_where) {\n    Tags(where: $where) {\n      docs {\n        id\n        name\n      }\n    }\n  }\n": types.TagsDocument,
    "\n  query SearchHosts($where: Host_where, $limit: Int) {\n    Hosts(where: $where, limit: $limit) {\n      docs {\n        name\n        id\n      }\n    }\n  }\n": types.SearchHostsDocument,
    "\n  query Merch($limit: Int) {\n    Merches(limit: $limit) {\n      docs {\n        id\n        blurb\n        soldOut\n        image {\n          url\n        }\n        title\n        url\n      }\n    }\n  }\n": types.MerchDocument,
    "\n  query LabelReleases($limit: Int) {\n    LabelReleases(limit: $limit) {\n      docs {\n        id\n        blurb\n        image {\n          url\n        }\n        title\n        url\n      }\n    }\n  }\n": types.LabelReleasesDocument,
    "\n  query LiveVideos($limit: Int, $sort: String) {\n    LiveVideos(limit: $limit, sort: $sort) {\n      docs {\n        id\n        title\n        url\n        date\n        videoId\n        image {\n          url\n        }\n      }\n    }\n  }\n": types.LiveVideosDocument,
    "\n  query PaginatedLiveVideos($limit: Int, $page: Int, $sort: String) {\n    LiveVideos(limit: $limit, page: $page, sort: $sort) {\n      docs {\n        id\n        title\n        url\n        date\n        videoId\n        image {\n          url\n        }\n      }\n      totalDocs\n      totalPages\n    }\n  }\n": types.PaginatedLiveVideosDocument,
    "\n  query AboutPageQuery($locale: LocaleInputType) {\n    AboutPage(locale: $locale) {\n      content\n    }\n  }\n": types.AboutPageQueryDocument,
    "\n  query DonatePageQuery($locale: LocaleInputType) {\n    DonatePage(locale: $locale) {\n      content\n    }\n  }\n": types.DonatePageQueryDocument,
    "\n  query YoutubeChannelQuery {\n    YoutubeChannel {\n      isLive\n      channelId\n      url\n      videoId\n      imageUrl\n    }\n  }\n": types.YoutubeChannelQueryDocument,
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
export function graphql(source: "\n  query Shows($where: Show_where) {\n    Shows(where: $where) {\n      docs {\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query Shows($where: Show_where) {\n    Shows(where: $where) {\n      docs {\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllShowIDs($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        slug\n        id\n        showName\n        primaryHosts {\n          name\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllShowIDs($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        slug\n        id\n        showName\n        primaryHosts {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ShowsQuery($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        id\n        active\n        slug\n        createdAt\n        showName\n        description\n        primaryHosts {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n        categories {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n        coverImage {\n          alt\n          sizes {\n            lg {\n              url\n              width\n              height\n            }\n            sm {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n      totalDocs\n      offset\n      limit\n      totalPages\n      page\n      pagingCounter\n      hasPrevPage\n      hasNextPage\n      prevPage\n      nextPage\n    }\n  }\n"): (typeof documents)["\n  query ShowsQuery($limit: Int) {\n    Shows(limit: $limit) {\n      docs {\n        id\n        active\n        slug\n        createdAt\n        showName\n        description\n        primaryHosts {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n        categories {\n          id\n          createdAt\n          updatedAt\n          name\n        }\n        coverImage {\n          alt\n          sizes {\n            lg {\n              url\n              width\n              height\n            }\n            sm {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n      totalDocs\n      offset\n      limit\n      totalPages\n      page\n      pagingCounter\n      hasPrevPage\n      hasNextPage\n      prevPage\n      nextPage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Categories($limit: Int) {\n      Categories(limit: $limit) {\n        docs {\n          name\n        }\n      }\n    }\n  "): (typeof documents)["\n    query Categories($limit: Int) {\n      Categories(limit: $limit) {\n        docs {\n          name\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ShowsByCategory($categoryName: String!) {\n    ShowsByCategory(categoryName: $categoryName) {\n      docs {\n        showName\n        id\n        slug\n        createdAt\n        description\n        categories {\n          name\n        }\n        primaryHosts {\n          name\n        }\n        coverImage {\n          alt\n          sizes {\n            lg {\n              url\n              width\n              height\n            }\n            sm {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n      limit\n    }\n  }\n"): (typeof documents)["\n  query ShowsByCategory($categoryName: String!) {\n    ShowsByCategory(categoryName: $categoryName) {\n      docs {\n        showName\n        id\n        slug\n        createdAt\n        description\n        categories {\n          name\n        }\n        primaryHosts {\n          name\n        }\n        coverImage {\n          alt\n          sizes {\n            lg {\n              url\n              width\n              height\n            }\n            sm {\n              url\n              width\n              height\n            }\n          }\n        }\n      }\n      limit\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ShowBySlug($slug: String!) {\n    ShowBySlug(slug: $slug) {\n      slug\n      showName\n      id\n      description\n      createdAt\n      categories {\n        name\n      }\n      primaryHosts {\n        name\n      }\n      coverImage {\n        alt\n        sizes {\n          lg {\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ShowBySlug($slug: String!) {\n    ShowBySlug(slug: $slug) {\n      slug\n      showName\n      id\n      description\n      createdAt\n      categories {\n        name\n      }\n      primaryHosts {\n        name\n      }\n      coverImage {\n        alt\n        sizes {\n          lg {\n            url\n            width\n            height\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NewsPosts(\n    $limit: Int\n    $page: Int\n    $where: NewsPost_where\n    $sort: String\n  ) {\n    NewsPosts(limit: $limit, page: $page, where: $where, sort: $sort) {\n      docs {\n        id\n        blurb\n        slug\n        publishDate\n        title\n        updatedAt\n        authorName\n        authorId\n        previewBanner {\n          url\n        }\n      }\n      totalDocs\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query NewsPosts(\n    $limit: Int\n    $page: Int\n    $where: NewsPost_where\n    $sort: String\n  ) {\n    NewsPosts(limit: $limit, page: $page, where: $where, sort: $sort) {\n      docs {\n        id\n        blurb\n        slug\n        publishDate\n        title\n        updatedAt\n        authorName\n        authorId\n        previewBanner {\n          url\n        }\n      }\n      totalDocs\n      totalPages\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NewsPost($newsPostId: String!, $draft: Boolean) {\n    NewsPost(id: $newsPostId, draft: $draft) {\n      authorId\n      authorName\n      blurb\n      content\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      previewBanner {\n        url\n      }\n      tags {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query NewsPost($newsPostId: String!, $draft: Boolean) {\n    NewsPost(id: $newsPostId, draft: $draft) {\n      authorId\n      authorName\n      blurb\n      content\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      previewBanner {\n        url\n      }\n      tags {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NewsPostBySlug($slug: String!) {\n    NewsPostBySlug(slug: $slug) {\n      authorId\n      authorName\n      blurb\n      content\n      heyZineUrl\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      previewBanner {\n        url\n      }\n      tags {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query NewsPostBySlug($slug: String!) {\n    NewsPostBySlug(slug: $slug) {\n      authorId\n      authorName\n      blurb\n      content\n      heyZineUrl\n      createdAt\n      id\n      publishDate\n      slug\n      title\n      previewBanner {\n        url\n      }\n      tags {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NewsPostContentBySlugAndLocale($slug: String!, $locale: String!) {\n    NewsPostBySlug(slug: $slug, locale: $locale) {\n      content\n    }\n  }\n"): (typeof documents)["\n  query NewsPostContentBySlugAndLocale($slug: String!, $locale: String!) {\n    NewsPostBySlug(slug: $slug, locale: $locale) {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Tags($where: Tag_where) {\n    Tags(where: $where) {\n      docs {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query Tags($where: Tag_where) {\n    Tags(where: $where) {\n      docs {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchHosts($where: Host_where, $limit: Int) {\n    Hosts(where: $where, limit: $limit) {\n      docs {\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchHosts($where: Host_where, $limit: Int) {\n    Hosts(where: $where, limit: $limit) {\n      docs {\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Merch($limit: Int) {\n    Merches(limit: $limit) {\n      docs {\n        id\n        blurb\n        soldOut\n        image {\n          url\n        }\n        title\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query Merch($limit: Int) {\n    Merches(limit: $limit) {\n      docs {\n        id\n        blurb\n        soldOut\n        image {\n          url\n        }\n        title\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LabelReleases($limit: Int) {\n    LabelReleases(limit: $limit) {\n      docs {\n        id\n        blurb\n        image {\n          url\n        }\n        title\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query LabelReleases($limit: Int) {\n    LabelReleases(limit: $limit) {\n      docs {\n        id\n        blurb\n        image {\n          url\n        }\n        title\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query LiveVideos($limit: Int, $sort: String) {\n    LiveVideos(limit: $limit, sort: $sort) {\n      docs {\n        id\n        title\n        url\n        date\n        videoId\n        image {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query LiveVideos($limit: Int, $sort: String) {\n    LiveVideos(limit: $limit, sort: $sort) {\n      docs {\n        id\n        title\n        url\n        date\n        videoId\n        image {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PaginatedLiveVideos($limit: Int, $page: Int, $sort: String) {\n    LiveVideos(limit: $limit, page: $page, sort: $sort) {\n      docs {\n        id\n        title\n        url\n        date\n        videoId\n        image {\n          url\n        }\n      }\n      totalDocs\n      totalPages\n    }\n  }\n"): (typeof documents)["\n  query PaginatedLiveVideos($limit: Int, $page: Int, $sort: String) {\n    LiveVideos(limit: $limit, page: $page, sort: $sort) {\n      docs {\n        id\n        title\n        url\n        date\n        videoId\n        image {\n          url\n        }\n      }\n      totalDocs\n      totalPages\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AboutPageQuery($locale: LocaleInputType) {\n    AboutPage(locale: $locale) {\n      content\n    }\n  }\n"): (typeof documents)["\n  query AboutPageQuery($locale: LocaleInputType) {\n    AboutPage(locale: $locale) {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query DonatePageQuery($locale: LocaleInputType) {\n    DonatePage(locale: $locale) {\n      content\n    }\n  }\n"): (typeof documents)["\n  query DonatePageQuery($locale: LocaleInputType) {\n    DonatePage(locale: $locale) {\n      content\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query YoutubeChannelQuery {\n    YoutubeChannel {\n      isLive\n      channelId\n      url\n      videoId\n      imageUrl\n    }\n  }\n"): (typeof documents)["\n  query YoutubeChannelQuery {\n    YoutubeChannel {\n      isLive\n      channelId\n      url\n      videoId\n      imageUrl\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;