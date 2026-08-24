/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Host_CreatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type Host_Id_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Host_Name_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Host_UpdatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type Host_Where = {
  AND?: Array<Host_Where_And | null | undefined> | null | undefined;
  OR?: Array<Host_Where_Or | null | undefined> | null | undefined;
  createdAt?: Host_CreatedAt_Operator | null | undefined;
  id?: Host_Id_Operator | null | undefined;
  name?: Host_Name_Operator | null | undefined;
  updatedAt?: Host_UpdatedAt_Operator | null | undefined;
};

export type Host_Where_And = {
  AND?: Array<Host_Where_And | null | undefined> | null | undefined;
  OR?: Array<Host_Where_Or | null | undefined> | null | undefined;
  createdAt?: Host_CreatedAt_Operator | null | undefined;
  id?: Host_Id_Operator | null | undefined;
  name?: Host_Name_Operator | null | undefined;
  updatedAt?: Host_UpdatedAt_Operator | null | undefined;
};

export type Host_Where_Or = {
  AND?: Array<Host_Where_And | null | undefined> | null | undefined;
  OR?: Array<Host_Where_Or | null | undefined> | null | undefined;
  createdAt?: Host_CreatedAt_Operator | null | undefined;
  id?: Host_Id_Operator | null | undefined;
  name?: Host_Name_Operator | null | undefined;
  updatedAt?: Host_UpdatedAt_Operator | null | undefined;
};

export type LiveVideo_CreatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type LiveVideo_Date_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type LiveVideo_Id_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type LiveVideo_Image_Operator = {
  all?: Array<unknown> | null | undefined;
  equals?: unknown;
  exists?: boolean | null | undefined;
  in?: Array<unknown> | null | undefined;
  not_equals?: unknown;
  not_in?: Array<unknown> | null | undefined;
};

export type LiveVideo_SortableId_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type LiveVideo_Title_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type LiveVideo_UpdatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type LiveVideo_Url_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type LiveVideo_VideoId_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type LiveVideo_Where = {
  AND?: Array<LiveVideo_Where_And | null | undefined> | null | undefined;
  OR?: Array<LiveVideo_Where_Or | null | undefined> | null | undefined;
  createdAt?: LiveVideo_CreatedAt_Operator | null | undefined;
  date?: LiveVideo_Date_Operator | null | undefined;
  id?: LiveVideo_Id_Operator | null | undefined;
  image?: LiveVideo_Image_Operator | null | undefined;
  sortableId?: LiveVideo_SortableId_Operator | null | undefined;
  title?: LiveVideo_Title_Operator | null | undefined;
  updatedAt?: LiveVideo_UpdatedAt_Operator | null | undefined;
  url?: LiveVideo_Url_Operator | null | undefined;
  videoId?: LiveVideo_VideoId_Operator | null | undefined;
};

export type LiveVideo_Where_And = {
  AND?: Array<LiveVideo_Where_And | null | undefined> | null | undefined;
  OR?: Array<LiveVideo_Where_Or | null | undefined> | null | undefined;
  createdAt?: LiveVideo_CreatedAt_Operator | null | undefined;
  date?: LiveVideo_Date_Operator | null | undefined;
  id?: LiveVideo_Id_Operator | null | undefined;
  image?: LiveVideo_Image_Operator | null | undefined;
  sortableId?: LiveVideo_SortableId_Operator | null | undefined;
  title?: LiveVideo_Title_Operator | null | undefined;
  updatedAt?: LiveVideo_UpdatedAt_Operator | null | undefined;
  url?: LiveVideo_Url_Operator | null | undefined;
  videoId?: LiveVideo_VideoId_Operator | null | undefined;
};

export type LiveVideo_Where_Or = {
  AND?: Array<LiveVideo_Where_And | null | undefined> | null | undefined;
  OR?: Array<LiveVideo_Where_Or | null | undefined> | null | undefined;
  createdAt?: LiveVideo_CreatedAt_Operator | null | undefined;
  date?: LiveVideo_Date_Operator | null | undefined;
  id?: LiveVideo_Id_Operator | null | undefined;
  image?: LiveVideo_Image_Operator | null | undefined;
  sortableId?: LiveVideo_SortableId_Operator | null | undefined;
  title?: LiveVideo_Title_Operator | null | undefined;
  updatedAt?: LiveVideo_UpdatedAt_Operator | null | undefined;
  url?: LiveVideo_Url_Operator | null | undefined;
  videoId?: LiveVideo_VideoId_Operator | null | undefined;
};

export type LocaleInputType =
  | 'en'
  | 'pt';

export type NewsPost__Status_Input =
  | 'draft'
  | 'published';

export type NewsPost__Status_Operator = {
  all?: Array<NewsPost__Status_Input | null | undefined> | null | undefined;
  equals?: NewsPost__Status_Input | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<NewsPost__Status_Input | null | undefined> | null | undefined;
  not_equals?: NewsPost__Status_Input | null | undefined;
  not_in?: Array<NewsPost__Status_Input | null | undefined> | null | undefined;
};

export type NewsPost_AuthorId_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type NewsPost_AuthorName_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type NewsPost_Author_Operator = {
  all?: Array<unknown> | null | undefined;
  equals?: unknown;
  exists?: boolean | null | undefined;
  in?: Array<unknown> | null | undefined;
  not_equals?: unknown;
  not_in?: Array<unknown> | null | undefined;
};

export type NewsPost_Blurb_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type NewsPost_Content_Operator = {
  contains?: unknown;
  equals?: unknown;
  exists?: boolean | null | undefined;
  like?: unknown;
  not_equals?: unknown;
};

export type NewsPost_CreatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type NewsPost_HeyZineUrl_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type NewsPost_Id_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type NewsPost_PreviewBanner_Operator = {
  all?: Array<unknown> | null | undefined;
  equals?: unknown;
  exists?: boolean | null | undefined;
  in?: Array<unknown> | null | undefined;
  not_equals?: unknown;
  not_in?: Array<unknown> | null | undefined;
};

export type NewsPost_PublishDate_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type NewsPost_Slug_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type NewsPost_Tags_Operator = {
  all?: Array<unknown> | null | undefined;
  equals?: unknown;
  exists?: boolean | null | undefined;
  in?: Array<unknown> | null | undefined;
  not_equals?: unknown;
  not_in?: Array<unknown> | null | undefined;
};

export type NewsPost_Title_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type NewsPost_UpdatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type NewsPost_Where = {
  AND?: Array<NewsPost_Where_And | null | undefined> | null | undefined;
  OR?: Array<NewsPost_Where_Or | null | undefined> | null | undefined;
  _status?: NewsPost__Status_Operator | null | undefined;
  author?: NewsPost_Author_Operator | null | undefined;
  authorId?: NewsPost_AuthorId_Operator | null | undefined;
  authorName?: NewsPost_AuthorName_Operator | null | undefined;
  blurb?: NewsPost_Blurb_Operator | null | undefined;
  content?: NewsPost_Content_Operator | null | undefined;
  createdAt?: NewsPost_CreatedAt_Operator | null | undefined;
  heyZineUrl?: NewsPost_HeyZineUrl_Operator | null | undefined;
  id?: NewsPost_Id_Operator | null | undefined;
  previewBanner?: NewsPost_PreviewBanner_Operator | null | undefined;
  publishDate?: NewsPost_PublishDate_Operator | null | undefined;
  slug?: NewsPost_Slug_Operator | null | undefined;
  tags?: NewsPost_Tags_Operator | null | undefined;
  title?: NewsPost_Title_Operator | null | undefined;
  updatedAt?: NewsPost_UpdatedAt_Operator | null | undefined;
};

export type NewsPost_Where_And = {
  AND?: Array<NewsPost_Where_And | null | undefined> | null | undefined;
  OR?: Array<NewsPost_Where_Or | null | undefined> | null | undefined;
  _status?: NewsPost__Status_Operator | null | undefined;
  author?: NewsPost_Author_Operator | null | undefined;
  authorId?: NewsPost_AuthorId_Operator | null | undefined;
  authorName?: NewsPost_AuthorName_Operator | null | undefined;
  blurb?: NewsPost_Blurb_Operator | null | undefined;
  content?: NewsPost_Content_Operator | null | undefined;
  createdAt?: NewsPost_CreatedAt_Operator | null | undefined;
  heyZineUrl?: NewsPost_HeyZineUrl_Operator | null | undefined;
  id?: NewsPost_Id_Operator | null | undefined;
  previewBanner?: NewsPost_PreviewBanner_Operator | null | undefined;
  publishDate?: NewsPost_PublishDate_Operator | null | undefined;
  slug?: NewsPost_Slug_Operator | null | undefined;
  tags?: NewsPost_Tags_Operator | null | undefined;
  title?: NewsPost_Title_Operator | null | undefined;
  updatedAt?: NewsPost_UpdatedAt_Operator | null | undefined;
};

export type NewsPost_Where_Or = {
  AND?: Array<NewsPost_Where_And | null | undefined> | null | undefined;
  OR?: Array<NewsPost_Where_Or | null | undefined> | null | undefined;
  _status?: NewsPost__Status_Operator | null | undefined;
  author?: NewsPost_Author_Operator | null | undefined;
  authorId?: NewsPost_AuthorId_Operator | null | undefined;
  authorName?: NewsPost_AuthorName_Operator | null | undefined;
  blurb?: NewsPost_Blurb_Operator | null | undefined;
  content?: NewsPost_Content_Operator | null | undefined;
  createdAt?: NewsPost_CreatedAt_Operator | null | undefined;
  heyZineUrl?: NewsPost_HeyZineUrl_Operator | null | undefined;
  id?: NewsPost_Id_Operator | null | undefined;
  previewBanner?: NewsPost_PreviewBanner_Operator | null | undefined;
  publishDate?: NewsPost_PublishDate_Operator | null | undefined;
  slug?: NewsPost_Slug_Operator | null | undefined;
  tags?: NewsPost_Tags_Operator | null | undefined;
  title?: NewsPost_Title_Operator | null | undefined;
  updatedAt?: NewsPost_UpdatedAt_Operator | null | undefined;
};

export type Show_Active_Operator = {
  equals?: boolean | null | undefined;
  exists?: boolean | null | undefined;
  not_equals?: boolean | null | undefined;
};

export type Show_Categories_Operator = {
  all?: Array<unknown> | null | undefined;
  equals?: unknown;
  exists?: boolean | null | undefined;
  in?: Array<unknown> | null | undefined;
  not_equals?: unknown;
  not_in?: Array<unknown> | null | undefined;
};

export type Show_CoverImage_Operator = {
  all?: Array<unknown> | null | undefined;
  equals?: unknown;
  exists?: boolean | null | undefined;
  in?: Array<unknown> | null | undefined;
  not_equals?: unknown;
  not_in?: Array<unknown> | null | undefined;
};

export type Show_CreatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type Show_Description_Operator = {
  contains?: unknown;
  equals?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type Show_Id_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Show_PrimaryHosts_Operator = {
  all?: Array<unknown> | null | undefined;
  equals?: unknown;
  in?: Array<unknown> | null | undefined;
  not_equals?: unknown;
  not_in?: Array<unknown> | null | undefined;
};

export type Show_ShowName_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Show_Slug_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Show_UpdatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type Show_Where = {
  AND?: Array<Show_Where_And | null | undefined> | null | undefined;
  OR?: Array<Show_Where_Or | null | undefined> | null | undefined;
  active?: Show_Active_Operator | null | undefined;
  categories?: Show_Categories_Operator | null | undefined;
  coverImage?: Show_CoverImage_Operator | null | undefined;
  createdAt?: Show_CreatedAt_Operator | null | undefined;
  description?: Show_Description_Operator | null | undefined;
  id?: Show_Id_Operator | null | undefined;
  primaryHosts?: Show_PrimaryHosts_Operator | null | undefined;
  showName?: Show_ShowName_Operator | null | undefined;
  slug?: Show_Slug_Operator | null | undefined;
  updatedAt?: Show_UpdatedAt_Operator | null | undefined;
};

export type Show_Where_And = {
  AND?: Array<Show_Where_And | null | undefined> | null | undefined;
  OR?: Array<Show_Where_Or | null | undefined> | null | undefined;
  active?: Show_Active_Operator | null | undefined;
  categories?: Show_Categories_Operator | null | undefined;
  coverImage?: Show_CoverImage_Operator | null | undefined;
  createdAt?: Show_CreatedAt_Operator | null | undefined;
  description?: Show_Description_Operator | null | undefined;
  id?: Show_Id_Operator | null | undefined;
  primaryHosts?: Show_PrimaryHosts_Operator | null | undefined;
  showName?: Show_ShowName_Operator | null | undefined;
  slug?: Show_Slug_Operator | null | undefined;
  updatedAt?: Show_UpdatedAt_Operator | null | undefined;
};

export type Show_Where_Or = {
  AND?: Array<Show_Where_And | null | undefined> | null | undefined;
  OR?: Array<Show_Where_Or | null | undefined> | null | undefined;
  active?: Show_Active_Operator | null | undefined;
  categories?: Show_Categories_Operator | null | undefined;
  coverImage?: Show_CoverImage_Operator | null | undefined;
  createdAt?: Show_CreatedAt_Operator | null | undefined;
  description?: Show_Description_Operator | null | undefined;
  id?: Show_Id_Operator | null | undefined;
  primaryHosts?: Show_PrimaryHosts_Operator | null | undefined;
  showName?: Show_ShowName_Operator | null | undefined;
  slug?: Show_Slug_Operator | null | undefined;
  updatedAt?: Show_UpdatedAt_Operator | null | undefined;
};

export type Tag_CreatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type Tag_Id_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  exists?: boolean | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Tag_Name_Operator = {
  all?: Array<string | null | undefined> | null | undefined;
  contains?: string | null | undefined;
  equals?: string | null | undefined;
  in?: Array<string | null | undefined> | null | undefined;
  like?: string | null | undefined;
  not_equals?: string | null | undefined;
  not_in?: Array<string | null | undefined> | null | undefined;
};

export type Tag_UpdatedAt_Operator = {
  equals?: unknown;
  exists?: boolean | null | undefined;
  greater_than?: unknown;
  greater_than_equal?: unknown;
  less_than?: unknown;
  less_than_equal?: unknown;
  like?: unknown;
  not_equals?: unknown;
};

export type Tag_Where = {
  AND?: Array<Tag_Where_And | null | undefined> | null | undefined;
  OR?: Array<Tag_Where_Or | null | undefined> | null | undefined;
  createdAt?: Tag_CreatedAt_Operator | null | undefined;
  id?: Tag_Id_Operator | null | undefined;
  name?: Tag_Name_Operator | null | undefined;
  updatedAt?: Tag_UpdatedAt_Operator | null | undefined;
};

export type Tag_Where_And = {
  AND?: Array<Tag_Where_And | null | undefined> | null | undefined;
  OR?: Array<Tag_Where_Or | null | undefined> | null | undefined;
  createdAt?: Tag_CreatedAt_Operator | null | undefined;
  id?: Tag_Id_Operator | null | undefined;
  name?: Tag_Name_Operator | null | undefined;
  updatedAt?: Tag_UpdatedAt_Operator | null | undefined;
};

export type Tag_Where_Or = {
  AND?: Array<Tag_Where_And | null | undefined> | null | undefined;
  OR?: Array<Tag_Where_Or | null | undefined> | null | undefined;
  createdAt?: Tag_CreatedAt_Operator | null | undefined;
  id?: Tag_Id_Operator | null | undefined;
  name?: Tag_Name_Operator | null | undefined;
  updatedAt?: Tag_UpdatedAt_Operator | null | undefined;
};

export type ShowByFieldsQueryVariables = Exact<{
  where?: Show_Where | null | undefined;
}>;


export type ShowByFieldsQuery = { Shows: { docs: Array<{ id: string }> } | null };

export type ShowsQueryVariables = Exact<{
  where?: Show_Where | null | undefined;
}>;


export type ShowsQuery = { Shows: { docs: Array<{ slug: string }> } | null };

export type AllShowIDsQueryVariables = Exact<{
  limit?: number | null | undefined;
}>;


export type AllShowIDsQuery = { Shows: { docs: Array<{ slug: string, id: string, showName: string, primaryHosts: Array<{ name: string }> }> } | null };

export type ShowsQueryQueryVariables = Exact<{
  limit?: number | null | undefined;
}>;


export type ShowsQueryQuery = { Shows: { totalDocs: number, offset: number | null, limit: number, totalPages: number, page: number, pagingCounter: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage: number | null, nextPage: number | null, docs: Array<{ id: string, active: boolean | null, slug: string, createdAt: unknown, showName: string, description: unknown, primaryHosts: Array<{ id: string, createdAt: unknown, updatedAt: unknown, name: string }>, categories: Array<{ id: string, createdAt: unknown, updatedAt: unknown, name: string }> | null, coverImage: { alt: string | null, sizes: { lg: { url: string | null, width: number | null, height: number | null } | null, sm: { url: string | null, width: number | null, height: number | null } | null } | null } | null }> } | null };

export type CategoriesQueryVariables = Exact<{
  limit?: number | null | undefined;
}>;


export type CategoriesQuery = { Categories: { docs: Array<{ name: string }> } | null };

export type ShowsByCategoryQueryVariables = Exact<{
  categoryName: string;
}>;


export type ShowsByCategoryQuery = { ShowsByCategory: { limit: number, docs: Array<{ showName: string, id: string, slug: string, createdAt: unknown, description: unknown, categories: Array<{ name: string }> | null, primaryHosts: Array<{ name: string }>, coverImage: { alt: string | null, sizes: { lg: { url: string | null, width: number | null, height: number | null } | null, sm: { url: string | null, width: number | null, height: number | null } | null } | null } | null }> } | null };

export type ShowBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type ShowBySlugQuery = { ShowBySlug: { slug: string, showName: string, id: string, description: unknown, createdAt: unknown, categories: Array<{ name: string }> | null, primaryHosts: Array<{ name: string }>, coverImage: { alt: string | null, sizes: { lg: { url: string | null, width: number | null, height: number | null } | null } | null } | null } | null };

export type NewsPostsQueryVariables = Exact<{
  limit?: number | null | undefined;
  page?: number | null | undefined;
  where?: NewsPost_Where | null | undefined;
  sort?: string | null | undefined;
}>;


export type NewsPostsQuery = { NewsPosts: { totalDocs: number, totalPages: number, docs: Array<{ id: string, blurb: string | null, slug: string | null, publishDate: unknown, title: string | null, updatedAt: unknown, authorName: string | null, authorId: string | null, previewBanner: { url: string | null } | null }> } | null };

export type NewsPostQueryVariables = Exact<{
  newsPostId: string;
  draft?: boolean | null | undefined;
}>;


export type NewsPostQuery = { NewsPost: { authorId: string | null, authorName: string | null, blurb: string | null, content: unknown, createdAt: unknown, id: string, publishDate: unknown, slug: string | null, title: string | null, previewBanner: { url: string | null } | null, tags: Array<{ name: string, id: string }> | null } | null };

export type NewsPostBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type NewsPostBySlugQuery = { NewsPostBySlug: { authorId: string | null, authorName: string | null, blurb: string | null, content: unknown, heyZineUrl: string | null, createdAt: unknown, id: string, publishDate: unknown, slug: string | null, title: string | null, previewBanner: { url: string | null } | null, tags: Array<{ name: string, id: string }> | null } | null };

export type NewsPostContentBySlugAndLocaleQueryVariables = Exact<{
  slug: string;
  locale: string;
}>;


export type NewsPostContentBySlugAndLocaleQuery = { NewsPostBySlug: { content: unknown } | null };

export type TagsQueryVariables = Exact<{
  where?: Tag_Where | null | undefined;
}>;


export type TagsQuery = { Tags: { docs: Array<{ id: string, name: string }> } | null };

export type SearchHostsQueryVariables = Exact<{
  where?: Host_Where | null | undefined;
  limit?: number | null | undefined;
}>;


export type SearchHostsQuery = { Hosts: { docs: Array<{ name: string, id: string }> } | null };

export type MerchQueryVariables = Exact<{
  limit?: number | null | undefined;
}>;


export type MerchQuery = { Merches: { docs: Array<{ id: string, blurb: string, soldOut: boolean | null, title: string, url: string, image: { url: string | null } | null }> } | null };

export type LabelReleasesQueryVariables = Exact<{
  limit?: number | null | undefined;
}>;


export type LabelReleasesQuery = { LabelReleases: { docs: Array<{ id: string, blurb: string, title: string, url: string, image: { url: string | null } | null }> } | null };

export type LiveVideosQueryVariables = Exact<{
  limit?: number | null | undefined;
  sort?: string | null | undefined;
}>;


export type LiveVideosQuery = { LiveVideos: { docs: Array<{ id: string, title: string, url: string, date: unknown, videoId: string | null, image: { url: string | null } | null }> } | null };

export type PaginatedLiveVideosQueryVariables = Exact<{
  limit?: number | null | undefined;
  page?: number | null | undefined;
  sort?: string | null | undefined;
  where?: LiveVideo_Where | null | undefined;
}>;


export type PaginatedLiveVideosQuery = { LiveVideos: { totalDocs: number, totalPages: number, docs: Array<{ id: string, title: string, url: string, date: unknown, videoId: string | null, image: { url: string | null } | null }> } | null };

export type AboutPageQueryQueryVariables = Exact<{
  locale?: LocaleInputType | null | undefined;
}>;


export type AboutPageQueryQuery = { AboutPage: { content: unknown } | null };

export type DonatePageQueryQueryVariables = Exact<{
  locale?: LocaleInputType | null | undefined;
}>;


export type DonatePageQueryQuery = { DonatePage: { content: unknown } | null };

export type HomePageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQueryQuery = { HomePage: { announcementCards: Array<{ title: string | null, subtitle: string | null, url: string | null, newTab: boolean | null, image: { url: string | null, alt: string | null } | null }> | null } | null };

export type YoutubeChannelQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type YoutubeChannelQueryQuery = { YoutubeChannel: { isLive: boolean | null, channelId: string | null, url: string | null, videoId: string | null, imageUrl: string | null } | null };

export type OwncastQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type OwncastQueryQuery = { Owncast: { isLive: boolean | null } | null };


export const ShowByFieldsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowByFields"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Show_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Shows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ShowByFieldsQuery, ShowByFieldsQueryVariables>;
export const ShowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Shows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Show_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Shows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<ShowsQuery, ShowsQueryVariables>;
export const AllShowIDsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllShowIDs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Shows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryHosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllShowIDsQuery, AllShowIDsQueryVariables>;
export const ShowsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Shows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"primaryHosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pagingCounter"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]} as unknown as DocumentNode<ShowsQueryQuery, ShowsQueryQueryVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Categories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const ShowsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowsByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryHosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sm"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}}]}}]} as unknown as DocumentNode<ShowsByCategoryQuery, ShowsByCategoryQueryVariables>;
export const ShowBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryHosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lg"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ShowBySlugQuery, ShowBySlugQueryVariables>;
export const NewsPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NewsPost_where"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NewsPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blurb"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"previewBanner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<NewsPostsQuery, NewsPostsQueryVariables>;
export const NewsPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newsPostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NewsPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newsPostId"}}},{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"blurb"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewBanner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewsPostQuery, NewsPostQueryVariables>;
export const NewsPostBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsPostBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NewsPostBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"blurb"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"heyZineUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewBanner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewsPostBySlugQuery, NewsPostBySlugQueryVariables>;
export const NewsPostContentBySlugAndLocaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsPostContentBySlugAndLocale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NewsPostBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<NewsPostContentBySlugAndLocaleQuery, NewsPostContentBySlugAndLocaleQueryVariables>;
export const TagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Tag_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<TagsQuery, TagsQueryVariables>;
export const SearchHostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchHosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Host_where"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Hosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SearchHostsQuery, SearchHostsQueryVariables>;
export const MerchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Merch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Merches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blurb"}},{"kind":"Field","name":{"kind":"Name","value":"soldOut"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<MerchQuery, MerchQueryVariables>;
export const LabelReleasesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LabelReleases"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LabelReleases"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blurb"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<LabelReleasesQuery, LabelReleasesQueryVariables>;
export const LiveVideosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LiveVideos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LiveVideos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LiveVideosQuery, LiveVideosQueryVariables>;
export const PaginatedLiveVideosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedLiveVideos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LiveVideo_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LiveVideos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<PaginatedLiveVideosQuery, PaginatedLiveVideosQueryVariables>;
export const AboutPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AboutPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AboutPageQueryQuery, AboutPageQueryQueryVariables>;
export const DonatePageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DonatePageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DonatePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<DonatePageQueryQuery, DonatePageQueryQueryVariables>;
export const HomePageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomePageQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"HomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"announcementCards"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"newTab"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomePageQueryQuery, HomePageQueryQueryVariables>;
export const YoutubeChannelQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"YoutubeChannelQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"YoutubeChannel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<YoutubeChannelQueryQuery, YoutubeChannelQueryQueryVariables>;
export const OwncastQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OwncastQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Owncast"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isLive"}}]}}]}}]} as unknown as DocumentNode<OwncastQueryQuery, OwncastQueryQueryVariables>;