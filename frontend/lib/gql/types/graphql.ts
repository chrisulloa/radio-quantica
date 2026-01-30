/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type AboutPage = {
  __typename?: 'AboutPage';
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type AboutPageContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type AboutPageDocAccessFields = {
  __typename?: 'AboutPageDocAccessFields';
  content?: Maybe<AboutPageDocAccessFields_Content>;
  createdAt?: Maybe<AboutPageDocAccessFields_CreatedAt>;
  updatedAt?: Maybe<AboutPageDocAccessFields_UpdatedAt>;
};

export type AboutPageDocAccessFields_Content = {
  __typename?: 'AboutPageDocAccessFields_content';
  create?: Maybe<AboutPageDocAccessFields_Content_Create>;
  delete?: Maybe<AboutPageDocAccessFields_Content_Delete>;
  read?: Maybe<AboutPageDocAccessFields_Content_Read>;
  update?: Maybe<AboutPageDocAccessFields_Content_Update>;
};

export type AboutPageDocAccessFields_Content_Create = {
  __typename?: 'AboutPageDocAccessFields_content_Create';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_Content_Delete = {
  __typename?: 'AboutPageDocAccessFields_content_Delete';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_Content_Read = {
  __typename?: 'AboutPageDocAccessFields_content_Read';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_Content_Update = {
  __typename?: 'AboutPageDocAccessFields_content_Update';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_CreatedAt = {
  __typename?: 'AboutPageDocAccessFields_createdAt';
  create?: Maybe<AboutPageDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<AboutPageDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<AboutPageDocAccessFields_CreatedAt_Read>;
  update?: Maybe<AboutPageDocAccessFields_CreatedAt_Update>;
};

export type AboutPageDocAccessFields_CreatedAt_Create = {
  __typename?: 'AboutPageDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_CreatedAt_Delete = {
  __typename?: 'AboutPageDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_CreatedAt_Read = {
  __typename?: 'AboutPageDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_CreatedAt_Update = {
  __typename?: 'AboutPageDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_UpdatedAt = {
  __typename?: 'AboutPageDocAccessFields_updatedAt';
  create?: Maybe<AboutPageDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<AboutPageDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<AboutPageDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<AboutPageDocAccessFields_UpdatedAt_Update>;
};

export type AboutPageDocAccessFields_UpdatedAt_Create = {
  __typename?: 'AboutPageDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'AboutPageDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_UpdatedAt_Read = {
  __typename?: 'AboutPageDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type AboutPageDocAccessFields_UpdatedAt_Update = {
  __typename?: 'AboutPageDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type AboutPageFields = {
  __typename?: 'AboutPageFields';
  content?: Maybe<AboutPageFields_Content>;
  createdAt?: Maybe<AboutPageFields_CreatedAt>;
  updatedAt?: Maybe<AboutPageFields_UpdatedAt>;
};

export type AboutPageFields_Content = {
  __typename?: 'AboutPageFields_content';
  create?: Maybe<AboutPageFields_Content_Create>;
  delete?: Maybe<AboutPageFields_Content_Delete>;
  read?: Maybe<AboutPageFields_Content_Read>;
  update?: Maybe<AboutPageFields_Content_Update>;
};

export type AboutPageFields_Content_Create = {
  __typename?: 'AboutPageFields_content_Create';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_Content_Delete = {
  __typename?: 'AboutPageFields_content_Delete';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_Content_Read = {
  __typename?: 'AboutPageFields_content_Read';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_Content_Update = {
  __typename?: 'AboutPageFields_content_Update';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_CreatedAt = {
  __typename?: 'AboutPageFields_createdAt';
  create?: Maybe<AboutPageFields_CreatedAt_Create>;
  delete?: Maybe<AboutPageFields_CreatedAt_Delete>;
  read?: Maybe<AboutPageFields_CreatedAt_Read>;
  update?: Maybe<AboutPageFields_CreatedAt_Update>;
};

export type AboutPageFields_CreatedAt_Create = {
  __typename?: 'AboutPageFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_CreatedAt_Delete = {
  __typename?: 'AboutPageFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_CreatedAt_Read = {
  __typename?: 'AboutPageFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_CreatedAt_Update = {
  __typename?: 'AboutPageFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_UpdatedAt = {
  __typename?: 'AboutPageFields_updatedAt';
  create?: Maybe<AboutPageFields_UpdatedAt_Create>;
  delete?: Maybe<AboutPageFields_UpdatedAt_Delete>;
  read?: Maybe<AboutPageFields_UpdatedAt_Read>;
  update?: Maybe<AboutPageFields_UpdatedAt_Update>;
};

export type AboutPageFields_UpdatedAt_Create = {
  __typename?: 'AboutPageFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_UpdatedAt_Delete = {
  __typename?: 'AboutPageFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_UpdatedAt_Read = {
  __typename?: 'AboutPageFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type AboutPageFields_UpdatedAt_Update = {
  __typename?: 'AboutPageFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type AboutPageReadAccess = {
  __typename?: 'AboutPageReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AboutPageReadDocAccess = {
  __typename?: 'AboutPageReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AboutPageUpdateAccess = {
  __typename?: 'AboutPageUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type AboutPageUpdateDocAccess = {
  __typename?: 'AboutPageUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Access = {
  __typename?: 'Access';
  aboutPage?: Maybe<AboutPageAccess>;
  canAccessAdmin: Scalars['Boolean'];
  categories?: Maybe<CategoriesAccess>;
  donatePage?: Maybe<DonatePageAccess>;
  hosts?: Maybe<HostsAccess>;
  labelReleases?: Maybe<LabelReleasesAccess>;
  liveVideos?: Maybe<LiveVideosAccess>;
  media?: Maybe<MediaAccess>;
  merch?: Maybe<MerchAccess>;
  newsPosts?: Maybe<NewsPostsAccess>;
  payload_jobs?: Maybe<Payload_JobsAccess>;
  payload_kv?: Maybe<Payload_KvAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  restartLibretime?: Maybe<RestartLibretimeAccess>;
  shows?: Maybe<ShowsAccess>;
  tags?: Maybe<TagsAccess>;
  users?: Maybe<UsersAccess>;
};

export type Categories = {
  __typename?: 'Categories';
  docs: Array<Category>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type CategoriesCreateAccess = {
  __typename?: 'CategoriesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesCreateDocAccess = {
  __typename?: 'CategoriesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesDeleteAccess = {
  __typename?: 'CategoriesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesDeleteDocAccess = {
  __typename?: 'CategoriesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesDocAccessFields = {
  __typename?: 'CategoriesDocAccessFields';
  createdAt?: Maybe<CategoriesDocAccessFields_CreatedAt>;
  name?: Maybe<CategoriesDocAccessFields_Name>;
  updatedAt?: Maybe<CategoriesDocAccessFields_UpdatedAt>;
};

export type CategoriesDocAccessFields_CreatedAt = {
  __typename?: 'CategoriesDocAccessFields_createdAt';
  create?: Maybe<CategoriesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_CreatedAt_Update>;
};

export type CategoriesDocAccessFields_CreatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_CreatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_CreatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Name = {
  __typename?: 'CategoriesDocAccessFields_name';
  create?: Maybe<CategoriesDocAccessFields_Name_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Name_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Name_Read>;
  update?: Maybe<CategoriesDocAccessFields_Name_Update>;
};

export type CategoriesDocAccessFields_Name_Create = {
  __typename?: 'CategoriesDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Name_Delete = {
  __typename?: 'CategoriesDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Name_Read = {
  __typename?: 'CategoriesDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_Name_Update = {
  __typename?: 'CategoriesDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_UpdatedAt = {
  __typename?: 'CategoriesDocAccessFields_updatedAt';
  create?: Maybe<CategoriesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_UpdatedAt_Update>;
};

export type CategoriesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesFields = {
  __typename?: 'CategoriesFields';
  createdAt?: Maybe<CategoriesFields_CreatedAt>;
  name?: Maybe<CategoriesFields_Name>;
  updatedAt?: Maybe<CategoriesFields_UpdatedAt>;
};

export type CategoriesFields_CreatedAt = {
  __typename?: 'CategoriesFields_createdAt';
  create?: Maybe<CategoriesFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesFields_CreatedAt_Read>;
  update?: Maybe<CategoriesFields_CreatedAt_Update>;
};

export type CategoriesFields_CreatedAt_Create = {
  __typename?: 'CategoriesFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_CreatedAt_Delete = {
  __typename?: 'CategoriesFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_CreatedAt_Read = {
  __typename?: 'CategoriesFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_CreatedAt_Update = {
  __typename?: 'CategoriesFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Name = {
  __typename?: 'CategoriesFields_name';
  create?: Maybe<CategoriesFields_Name_Create>;
  delete?: Maybe<CategoriesFields_Name_Delete>;
  read?: Maybe<CategoriesFields_Name_Read>;
  update?: Maybe<CategoriesFields_Name_Update>;
};

export type CategoriesFields_Name_Create = {
  __typename?: 'CategoriesFields_name_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Name_Delete = {
  __typename?: 'CategoriesFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Name_Read = {
  __typename?: 'CategoriesFields_name_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_Name_Update = {
  __typename?: 'CategoriesFields_name_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_UpdatedAt = {
  __typename?: 'CategoriesFields_updatedAt';
  create?: Maybe<CategoriesFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesFields_UpdatedAt_Update>;
};

export type CategoriesFields_UpdatedAt_Create = {
  __typename?: 'CategoriesFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_UpdatedAt_Read = {
  __typename?: 'CategoriesFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type CategoriesFields_UpdatedAt_Update = {
  __typename?: 'CategoriesFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type CategoriesReadAccess = {
  __typename?: 'CategoriesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesReadDocAccess = {
  __typename?: 'CategoriesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesUpdateAccess = {
  __typename?: 'CategoriesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type CategoriesUpdateDocAccess = {
  __typename?: 'CategoriesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Category_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Category_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Category_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Category_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Category_Where = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  name?: InputMaybe<Category_Name_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  name?: InputMaybe<Category_Name_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  name?: InputMaybe<Category_Name_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type DonatePage = {
  __typename?: 'DonatePage';
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type DonatePageContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};

export type DonatePageDocAccessFields = {
  __typename?: 'DonatePageDocAccessFields';
  content?: Maybe<DonatePageDocAccessFields_Content>;
  createdAt?: Maybe<DonatePageDocAccessFields_CreatedAt>;
  updatedAt?: Maybe<DonatePageDocAccessFields_UpdatedAt>;
};

export type DonatePageDocAccessFields_Content = {
  __typename?: 'DonatePageDocAccessFields_content';
  create?: Maybe<DonatePageDocAccessFields_Content_Create>;
  delete?: Maybe<DonatePageDocAccessFields_Content_Delete>;
  read?: Maybe<DonatePageDocAccessFields_Content_Read>;
  update?: Maybe<DonatePageDocAccessFields_Content_Update>;
};

export type DonatePageDocAccessFields_Content_Create = {
  __typename?: 'DonatePageDocAccessFields_content_Create';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_Content_Delete = {
  __typename?: 'DonatePageDocAccessFields_content_Delete';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_Content_Read = {
  __typename?: 'DonatePageDocAccessFields_content_Read';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_Content_Update = {
  __typename?: 'DonatePageDocAccessFields_content_Update';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_CreatedAt = {
  __typename?: 'DonatePageDocAccessFields_createdAt';
  create?: Maybe<DonatePageDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<DonatePageDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<DonatePageDocAccessFields_CreatedAt_Read>;
  update?: Maybe<DonatePageDocAccessFields_CreatedAt_Update>;
};

export type DonatePageDocAccessFields_CreatedAt_Create = {
  __typename?: 'DonatePageDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_CreatedAt_Delete = {
  __typename?: 'DonatePageDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_CreatedAt_Read = {
  __typename?: 'DonatePageDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_CreatedAt_Update = {
  __typename?: 'DonatePageDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_UpdatedAt = {
  __typename?: 'DonatePageDocAccessFields_updatedAt';
  create?: Maybe<DonatePageDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<DonatePageDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<DonatePageDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<DonatePageDocAccessFields_UpdatedAt_Update>;
};

export type DonatePageDocAccessFields_UpdatedAt_Create = {
  __typename?: 'DonatePageDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'DonatePageDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_UpdatedAt_Read = {
  __typename?: 'DonatePageDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type DonatePageDocAccessFields_UpdatedAt_Update = {
  __typename?: 'DonatePageDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type DonatePageFields = {
  __typename?: 'DonatePageFields';
  content?: Maybe<DonatePageFields_Content>;
  createdAt?: Maybe<DonatePageFields_CreatedAt>;
  updatedAt?: Maybe<DonatePageFields_UpdatedAt>;
};

export type DonatePageFields_Content = {
  __typename?: 'DonatePageFields_content';
  create?: Maybe<DonatePageFields_Content_Create>;
  delete?: Maybe<DonatePageFields_Content_Delete>;
  read?: Maybe<DonatePageFields_Content_Read>;
  update?: Maybe<DonatePageFields_Content_Update>;
};

export type DonatePageFields_Content_Create = {
  __typename?: 'DonatePageFields_content_Create';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_Content_Delete = {
  __typename?: 'DonatePageFields_content_Delete';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_Content_Read = {
  __typename?: 'DonatePageFields_content_Read';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_Content_Update = {
  __typename?: 'DonatePageFields_content_Update';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_CreatedAt = {
  __typename?: 'DonatePageFields_createdAt';
  create?: Maybe<DonatePageFields_CreatedAt_Create>;
  delete?: Maybe<DonatePageFields_CreatedAt_Delete>;
  read?: Maybe<DonatePageFields_CreatedAt_Read>;
  update?: Maybe<DonatePageFields_CreatedAt_Update>;
};

export type DonatePageFields_CreatedAt_Create = {
  __typename?: 'DonatePageFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_CreatedAt_Delete = {
  __typename?: 'DonatePageFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_CreatedAt_Read = {
  __typename?: 'DonatePageFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_CreatedAt_Update = {
  __typename?: 'DonatePageFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_UpdatedAt = {
  __typename?: 'DonatePageFields_updatedAt';
  create?: Maybe<DonatePageFields_UpdatedAt_Create>;
  delete?: Maybe<DonatePageFields_UpdatedAt_Delete>;
  read?: Maybe<DonatePageFields_UpdatedAt_Read>;
  update?: Maybe<DonatePageFields_UpdatedAt_Update>;
};

export type DonatePageFields_UpdatedAt_Create = {
  __typename?: 'DonatePageFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_UpdatedAt_Delete = {
  __typename?: 'DonatePageFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_UpdatedAt_Read = {
  __typename?: 'DonatePageFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type DonatePageFields_UpdatedAt_Update = {
  __typename?: 'DonatePageFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type DonatePageReadAccess = {
  __typename?: 'DonatePageReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DonatePageReadDocAccess = {
  __typename?: 'DonatePageReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DonatePageUpdateAccess = {
  __typename?: 'DonatePageUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type DonatePageUpdateDocAccess = {
  __typename?: 'DonatePageUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export enum FallbackLocaleInputType {
  En = 'en',
  None = 'none',
  Pt = 'pt'
}

export type GoFundMe = {
  __typename?: 'GoFundMe';
  currentAmount?: Maybe<Scalars['Float']>;
  donationCount?: Maybe<Scalars['Int']>;
  goalAmount?: Maybe<Scalars['Float']>;
  uniqueDonorCount?: Maybe<Scalars['Int']>;
};

export type Host = {
  __typename?: 'Host';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Host_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Host_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Host_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Host_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Host_Where = {
  AND?: InputMaybe<Array<InputMaybe<Host_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Host_Where_Or>>>;
  createdAt?: InputMaybe<Host_CreatedAt_Operator>;
  id?: InputMaybe<Host_Id_Operator>;
  name?: InputMaybe<Host_Name_Operator>;
  updatedAt?: InputMaybe<Host_UpdatedAt_Operator>;
};

export type Host_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Host_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Host_Where_Or>>>;
  createdAt?: InputMaybe<Host_CreatedAt_Operator>;
  id?: InputMaybe<Host_Id_Operator>;
  name?: InputMaybe<Host_Name_Operator>;
  updatedAt?: InputMaybe<Host_UpdatedAt_Operator>;
};

export type Host_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Host_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Host_Where_Or>>>;
  createdAt?: InputMaybe<Host_CreatedAt_Operator>;
  id?: InputMaybe<Host_Id_Operator>;
  name?: InputMaybe<Host_Name_Operator>;
  updatedAt?: InputMaybe<Host_UpdatedAt_Operator>;
};

export type Hosts = {
  __typename?: 'Hosts';
  docs: Array<Host>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type HostsCreateAccess = {
  __typename?: 'HostsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HostsCreateDocAccess = {
  __typename?: 'HostsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HostsDeleteAccess = {
  __typename?: 'HostsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HostsDeleteDocAccess = {
  __typename?: 'HostsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HostsDocAccessFields = {
  __typename?: 'HostsDocAccessFields';
  createdAt?: Maybe<HostsDocAccessFields_CreatedAt>;
  name?: Maybe<HostsDocAccessFields_Name>;
  updatedAt?: Maybe<HostsDocAccessFields_UpdatedAt>;
};

export type HostsDocAccessFields_CreatedAt = {
  __typename?: 'HostsDocAccessFields_createdAt';
  create?: Maybe<HostsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<HostsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<HostsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<HostsDocAccessFields_CreatedAt_Update>;
};

export type HostsDocAccessFields_CreatedAt_Create = {
  __typename?: 'HostsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'HostsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_CreatedAt_Read = {
  __typename?: 'HostsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_CreatedAt_Update = {
  __typename?: 'HostsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Name = {
  __typename?: 'HostsDocAccessFields_name';
  create?: Maybe<HostsDocAccessFields_Name_Create>;
  delete?: Maybe<HostsDocAccessFields_Name_Delete>;
  read?: Maybe<HostsDocAccessFields_Name_Read>;
  update?: Maybe<HostsDocAccessFields_Name_Update>;
};

export type HostsDocAccessFields_Name_Create = {
  __typename?: 'HostsDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Name_Delete = {
  __typename?: 'HostsDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Name_Read = {
  __typename?: 'HostsDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Name_Update = {
  __typename?: 'HostsDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_UpdatedAt = {
  __typename?: 'HostsDocAccessFields_updatedAt';
  create?: Maybe<HostsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<HostsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<HostsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<HostsDocAccessFields_UpdatedAt_Update>;
};

export type HostsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'HostsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'HostsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'HostsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'HostsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type HostsFields = {
  __typename?: 'HostsFields';
  createdAt?: Maybe<HostsFields_CreatedAt>;
  name?: Maybe<HostsFields_Name>;
  updatedAt?: Maybe<HostsFields_UpdatedAt>;
};

export type HostsFields_CreatedAt = {
  __typename?: 'HostsFields_createdAt';
  create?: Maybe<HostsFields_CreatedAt_Create>;
  delete?: Maybe<HostsFields_CreatedAt_Delete>;
  read?: Maybe<HostsFields_CreatedAt_Read>;
  update?: Maybe<HostsFields_CreatedAt_Update>;
};

export type HostsFields_CreatedAt_Create = {
  __typename?: 'HostsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type HostsFields_CreatedAt_Delete = {
  __typename?: 'HostsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type HostsFields_CreatedAt_Read = {
  __typename?: 'HostsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type HostsFields_CreatedAt_Update = {
  __typename?: 'HostsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type HostsFields_Name = {
  __typename?: 'HostsFields_name';
  create?: Maybe<HostsFields_Name_Create>;
  delete?: Maybe<HostsFields_Name_Delete>;
  read?: Maybe<HostsFields_Name_Read>;
  update?: Maybe<HostsFields_Name_Update>;
};

export type HostsFields_Name_Create = {
  __typename?: 'HostsFields_name_Create';
  permission: Scalars['Boolean'];
};

export type HostsFields_Name_Delete = {
  __typename?: 'HostsFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type HostsFields_Name_Read = {
  __typename?: 'HostsFields_name_Read';
  permission: Scalars['Boolean'];
};

export type HostsFields_Name_Update = {
  __typename?: 'HostsFields_name_Update';
  permission: Scalars['Boolean'];
};

export type HostsFields_UpdatedAt = {
  __typename?: 'HostsFields_updatedAt';
  create?: Maybe<HostsFields_UpdatedAt_Create>;
  delete?: Maybe<HostsFields_UpdatedAt_Delete>;
  read?: Maybe<HostsFields_UpdatedAt_Read>;
  update?: Maybe<HostsFields_UpdatedAt_Update>;
};

export type HostsFields_UpdatedAt_Create = {
  __typename?: 'HostsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type HostsFields_UpdatedAt_Delete = {
  __typename?: 'HostsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type HostsFields_UpdatedAt_Read = {
  __typename?: 'HostsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type HostsFields_UpdatedAt_Update = {
  __typename?: 'HostsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type HostsReadAccess = {
  __typename?: 'HostsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HostsReadDocAccess = {
  __typename?: 'HostsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HostsUpdateAccess = {
  __typename?: 'HostsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type HostsUpdateDocAccess = {
  __typename?: 'HostsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LabelRelease = {
  __typename?: 'LabelRelease';
  blurb: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image?: Maybe<Media>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};


export type LabelReleaseImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type LabelRelease_Blurb_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LabelRelease_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type LabelRelease_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LabelRelease_Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type LabelRelease_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LabelRelease_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type LabelRelease_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LabelRelease_Where = {
  AND?: InputMaybe<Array<InputMaybe<LabelRelease_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LabelRelease_Where_Or>>>;
  blurb?: InputMaybe<LabelRelease_Blurb_Operator>;
  createdAt?: InputMaybe<LabelRelease_CreatedAt_Operator>;
  id?: InputMaybe<LabelRelease_Id_Operator>;
  image?: InputMaybe<LabelRelease_Image_Operator>;
  title?: InputMaybe<LabelRelease_Title_Operator>;
  updatedAt?: InputMaybe<LabelRelease_UpdatedAt_Operator>;
  url?: InputMaybe<LabelRelease_Url_Operator>;
};

export type LabelRelease_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<LabelRelease_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LabelRelease_Where_Or>>>;
  blurb?: InputMaybe<LabelRelease_Blurb_Operator>;
  createdAt?: InputMaybe<LabelRelease_CreatedAt_Operator>;
  id?: InputMaybe<LabelRelease_Id_Operator>;
  image?: InputMaybe<LabelRelease_Image_Operator>;
  title?: InputMaybe<LabelRelease_Title_Operator>;
  updatedAt?: InputMaybe<LabelRelease_UpdatedAt_Operator>;
  url?: InputMaybe<LabelRelease_Url_Operator>;
};

export type LabelRelease_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<LabelRelease_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LabelRelease_Where_Or>>>;
  blurb?: InputMaybe<LabelRelease_Blurb_Operator>;
  createdAt?: InputMaybe<LabelRelease_CreatedAt_Operator>;
  id?: InputMaybe<LabelRelease_Id_Operator>;
  image?: InputMaybe<LabelRelease_Image_Operator>;
  title?: InputMaybe<LabelRelease_Title_Operator>;
  updatedAt?: InputMaybe<LabelRelease_UpdatedAt_Operator>;
  url?: InputMaybe<LabelRelease_Url_Operator>;
};

export type LabelReleases = {
  __typename?: 'LabelReleases';
  docs: Array<LabelRelease>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type LabelReleasesCreateAccess = {
  __typename?: 'LabelReleasesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LabelReleasesCreateDocAccess = {
  __typename?: 'LabelReleasesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LabelReleasesDeleteAccess = {
  __typename?: 'LabelReleasesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LabelReleasesDeleteDocAccess = {
  __typename?: 'LabelReleasesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LabelReleasesDocAccessFields = {
  __typename?: 'LabelReleasesDocAccessFields';
  blurb?: Maybe<LabelReleasesDocAccessFields_Blurb>;
  createdAt?: Maybe<LabelReleasesDocAccessFields_CreatedAt>;
  image?: Maybe<LabelReleasesDocAccessFields_Image>;
  title?: Maybe<LabelReleasesDocAccessFields_Title>;
  updatedAt?: Maybe<LabelReleasesDocAccessFields_UpdatedAt>;
  url?: Maybe<LabelReleasesDocAccessFields_Url>;
};

export type LabelReleasesDocAccessFields_Blurb = {
  __typename?: 'LabelReleasesDocAccessFields_blurb';
  create?: Maybe<LabelReleasesDocAccessFields_Blurb_Create>;
  delete?: Maybe<LabelReleasesDocAccessFields_Blurb_Delete>;
  read?: Maybe<LabelReleasesDocAccessFields_Blurb_Read>;
  update?: Maybe<LabelReleasesDocAccessFields_Blurb_Update>;
};

export type LabelReleasesDocAccessFields_Blurb_Create = {
  __typename?: 'LabelReleasesDocAccessFields_blurb_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Blurb_Delete = {
  __typename?: 'LabelReleasesDocAccessFields_blurb_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Blurb_Read = {
  __typename?: 'LabelReleasesDocAccessFields_blurb_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Blurb_Update = {
  __typename?: 'LabelReleasesDocAccessFields_blurb_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_CreatedAt = {
  __typename?: 'LabelReleasesDocAccessFields_createdAt';
  create?: Maybe<LabelReleasesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<LabelReleasesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<LabelReleasesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<LabelReleasesDocAccessFields_CreatedAt_Update>;
};

export type LabelReleasesDocAccessFields_CreatedAt_Create = {
  __typename?: 'LabelReleasesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'LabelReleasesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_CreatedAt_Read = {
  __typename?: 'LabelReleasesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_CreatedAt_Update = {
  __typename?: 'LabelReleasesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Image = {
  __typename?: 'LabelReleasesDocAccessFields_image';
  create?: Maybe<LabelReleasesDocAccessFields_Image_Create>;
  delete?: Maybe<LabelReleasesDocAccessFields_Image_Delete>;
  read?: Maybe<LabelReleasesDocAccessFields_Image_Read>;
  update?: Maybe<LabelReleasesDocAccessFields_Image_Update>;
};

export type LabelReleasesDocAccessFields_Image_Create = {
  __typename?: 'LabelReleasesDocAccessFields_image_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Image_Delete = {
  __typename?: 'LabelReleasesDocAccessFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Image_Read = {
  __typename?: 'LabelReleasesDocAccessFields_image_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Image_Update = {
  __typename?: 'LabelReleasesDocAccessFields_image_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Title = {
  __typename?: 'LabelReleasesDocAccessFields_title';
  create?: Maybe<LabelReleasesDocAccessFields_Title_Create>;
  delete?: Maybe<LabelReleasesDocAccessFields_Title_Delete>;
  read?: Maybe<LabelReleasesDocAccessFields_Title_Read>;
  update?: Maybe<LabelReleasesDocAccessFields_Title_Update>;
};

export type LabelReleasesDocAccessFields_Title_Create = {
  __typename?: 'LabelReleasesDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Title_Delete = {
  __typename?: 'LabelReleasesDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Title_Read = {
  __typename?: 'LabelReleasesDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Title_Update = {
  __typename?: 'LabelReleasesDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_UpdatedAt = {
  __typename?: 'LabelReleasesDocAccessFields_updatedAt';
  create?: Maybe<LabelReleasesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<LabelReleasesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<LabelReleasesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<LabelReleasesDocAccessFields_UpdatedAt_Update>;
};

export type LabelReleasesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'LabelReleasesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'LabelReleasesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'LabelReleasesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'LabelReleasesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Url = {
  __typename?: 'LabelReleasesDocAccessFields_url';
  create?: Maybe<LabelReleasesDocAccessFields_Url_Create>;
  delete?: Maybe<LabelReleasesDocAccessFields_Url_Delete>;
  read?: Maybe<LabelReleasesDocAccessFields_Url_Read>;
  update?: Maybe<LabelReleasesDocAccessFields_Url_Update>;
};

export type LabelReleasesDocAccessFields_Url_Create = {
  __typename?: 'LabelReleasesDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Url_Delete = {
  __typename?: 'LabelReleasesDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Url_Read = {
  __typename?: 'LabelReleasesDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesDocAccessFields_Url_Update = {
  __typename?: 'LabelReleasesDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields = {
  __typename?: 'LabelReleasesFields';
  blurb?: Maybe<LabelReleasesFields_Blurb>;
  createdAt?: Maybe<LabelReleasesFields_CreatedAt>;
  image?: Maybe<LabelReleasesFields_Image>;
  title?: Maybe<LabelReleasesFields_Title>;
  updatedAt?: Maybe<LabelReleasesFields_UpdatedAt>;
  url?: Maybe<LabelReleasesFields_Url>;
};

export type LabelReleasesFields_Blurb = {
  __typename?: 'LabelReleasesFields_blurb';
  create?: Maybe<LabelReleasesFields_Blurb_Create>;
  delete?: Maybe<LabelReleasesFields_Blurb_Delete>;
  read?: Maybe<LabelReleasesFields_Blurb_Read>;
  update?: Maybe<LabelReleasesFields_Blurb_Update>;
};

export type LabelReleasesFields_Blurb_Create = {
  __typename?: 'LabelReleasesFields_blurb_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Blurb_Delete = {
  __typename?: 'LabelReleasesFields_blurb_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Blurb_Read = {
  __typename?: 'LabelReleasesFields_blurb_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Blurb_Update = {
  __typename?: 'LabelReleasesFields_blurb_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_CreatedAt = {
  __typename?: 'LabelReleasesFields_createdAt';
  create?: Maybe<LabelReleasesFields_CreatedAt_Create>;
  delete?: Maybe<LabelReleasesFields_CreatedAt_Delete>;
  read?: Maybe<LabelReleasesFields_CreatedAt_Read>;
  update?: Maybe<LabelReleasesFields_CreatedAt_Update>;
};

export type LabelReleasesFields_CreatedAt_Create = {
  __typename?: 'LabelReleasesFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_CreatedAt_Delete = {
  __typename?: 'LabelReleasesFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_CreatedAt_Read = {
  __typename?: 'LabelReleasesFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_CreatedAt_Update = {
  __typename?: 'LabelReleasesFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Image = {
  __typename?: 'LabelReleasesFields_image';
  create?: Maybe<LabelReleasesFields_Image_Create>;
  delete?: Maybe<LabelReleasesFields_Image_Delete>;
  read?: Maybe<LabelReleasesFields_Image_Read>;
  update?: Maybe<LabelReleasesFields_Image_Update>;
};

export type LabelReleasesFields_Image_Create = {
  __typename?: 'LabelReleasesFields_image_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Image_Delete = {
  __typename?: 'LabelReleasesFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Image_Read = {
  __typename?: 'LabelReleasesFields_image_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Image_Update = {
  __typename?: 'LabelReleasesFields_image_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Title = {
  __typename?: 'LabelReleasesFields_title';
  create?: Maybe<LabelReleasesFields_Title_Create>;
  delete?: Maybe<LabelReleasesFields_Title_Delete>;
  read?: Maybe<LabelReleasesFields_Title_Read>;
  update?: Maybe<LabelReleasesFields_Title_Update>;
};

export type LabelReleasesFields_Title_Create = {
  __typename?: 'LabelReleasesFields_title_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Title_Delete = {
  __typename?: 'LabelReleasesFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Title_Read = {
  __typename?: 'LabelReleasesFields_title_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Title_Update = {
  __typename?: 'LabelReleasesFields_title_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_UpdatedAt = {
  __typename?: 'LabelReleasesFields_updatedAt';
  create?: Maybe<LabelReleasesFields_UpdatedAt_Create>;
  delete?: Maybe<LabelReleasesFields_UpdatedAt_Delete>;
  read?: Maybe<LabelReleasesFields_UpdatedAt_Read>;
  update?: Maybe<LabelReleasesFields_UpdatedAt_Update>;
};

export type LabelReleasesFields_UpdatedAt_Create = {
  __typename?: 'LabelReleasesFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_UpdatedAt_Delete = {
  __typename?: 'LabelReleasesFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_UpdatedAt_Read = {
  __typename?: 'LabelReleasesFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_UpdatedAt_Update = {
  __typename?: 'LabelReleasesFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Url = {
  __typename?: 'LabelReleasesFields_url';
  create?: Maybe<LabelReleasesFields_Url_Create>;
  delete?: Maybe<LabelReleasesFields_Url_Delete>;
  read?: Maybe<LabelReleasesFields_Url_Read>;
  update?: Maybe<LabelReleasesFields_Url_Update>;
};

export type LabelReleasesFields_Url_Create = {
  __typename?: 'LabelReleasesFields_url_Create';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Url_Delete = {
  __typename?: 'LabelReleasesFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Url_Read = {
  __typename?: 'LabelReleasesFields_url_Read';
  permission: Scalars['Boolean'];
};

export type LabelReleasesFields_Url_Update = {
  __typename?: 'LabelReleasesFields_url_Update';
  permission: Scalars['Boolean'];
};

export type LabelReleasesReadAccess = {
  __typename?: 'LabelReleasesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LabelReleasesReadDocAccess = {
  __typename?: 'LabelReleasesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LabelReleasesUpdateAccess = {
  __typename?: 'LabelReleasesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LabelReleasesUpdateDocAccess = {
  __typename?: 'LabelReleasesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LiveVideo = {
  __typename?: 'LiveVideo';
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image?: Maybe<Media>;
  sortableId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  videoId?: Maybe<Scalars['String']>;
};


export type LiveVideoImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type LiveVideo_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type LiveVideo_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type LiveVideo_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LiveVideo_Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type LiveVideo_SortableId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LiveVideo_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LiveVideo_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type LiveVideo_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LiveVideo_VideoId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type LiveVideo_Where = {
  AND?: InputMaybe<Array<InputMaybe<LiveVideo_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LiveVideo_Where_Or>>>;
  createdAt?: InputMaybe<LiveVideo_CreatedAt_Operator>;
  date?: InputMaybe<LiveVideo_Date_Operator>;
  id?: InputMaybe<LiveVideo_Id_Operator>;
  image?: InputMaybe<LiveVideo_Image_Operator>;
  sortableId?: InputMaybe<LiveVideo_SortableId_Operator>;
  title?: InputMaybe<LiveVideo_Title_Operator>;
  updatedAt?: InputMaybe<LiveVideo_UpdatedAt_Operator>;
  url?: InputMaybe<LiveVideo_Url_Operator>;
  videoId?: InputMaybe<LiveVideo_VideoId_Operator>;
};

export type LiveVideo_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<LiveVideo_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LiveVideo_Where_Or>>>;
  createdAt?: InputMaybe<LiveVideo_CreatedAt_Operator>;
  date?: InputMaybe<LiveVideo_Date_Operator>;
  id?: InputMaybe<LiveVideo_Id_Operator>;
  image?: InputMaybe<LiveVideo_Image_Operator>;
  sortableId?: InputMaybe<LiveVideo_SortableId_Operator>;
  title?: InputMaybe<LiveVideo_Title_Operator>;
  updatedAt?: InputMaybe<LiveVideo_UpdatedAt_Operator>;
  url?: InputMaybe<LiveVideo_Url_Operator>;
  videoId?: InputMaybe<LiveVideo_VideoId_Operator>;
};

export type LiveVideo_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<LiveVideo_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LiveVideo_Where_Or>>>;
  createdAt?: InputMaybe<LiveVideo_CreatedAt_Operator>;
  date?: InputMaybe<LiveVideo_Date_Operator>;
  id?: InputMaybe<LiveVideo_Id_Operator>;
  image?: InputMaybe<LiveVideo_Image_Operator>;
  sortableId?: InputMaybe<LiveVideo_SortableId_Operator>;
  title?: InputMaybe<LiveVideo_Title_Operator>;
  updatedAt?: InputMaybe<LiveVideo_UpdatedAt_Operator>;
  url?: InputMaybe<LiveVideo_Url_Operator>;
  videoId?: InputMaybe<LiveVideo_VideoId_Operator>;
};

export type LiveVideos = {
  __typename?: 'LiveVideos';
  docs: Array<LiveVideo>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type LiveVideosCreateAccess = {
  __typename?: 'LiveVideosCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LiveVideosCreateDocAccess = {
  __typename?: 'LiveVideosCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LiveVideosDeleteAccess = {
  __typename?: 'LiveVideosDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LiveVideosDeleteDocAccess = {
  __typename?: 'LiveVideosDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LiveVideosDocAccessFields = {
  __typename?: 'LiveVideosDocAccessFields';
  createdAt?: Maybe<LiveVideosDocAccessFields_CreatedAt>;
  date?: Maybe<LiveVideosDocAccessFields_Date>;
  image?: Maybe<LiveVideosDocAccessFields_Image>;
  sortableId?: Maybe<LiveVideosDocAccessFields_SortableId>;
  title?: Maybe<LiveVideosDocAccessFields_Title>;
  updatedAt?: Maybe<LiveVideosDocAccessFields_UpdatedAt>;
  url?: Maybe<LiveVideosDocAccessFields_Url>;
  videoId?: Maybe<LiveVideosDocAccessFields_VideoId>;
};

export type LiveVideosDocAccessFields_CreatedAt = {
  __typename?: 'LiveVideosDocAccessFields_createdAt';
  create?: Maybe<LiveVideosDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<LiveVideosDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<LiveVideosDocAccessFields_CreatedAt_Read>;
  update?: Maybe<LiveVideosDocAccessFields_CreatedAt_Update>;
};

export type LiveVideosDocAccessFields_CreatedAt_Create = {
  __typename?: 'LiveVideosDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_CreatedAt_Delete = {
  __typename?: 'LiveVideosDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_CreatedAt_Read = {
  __typename?: 'LiveVideosDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_CreatedAt_Update = {
  __typename?: 'LiveVideosDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Date = {
  __typename?: 'LiveVideosDocAccessFields_date';
  create?: Maybe<LiveVideosDocAccessFields_Date_Create>;
  delete?: Maybe<LiveVideosDocAccessFields_Date_Delete>;
  read?: Maybe<LiveVideosDocAccessFields_Date_Read>;
  update?: Maybe<LiveVideosDocAccessFields_Date_Update>;
};

export type LiveVideosDocAccessFields_Date_Create = {
  __typename?: 'LiveVideosDocAccessFields_date_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Date_Delete = {
  __typename?: 'LiveVideosDocAccessFields_date_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Date_Read = {
  __typename?: 'LiveVideosDocAccessFields_date_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Date_Update = {
  __typename?: 'LiveVideosDocAccessFields_date_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Image = {
  __typename?: 'LiveVideosDocAccessFields_image';
  create?: Maybe<LiveVideosDocAccessFields_Image_Create>;
  delete?: Maybe<LiveVideosDocAccessFields_Image_Delete>;
  read?: Maybe<LiveVideosDocAccessFields_Image_Read>;
  update?: Maybe<LiveVideosDocAccessFields_Image_Update>;
};

export type LiveVideosDocAccessFields_Image_Create = {
  __typename?: 'LiveVideosDocAccessFields_image_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Image_Delete = {
  __typename?: 'LiveVideosDocAccessFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Image_Read = {
  __typename?: 'LiveVideosDocAccessFields_image_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Image_Update = {
  __typename?: 'LiveVideosDocAccessFields_image_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_SortableId = {
  __typename?: 'LiveVideosDocAccessFields_sortableId';
  create?: Maybe<LiveVideosDocAccessFields_SortableId_Create>;
  delete?: Maybe<LiveVideosDocAccessFields_SortableId_Delete>;
  read?: Maybe<LiveVideosDocAccessFields_SortableId_Read>;
  update?: Maybe<LiveVideosDocAccessFields_SortableId_Update>;
};

export type LiveVideosDocAccessFields_SortableId_Create = {
  __typename?: 'LiveVideosDocAccessFields_sortableId_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_SortableId_Delete = {
  __typename?: 'LiveVideosDocAccessFields_sortableId_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_SortableId_Read = {
  __typename?: 'LiveVideosDocAccessFields_sortableId_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_SortableId_Update = {
  __typename?: 'LiveVideosDocAccessFields_sortableId_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Title = {
  __typename?: 'LiveVideosDocAccessFields_title';
  create?: Maybe<LiveVideosDocAccessFields_Title_Create>;
  delete?: Maybe<LiveVideosDocAccessFields_Title_Delete>;
  read?: Maybe<LiveVideosDocAccessFields_Title_Read>;
  update?: Maybe<LiveVideosDocAccessFields_Title_Update>;
};

export type LiveVideosDocAccessFields_Title_Create = {
  __typename?: 'LiveVideosDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Title_Delete = {
  __typename?: 'LiveVideosDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Title_Read = {
  __typename?: 'LiveVideosDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Title_Update = {
  __typename?: 'LiveVideosDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_UpdatedAt = {
  __typename?: 'LiveVideosDocAccessFields_updatedAt';
  create?: Maybe<LiveVideosDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<LiveVideosDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<LiveVideosDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<LiveVideosDocAccessFields_UpdatedAt_Update>;
};

export type LiveVideosDocAccessFields_UpdatedAt_Create = {
  __typename?: 'LiveVideosDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'LiveVideosDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_UpdatedAt_Read = {
  __typename?: 'LiveVideosDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_UpdatedAt_Update = {
  __typename?: 'LiveVideosDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Url = {
  __typename?: 'LiveVideosDocAccessFields_url';
  create?: Maybe<LiveVideosDocAccessFields_Url_Create>;
  delete?: Maybe<LiveVideosDocAccessFields_Url_Delete>;
  read?: Maybe<LiveVideosDocAccessFields_Url_Read>;
  update?: Maybe<LiveVideosDocAccessFields_Url_Update>;
};

export type LiveVideosDocAccessFields_Url_Create = {
  __typename?: 'LiveVideosDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Url_Delete = {
  __typename?: 'LiveVideosDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Url_Read = {
  __typename?: 'LiveVideosDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_Url_Update = {
  __typename?: 'LiveVideosDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_VideoId = {
  __typename?: 'LiveVideosDocAccessFields_videoId';
  create?: Maybe<LiveVideosDocAccessFields_VideoId_Create>;
  delete?: Maybe<LiveVideosDocAccessFields_VideoId_Delete>;
  read?: Maybe<LiveVideosDocAccessFields_VideoId_Read>;
  update?: Maybe<LiveVideosDocAccessFields_VideoId_Update>;
};

export type LiveVideosDocAccessFields_VideoId_Create = {
  __typename?: 'LiveVideosDocAccessFields_videoId_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_VideoId_Delete = {
  __typename?: 'LiveVideosDocAccessFields_videoId_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_VideoId_Read = {
  __typename?: 'LiveVideosDocAccessFields_videoId_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosDocAccessFields_VideoId_Update = {
  __typename?: 'LiveVideosDocAccessFields_videoId_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields = {
  __typename?: 'LiveVideosFields';
  createdAt?: Maybe<LiveVideosFields_CreatedAt>;
  date?: Maybe<LiveVideosFields_Date>;
  image?: Maybe<LiveVideosFields_Image>;
  sortableId?: Maybe<LiveVideosFields_SortableId>;
  title?: Maybe<LiveVideosFields_Title>;
  updatedAt?: Maybe<LiveVideosFields_UpdatedAt>;
  url?: Maybe<LiveVideosFields_Url>;
  videoId?: Maybe<LiveVideosFields_VideoId>;
};

export type LiveVideosFields_CreatedAt = {
  __typename?: 'LiveVideosFields_createdAt';
  create?: Maybe<LiveVideosFields_CreatedAt_Create>;
  delete?: Maybe<LiveVideosFields_CreatedAt_Delete>;
  read?: Maybe<LiveVideosFields_CreatedAt_Read>;
  update?: Maybe<LiveVideosFields_CreatedAt_Update>;
};

export type LiveVideosFields_CreatedAt_Create = {
  __typename?: 'LiveVideosFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_CreatedAt_Delete = {
  __typename?: 'LiveVideosFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_CreatedAt_Read = {
  __typename?: 'LiveVideosFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_CreatedAt_Update = {
  __typename?: 'LiveVideosFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Date = {
  __typename?: 'LiveVideosFields_date';
  create?: Maybe<LiveVideosFields_Date_Create>;
  delete?: Maybe<LiveVideosFields_Date_Delete>;
  read?: Maybe<LiveVideosFields_Date_Read>;
  update?: Maybe<LiveVideosFields_Date_Update>;
};

export type LiveVideosFields_Date_Create = {
  __typename?: 'LiveVideosFields_date_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Date_Delete = {
  __typename?: 'LiveVideosFields_date_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Date_Read = {
  __typename?: 'LiveVideosFields_date_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Date_Update = {
  __typename?: 'LiveVideosFields_date_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Image = {
  __typename?: 'LiveVideosFields_image';
  create?: Maybe<LiveVideosFields_Image_Create>;
  delete?: Maybe<LiveVideosFields_Image_Delete>;
  read?: Maybe<LiveVideosFields_Image_Read>;
  update?: Maybe<LiveVideosFields_Image_Update>;
};

export type LiveVideosFields_Image_Create = {
  __typename?: 'LiveVideosFields_image_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Image_Delete = {
  __typename?: 'LiveVideosFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Image_Read = {
  __typename?: 'LiveVideosFields_image_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Image_Update = {
  __typename?: 'LiveVideosFields_image_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_SortableId = {
  __typename?: 'LiveVideosFields_sortableId';
  create?: Maybe<LiveVideosFields_SortableId_Create>;
  delete?: Maybe<LiveVideosFields_SortableId_Delete>;
  read?: Maybe<LiveVideosFields_SortableId_Read>;
  update?: Maybe<LiveVideosFields_SortableId_Update>;
};

export type LiveVideosFields_SortableId_Create = {
  __typename?: 'LiveVideosFields_sortableId_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_SortableId_Delete = {
  __typename?: 'LiveVideosFields_sortableId_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_SortableId_Read = {
  __typename?: 'LiveVideosFields_sortableId_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_SortableId_Update = {
  __typename?: 'LiveVideosFields_sortableId_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Title = {
  __typename?: 'LiveVideosFields_title';
  create?: Maybe<LiveVideosFields_Title_Create>;
  delete?: Maybe<LiveVideosFields_Title_Delete>;
  read?: Maybe<LiveVideosFields_Title_Read>;
  update?: Maybe<LiveVideosFields_Title_Update>;
};

export type LiveVideosFields_Title_Create = {
  __typename?: 'LiveVideosFields_title_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Title_Delete = {
  __typename?: 'LiveVideosFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Title_Read = {
  __typename?: 'LiveVideosFields_title_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Title_Update = {
  __typename?: 'LiveVideosFields_title_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_UpdatedAt = {
  __typename?: 'LiveVideosFields_updatedAt';
  create?: Maybe<LiveVideosFields_UpdatedAt_Create>;
  delete?: Maybe<LiveVideosFields_UpdatedAt_Delete>;
  read?: Maybe<LiveVideosFields_UpdatedAt_Read>;
  update?: Maybe<LiveVideosFields_UpdatedAt_Update>;
};

export type LiveVideosFields_UpdatedAt_Create = {
  __typename?: 'LiveVideosFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_UpdatedAt_Delete = {
  __typename?: 'LiveVideosFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_UpdatedAt_Read = {
  __typename?: 'LiveVideosFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_UpdatedAt_Update = {
  __typename?: 'LiveVideosFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Url = {
  __typename?: 'LiveVideosFields_url';
  create?: Maybe<LiveVideosFields_Url_Create>;
  delete?: Maybe<LiveVideosFields_Url_Delete>;
  read?: Maybe<LiveVideosFields_Url_Read>;
  update?: Maybe<LiveVideosFields_Url_Update>;
};

export type LiveVideosFields_Url_Create = {
  __typename?: 'LiveVideosFields_url_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Url_Delete = {
  __typename?: 'LiveVideosFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Url_Read = {
  __typename?: 'LiveVideosFields_url_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_Url_Update = {
  __typename?: 'LiveVideosFields_url_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_VideoId = {
  __typename?: 'LiveVideosFields_videoId';
  create?: Maybe<LiveVideosFields_VideoId_Create>;
  delete?: Maybe<LiveVideosFields_VideoId_Delete>;
  read?: Maybe<LiveVideosFields_VideoId_Read>;
  update?: Maybe<LiveVideosFields_VideoId_Update>;
};

export type LiveVideosFields_VideoId_Create = {
  __typename?: 'LiveVideosFields_videoId_Create';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_VideoId_Delete = {
  __typename?: 'LiveVideosFields_videoId_Delete';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_VideoId_Read = {
  __typename?: 'LiveVideosFields_videoId_Read';
  permission: Scalars['Boolean'];
};

export type LiveVideosFields_VideoId_Update = {
  __typename?: 'LiveVideosFields_videoId_Update';
  permission: Scalars['Boolean'];
};

export type LiveVideosReadAccess = {
  __typename?: 'LiveVideosReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LiveVideosReadDocAccess = {
  __typename?: 'LiveVideosReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LiveVideosUpdateAccess = {
  __typename?: 'LiveVideosUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type LiveVideosUpdateDocAccess = {
  __typename?: 'LiveVideosUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export enum LocaleInputType {
  En = 'en',
  Pt = 'pt'
}

export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  focalX?: Maybe<Scalars['Float']>;
  focalY?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  sizes?: Maybe<Media_Sizes>;
  thumbnailURL?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  prefix?: Maybe<MediaDocAccessFields_Prefix>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Prefix = {
  __typename?: 'MediaDocAccessFields_prefix';
  create?: Maybe<MediaDocAccessFields_Prefix_Create>;
  delete?: Maybe<MediaDocAccessFields_Prefix_Delete>;
  read?: Maybe<MediaDocAccessFields_Prefix_Read>;
  update?: Maybe<MediaDocAccessFields_Prefix_Update>;
};

export type MediaDocAccessFields_Prefix_Create = {
  __typename?: 'MediaDocAccessFields_prefix_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Prefix_Delete = {
  __typename?: 'MediaDocAccessFields_prefix_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Prefix_Read = {
  __typename?: 'MediaDocAccessFields_prefix_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Prefix_Update = {
  __typename?: 'MediaDocAccessFields_prefix_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  lg?: Maybe<MediaDocAccessFields_Sizes_Lg>;
  opengraph?: Maybe<MediaDocAccessFields_Sizes_Opengraph>;
  sm?: Maybe<MediaDocAccessFields_Sizes_Sm>;
  xl?: Maybe<MediaDocAccessFields_Sizes_Xl>;
  xs?: Maybe<MediaDocAccessFields_Sizes_Xs>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg = {
  __typename?: 'MediaDocAccessFields_sizes_lg';
  create?: Maybe<MediaDocAccessFields_Sizes_Lg_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Lg_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Lg_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Lg_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Lg_Update>;
};

export type MediaDocAccessFields_Sizes_Lg_Create = {
  __typename?: 'MediaDocAccessFields_sizes_lg_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_lg_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_lg_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Lg_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Lg_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Lg_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Lg_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Lg_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Lg_Width>;
};

export type MediaDocAccessFields_Sizes_Lg_Read = {
  __typename?: 'MediaDocAccessFields_sizes_lg_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Update = {
  __typename?: 'MediaDocAccessFields_sizes_lg_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Lg_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Lg_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Lg_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Lg_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Lg_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Lg_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Lg_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Lg_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Lg_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Lg_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_lg_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Height = {
  __typename?: 'MediaDocAccessFields_sizes_lg_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Lg_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Lg_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Lg_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Lg_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Lg_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_lg_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_lg_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_lg_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_lg_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_lg_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Lg_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Lg_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Lg_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Lg_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Lg_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_lg_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_lg_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_lg_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_lg_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Url = {
  __typename?: 'MediaDocAccessFields_sizes_lg_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Lg_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Lg_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Lg_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Lg_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Lg_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_lg_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_lg_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_lg_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_lg_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Width = {
  __typename?: 'MediaDocAccessFields_sizes_lg_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Lg_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Lg_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Lg_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Lg_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Lg_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_lg_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_lg_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_lg_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Lg_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_lg_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph';
  create?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Update>;
};

export type MediaDocAccessFields_Sizes_Opengraph_Create = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Opengraph_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Width>;
};

export type MediaDocAccessFields_Sizes_Opengraph_Read = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Update = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Opengraph_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Opengraph_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Height = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Opengraph_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Opengraph_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Opengraph_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Opengraph_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Opengraph_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Opengraph_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Url = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Opengraph_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Width = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Opengraph_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Opengraph_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Opengraph_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_opengraph_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm = {
  __typename?: 'MediaDocAccessFields_sizes_sm';
  create?: Maybe<MediaDocAccessFields_Sizes_Sm_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Sm_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Sm_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Sm_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Sm_Update>;
};

export type MediaDocAccessFields_Sizes_Sm_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sm_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sm_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_sm_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Sm_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Sm_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Sm_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Sm_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Sm_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Sm_Width>;
};

export type MediaDocAccessFields_Sizes_Sm_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sm_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sm_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Sm_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Sm_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Sm_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Sm_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Sm_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Sm_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Sm_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Sm_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Sm_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Sm_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sm_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Height = {
  __typename?: 'MediaDocAccessFields_sizes_sm_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Sm_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Sm_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Sm_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Sm_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Sm_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sm_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sm_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sm_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sm_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_sm_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Sm_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Sm_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Sm_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Sm_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Sm_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sm_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sm_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sm_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sm_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Url = {
  __typename?: 'MediaDocAccessFields_sizes_sm_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Sm_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Sm_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Sm_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Sm_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Sm_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sm_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sm_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sm_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sm_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Width = {
  __typename?: 'MediaDocAccessFields_sizes_sm_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Sm_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Sm_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Sm_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Sm_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Sm_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sm_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sm_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sm_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Sm_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sm_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl = {
  __typename?: 'MediaDocAccessFields_sizes_xl';
  create?: Maybe<MediaDocAccessFields_Sizes_Xl_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xl_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Xl_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xl_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xl_Update>;
};

export type MediaDocAccessFields_Sizes_Xl_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xl_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xl_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_xl_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Xl_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Xl_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Xl_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Xl_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Xl_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Xl_Width>;
};

export type MediaDocAccessFields_Sizes_Xl_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xl_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xl_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Xl_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xl_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xl_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xl_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Xl_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Xl_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xl_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xl_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xl_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Xl_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xl_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Height = {
  __typename?: 'MediaDocAccessFields_sizes_xl_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Xl_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xl_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xl_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xl_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Xl_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xl_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xl_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xl_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xl_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_xl_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Xl_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xl_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xl_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xl_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Xl_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xl_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xl_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xl_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xl_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Url = {
  __typename?: 'MediaDocAccessFields_sizes_xl_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Xl_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xl_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xl_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xl_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Xl_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xl_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xl_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xl_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xl_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Width = {
  __typename?: 'MediaDocAccessFields_sizes_xl_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Xl_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xl_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xl_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xl_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Xl_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xl_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xl_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xl_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xl_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xl_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs = {
  __typename?: 'MediaDocAccessFields_sizes_xs';
  create?: Maybe<MediaDocAccessFields_Sizes_Xs_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xs_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Xs_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xs_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xs_Update>;
};

export type MediaDocAccessFields_Sizes_Xs_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xs_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xs_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_xs_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Xs_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Xs_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Xs_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Xs_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Xs_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Xs_Width>;
};

export type MediaDocAccessFields_Sizes_Xs_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xs_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xs_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Xs_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xs_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xs_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xs_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Xs_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Xs_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xs_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xs_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xs_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Xs_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xs_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Height = {
  __typename?: 'MediaDocAccessFields_sizes_xs_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Xs_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xs_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xs_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xs_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Xs_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xs_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xs_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xs_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xs_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_xs_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Xs_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xs_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xs_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xs_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Xs_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xs_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xs_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xs_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xs_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Url = {
  __typename?: 'MediaDocAccessFields_sizes_xs_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Xs_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xs_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xs_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xs_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Xs_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xs_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xs_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xs_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xs_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Width = {
  __typename?: 'MediaDocAccessFields_sizes_xs_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Xs_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Xs_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Xs_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Xs_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Xs_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_xs_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_xs_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_xs_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Sizes_Xs_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_xs_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  prefix?: Maybe<MediaFields_Prefix>;
  sizes?: Maybe<MediaFields_Sizes>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Prefix = {
  __typename?: 'MediaFields_prefix';
  create?: Maybe<MediaFields_Prefix_Create>;
  delete?: Maybe<MediaFields_Prefix_Delete>;
  read?: Maybe<MediaFields_Prefix_Read>;
  update?: Maybe<MediaFields_Prefix_Update>;
};

export type MediaFields_Prefix_Create = {
  __typename?: 'MediaFields_prefix_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Prefix_Delete = {
  __typename?: 'MediaFields_prefix_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Prefix_Read = {
  __typename?: 'MediaFields_prefix_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Prefix_Update = {
  __typename?: 'MediaFields_prefix_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  lg?: Maybe<MediaFields_Sizes_Lg>;
  opengraph?: Maybe<MediaFields_Sizes_Opengraph>;
  sm?: Maybe<MediaFields_Sizes_Sm>;
  xl?: Maybe<MediaFields_Sizes_Xl>;
  xs?: Maybe<MediaFields_Sizes_Xs>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg = {
  __typename?: 'MediaFields_sizes_lg';
  create?: Maybe<MediaFields_Sizes_Lg_Create>;
  delete?: Maybe<MediaFields_Sizes_Lg_Delete>;
  fields?: Maybe<MediaFields_Sizes_Lg_Fields>;
  read?: Maybe<MediaFields_Sizes_Lg_Read>;
  update?: Maybe<MediaFields_Sizes_Lg_Update>;
};

export type MediaFields_Sizes_Lg_Create = {
  __typename?: 'MediaFields_sizes_lg_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Delete = {
  __typename?: 'MediaFields_sizes_lg_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Fields = {
  __typename?: 'MediaFields_sizes_lg_Fields';
  filename?: Maybe<MediaFields_Sizes_Lg_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Lg_Filesize>;
  height?: Maybe<MediaFields_Sizes_Lg_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Lg_MimeType>;
  url?: Maybe<MediaFields_Sizes_Lg_Url>;
  width?: Maybe<MediaFields_Sizes_Lg_Width>;
};

export type MediaFields_Sizes_Lg_Read = {
  __typename?: 'MediaFields_sizes_lg_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Update = {
  __typename?: 'MediaFields_sizes_lg_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Filename = {
  __typename?: 'MediaFields_sizes_lg_filename';
  create?: Maybe<MediaFields_Sizes_Lg_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Lg_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Lg_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Lg_Filename_Update>;
};

export type MediaFields_Sizes_Lg_Filename_Create = {
  __typename?: 'MediaFields_sizes_lg_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Filename_Delete = {
  __typename?: 'MediaFields_sizes_lg_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Filename_Read = {
  __typename?: 'MediaFields_sizes_lg_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Filename_Update = {
  __typename?: 'MediaFields_sizes_lg_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Filesize = {
  __typename?: 'MediaFields_sizes_lg_filesize';
  create?: Maybe<MediaFields_Sizes_Lg_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Lg_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Lg_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Lg_Filesize_Update>;
};

export type MediaFields_Sizes_Lg_Filesize_Create = {
  __typename?: 'MediaFields_sizes_lg_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_lg_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Filesize_Read = {
  __typename?: 'MediaFields_sizes_lg_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Filesize_Update = {
  __typename?: 'MediaFields_sizes_lg_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Height = {
  __typename?: 'MediaFields_sizes_lg_height';
  create?: Maybe<MediaFields_Sizes_Lg_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Lg_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Lg_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Lg_Height_Update>;
};

export type MediaFields_Sizes_Lg_Height_Create = {
  __typename?: 'MediaFields_sizes_lg_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Height_Delete = {
  __typename?: 'MediaFields_sizes_lg_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Height_Read = {
  __typename?: 'MediaFields_sizes_lg_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Height_Update = {
  __typename?: 'MediaFields_sizes_lg_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_MimeType = {
  __typename?: 'MediaFields_sizes_lg_mimeType';
  create?: Maybe<MediaFields_Sizes_Lg_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Lg_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Lg_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Lg_MimeType_Update>;
};

export type MediaFields_Sizes_Lg_MimeType_Create = {
  __typename?: 'MediaFields_sizes_lg_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_lg_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_MimeType_Read = {
  __typename?: 'MediaFields_sizes_lg_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_MimeType_Update = {
  __typename?: 'MediaFields_sizes_lg_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Url = {
  __typename?: 'MediaFields_sizes_lg_url';
  create?: Maybe<MediaFields_Sizes_Lg_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Lg_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Lg_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Lg_Url_Update>;
};

export type MediaFields_Sizes_Lg_Url_Create = {
  __typename?: 'MediaFields_sizes_lg_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Url_Delete = {
  __typename?: 'MediaFields_sizes_lg_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Url_Read = {
  __typename?: 'MediaFields_sizes_lg_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Url_Update = {
  __typename?: 'MediaFields_sizes_lg_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Width = {
  __typename?: 'MediaFields_sizes_lg_width';
  create?: Maybe<MediaFields_Sizes_Lg_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Lg_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Lg_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Lg_Width_Update>;
};

export type MediaFields_Sizes_Lg_Width_Create = {
  __typename?: 'MediaFields_sizes_lg_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Width_Delete = {
  __typename?: 'MediaFields_sizes_lg_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Width_Read = {
  __typename?: 'MediaFields_sizes_lg_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Lg_Width_Update = {
  __typename?: 'MediaFields_sizes_lg_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph = {
  __typename?: 'MediaFields_sizes_opengraph';
  create?: Maybe<MediaFields_Sizes_Opengraph_Create>;
  delete?: Maybe<MediaFields_Sizes_Opengraph_Delete>;
  fields?: Maybe<MediaFields_Sizes_Opengraph_Fields>;
  read?: Maybe<MediaFields_Sizes_Opengraph_Read>;
  update?: Maybe<MediaFields_Sizes_Opengraph_Update>;
};

export type MediaFields_Sizes_Opengraph_Create = {
  __typename?: 'MediaFields_sizes_opengraph_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Delete = {
  __typename?: 'MediaFields_sizes_opengraph_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Fields = {
  __typename?: 'MediaFields_sizes_opengraph_Fields';
  filename?: Maybe<MediaFields_Sizes_Opengraph_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Opengraph_Filesize>;
  height?: Maybe<MediaFields_Sizes_Opengraph_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Opengraph_MimeType>;
  url?: Maybe<MediaFields_Sizes_Opengraph_Url>;
  width?: Maybe<MediaFields_Sizes_Opengraph_Width>;
};

export type MediaFields_Sizes_Opengraph_Read = {
  __typename?: 'MediaFields_sizes_opengraph_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Update = {
  __typename?: 'MediaFields_sizes_opengraph_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Filename = {
  __typename?: 'MediaFields_sizes_opengraph_filename';
  create?: Maybe<MediaFields_Sizes_Opengraph_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Opengraph_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Opengraph_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Opengraph_Filename_Update>;
};

export type MediaFields_Sizes_Opengraph_Filename_Create = {
  __typename?: 'MediaFields_sizes_opengraph_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Filename_Delete = {
  __typename?: 'MediaFields_sizes_opengraph_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Filename_Read = {
  __typename?: 'MediaFields_sizes_opengraph_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Filename_Update = {
  __typename?: 'MediaFields_sizes_opengraph_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Filesize = {
  __typename?: 'MediaFields_sizes_opengraph_filesize';
  create?: Maybe<MediaFields_Sizes_Opengraph_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Opengraph_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Opengraph_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Opengraph_Filesize_Update>;
};

export type MediaFields_Sizes_Opengraph_Filesize_Create = {
  __typename?: 'MediaFields_sizes_opengraph_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_opengraph_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Filesize_Read = {
  __typename?: 'MediaFields_sizes_opengraph_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Filesize_Update = {
  __typename?: 'MediaFields_sizes_opengraph_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Height = {
  __typename?: 'MediaFields_sizes_opengraph_height';
  create?: Maybe<MediaFields_Sizes_Opengraph_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Opengraph_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Opengraph_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Opengraph_Height_Update>;
};

export type MediaFields_Sizes_Opengraph_Height_Create = {
  __typename?: 'MediaFields_sizes_opengraph_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Height_Delete = {
  __typename?: 'MediaFields_sizes_opengraph_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Height_Read = {
  __typename?: 'MediaFields_sizes_opengraph_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Height_Update = {
  __typename?: 'MediaFields_sizes_opengraph_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_MimeType = {
  __typename?: 'MediaFields_sizes_opengraph_mimeType';
  create?: Maybe<MediaFields_Sizes_Opengraph_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Opengraph_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Opengraph_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Opengraph_MimeType_Update>;
};

export type MediaFields_Sizes_Opengraph_MimeType_Create = {
  __typename?: 'MediaFields_sizes_opengraph_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_opengraph_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_MimeType_Read = {
  __typename?: 'MediaFields_sizes_opengraph_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_MimeType_Update = {
  __typename?: 'MediaFields_sizes_opengraph_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Url = {
  __typename?: 'MediaFields_sizes_opengraph_url';
  create?: Maybe<MediaFields_Sizes_Opengraph_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Opengraph_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Opengraph_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Opengraph_Url_Update>;
};

export type MediaFields_Sizes_Opengraph_Url_Create = {
  __typename?: 'MediaFields_sizes_opengraph_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Url_Delete = {
  __typename?: 'MediaFields_sizes_opengraph_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Url_Read = {
  __typename?: 'MediaFields_sizes_opengraph_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Url_Update = {
  __typename?: 'MediaFields_sizes_opengraph_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Width = {
  __typename?: 'MediaFields_sizes_opengraph_width';
  create?: Maybe<MediaFields_Sizes_Opengraph_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Opengraph_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Opengraph_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Opengraph_Width_Update>;
};

export type MediaFields_Sizes_Opengraph_Width_Create = {
  __typename?: 'MediaFields_sizes_opengraph_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Width_Delete = {
  __typename?: 'MediaFields_sizes_opengraph_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Width_Read = {
  __typename?: 'MediaFields_sizes_opengraph_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Opengraph_Width_Update = {
  __typename?: 'MediaFields_sizes_opengraph_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm = {
  __typename?: 'MediaFields_sizes_sm';
  create?: Maybe<MediaFields_Sizes_Sm_Create>;
  delete?: Maybe<MediaFields_Sizes_Sm_Delete>;
  fields?: Maybe<MediaFields_Sizes_Sm_Fields>;
  read?: Maybe<MediaFields_Sizes_Sm_Read>;
  update?: Maybe<MediaFields_Sizes_Sm_Update>;
};

export type MediaFields_Sizes_Sm_Create = {
  __typename?: 'MediaFields_sizes_sm_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Delete = {
  __typename?: 'MediaFields_sizes_sm_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Fields = {
  __typename?: 'MediaFields_sizes_sm_Fields';
  filename?: Maybe<MediaFields_Sizes_Sm_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Sm_Filesize>;
  height?: Maybe<MediaFields_Sizes_Sm_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Sm_MimeType>;
  url?: Maybe<MediaFields_Sizes_Sm_Url>;
  width?: Maybe<MediaFields_Sizes_Sm_Width>;
};

export type MediaFields_Sizes_Sm_Read = {
  __typename?: 'MediaFields_sizes_sm_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Update = {
  __typename?: 'MediaFields_sizes_sm_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Filename = {
  __typename?: 'MediaFields_sizes_sm_filename';
  create?: Maybe<MediaFields_Sizes_Sm_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Sm_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Sm_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Sm_Filename_Update>;
};

export type MediaFields_Sizes_Sm_Filename_Create = {
  __typename?: 'MediaFields_sizes_sm_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Filename_Delete = {
  __typename?: 'MediaFields_sizes_sm_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Filename_Read = {
  __typename?: 'MediaFields_sizes_sm_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Filename_Update = {
  __typename?: 'MediaFields_sizes_sm_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Filesize = {
  __typename?: 'MediaFields_sizes_sm_filesize';
  create?: Maybe<MediaFields_Sizes_Sm_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Sm_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Sm_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Sm_Filesize_Update>;
};

export type MediaFields_Sizes_Sm_Filesize_Create = {
  __typename?: 'MediaFields_sizes_sm_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_sm_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Filesize_Read = {
  __typename?: 'MediaFields_sizes_sm_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Filesize_Update = {
  __typename?: 'MediaFields_sizes_sm_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Height = {
  __typename?: 'MediaFields_sizes_sm_height';
  create?: Maybe<MediaFields_Sizes_Sm_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Sm_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Sm_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Sm_Height_Update>;
};

export type MediaFields_Sizes_Sm_Height_Create = {
  __typename?: 'MediaFields_sizes_sm_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Height_Delete = {
  __typename?: 'MediaFields_sizes_sm_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Height_Read = {
  __typename?: 'MediaFields_sizes_sm_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Height_Update = {
  __typename?: 'MediaFields_sizes_sm_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_MimeType = {
  __typename?: 'MediaFields_sizes_sm_mimeType';
  create?: Maybe<MediaFields_Sizes_Sm_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Sm_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Sm_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Sm_MimeType_Update>;
};

export type MediaFields_Sizes_Sm_MimeType_Create = {
  __typename?: 'MediaFields_sizes_sm_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_sm_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_MimeType_Read = {
  __typename?: 'MediaFields_sizes_sm_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_MimeType_Update = {
  __typename?: 'MediaFields_sizes_sm_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Url = {
  __typename?: 'MediaFields_sizes_sm_url';
  create?: Maybe<MediaFields_Sizes_Sm_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Sm_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Sm_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Sm_Url_Update>;
};

export type MediaFields_Sizes_Sm_Url_Create = {
  __typename?: 'MediaFields_sizes_sm_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Url_Delete = {
  __typename?: 'MediaFields_sizes_sm_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Url_Read = {
  __typename?: 'MediaFields_sizes_sm_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Url_Update = {
  __typename?: 'MediaFields_sizes_sm_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Width = {
  __typename?: 'MediaFields_sizes_sm_width';
  create?: Maybe<MediaFields_Sizes_Sm_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Sm_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Sm_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Sm_Width_Update>;
};

export type MediaFields_Sizes_Sm_Width_Create = {
  __typename?: 'MediaFields_sizes_sm_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Width_Delete = {
  __typename?: 'MediaFields_sizes_sm_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Width_Read = {
  __typename?: 'MediaFields_sizes_sm_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Sm_Width_Update = {
  __typename?: 'MediaFields_sizes_sm_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl = {
  __typename?: 'MediaFields_sizes_xl';
  create?: Maybe<MediaFields_Sizes_Xl_Create>;
  delete?: Maybe<MediaFields_Sizes_Xl_Delete>;
  fields?: Maybe<MediaFields_Sizes_Xl_Fields>;
  read?: Maybe<MediaFields_Sizes_Xl_Read>;
  update?: Maybe<MediaFields_Sizes_Xl_Update>;
};

export type MediaFields_Sizes_Xl_Create = {
  __typename?: 'MediaFields_sizes_xl_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Delete = {
  __typename?: 'MediaFields_sizes_xl_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Fields = {
  __typename?: 'MediaFields_sizes_xl_Fields';
  filename?: Maybe<MediaFields_Sizes_Xl_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Xl_Filesize>;
  height?: Maybe<MediaFields_Sizes_Xl_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Xl_MimeType>;
  url?: Maybe<MediaFields_Sizes_Xl_Url>;
  width?: Maybe<MediaFields_Sizes_Xl_Width>;
};

export type MediaFields_Sizes_Xl_Read = {
  __typename?: 'MediaFields_sizes_xl_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Update = {
  __typename?: 'MediaFields_sizes_xl_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Filename = {
  __typename?: 'MediaFields_sizes_xl_filename';
  create?: Maybe<MediaFields_Sizes_Xl_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Xl_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Xl_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Xl_Filename_Update>;
};

export type MediaFields_Sizes_Xl_Filename_Create = {
  __typename?: 'MediaFields_sizes_xl_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Filename_Delete = {
  __typename?: 'MediaFields_sizes_xl_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Filename_Read = {
  __typename?: 'MediaFields_sizes_xl_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Filename_Update = {
  __typename?: 'MediaFields_sizes_xl_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Filesize = {
  __typename?: 'MediaFields_sizes_xl_filesize';
  create?: Maybe<MediaFields_Sizes_Xl_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Xl_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Xl_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Xl_Filesize_Update>;
};

export type MediaFields_Sizes_Xl_Filesize_Create = {
  __typename?: 'MediaFields_sizes_xl_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_xl_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Filesize_Read = {
  __typename?: 'MediaFields_sizes_xl_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Filesize_Update = {
  __typename?: 'MediaFields_sizes_xl_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Height = {
  __typename?: 'MediaFields_sizes_xl_height';
  create?: Maybe<MediaFields_Sizes_Xl_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Xl_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Xl_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Xl_Height_Update>;
};

export type MediaFields_Sizes_Xl_Height_Create = {
  __typename?: 'MediaFields_sizes_xl_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Height_Delete = {
  __typename?: 'MediaFields_sizes_xl_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Height_Read = {
  __typename?: 'MediaFields_sizes_xl_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Height_Update = {
  __typename?: 'MediaFields_sizes_xl_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_MimeType = {
  __typename?: 'MediaFields_sizes_xl_mimeType';
  create?: Maybe<MediaFields_Sizes_Xl_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Xl_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Xl_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Xl_MimeType_Update>;
};

export type MediaFields_Sizes_Xl_MimeType_Create = {
  __typename?: 'MediaFields_sizes_xl_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_xl_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_MimeType_Read = {
  __typename?: 'MediaFields_sizes_xl_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_MimeType_Update = {
  __typename?: 'MediaFields_sizes_xl_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Url = {
  __typename?: 'MediaFields_sizes_xl_url';
  create?: Maybe<MediaFields_Sizes_Xl_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Xl_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Xl_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Xl_Url_Update>;
};

export type MediaFields_Sizes_Xl_Url_Create = {
  __typename?: 'MediaFields_sizes_xl_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Url_Delete = {
  __typename?: 'MediaFields_sizes_xl_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Url_Read = {
  __typename?: 'MediaFields_sizes_xl_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Url_Update = {
  __typename?: 'MediaFields_sizes_xl_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Width = {
  __typename?: 'MediaFields_sizes_xl_width';
  create?: Maybe<MediaFields_Sizes_Xl_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Xl_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Xl_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Xl_Width_Update>;
};

export type MediaFields_Sizes_Xl_Width_Create = {
  __typename?: 'MediaFields_sizes_xl_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Width_Delete = {
  __typename?: 'MediaFields_sizes_xl_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Width_Read = {
  __typename?: 'MediaFields_sizes_xl_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xl_Width_Update = {
  __typename?: 'MediaFields_sizes_xl_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs = {
  __typename?: 'MediaFields_sizes_xs';
  create?: Maybe<MediaFields_Sizes_Xs_Create>;
  delete?: Maybe<MediaFields_Sizes_Xs_Delete>;
  fields?: Maybe<MediaFields_Sizes_Xs_Fields>;
  read?: Maybe<MediaFields_Sizes_Xs_Read>;
  update?: Maybe<MediaFields_Sizes_Xs_Update>;
};

export type MediaFields_Sizes_Xs_Create = {
  __typename?: 'MediaFields_sizes_xs_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Delete = {
  __typename?: 'MediaFields_sizes_xs_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Fields = {
  __typename?: 'MediaFields_sizes_xs_Fields';
  filename?: Maybe<MediaFields_Sizes_Xs_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Xs_Filesize>;
  height?: Maybe<MediaFields_Sizes_Xs_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Xs_MimeType>;
  url?: Maybe<MediaFields_Sizes_Xs_Url>;
  width?: Maybe<MediaFields_Sizes_Xs_Width>;
};

export type MediaFields_Sizes_Xs_Read = {
  __typename?: 'MediaFields_sizes_xs_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Update = {
  __typename?: 'MediaFields_sizes_xs_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Filename = {
  __typename?: 'MediaFields_sizes_xs_filename';
  create?: Maybe<MediaFields_Sizes_Xs_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Xs_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Xs_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Xs_Filename_Update>;
};

export type MediaFields_Sizes_Xs_Filename_Create = {
  __typename?: 'MediaFields_sizes_xs_filename_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Filename_Delete = {
  __typename?: 'MediaFields_sizes_xs_filename_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Filename_Read = {
  __typename?: 'MediaFields_sizes_xs_filename_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Filename_Update = {
  __typename?: 'MediaFields_sizes_xs_filename_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Filesize = {
  __typename?: 'MediaFields_sizes_xs_filesize';
  create?: Maybe<MediaFields_Sizes_Xs_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Xs_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Xs_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Xs_Filesize_Update>;
};

export type MediaFields_Sizes_Xs_Filesize_Create = {
  __typename?: 'MediaFields_sizes_xs_filesize_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_xs_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Filesize_Read = {
  __typename?: 'MediaFields_sizes_xs_filesize_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Filesize_Update = {
  __typename?: 'MediaFields_sizes_xs_filesize_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Height = {
  __typename?: 'MediaFields_sizes_xs_height';
  create?: Maybe<MediaFields_Sizes_Xs_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Xs_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Xs_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Xs_Height_Update>;
};

export type MediaFields_Sizes_Xs_Height_Create = {
  __typename?: 'MediaFields_sizes_xs_height_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Height_Delete = {
  __typename?: 'MediaFields_sizes_xs_height_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Height_Read = {
  __typename?: 'MediaFields_sizes_xs_height_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Height_Update = {
  __typename?: 'MediaFields_sizes_xs_height_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_MimeType = {
  __typename?: 'MediaFields_sizes_xs_mimeType';
  create?: Maybe<MediaFields_Sizes_Xs_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Xs_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Xs_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Xs_MimeType_Update>;
};

export type MediaFields_Sizes_Xs_MimeType_Create = {
  __typename?: 'MediaFields_sizes_xs_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_xs_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_MimeType_Read = {
  __typename?: 'MediaFields_sizes_xs_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_MimeType_Update = {
  __typename?: 'MediaFields_sizes_xs_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Url = {
  __typename?: 'MediaFields_sizes_xs_url';
  create?: Maybe<MediaFields_Sizes_Xs_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Xs_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Xs_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Xs_Url_Update>;
};

export type MediaFields_Sizes_Xs_Url_Create = {
  __typename?: 'MediaFields_sizes_xs_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Url_Delete = {
  __typename?: 'MediaFields_sizes_xs_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Url_Read = {
  __typename?: 'MediaFields_sizes_xs_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Url_Update = {
  __typename?: 'MediaFields_sizes_xs_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Width = {
  __typename?: 'MediaFields_sizes_xs_width';
  create?: Maybe<MediaFields_Sizes_Xs_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Xs_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Xs_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Xs_Width_Update>;
};

export type MediaFields_Sizes_Xs_Width_Create = {
  __typename?: 'MediaFields_sizes_xs_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Width_Delete = {
  __typename?: 'MediaFields_sizes_xs_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Width_Read = {
  __typename?: 'MediaFields_sizes_xs_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Sizes_Xs_Width_Update = {
  __typename?: 'MediaFields_sizes_xs_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  lg?: Maybe<Media_Sizes_Lg>;
  opengraph?: Maybe<Media_Sizes_Opengraph>;
  sm?: Maybe<Media_Sizes_Sm>;
  xl?: Maybe<Media_Sizes_Xl>;
  xs?: Maybe<Media_Sizes_Xs>;
};

export type Media_Sizes_Lg = {
  __typename?: 'Media_Sizes_Lg';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Sizes_Opengraph = {
  __typename?: 'Media_Sizes_Opengraph';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Sizes_Sm = {
  __typename?: 'Media_Sizes_Sm';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Sizes_Xl = {
  __typename?: 'Media_Sizes_Xl';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Sizes_Xs = {
  __typename?: 'Media_Sizes_Xs';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Lg__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Lg__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Lg__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Lg__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Lg__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Lg__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Opengraph__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Opengraph__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Opengraph__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Opengraph__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Opengraph__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Opengraph__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Sm__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Sm__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Sm__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Sm__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Sm__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Sm__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Xl__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Xl__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Xl__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Xl__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Xl__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Xl__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Xs__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Xs__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Xs__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_Sizes__Xs__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Xs__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Sizes__Xs__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  prefix?: InputMaybe<Media_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<Media_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<Media_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<Media_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<Media_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<Media_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<Media_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<Media_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<Media_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<Media_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<Media_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<Media_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<Media_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<Media_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<Media_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<Media_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<Media_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<Media_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<Media_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<Media_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<Media_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<Media_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<Media_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<Media_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<Media_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<Media_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<Media_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<Media_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<Media_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<Media_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<Media_Sizes__Xs__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  prefix?: InputMaybe<Media_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<Media_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<Media_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<Media_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<Media_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<Media_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<Media_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<Media_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<Media_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<Media_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<Media_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<Media_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<Media_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<Media_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<Media_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<Media_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<Media_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<Media_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<Media_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<Media_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<Media_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<Media_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<Media_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<Media_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<Media_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<Media_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<Media_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<Media_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<Media_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<Media_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<Media_Sizes__Xs__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  prefix?: InputMaybe<Media_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<Media_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<Media_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<Media_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<Media_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<Media_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<Media_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<Media_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<Media_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<Media_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<Media_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<Media_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<Media_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<Media_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<Media_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<Media_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<Media_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<Media_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<Media_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<Media_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<Media_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<Media_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<Media_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<Media_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<Media_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<Media_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<Media_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<Media_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<Media_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<Media_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<Media_Sizes__Xs__Width_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type Merch = {
  __typename?: 'Merch';
  blurb: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  image?: Maybe<Media>;
  soldOut?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};


export type MerchImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type MerchCreateAccess = {
  __typename?: 'MerchCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MerchCreateDocAccess = {
  __typename?: 'MerchCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MerchDeleteAccess = {
  __typename?: 'MerchDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MerchDeleteDocAccess = {
  __typename?: 'MerchDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MerchDocAccessFields = {
  __typename?: 'MerchDocAccessFields';
  blurb?: Maybe<MerchDocAccessFields_Blurb>;
  createdAt?: Maybe<MerchDocAccessFields_CreatedAt>;
  image?: Maybe<MerchDocAccessFields_Image>;
  soldOut?: Maybe<MerchDocAccessFields_SoldOut>;
  title?: Maybe<MerchDocAccessFields_Title>;
  updatedAt?: Maybe<MerchDocAccessFields_UpdatedAt>;
  url?: Maybe<MerchDocAccessFields_Url>;
};

export type MerchDocAccessFields_Blurb = {
  __typename?: 'MerchDocAccessFields_blurb';
  create?: Maybe<MerchDocAccessFields_Blurb_Create>;
  delete?: Maybe<MerchDocAccessFields_Blurb_Delete>;
  read?: Maybe<MerchDocAccessFields_Blurb_Read>;
  update?: Maybe<MerchDocAccessFields_Blurb_Update>;
};

export type MerchDocAccessFields_Blurb_Create = {
  __typename?: 'MerchDocAccessFields_blurb_Create';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Blurb_Delete = {
  __typename?: 'MerchDocAccessFields_blurb_Delete';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Blurb_Read = {
  __typename?: 'MerchDocAccessFields_blurb_Read';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Blurb_Update = {
  __typename?: 'MerchDocAccessFields_blurb_Update';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_CreatedAt = {
  __typename?: 'MerchDocAccessFields_createdAt';
  create?: Maybe<MerchDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MerchDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MerchDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MerchDocAccessFields_CreatedAt_Update>;
};

export type MerchDocAccessFields_CreatedAt_Create = {
  __typename?: 'MerchDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MerchDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_CreatedAt_Read = {
  __typename?: 'MerchDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_CreatedAt_Update = {
  __typename?: 'MerchDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Image = {
  __typename?: 'MerchDocAccessFields_image';
  create?: Maybe<MerchDocAccessFields_Image_Create>;
  delete?: Maybe<MerchDocAccessFields_Image_Delete>;
  read?: Maybe<MerchDocAccessFields_Image_Read>;
  update?: Maybe<MerchDocAccessFields_Image_Update>;
};

export type MerchDocAccessFields_Image_Create = {
  __typename?: 'MerchDocAccessFields_image_Create';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Image_Delete = {
  __typename?: 'MerchDocAccessFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Image_Read = {
  __typename?: 'MerchDocAccessFields_image_Read';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Image_Update = {
  __typename?: 'MerchDocAccessFields_image_Update';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_SoldOut = {
  __typename?: 'MerchDocAccessFields_soldOut';
  create?: Maybe<MerchDocAccessFields_SoldOut_Create>;
  delete?: Maybe<MerchDocAccessFields_SoldOut_Delete>;
  read?: Maybe<MerchDocAccessFields_SoldOut_Read>;
  update?: Maybe<MerchDocAccessFields_SoldOut_Update>;
};

export type MerchDocAccessFields_SoldOut_Create = {
  __typename?: 'MerchDocAccessFields_soldOut_Create';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_SoldOut_Delete = {
  __typename?: 'MerchDocAccessFields_soldOut_Delete';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_SoldOut_Read = {
  __typename?: 'MerchDocAccessFields_soldOut_Read';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_SoldOut_Update = {
  __typename?: 'MerchDocAccessFields_soldOut_Update';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Title = {
  __typename?: 'MerchDocAccessFields_title';
  create?: Maybe<MerchDocAccessFields_Title_Create>;
  delete?: Maybe<MerchDocAccessFields_Title_Delete>;
  read?: Maybe<MerchDocAccessFields_Title_Read>;
  update?: Maybe<MerchDocAccessFields_Title_Update>;
};

export type MerchDocAccessFields_Title_Create = {
  __typename?: 'MerchDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Title_Delete = {
  __typename?: 'MerchDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Title_Read = {
  __typename?: 'MerchDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Title_Update = {
  __typename?: 'MerchDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_UpdatedAt = {
  __typename?: 'MerchDocAccessFields_updatedAt';
  create?: Maybe<MerchDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MerchDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MerchDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MerchDocAccessFields_UpdatedAt_Update>;
};

export type MerchDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MerchDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MerchDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MerchDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MerchDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Url = {
  __typename?: 'MerchDocAccessFields_url';
  create?: Maybe<MerchDocAccessFields_Url_Create>;
  delete?: Maybe<MerchDocAccessFields_Url_Delete>;
  read?: Maybe<MerchDocAccessFields_Url_Read>;
  update?: Maybe<MerchDocAccessFields_Url_Update>;
};

export type MerchDocAccessFields_Url_Create = {
  __typename?: 'MerchDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Url_Delete = {
  __typename?: 'MerchDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Url_Read = {
  __typename?: 'MerchDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MerchDocAccessFields_Url_Update = {
  __typename?: 'MerchDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MerchFields = {
  __typename?: 'MerchFields';
  blurb?: Maybe<MerchFields_Blurb>;
  createdAt?: Maybe<MerchFields_CreatedAt>;
  image?: Maybe<MerchFields_Image>;
  soldOut?: Maybe<MerchFields_SoldOut>;
  title?: Maybe<MerchFields_Title>;
  updatedAt?: Maybe<MerchFields_UpdatedAt>;
  url?: Maybe<MerchFields_Url>;
};

export type MerchFields_Blurb = {
  __typename?: 'MerchFields_blurb';
  create?: Maybe<MerchFields_Blurb_Create>;
  delete?: Maybe<MerchFields_Blurb_Delete>;
  read?: Maybe<MerchFields_Blurb_Read>;
  update?: Maybe<MerchFields_Blurb_Update>;
};

export type MerchFields_Blurb_Create = {
  __typename?: 'MerchFields_blurb_Create';
  permission: Scalars['Boolean'];
};

export type MerchFields_Blurb_Delete = {
  __typename?: 'MerchFields_blurb_Delete';
  permission: Scalars['Boolean'];
};

export type MerchFields_Blurb_Read = {
  __typename?: 'MerchFields_blurb_Read';
  permission: Scalars['Boolean'];
};

export type MerchFields_Blurb_Update = {
  __typename?: 'MerchFields_blurb_Update';
  permission: Scalars['Boolean'];
};

export type MerchFields_CreatedAt = {
  __typename?: 'MerchFields_createdAt';
  create?: Maybe<MerchFields_CreatedAt_Create>;
  delete?: Maybe<MerchFields_CreatedAt_Delete>;
  read?: Maybe<MerchFields_CreatedAt_Read>;
  update?: Maybe<MerchFields_CreatedAt_Update>;
};

export type MerchFields_CreatedAt_Create = {
  __typename?: 'MerchFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MerchFields_CreatedAt_Delete = {
  __typename?: 'MerchFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MerchFields_CreatedAt_Read = {
  __typename?: 'MerchFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MerchFields_CreatedAt_Update = {
  __typename?: 'MerchFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MerchFields_Image = {
  __typename?: 'MerchFields_image';
  create?: Maybe<MerchFields_Image_Create>;
  delete?: Maybe<MerchFields_Image_Delete>;
  read?: Maybe<MerchFields_Image_Read>;
  update?: Maybe<MerchFields_Image_Update>;
};

export type MerchFields_Image_Create = {
  __typename?: 'MerchFields_image_Create';
  permission: Scalars['Boolean'];
};

export type MerchFields_Image_Delete = {
  __typename?: 'MerchFields_image_Delete';
  permission: Scalars['Boolean'];
};

export type MerchFields_Image_Read = {
  __typename?: 'MerchFields_image_Read';
  permission: Scalars['Boolean'];
};

export type MerchFields_Image_Update = {
  __typename?: 'MerchFields_image_Update';
  permission: Scalars['Boolean'];
};

export type MerchFields_SoldOut = {
  __typename?: 'MerchFields_soldOut';
  create?: Maybe<MerchFields_SoldOut_Create>;
  delete?: Maybe<MerchFields_SoldOut_Delete>;
  read?: Maybe<MerchFields_SoldOut_Read>;
  update?: Maybe<MerchFields_SoldOut_Update>;
};

export type MerchFields_SoldOut_Create = {
  __typename?: 'MerchFields_soldOut_Create';
  permission: Scalars['Boolean'];
};

export type MerchFields_SoldOut_Delete = {
  __typename?: 'MerchFields_soldOut_Delete';
  permission: Scalars['Boolean'];
};

export type MerchFields_SoldOut_Read = {
  __typename?: 'MerchFields_soldOut_Read';
  permission: Scalars['Boolean'];
};

export type MerchFields_SoldOut_Update = {
  __typename?: 'MerchFields_soldOut_Update';
  permission: Scalars['Boolean'];
};

export type MerchFields_Title = {
  __typename?: 'MerchFields_title';
  create?: Maybe<MerchFields_Title_Create>;
  delete?: Maybe<MerchFields_Title_Delete>;
  read?: Maybe<MerchFields_Title_Read>;
  update?: Maybe<MerchFields_Title_Update>;
};

export type MerchFields_Title_Create = {
  __typename?: 'MerchFields_title_Create';
  permission: Scalars['Boolean'];
};

export type MerchFields_Title_Delete = {
  __typename?: 'MerchFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type MerchFields_Title_Read = {
  __typename?: 'MerchFields_title_Read';
  permission: Scalars['Boolean'];
};

export type MerchFields_Title_Update = {
  __typename?: 'MerchFields_title_Update';
  permission: Scalars['Boolean'];
};

export type MerchFields_UpdatedAt = {
  __typename?: 'MerchFields_updatedAt';
  create?: Maybe<MerchFields_UpdatedAt_Create>;
  delete?: Maybe<MerchFields_UpdatedAt_Delete>;
  read?: Maybe<MerchFields_UpdatedAt_Read>;
  update?: Maybe<MerchFields_UpdatedAt_Update>;
};

export type MerchFields_UpdatedAt_Create = {
  __typename?: 'MerchFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MerchFields_UpdatedAt_Delete = {
  __typename?: 'MerchFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MerchFields_UpdatedAt_Read = {
  __typename?: 'MerchFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MerchFields_UpdatedAt_Update = {
  __typename?: 'MerchFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MerchFields_Url = {
  __typename?: 'MerchFields_url';
  create?: Maybe<MerchFields_Url_Create>;
  delete?: Maybe<MerchFields_Url_Delete>;
  read?: Maybe<MerchFields_Url_Read>;
  update?: Maybe<MerchFields_Url_Update>;
};

export type MerchFields_Url_Create = {
  __typename?: 'MerchFields_url_Create';
  permission: Scalars['Boolean'];
};

export type MerchFields_Url_Delete = {
  __typename?: 'MerchFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type MerchFields_Url_Read = {
  __typename?: 'MerchFields_url_Read';
  permission: Scalars['Boolean'];
};

export type MerchFields_Url_Update = {
  __typename?: 'MerchFields_url_Update';
  permission: Scalars['Boolean'];
};

export type MerchReadAccess = {
  __typename?: 'MerchReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MerchReadDocAccess = {
  __typename?: 'MerchReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MerchUpdateAccess = {
  __typename?: 'MerchUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MerchUpdateDocAccess = {
  __typename?: 'MerchUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Merch_Blurb_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Merch_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Merch_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Merch_Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Merch_SoldOut_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type Merch_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Merch_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Merch_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Merch_Where = {
  AND?: InputMaybe<Array<InputMaybe<Merch_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Merch_Where_Or>>>;
  blurb?: InputMaybe<Merch_Blurb_Operator>;
  createdAt?: InputMaybe<Merch_CreatedAt_Operator>;
  id?: InputMaybe<Merch_Id_Operator>;
  image?: InputMaybe<Merch_Image_Operator>;
  soldOut?: InputMaybe<Merch_SoldOut_Operator>;
  title?: InputMaybe<Merch_Title_Operator>;
  updatedAt?: InputMaybe<Merch_UpdatedAt_Operator>;
  url?: InputMaybe<Merch_Url_Operator>;
};

export type Merch_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Merch_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Merch_Where_Or>>>;
  blurb?: InputMaybe<Merch_Blurb_Operator>;
  createdAt?: InputMaybe<Merch_CreatedAt_Operator>;
  id?: InputMaybe<Merch_Id_Operator>;
  image?: InputMaybe<Merch_Image_Operator>;
  soldOut?: InputMaybe<Merch_SoldOut_Operator>;
  title?: InputMaybe<Merch_Title_Operator>;
  updatedAt?: InputMaybe<Merch_UpdatedAt_Operator>;
  url?: InputMaybe<Merch_Url_Operator>;
};

export type Merch_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Merch_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Merch_Where_Or>>>;
  blurb?: InputMaybe<Merch_Blurb_Operator>;
  createdAt?: InputMaybe<Merch_CreatedAt_Operator>;
  id?: InputMaybe<Merch_Id_Operator>;
  image?: InputMaybe<Merch_Image_Operator>;
  soldOut?: InputMaybe<Merch_SoldOut_Operator>;
  title?: InputMaybe<Merch_Title_Operator>;
  updatedAt?: InputMaybe<Merch_UpdatedAt_Operator>;
  url?: InputMaybe<Merch_Url_Operator>;
};

export type Merches = {
  __typename?: 'Merches';
  docs: Array<Merch>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createHost?: Maybe<Host>;
  createLabelRelease?: Maybe<LabelRelease>;
  createLiveVideo?: Maybe<LiveVideo>;
  createMedia?: Maybe<Media>;
  createMerch?: Maybe<Merch>;
  createNewsPost?: Maybe<NewsPost>;
  createPayloadJob?: Maybe<PayloadJob>;
  createPayloadKv?: Maybe<PayloadKv>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createRestartLibretime?: Maybe<RestartLibretime>;
  createShow?: Maybe<Show>;
  createTag?: Maybe<Tag>;
  createUser?: Maybe<User>;
  deleteCategory?: Maybe<Category>;
  deleteHost?: Maybe<Host>;
  deleteLabelRelease?: Maybe<LabelRelease>;
  deleteLiveVideo?: Maybe<LiveVideo>;
  deleteMedia?: Maybe<Media>;
  deleteMerch?: Maybe<Merch>;
  deleteNewsPost?: Maybe<NewsPost>;
  deletePayloadJob?: Maybe<PayloadJob>;
  deletePayloadKv?: Maybe<PayloadKv>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteRestartLibretime?: Maybe<RestartLibretime>;
  deleteShow?: Maybe<Show>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  duplicateCategory?: Maybe<Category>;
  duplicateHost?: Maybe<Host>;
  duplicateLabelRelease?: Maybe<LabelRelease>;
  duplicateLiveVideo?: Maybe<LiveVideo>;
  duplicateMedia?: Maybe<Media>;
  duplicateMerch?: Maybe<Merch>;
  duplicateNewsPost?: Maybe<NewsPost>;
  duplicatePayloadJob?: Maybe<PayloadJob>;
  duplicatePayloadKv?: Maybe<PayloadKv>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicateRestartLibretime?: Maybe<RestartLibretime>;
  duplicateShow?: Maybe<Show>;
  duplicateTag?: Maybe<Tag>;
  forgotPasswordUser: Scalars['Boolean'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  restoreVersionNewsPost?: Maybe<NewsPost>;
  unlockUser: Scalars['Boolean'];
  updateAboutPage?: Maybe<AboutPage>;
  updateCategory?: Maybe<Category>;
  updateDonatePage?: Maybe<DonatePage>;
  updateHost?: Maybe<Host>;
  updateLabelRelease?: Maybe<LabelRelease>;
  updateLiveVideo?: Maybe<LiveVideo>;
  updateMedia?: Maybe<Media>;
  updateMerch?: Maybe<Merch>;
  updateNewsPost?: Maybe<NewsPost>;
  updatePayloadJob?: Maybe<PayloadJob>;
  updatePayloadKv?: Maybe<PayloadKv>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateRestartLibretime?: Maybe<RestartLibretime>;
  updateShow?: Maybe<Show>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateCategoryArgs = {
  data: MutationCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateHostArgs = {
  data: MutationHostInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateLabelReleaseArgs = {
  data: MutationLabelReleaseInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateLiveVideoArgs = {
  data: MutationLiveVideoInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateMerchArgs = {
  data: MutationMerchInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateNewsPostArgs = {
  data: MutationNewsPostInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadJobArgs = {
  data: MutationPayloadJobInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateRestartLibretimeArgs = {
  data: MutationRestartLibretimeInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateShowArgs = {
  data: MutationShowInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateTagArgs = {
  data: MutationTagInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteHostArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteLabelReleaseArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteLiveVideoArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteMerchArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteNewsPostArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeletePayloadJobArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeletePayloadKvArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteRestartLibretimeArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteShowArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteTagArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDuplicateCategoryArgs = {
  data: MutationCategoryInput;
  id: Scalars['String'];
};


export type MutationDuplicateHostArgs = {
  data: MutationHostInput;
  id: Scalars['String'];
};


export type MutationDuplicateLabelReleaseArgs = {
  data: MutationLabelReleaseInput;
  id: Scalars['String'];
};


export type MutationDuplicateLiveVideoArgs = {
  data: MutationLiveVideoInput;
  id: Scalars['String'];
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['String'];
};


export type MutationDuplicateMerchArgs = {
  data: MutationMerchInput;
  id: Scalars['String'];
};


export type MutationDuplicateNewsPostArgs = {
  data: MutationNewsPostInput;
  id: Scalars['String'];
};


export type MutationDuplicatePayloadJobArgs = {
  data: MutationPayloadJobInput;
  id: Scalars['String'];
};


export type MutationDuplicatePayloadKvArgs = {
  data: MutationPayloadKvInput;
  id: Scalars['String'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['String'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['String'];
};


export type MutationDuplicateRestartLibretimeArgs = {
  data: MutationRestartLibretimeInput;
  id: Scalars['String'];
};


export type MutationDuplicateShowArgs = {
  data: MutationShowInput;
  id: Scalars['String'];
};


export type MutationDuplicateTagArgs = {
  data: MutationTagInput;
  id: Scalars['String'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};


export type MutationLogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionNewsPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateAboutPageArgs = {
  data: MutationAboutPageInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateCategoryArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateDonatePageArgs = {
  data: MutationDonatePageInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
};


export type MutationUpdateHostArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationHostUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateLabelReleaseArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationLabelReleaseUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateLiveVideoArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationLiveVideoUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateMerchArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationMerchUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateNewsPostArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationNewsPostUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdatePayloadJobArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPayloadJobUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdatePayloadKvArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPayloadKvUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateRestartLibretimeArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationRestartLibretimeUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateShowArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationShowUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateTagArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationTagUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type NewsPost = {
  __typename?: 'NewsPost';
  _status?: Maybe<NewsPost__Status>;
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heyZineUrl?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  previewBanner?: Maybe<Media>;
  publishDate?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NewsPostAuthorArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type NewsPostContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type NewsPostPreviewBannerArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type NewsPostTagsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum NewsPostUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type NewsPostVersion = {
  __typename?: 'NewsPostVersion';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  latest?: Maybe<Scalars['Boolean']>;
  parent?: Maybe<NewsPost>;
  publishedLocale?: Maybe<NewsPostVersion_PublishedLocale>;
  snapshot?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<NewsPostVersion_Version>;
};


export type NewsPostVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type NewsPostVersion_Version = {
  __typename?: 'NewsPostVersion_Version';
  _status?: Maybe<NewsPostVersion_Version__Status>;
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  blurb?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['JSON']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  heyZineUrl?: Maybe<Scalars['String']>;
  previewBanner?: Maybe<Media>;
  publishDate?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NewsPostVersion_VersionAuthorArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type NewsPostVersion_VersionContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type NewsPostVersion_VersionPreviewBannerArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type NewsPostVersion_VersionTagsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export enum NewsPostVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum NewsPostVersion_PublishedLocale {
  En = 'en',
  Pt = 'pt'
}

export enum NewsPost__Status {
  Draft = 'draft',
  Published = 'published'
}

export enum NewsPost__Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum NewsPost__Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type NewsPost__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<NewsPost__Status_Input>>>;
  equals?: InputMaybe<NewsPost__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<NewsPost__Status_Input>>>;
  not_equals?: InputMaybe<NewsPost__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<NewsPost__Status_Input>>>;
};

export type NewsPost_AuthorId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_AuthorName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_Author_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type NewsPost_Blurb_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type NewsPost_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type NewsPost_HeyZineUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type NewsPost_PublishDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type NewsPost_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type NewsPost_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type NewsPost_Where = {
  AND?: InputMaybe<Array<InputMaybe<NewsPost_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsPost_Where_Or>>>;
  _status?: InputMaybe<NewsPost__Status_Operator>;
  author?: InputMaybe<NewsPost_Author_Operator>;
  authorId?: InputMaybe<NewsPost_AuthorId_Operator>;
  authorName?: InputMaybe<NewsPost_AuthorName_Operator>;
  blurb?: InputMaybe<NewsPost_Blurb_Operator>;
  content?: InputMaybe<NewsPost_Content_Operator>;
  createdAt?: InputMaybe<NewsPost_CreatedAt_Operator>;
  heyZineUrl?: InputMaybe<NewsPost_HeyZineUrl_Operator>;
  id?: InputMaybe<NewsPost_Id_Operator>;
  previewBanner?: InputMaybe<NewsPost_PreviewBanner_Operator>;
  publishDate?: InputMaybe<NewsPost_PublishDate_Operator>;
  slug?: InputMaybe<NewsPost_Slug_Operator>;
  tags?: InputMaybe<NewsPost_Tags_Operator>;
  title?: InputMaybe<NewsPost_Title_Operator>;
  updatedAt?: InputMaybe<NewsPost_UpdatedAt_Operator>;
};

export type NewsPost_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<NewsPost_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsPost_Where_Or>>>;
  _status?: InputMaybe<NewsPost__Status_Operator>;
  author?: InputMaybe<NewsPost_Author_Operator>;
  authorId?: InputMaybe<NewsPost_AuthorId_Operator>;
  authorName?: InputMaybe<NewsPost_AuthorName_Operator>;
  blurb?: InputMaybe<NewsPost_Blurb_Operator>;
  content?: InputMaybe<NewsPost_Content_Operator>;
  createdAt?: InputMaybe<NewsPost_CreatedAt_Operator>;
  heyZineUrl?: InputMaybe<NewsPost_HeyZineUrl_Operator>;
  id?: InputMaybe<NewsPost_Id_Operator>;
  previewBanner?: InputMaybe<NewsPost_PreviewBanner_Operator>;
  publishDate?: InputMaybe<NewsPost_PublishDate_Operator>;
  slug?: InputMaybe<NewsPost_Slug_Operator>;
  tags?: InputMaybe<NewsPost_Tags_Operator>;
  title?: InputMaybe<NewsPost_Title_Operator>;
  updatedAt?: InputMaybe<NewsPost_UpdatedAt_Operator>;
};

export type NewsPost_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<NewsPost_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsPost_Where_Or>>>;
  _status?: InputMaybe<NewsPost__Status_Operator>;
  author?: InputMaybe<NewsPost_Author_Operator>;
  authorId?: InputMaybe<NewsPost_AuthorId_Operator>;
  authorName?: InputMaybe<NewsPost_AuthorName_Operator>;
  blurb?: InputMaybe<NewsPost_Blurb_Operator>;
  content?: InputMaybe<NewsPost_Content_Operator>;
  createdAt?: InputMaybe<NewsPost_CreatedAt_Operator>;
  heyZineUrl?: InputMaybe<NewsPost_HeyZineUrl_Operator>;
  id?: InputMaybe<NewsPost_Id_Operator>;
  previewBanner?: InputMaybe<NewsPost_PreviewBanner_Operator>;
  publishDate?: InputMaybe<NewsPost_PublishDate_Operator>;
  slug?: InputMaybe<NewsPost_Slug_Operator>;
  tags?: InputMaybe<NewsPost_Tags_Operator>;
  title?: InputMaybe<NewsPost_Title_Operator>;
  updatedAt?: InputMaybe<NewsPost_UpdatedAt_Operator>;
};

export type NewsPosts = {
  __typename?: 'NewsPosts';
  docs: Array<NewsPost>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type NewsPostsCreateAccess = {
  __typename?: 'NewsPostsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsPostsCreateDocAccess = {
  __typename?: 'NewsPostsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsPostsDeleteAccess = {
  __typename?: 'NewsPostsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsPostsDeleteDocAccess = {
  __typename?: 'NewsPostsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsPostsDocAccessFields = {
  __typename?: 'NewsPostsDocAccessFields';
  _status?: Maybe<NewsPostsDocAccessFields__Status>;
  author?: Maybe<NewsPostsDocAccessFields_Author>;
  authorId?: Maybe<NewsPostsDocAccessFields_AuthorId>;
  authorName?: Maybe<NewsPostsDocAccessFields_AuthorName>;
  blurb?: Maybe<NewsPostsDocAccessFields_Blurb>;
  content?: Maybe<NewsPostsDocAccessFields_Content>;
  createdAt?: Maybe<NewsPostsDocAccessFields_CreatedAt>;
  heyZineUrl?: Maybe<NewsPostsDocAccessFields_HeyZineUrl>;
  previewBanner?: Maybe<NewsPostsDocAccessFields_PreviewBanner>;
  publishDate?: Maybe<NewsPostsDocAccessFields_PublishDate>;
  slug?: Maybe<NewsPostsDocAccessFields_Slug>;
  tags?: Maybe<NewsPostsDocAccessFields_Tags>;
  title?: Maybe<NewsPostsDocAccessFields_Title>;
  updatedAt?: Maybe<NewsPostsDocAccessFields_UpdatedAt>;
};

export type NewsPostsDocAccessFields__Status = {
  __typename?: 'NewsPostsDocAccessFields__status';
  create?: Maybe<NewsPostsDocAccessFields__Status_Create>;
  delete?: Maybe<NewsPostsDocAccessFields__Status_Delete>;
  read?: Maybe<NewsPostsDocAccessFields__Status_Read>;
  update?: Maybe<NewsPostsDocAccessFields__Status_Update>;
};

export type NewsPostsDocAccessFields__Status_Create = {
  __typename?: 'NewsPostsDocAccessFields__status_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields__Status_Delete = {
  __typename?: 'NewsPostsDocAccessFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields__Status_Read = {
  __typename?: 'NewsPostsDocAccessFields__status_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields__Status_Update = {
  __typename?: 'NewsPostsDocAccessFields__status_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Author = {
  __typename?: 'NewsPostsDocAccessFields_author';
  create?: Maybe<NewsPostsDocAccessFields_Author_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_Author_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_Author_Read>;
  update?: Maybe<NewsPostsDocAccessFields_Author_Update>;
};

export type NewsPostsDocAccessFields_AuthorId = {
  __typename?: 'NewsPostsDocAccessFields_authorId';
  create?: Maybe<NewsPostsDocAccessFields_AuthorId_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_AuthorId_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_AuthorId_Read>;
  update?: Maybe<NewsPostsDocAccessFields_AuthorId_Update>;
};

export type NewsPostsDocAccessFields_AuthorId_Create = {
  __typename?: 'NewsPostsDocAccessFields_authorId_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_AuthorId_Delete = {
  __typename?: 'NewsPostsDocAccessFields_authorId_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_AuthorId_Read = {
  __typename?: 'NewsPostsDocAccessFields_authorId_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_AuthorId_Update = {
  __typename?: 'NewsPostsDocAccessFields_authorId_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_AuthorName = {
  __typename?: 'NewsPostsDocAccessFields_authorName';
  create?: Maybe<NewsPostsDocAccessFields_AuthorName_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_AuthorName_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_AuthorName_Read>;
  update?: Maybe<NewsPostsDocAccessFields_AuthorName_Update>;
};

export type NewsPostsDocAccessFields_AuthorName_Create = {
  __typename?: 'NewsPostsDocAccessFields_authorName_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_AuthorName_Delete = {
  __typename?: 'NewsPostsDocAccessFields_authorName_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_AuthorName_Read = {
  __typename?: 'NewsPostsDocAccessFields_authorName_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_AuthorName_Update = {
  __typename?: 'NewsPostsDocAccessFields_authorName_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Author_Create = {
  __typename?: 'NewsPostsDocAccessFields_author_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Author_Delete = {
  __typename?: 'NewsPostsDocAccessFields_author_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Author_Read = {
  __typename?: 'NewsPostsDocAccessFields_author_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Author_Update = {
  __typename?: 'NewsPostsDocAccessFields_author_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Blurb = {
  __typename?: 'NewsPostsDocAccessFields_blurb';
  create?: Maybe<NewsPostsDocAccessFields_Blurb_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_Blurb_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_Blurb_Read>;
  update?: Maybe<NewsPostsDocAccessFields_Blurb_Update>;
};

export type NewsPostsDocAccessFields_Blurb_Create = {
  __typename?: 'NewsPostsDocAccessFields_blurb_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Blurb_Delete = {
  __typename?: 'NewsPostsDocAccessFields_blurb_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Blurb_Read = {
  __typename?: 'NewsPostsDocAccessFields_blurb_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Blurb_Update = {
  __typename?: 'NewsPostsDocAccessFields_blurb_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Content = {
  __typename?: 'NewsPostsDocAccessFields_content';
  create?: Maybe<NewsPostsDocAccessFields_Content_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_Content_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_Content_Read>;
  update?: Maybe<NewsPostsDocAccessFields_Content_Update>;
};

export type NewsPostsDocAccessFields_Content_Create = {
  __typename?: 'NewsPostsDocAccessFields_content_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Content_Delete = {
  __typename?: 'NewsPostsDocAccessFields_content_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Content_Read = {
  __typename?: 'NewsPostsDocAccessFields_content_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Content_Update = {
  __typename?: 'NewsPostsDocAccessFields_content_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_CreatedAt = {
  __typename?: 'NewsPostsDocAccessFields_createdAt';
  create?: Maybe<NewsPostsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<NewsPostsDocAccessFields_CreatedAt_Update>;
};

export type NewsPostsDocAccessFields_CreatedAt_Create = {
  __typename?: 'NewsPostsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'NewsPostsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_CreatedAt_Read = {
  __typename?: 'NewsPostsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_CreatedAt_Update = {
  __typename?: 'NewsPostsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_HeyZineUrl = {
  __typename?: 'NewsPostsDocAccessFields_heyZineUrl';
  create?: Maybe<NewsPostsDocAccessFields_HeyZineUrl_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_HeyZineUrl_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_HeyZineUrl_Read>;
  update?: Maybe<NewsPostsDocAccessFields_HeyZineUrl_Update>;
};

export type NewsPostsDocAccessFields_HeyZineUrl_Create = {
  __typename?: 'NewsPostsDocAccessFields_heyZineUrl_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_HeyZineUrl_Delete = {
  __typename?: 'NewsPostsDocAccessFields_heyZineUrl_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_HeyZineUrl_Read = {
  __typename?: 'NewsPostsDocAccessFields_heyZineUrl_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_HeyZineUrl_Update = {
  __typename?: 'NewsPostsDocAccessFields_heyZineUrl_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_PreviewBanner = {
  __typename?: 'NewsPostsDocAccessFields_previewBanner';
  create?: Maybe<NewsPostsDocAccessFields_PreviewBanner_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_PreviewBanner_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_PreviewBanner_Read>;
  update?: Maybe<NewsPostsDocAccessFields_PreviewBanner_Update>;
};

export type NewsPostsDocAccessFields_PreviewBanner_Create = {
  __typename?: 'NewsPostsDocAccessFields_previewBanner_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_PreviewBanner_Delete = {
  __typename?: 'NewsPostsDocAccessFields_previewBanner_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_PreviewBanner_Read = {
  __typename?: 'NewsPostsDocAccessFields_previewBanner_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_PreviewBanner_Update = {
  __typename?: 'NewsPostsDocAccessFields_previewBanner_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_PublishDate = {
  __typename?: 'NewsPostsDocAccessFields_publishDate';
  create?: Maybe<NewsPostsDocAccessFields_PublishDate_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_PublishDate_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_PublishDate_Read>;
  update?: Maybe<NewsPostsDocAccessFields_PublishDate_Update>;
};

export type NewsPostsDocAccessFields_PublishDate_Create = {
  __typename?: 'NewsPostsDocAccessFields_publishDate_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_PublishDate_Delete = {
  __typename?: 'NewsPostsDocAccessFields_publishDate_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_PublishDate_Read = {
  __typename?: 'NewsPostsDocAccessFields_publishDate_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_PublishDate_Update = {
  __typename?: 'NewsPostsDocAccessFields_publishDate_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Slug = {
  __typename?: 'NewsPostsDocAccessFields_slug';
  create?: Maybe<NewsPostsDocAccessFields_Slug_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_Slug_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_Slug_Read>;
  update?: Maybe<NewsPostsDocAccessFields_Slug_Update>;
};

export type NewsPostsDocAccessFields_Slug_Create = {
  __typename?: 'NewsPostsDocAccessFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Slug_Delete = {
  __typename?: 'NewsPostsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Slug_Read = {
  __typename?: 'NewsPostsDocAccessFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Slug_Update = {
  __typename?: 'NewsPostsDocAccessFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Tags = {
  __typename?: 'NewsPostsDocAccessFields_tags';
  create?: Maybe<NewsPostsDocAccessFields_Tags_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_Tags_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_Tags_Read>;
  update?: Maybe<NewsPostsDocAccessFields_Tags_Update>;
};

export type NewsPostsDocAccessFields_Tags_Create = {
  __typename?: 'NewsPostsDocAccessFields_tags_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Tags_Delete = {
  __typename?: 'NewsPostsDocAccessFields_tags_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Tags_Read = {
  __typename?: 'NewsPostsDocAccessFields_tags_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Tags_Update = {
  __typename?: 'NewsPostsDocAccessFields_tags_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Title = {
  __typename?: 'NewsPostsDocAccessFields_title';
  create?: Maybe<NewsPostsDocAccessFields_Title_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_Title_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_Title_Read>;
  update?: Maybe<NewsPostsDocAccessFields_Title_Update>;
};

export type NewsPostsDocAccessFields_Title_Create = {
  __typename?: 'NewsPostsDocAccessFields_title_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Title_Delete = {
  __typename?: 'NewsPostsDocAccessFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Title_Read = {
  __typename?: 'NewsPostsDocAccessFields_title_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_Title_Update = {
  __typename?: 'NewsPostsDocAccessFields_title_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_UpdatedAt = {
  __typename?: 'NewsPostsDocAccessFields_updatedAt';
  create?: Maybe<NewsPostsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<NewsPostsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<NewsPostsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<NewsPostsDocAccessFields_UpdatedAt_Update>;
};

export type NewsPostsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'NewsPostsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'NewsPostsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'NewsPostsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'NewsPostsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields = {
  __typename?: 'NewsPostsFields';
  _status?: Maybe<NewsPostsFields__Status>;
  author?: Maybe<NewsPostsFields_Author>;
  authorId?: Maybe<NewsPostsFields_AuthorId>;
  authorName?: Maybe<NewsPostsFields_AuthorName>;
  blurb?: Maybe<NewsPostsFields_Blurb>;
  content?: Maybe<NewsPostsFields_Content>;
  createdAt?: Maybe<NewsPostsFields_CreatedAt>;
  heyZineUrl?: Maybe<NewsPostsFields_HeyZineUrl>;
  previewBanner?: Maybe<NewsPostsFields_PreviewBanner>;
  publishDate?: Maybe<NewsPostsFields_PublishDate>;
  slug?: Maybe<NewsPostsFields_Slug>;
  tags?: Maybe<NewsPostsFields_Tags>;
  title?: Maybe<NewsPostsFields_Title>;
  updatedAt?: Maybe<NewsPostsFields_UpdatedAt>;
};

export type NewsPostsFields__Status = {
  __typename?: 'NewsPostsFields__status';
  create?: Maybe<NewsPostsFields__Status_Create>;
  delete?: Maybe<NewsPostsFields__Status_Delete>;
  read?: Maybe<NewsPostsFields__Status_Read>;
  update?: Maybe<NewsPostsFields__Status_Update>;
};

export type NewsPostsFields__Status_Create = {
  __typename?: 'NewsPostsFields__status_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields__Status_Delete = {
  __typename?: 'NewsPostsFields__status_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields__Status_Read = {
  __typename?: 'NewsPostsFields__status_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields__Status_Update = {
  __typename?: 'NewsPostsFields__status_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Author = {
  __typename?: 'NewsPostsFields_author';
  create?: Maybe<NewsPostsFields_Author_Create>;
  delete?: Maybe<NewsPostsFields_Author_Delete>;
  read?: Maybe<NewsPostsFields_Author_Read>;
  update?: Maybe<NewsPostsFields_Author_Update>;
};

export type NewsPostsFields_AuthorId = {
  __typename?: 'NewsPostsFields_authorId';
  create?: Maybe<NewsPostsFields_AuthorId_Create>;
  delete?: Maybe<NewsPostsFields_AuthorId_Delete>;
  read?: Maybe<NewsPostsFields_AuthorId_Read>;
  update?: Maybe<NewsPostsFields_AuthorId_Update>;
};

export type NewsPostsFields_AuthorId_Create = {
  __typename?: 'NewsPostsFields_authorId_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_AuthorId_Delete = {
  __typename?: 'NewsPostsFields_authorId_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_AuthorId_Read = {
  __typename?: 'NewsPostsFields_authorId_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_AuthorId_Update = {
  __typename?: 'NewsPostsFields_authorId_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_AuthorName = {
  __typename?: 'NewsPostsFields_authorName';
  create?: Maybe<NewsPostsFields_AuthorName_Create>;
  delete?: Maybe<NewsPostsFields_AuthorName_Delete>;
  read?: Maybe<NewsPostsFields_AuthorName_Read>;
  update?: Maybe<NewsPostsFields_AuthorName_Update>;
};

export type NewsPostsFields_AuthorName_Create = {
  __typename?: 'NewsPostsFields_authorName_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_AuthorName_Delete = {
  __typename?: 'NewsPostsFields_authorName_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_AuthorName_Read = {
  __typename?: 'NewsPostsFields_authorName_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_AuthorName_Update = {
  __typename?: 'NewsPostsFields_authorName_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Author_Create = {
  __typename?: 'NewsPostsFields_author_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Author_Delete = {
  __typename?: 'NewsPostsFields_author_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Author_Read = {
  __typename?: 'NewsPostsFields_author_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Author_Update = {
  __typename?: 'NewsPostsFields_author_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Blurb = {
  __typename?: 'NewsPostsFields_blurb';
  create?: Maybe<NewsPostsFields_Blurb_Create>;
  delete?: Maybe<NewsPostsFields_Blurb_Delete>;
  read?: Maybe<NewsPostsFields_Blurb_Read>;
  update?: Maybe<NewsPostsFields_Blurb_Update>;
};

export type NewsPostsFields_Blurb_Create = {
  __typename?: 'NewsPostsFields_blurb_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Blurb_Delete = {
  __typename?: 'NewsPostsFields_blurb_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Blurb_Read = {
  __typename?: 'NewsPostsFields_blurb_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Blurb_Update = {
  __typename?: 'NewsPostsFields_blurb_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Content = {
  __typename?: 'NewsPostsFields_content';
  create?: Maybe<NewsPostsFields_Content_Create>;
  delete?: Maybe<NewsPostsFields_Content_Delete>;
  read?: Maybe<NewsPostsFields_Content_Read>;
  update?: Maybe<NewsPostsFields_Content_Update>;
};

export type NewsPostsFields_Content_Create = {
  __typename?: 'NewsPostsFields_content_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Content_Delete = {
  __typename?: 'NewsPostsFields_content_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Content_Read = {
  __typename?: 'NewsPostsFields_content_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Content_Update = {
  __typename?: 'NewsPostsFields_content_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_CreatedAt = {
  __typename?: 'NewsPostsFields_createdAt';
  create?: Maybe<NewsPostsFields_CreatedAt_Create>;
  delete?: Maybe<NewsPostsFields_CreatedAt_Delete>;
  read?: Maybe<NewsPostsFields_CreatedAt_Read>;
  update?: Maybe<NewsPostsFields_CreatedAt_Update>;
};

export type NewsPostsFields_CreatedAt_Create = {
  __typename?: 'NewsPostsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_CreatedAt_Delete = {
  __typename?: 'NewsPostsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_CreatedAt_Read = {
  __typename?: 'NewsPostsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_CreatedAt_Update = {
  __typename?: 'NewsPostsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_HeyZineUrl = {
  __typename?: 'NewsPostsFields_heyZineUrl';
  create?: Maybe<NewsPostsFields_HeyZineUrl_Create>;
  delete?: Maybe<NewsPostsFields_HeyZineUrl_Delete>;
  read?: Maybe<NewsPostsFields_HeyZineUrl_Read>;
  update?: Maybe<NewsPostsFields_HeyZineUrl_Update>;
};

export type NewsPostsFields_HeyZineUrl_Create = {
  __typename?: 'NewsPostsFields_heyZineUrl_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_HeyZineUrl_Delete = {
  __typename?: 'NewsPostsFields_heyZineUrl_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_HeyZineUrl_Read = {
  __typename?: 'NewsPostsFields_heyZineUrl_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_HeyZineUrl_Update = {
  __typename?: 'NewsPostsFields_heyZineUrl_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_PreviewBanner = {
  __typename?: 'NewsPostsFields_previewBanner';
  create?: Maybe<NewsPostsFields_PreviewBanner_Create>;
  delete?: Maybe<NewsPostsFields_PreviewBanner_Delete>;
  read?: Maybe<NewsPostsFields_PreviewBanner_Read>;
  update?: Maybe<NewsPostsFields_PreviewBanner_Update>;
};

export type NewsPostsFields_PreviewBanner_Create = {
  __typename?: 'NewsPostsFields_previewBanner_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_PreviewBanner_Delete = {
  __typename?: 'NewsPostsFields_previewBanner_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_PreviewBanner_Read = {
  __typename?: 'NewsPostsFields_previewBanner_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_PreviewBanner_Update = {
  __typename?: 'NewsPostsFields_previewBanner_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_PublishDate = {
  __typename?: 'NewsPostsFields_publishDate';
  create?: Maybe<NewsPostsFields_PublishDate_Create>;
  delete?: Maybe<NewsPostsFields_PublishDate_Delete>;
  read?: Maybe<NewsPostsFields_PublishDate_Read>;
  update?: Maybe<NewsPostsFields_PublishDate_Update>;
};

export type NewsPostsFields_PublishDate_Create = {
  __typename?: 'NewsPostsFields_publishDate_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_PublishDate_Delete = {
  __typename?: 'NewsPostsFields_publishDate_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_PublishDate_Read = {
  __typename?: 'NewsPostsFields_publishDate_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_PublishDate_Update = {
  __typename?: 'NewsPostsFields_publishDate_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Slug = {
  __typename?: 'NewsPostsFields_slug';
  create?: Maybe<NewsPostsFields_Slug_Create>;
  delete?: Maybe<NewsPostsFields_Slug_Delete>;
  read?: Maybe<NewsPostsFields_Slug_Read>;
  update?: Maybe<NewsPostsFields_Slug_Update>;
};

export type NewsPostsFields_Slug_Create = {
  __typename?: 'NewsPostsFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Slug_Delete = {
  __typename?: 'NewsPostsFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Slug_Read = {
  __typename?: 'NewsPostsFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Slug_Update = {
  __typename?: 'NewsPostsFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Tags = {
  __typename?: 'NewsPostsFields_tags';
  create?: Maybe<NewsPostsFields_Tags_Create>;
  delete?: Maybe<NewsPostsFields_Tags_Delete>;
  read?: Maybe<NewsPostsFields_Tags_Read>;
  update?: Maybe<NewsPostsFields_Tags_Update>;
};

export type NewsPostsFields_Tags_Create = {
  __typename?: 'NewsPostsFields_tags_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Tags_Delete = {
  __typename?: 'NewsPostsFields_tags_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Tags_Read = {
  __typename?: 'NewsPostsFields_tags_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Tags_Update = {
  __typename?: 'NewsPostsFields_tags_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Title = {
  __typename?: 'NewsPostsFields_title';
  create?: Maybe<NewsPostsFields_Title_Create>;
  delete?: Maybe<NewsPostsFields_Title_Delete>;
  read?: Maybe<NewsPostsFields_Title_Read>;
  update?: Maybe<NewsPostsFields_Title_Update>;
};

export type NewsPostsFields_Title_Create = {
  __typename?: 'NewsPostsFields_title_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Title_Delete = {
  __typename?: 'NewsPostsFields_title_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Title_Read = {
  __typename?: 'NewsPostsFields_title_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_Title_Update = {
  __typename?: 'NewsPostsFields_title_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_UpdatedAt = {
  __typename?: 'NewsPostsFields_updatedAt';
  create?: Maybe<NewsPostsFields_UpdatedAt_Create>;
  delete?: Maybe<NewsPostsFields_UpdatedAt_Delete>;
  read?: Maybe<NewsPostsFields_UpdatedAt_Read>;
  update?: Maybe<NewsPostsFields_UpdatedAt_Update>;
};

export type NewsPostsFields_UpdatedAt_Create = {
  __typename?: 'NewsPostsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_UpdatedAt_Delete = {
  __typename?: 'NewsPostsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_UpdatedAt_Read = {
  __typename?: 'NewsPostsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type NewsPostsFields_UpdatedAt_Update = {
  __typename?: 'NewsPostsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type NewsPostsReadAccess = {
  __typename?: 'NewsPostsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsPostsReadDocAccess = {
  __typename?: 'NewsPostsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsPostsReadVersionsAccess = {
  __typename?: 'NewsPostsReadVersionsAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsPostsReadVersionsDocAccess = {
  __typename?: 'NewsPostsReadVersionsDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsPostsUpdateAccess = {
  __typename?: 'NewsPostsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsPostsUpdateDocAccess = {
  __typename?: 'NewsPostsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Owncast = {
  __typename?: 'Owncast';
  isLive?: Maybe<Scalars['Boolean']>;
};

export type PayloadJob = {
  __typename?: 'PayloadJob';
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  error?: Maybe<Scalars['JSON']>;
  hasError?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  input?: Maybe<Scalars['JSON']>;
  log?: Maybe<Array<PayloadJob_Log>>;
  processing?: Maybe<Scalars['Boolean']>;
  queue?: Maybe<Scalars['String']>;
  taskSlug?: Maybe<PayloadJob_TaskSlug>;
  taskStatus?: Maybe<Scalars['JSON']>;
  totalTried?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  waitUntil?: Maybe<Scalars['DateTime']>;
};

export enum PayloadJobUpdate_Log_TaskSlug_MutationInput {
  Inline = 'inline',
  RestartServer = 'restartServer'
}

export enum PayloadJobUpdate_TaskSlug_MutationInput {
  Inline = 'inline',
  RestartServer = 'restartServer'
}

export type PayloadJob_Log = {
  __typename?: 'PayloadJob_Log';
  completedAt?: Maybe<Scalars['DateTime']>;
  error?: Maybe<Scalars['JSON']>;
  executedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  input?: Maybe<Scalars['JSON']>;
  output?: Maybe<Scalars['JSON']>;
  state?: Maybe<PayloadJob_Log_State>;
  taskID?: Maybe<Scalars['String']>;
  taskSlug?: Maybe<PayloadJob_Log_TaskSlug>;
};

export enum PayloadJob_Log_State {
  Failed = 'failed',
  Succeeded = 'succeeded'
}

export enum PayloadJob_Log_TaskSlug {
  Inline = 'inline',
  RestartServer = 'restartServer'
}

export enum PayloadJob_Log_TaskSlug_MutationInput {
  Inline = 'inline',
  RestartServer = 'restartServer'
}

export type PayloadJob_CompletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadJob_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadJob_Error_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadJob_HasError_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type PayloadJob_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadJob_Input_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadJob_Log__CompletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadJob_Log__Error_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadJob_Log__ExecutedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadJob_Log__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadJob_Log__Input_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadJob_Log__Output_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadJob_Log__State_Input {
  Failed = 'failed',
  Succeeded = 'succeeded'
}

export type PayloadJob_Log__State_Operator = {
  contains?: InputMaybe<PayloadJob_Log__State_Input>;
  equals?: InputMaybe<PayloadJob_Log__State_Input>;
  like?: InputMaybe<PayloadJob_Log__State_Input>;
  not_equals?: InputMaybe<PayloadJob_Log__State_Input>;
};

export type PayloadJob_Log__TaskId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum PayloadJob_Log__TaskSlug_Input {
  Inline = 'inline',
  RestartServer = 'restartServer'
}

export type PayloadJob_Log__TaskSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadJob_Log__TaskSlug_Input>>>;
  equals?: InputMaybe<PayloadJob_Log__TaskSlug_Input>;
  in?: InputMaybe<Array<InputMaybe<PayloadJob_Log__TaskSlug_Input>>>;
  not_equals?: InputMaybe<PayloadJob_Log__TaskSlug_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PayloadJob_Log__TaskSlug_Input>>>;
};

export type PayloadJob_Processing_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type PayloadJob_Queue_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum PayloadJob_TaskSlug {
  Inline = 'inline',
  RestartServer = 'restartServer'
}

export enum PayloadJob_TaskSlug_Input {
  Inline = 'inline',
  RestartServer = 'restartServer'
}

export enum PayloadJob_TaskSlug_MutationInput {
  Inline = 'inline',
  RestartServer = 'restartServer'
}

export type PayloadJob_TaskSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadJob_TaskSlug_Input>>>;
  equals?: InputMaybe<PayloadJob_TaskSlug_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<PayloadJob_TaskSlug_Input>>>;
  not_equals?: InputMaybe<PayloadJob_TaskSlug_Input>;
  not_in?: InputMaybe<Array<InputMaybe<PayloadJob_TaskSlug_Input>>>;
};

export type PayloadJob_TaskStatus_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadJob_TotalTried_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type PayloadJob_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadJob_WaitUntil_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadJob_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadJob_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadJob_Where_Or>>>;
  completedAt?: InputMaybe<PayloadJob_CompletedAt_Operator>;
  createdAt?: InputMaybe<PayloadJob_CreatedAt_Operator>;
  error?: InputMaybe<PayloadJob_Error_Operator>;
  hasError?: InputMaybe<PayloadJob_HasError_Operator>;
  id?: InputMaybe<PayloadJob_Id_Operator>;
  input?: InputMaybe<PayloadJob_Input_Operator>;
  log__completedAt?: InputMaybe<PayloadJob_Log__CompletedAt_Operator>;
  log__error?: InputMaybe<PayloadJob_Log__Error_Operator>;
  log__executedAt?: InputMaybe<PayloadJob_Log__ExecutedAt_Operator>;
  log__id?: InputMaybe<PayloadJob_Log__Id_Operator>;
  log__input?: InputMaybe<PayloadJob_Log__Input_Operator>;
  log__output?: InputMaybe<PayloadJob_Log__Output_Operator>;
  log__state?: InputMaybe<PayloadJob_Log__State_Operator>;
  log__taskID?: InputMaybe<PayloadJob_Log__TaskId_Operator>;
  log__taskSlug?: InputMaybe<PayloadJob_Log__TaskSlug_Operator>;
  processing?: InputMaybe<PayloadJob_Processing_Operator>;
  queue?: InputMaybe<PayloadJob_Queue_Operator>;
  taskSlug?: InputMaybe<PayloadJob_TaskSlug_Operator>;
  taskStatus?: InputMaybe<PayloadJob_TaskStatus_Operator>;
  totalTried?: InputMaybe<PayloadJob_TotalTried_Operator>;
  updatedAt?: InputMaybe<PayloadJob_UpdatedAt_Operator>;
  waitUntil?: InputMaybe<PayloadJob_WaitUntil_Operator>;
};

export type PayloadJob_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadJob_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadJob_Where_Or>>>;
  completedAt?: InputMaybe<PayloadJob_CompletedAt_Operator>;
  createdAt?: InputMaybe<PayloadJob_CreatedAt_Operator>;
  error?: InputMaybe<PayloadJob_Error_Operator>;
  hasError?: InputMaybe<PayloadJob_HasError_Operator>;
  id?: InputMaybe<PayloadJob_Id_Operator>;
  input?: InputMaybe<PayloadJob_Input_Operator>;
  log__completedAt?: InputMaybe<PayloadJob_Log__CompletedAt_Operator>;
  log__error?: InputMaybe<PayloadJob_Log__Error_Operator>;
  log__executedAt?: InputMaybe<PayloadJob_Log__ExecutedAt_Operator>;
  log__id?: InputMaybe<PayloadJob_Log__Id_Operator>;
  log__input?: InputMaybe<PayloadJob_Log__Input_Operator>;
  log__output?: InputMaybe<PayloadJob_Log__Output_Operator>;
  log__state?: InputMaybe<PayloadJob_Log__State_Operator>;
  log__taskID?: InputMaybe<PayloadJob_Log__TaskId_Operator>;
  log__taskSlug?: InputMaybe<PayloadJob_Log__TaskSlug_Operator>;
  processing?: InputMaybe<PayloadJob_Processing_Operator>;
  queue?: InputMaybe<PayloadJob_Queue_Operator>;
  taskSlug?: InputMaybe<PayloadJob_TaskSlug_Operator>;
  taskStatus?: InputMaybe<PayloadJob_TaskStatus_Operator>;
  totalTried?: InputMaybe<PayloadJob_TotalTried_Operator>;
  updatedAt?: InputMaybe<PayloadJob_UpdatedAt_Operator>;
  waitUntil?: InputMaybe<PayloadJob_WaitUntil_Operator>;
};

export type PayloadJob_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadJob_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadJob_Where_Or>>>;
  completedAt?: InputMaybe<PayloadJob_CompletedAt_Operator>;
  createdAt?: InputMaybe<PayloadJob_CreatedAt_Operator>;
  error?: InputMaybe<PayloadJob_Error_Operator>;
  hasError?: InputMaybe<PayloadJob_HasError_Operator>;
  id?: InputMaybe<PayloadJob_Id_Operator>;
  input?: InputMaybe<PayloadJob_Input_Operator>;
  log__completedAt?: InputMaybe<PayloadJob_Log__CompletedAt_Operator>;
  log__error?: InputMaybe<PayloadJob_Log__Error_Operator>;
  log__executedAt?: InputMaybe<PayloadJob_Log__ExecutedAt_Operator>;
  log__id?: InputMaybe<PayloadJob_Log__Id_Operator>;
  log__input?: InputMaybe<PayloadJob_Log__Input_Operator>;
  log__output?: InputMaybe<PayloadJob_Log__Output_Operator>;
  log__state?: InputMaybe<PayloadJob_Log__State_Operator>;
  log__taskID?: InputMaybe<PayloadJob_Log__TaskId_Operator>;
  log__taskSlug?: InputMaybe<PayloadJob_Log__TaskSlug_Operator>;
  processing?: InputMaybe<PayloadJob_Processing_Operator>;
  queue?: InputMaybe<PayloadJob_Queue_Operator>;
  taskSlug?: InputMaybe<PayloadJob_TaskSlug_Operator>;
  taskStatus?: InputMaybe<PayloadJob_TaskStatus_Operator>;
  totalTried?: InputMaybe<PayloadJob_TotalTried_Operator>;
  updatedAt?: InputMaybe<PayloadJob_UpdatedAt_Operator>;
  waitUntil?: InputMaybe<PayloadJob_WaitUntil_Operator>;
};

export type PayloadJobs = {
  __typename?: 'PayloadJobs';
  docs: Array<PayloadJob>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PayloadJobsCreateAccess = {
  __typename?: 'PayloadJobsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadJobsCreateDocAccess = {
  __typename?: 'PayloadJobsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadJobsDeleteAccess = {
  __typename?: 'PayloadJobsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadJobsDeleteDocAccess = {
  __typename?: 'PayloadJobsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadJobsDocAccessFields = {
  __typename?: 'PayloadJobsDocAccessFields';
  completedAt?: Maybe<PayloadJobsDocAccessFields_CompletedAt>;
  createdAt?: Maybe<PayloadJobsDocAccessFields_CreatedAt>;
  error?: Maybe<PayloadJobsDocAccessFields_Error>;
  hasError?: Maybe<PayloadJobsDocAccessFields_HasError>;
  input?: Maybe<PayloadJobsDocAccessFields_Input>;
  log?: Maybe<PayloadJobsDocAccessFields_Log>;
  processing?: Maybe<PayloadJobsDocAccessFields_Processing>;
  queue?: Maybe<PayloadJobsDocAccessFields_Queue>;
  taskSlug?: Maybe<PayloadJobsDocAccessFields_TaskSlug>;
  taskStatus?: Maybe<PayloadJobsDocAccessFields_TaskStatus>;
  totalTried?: Maybe<PayloadJobsDocAccessFields_TotalTried>;
  updatedAt?: Maybe<PayloadJobsDocAccessFields_UpdatedAt>;
  waitUntil?: Maybe<PayloadJobsDocAccessFields_WaitUntil>;
};

export type PayloadJobsDocAccessFields_CompletedAt = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt';
  create?: Maybe<PayloadJobsDocAccessFields_CompletedAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_CompletedAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_CompletedAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_CompletedAt_Update>;
};

export type PayloadJobsDocAccessFields_CompletedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_CompletedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_CompletedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_CompletedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt';
  create?: Maybe<PayloadJobsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_CreatedAt_Update>;
};

export type PayloadJobsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Error = {
  __typename?: 'PayloadJobsDocAccessFields_error';
  create?: Maybe<PayloadJobsDocAccessFields_Error_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Error_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Error_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Error_Update>;
};

export type PayloadJobsDocAccessFields_Error_Create = {
  __typename?: 'PayloadJobsDocAccessFields_error_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Error_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_error_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Error_Read = {
  __typename?: 'PayloadJobsDocAccessFields_error_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Error_Update = {
  __typename?: 'PayloadJobsDocAccessFields_error_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_HasError = {
  __typename?: 'PayloadJobsDocAccessFields_hasError';
  create?: Maybe<PayloadJobsDocAccessFields_HasError_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_HasError_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_HasError_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_HasError_Update>;
};

export type PayloadJobsDocAccessFields_HasError_Create = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_HasError_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_HasError_Read = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_HasError_Update = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Input = {
  __typename?: 'PayloadJobsDocAccessFields_input';
  create?: Maybe<PayloadJobsDocAccessFields_Input_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Input_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Input_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Input_Update>;
};

export type PayloadJobsDocAccessFields_Input_Create = {
  __typename?: 'PayloadJobsDocAccessFields_input_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Input_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_input_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Input_Read = {
  __typename?: 'PayloadJobsDocAccessFields_input_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Input_Update = {
  __typename?: 'PayloadJobsDocAccessFields_input_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log = {
  __typename?: 'PayloadJobsDocAccessFields_log';
  create?: Maybe<PayloadJobsDocAccessFields_Log_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Delete>;
  fields?: Maybe<PayloadJobsDocAccessFields_Log_Fields>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_Update>;
};

export type PayloadJobsDocAccessFields_Log_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Fields = {
  __typename?: 'PayloadJobsDocAccessFields_log_Fields';
  completedAt?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt>;
  error?: Maybe<PayloadJobsDocAccessFields_Log_Error>;
  executedAt?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt>;
  id?: Maybe<PayloadJobsDocAccessFields_Log_Id>;
  input?: Maybe<PayloadJobsDocAccessFields_Log_Input>;
  output?: Maybe<PayloadJobsDocAccessFields_Log_Output>;
  state?: Maybe<PayloadJobsDocAccessFields_Log_State>;
  taskID?: Maybe<PayloadJobsDocAccessFields_Log_TaskId>;
  taskSlug?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug>;
};

export type PayloadJobsDocAccessFields_Log_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_CompletedAt = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt';
  create?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt_Update>;
};

export type PayloadJobsDocAccessFields_Log_CompletedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_CompletedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_CompletedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_CompletedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Error = {
  __typename?: 'PayloadJobsDocAccessFields_log_error';
  create?: Maybe<PayloadJobsDocAccessFields_Log_Error_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Error_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_Error_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_Error_Update>;
};

export type PayloadJobsDocAccessFields_Log_Error_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Error_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Error_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Error_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_ExecutedAt = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt';
  create?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt_Update>;
};

export type PayloadJobsDocAccessFields_Log_ExecutedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_ExecutedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_ExecutedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_ExecutedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Id = {
  __typename?: 'PayloadJobsDocAccessFields_log_id';
  create?: Maybe<PayloadJobsDocAccessFields_Log_Id_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Id_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_Id_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_Id_Update>;
};

export type PayloadJobsDocAccessFields_Log_Id_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Id_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Id_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Id_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Input = {
  __typename?: 'PayloadJobsDocAccessFields_log_input';
  create?: Maybe<PayloadJobsDocAccessFields_Log_Input_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Input_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_Input_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_Input_Update>;
};

export type PayloadJobsDocAccessFields_Log_Input_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Input_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Input_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Input_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Output = {
  __typename?: 'PayloadJobsDocAccessFields_log_output';
  create?: Maybe<PayloadJobsDocAccessFields_Log_Output_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Output_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_Output_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_Output_Update>;
};

export type PayloadJobsDocAccessFields_Log_Output_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Output_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Output_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_Output_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_State = {
  __typename?: 'PayloadJobsDocAccessFields_log_state';
  create?: Maybe<PayloadJobsDocAccessFields_Log_State_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_State_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_State_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_State_Update>;
};

export type PayloadJobsDocAccessFields_Log_State_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_State_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_State_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_State_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_TaskId = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID';
  create?: Maybe<PayloadJobsDocAccessFields_Log_TaskId_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_TaskId_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_TaskId_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_TaskId_Update>;
};

export type PayloadJobsDocAccessFields_Log_TaskId_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_TaskId_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_TaskId_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_TaskId_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_TaskSlug = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug';
  create?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug_Update>;
};

export type PayloadJobsDocAccessFields_Log_TaskSlug_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_TaskSlug_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_TaskSlug_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Log_TaskSlug_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Processing = {
  __typename?: 'PayloadJobsDocAccessFields_processing';
  create?: Maybe<PayloadJobsDocAccessFields_Processing_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Processing_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Processing_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Processing_Update>;
};

export type PayloadJobsDocAccessFields_Processing_Create = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Processing_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Processing_Read = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Processing_Update = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Queue = {
  __typename?: 'PayloadJobsDocAccessFields_queue';
  create?: Maybe<PayloadJobsDocAccessFields_Queue_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_Queue_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_Queue_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_Queue_Update>;
};

export type PayloadJobsDocAccessFields_Queue_Create = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Queue_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Queue_Read = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_Queue_Update = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TaskSlug = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug';
  create?: Maybe<PayloadJobsDocAccessFields_TaskSlug_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_TaskSlug_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_TaskSlug_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_TaskSlug_Update>;
};

export type PayloadJobsDocAccessFields_TaskSlug_Create = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TaskSlug_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TaskSlug_Read = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TaskSlug_Update = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TaskStatus = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus';
  create?: Maybe<PayloadJobsDocAccessFields_TaskStatus_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_TaskStatus_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_TaskStatus_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_TaskStatus_Update>;
};

export type PayloadJobsDocAccessFields_TaskStatus_Create = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TaskStatus_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TaskStatus_Read = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TaskStatus_Update = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TotalTried = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried';
  create?: Maybe<PayloadJobsDocAccessFields_TotalTried_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_TotalTried_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_TotalTried_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_TotalTried_Update>;
};

export type PayloadJobsDocAccessFields_TotalTried_Create = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TotalTried_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TotalTried_Read = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_TotalTried_Update = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt';
  create?: Maybe<PayloadJobsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadJobsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_WaitUntil = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil';
  create?: Maybe<PayloadJobsDocAccessFields_WaitUntil_Create>;
  delete?: Maybe<PayloadJobsDocAccessFields_WaitUntil_Delete>;
  read?: Maybe<PayloadJobsDocAccessFields_WaitUntil_Read>;
  update?: Maybe<PayloadJobsDocAccessFields_WaitUntil_Update>;
};

export type PayloadJobsDocAccessFields_WaitUntil_Create = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_WaitUntil_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_WaitUntil_Read = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsDocAccessFields_WaitUntil_Update = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields = {
  __typename?: 'PayloadJobsFields';
  completedAt?: Maybe<PayloadJobsFields_CompletedAt>;
  createdAt?: Maybe<PayloadJobsFields_CreatedAt>;
  error?: Maybe<PayloadJobsFields_Error>;
  hasError?: Maybe<PayloadJobsFields_HasError>;
  input?: Maybe<PayloadJobsFields_Input>;
  log?: Maybe<PayloadJobsFields_Log>;
  processing?: Maybe<PayloadJobsFields_Processing>;
  queue?: Maybe<PayloadJobsFields_Queue>;
  taskSlug?: Maybe<PayloadJobsFields_TaskSlug>;
  taskStatus?: Maybe<PayloadJobsFields_TaskStatus>;
  totalTried?: Maybe<PayloadJobsFields_TotalTried>;
  updatedAt?: Maybe<PayloadJobsFields_UpdatedAt>;
  waitUntil?: Maybe<PayloadJobsFields_WaitUntil>;
};

export type PayloadJobsFields_CompletedAt = {
  __typename?: 'PayloadJobsFields_completedAt';
  create?: Maybe<PayloadJobsFields_CompletedAt_Create>;
  delete?: Maybe<PayloadJobsFields_CompletedAt_Delete>;
  read?: Maybe<PayloadJobsFields_CompletedAt_Read>;
  update?: Maybe<PayloadJobsFields_CompletedAt_Update>;
};

export type PayloadJobsFields_CompletedAt_Create = {
  __typename?: 'PayloadJobsFields_completedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_CompletedAt_Delete = {
  __typename?: 'PayloadJobsFields_completedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_CompletedAt_Read = {
  __typename?: 'PayloadJobsFields_completedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_CompletedAt_Update = {
  __typename?: 'PayloadJobsFields_completedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_CreatedAt = {
  __typename?: 'PayloadJobsFields_createdAt';
  create?: Maybe<PayloadJobsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadJobsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadJobsFields_CreatedAt_Read>;
  update?: Maybe<PayloadJobsFields_CreatedAt_Update>;
};

export type PayloadJobsFields_CreatedAt_Create = {
  __typename?: 'PayloadJobsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_CreatedAt_Delete = {
  __typename?: 'PayloadJobsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_CreatedAt_Read = {
  __typename?: 'PayloadJobsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_CreatedAt_Update = {
  __typename?: 'PayloadJobsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Error = {
  __typename?: 'PayloadJobsFields_error';
  create?: Maybe<PayloadJobsFields_Error_Create>;
  delete?: Maybe<PayloadJobsFields_Error_Delete>;
  read?: Maybe<PayloadJobsFields_Error_Read>;
  update?: Maybe<PayloadJobsFields_Error_Update>;
};

export type PayloadJobsFields_Error_Create = {
  __typename?: 'PayloadJobsFields_error_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Error_Delete = {
  __typename?: 'PayloadJobsFields_error_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Error_Read = {
  __typename?: 'PayloadJobsFields_error_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Error_Update = {
  __typename?: 'PayloadJobsFields_error_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_HasError = {
  __typename?: 'PayloadJobsFields_hasError';
  create?: Maybe<PayloadJobsFields_HasError_Create>;
  delete?: Maybe<PayloadJobsFields_HasError_Delete>;
  read?: Maybe<PayloadJobsFields_HasError_Read>;
  update?: Maybe<PayloadJobsFields_HasError_Update>;
};

export type PayloadJobsFields_HasError_Create = {
  __typename?: 'PayloadJobsFields_hasError_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_HasError_Delete = {
  __typename?: 'PayloadJobsFields_hasError_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_HasError_Read = {
  __typename?: 'PayloadJobsFields_hasError_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_HasError_Update = {
  __typename?: 'PayloadJobsFields_hasError_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Input = {
  __typename?: 'PayloadJobsFields_input';
  create?: Maybe<PayloadJobsFields_Input_Create>;
  delete?: Maybe<PayloadJobsFields_Input_Delete>;
  read?: Maybe<PayloadJobsFields_Input_Read>;
  update?: Maybe<PayloadJobsFields_Input_Update>;
};

export type PayloadJobsFields_Input_Create = {
  __typename?: 'PayloadJobsFields_input_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Input_Delete = {
  __typename?: 'PayloadJobsFields_input_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Input_Read = {
  __typename?: 'PayloadJobsFields_input_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Input_Update = {
  __typename?: 'PayloadJobsFields_input_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log = {
  __typename?: 'PayloadJobsFields_log';
  create?: Maybe<PayloadJobsFields_Log_Create>;
  delete?: Maybe<PayloadJobsFields_Log_Delete>;
  fields?: Maybe<PayloadJobsFields_Log_Fields>;
  read?: Maybe<PayloadJobsFields_Log_Read>;
  update?: Maybe<PayloadJobsFields_Log_Update>;
};

export type PayloadJobsFields_Log_Create = {
  __typename?: 'PayloadJobsFields_log_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Delete = {
  __typename?: 'PayloadJobsFields_log_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Fields = {
  __typename?: 'PayloadJobsFields_log_Fields';
  completedAt?: Maybe<PayloadJobsFields_Log_CompletedAt>;
  error?: Maybe<PayloadJobsFields_Log_Error>;
  executedAt?: Maybe<PayloadJobsFields_Log_ExecutedAt>;
  id?: Maybe<PayloadJobsFields_Log_Id>;
  input?: Maybe<PayloadJobsFields_Log_Input>;
  output?: Maybe<PayloadJobsFields_Log_Output>;
  state?: Maybe<PayloadJobsFields_Log_State>;
  taskID?: Maybe<PayloadJobsFields_Log_TaskId>;
  taskSlug?: Maybe<PayloadJobsFields_Log_TaskSlug>;
};

export type PayloadJobsFields_Log_Read = {
  __typename?: 'PayloadJobsFields_log_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Update = {
  __typename?: 'PayloadJobsFields_log_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_CompletedAt = {
  __typename?: 'PayloadJobsFields_log_completedAt';
  create?: Maybe<PayloadJobsFields_Log_CompletedAt_Create>;
  delete?: Maybe<PayloadJobsFields_Log_CompletedAt_Delete>;
  read?: Maybe<PayloadJobsFields_Log_CompletedAt_Read>;
  update?: Maybe<PayloadJobsFields_Log_CompletedAt_Update>;
};

export type PayloadJobsFields_Log_CompletedAt_Create = {
  __typename?: 'PayloadJobsFields_log_completedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_CompletedAt_Delete = {
  __typename?: 'PayloadJobsFields_log_completedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_CompletedAt_Read = {
  __typename?: 'PayloadJobsFields_log_completedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_CompletedAt_Update = {
  __typename?: 'PayloadJobsFields_log_completedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Error = {
  __typename?: 'PayloadJobsFields_log_error';
  create?: Maybe<PayloadJobsFields_Log_Error_Create>;
  delete?: Maybe<PayloadJobsFields_Log_Error_Delete>;
  read?: Maybe<PayloadJobsFields_Log_Error_Read>;
  update?: Maybe<PayloadJobsFields_Log_Error_Update>;
};

export type PayloadJobsFields_Log_Error_Create = {
  __typename?: 'PayloadJobsFields_log_error_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Error_Delete = {
  __typename?: 'PayloadJobsFields_log_error_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Error_Read = {
  __typename?: 'PayloadJobsFields_log_error_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Error_Update = {
  __typename?: 'PayloadJobsFields_log_error_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_ExecutedAt = {
  __typename?: 'PayloadJobsFields_log_executedAt';
  create?: Maybe<PayloadJobsFields_Log_ExecutedAt_Create>;
  delete?: Maybe<PayloadJobsFields_Log_ExecutedAt_Delete>;
  read?: Maybe<PayloadJobsFields_Log_ExecutedAt_Read>;
  update?: Maybe<PayloadJobsFields_Log_ExecutedAt_Update>;
};

export type PayloadJobsFields_Log_ExecutedAt_Create = {
  __typename?: 'PayloadJobsFields_log_executedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_ExecutedAt_Delete = {
  __typename?: 'PayloadJobsFields_log_executedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_ExecutedAt_Read = {
  __typename?: 'PayloadJobsFields_log_executedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_ExecutedAt_Update = {
  __typename?: 'PayloadJobsFields_log_executedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Id = {
  __typename?: 'PayloadJobsFields_log_id';
  create?: Maybe<PayloadJobsFields_Log_Id_Create>;
  delete?: Maybe<PayloadJobsFields_Log_Id_Delete>;
  read?: Maybe<PayloadJobsFields_Log_Id_Read>;
  update?: Maybe<PayloadJobsFields_Log_Id_Update>;
};

export type PayloadJobsFields_Log_Id_Create = {
  __typename?: 'PayloadJobsFields_log_id_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Id_Delete = {
  __typename?: 'PayloadJobsFields_log_id_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Id_Read = {
  __typename?: 'PayloadJobsFields_log_id_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Id_Update = {
  __typename?: 'PayloadJobsFields_log_id_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Input = {
  __typename?: 'PayloadJobsFields_log_input';
  create?: Maybe<PayloadJobsFields_Log_Input_Create>;
  delete?: Maybe<PayloadJobsFields_Log_Input_Delete>;
  read?: Maybe<PayloadJobsFields_Log_Input_Read>;
  update?: Maybe<PayloadJobsFields_Log_Input_Update>;
};

export type PayloadJobsFields_Log_Input_Create = {
  __typename?: 'PayloadJobsFields_log_input_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Input_Delete = {
  __typename?: 'PayloadJobsFields_log_input_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Input_Read = {
  __typename?: 'PayloadJobsFields_log_input_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Input_Update = {
  __typename?: 'PayloadJobsFields_log_input_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Output = {
  __typename?: 'PayloadJobsFields_log_output';
  create?: Maybe<PayloadJobsFields_Log_Output_Create>;
  delete?: Maybe<PayloadJobsFields_Log_Output_Delete>;
  read?: Maybe<PayloadJobsFields_Log_Output_Read>;
  update?: Maybe<PayloadJobsFields_Log_Output_Update>;
};

export type PayloadJobsFields_Log_Output_Create = {
  __typename?: 'PayloadJobsFields_log_output_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Output_Delete = {
  __typename?: 'PayloadJobsFields_log_output_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Output_Read = {
  __typename?: 'PayloadJobsFields_log_output_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_Output_Update = {
  __typename?: 'PayloadJobsFields_log_output_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_State = {
  __typename?: 'PayloadJobsFields_log_state';
  create?: Maybe<PayloadJobsFields_Log_State_Create>;
  delete?: Maybe<PayloadJobsFields_Log_State_Delete>;
  read?: Maybe<PayloadJobsFields_Log_State_Read>;
  update?: Maybe<PayloadJobsFields_Log_State_Update>;
};

export type PayloadJobsFields_Log_State_Create = {
  __typename?: 'PayloadJobsFields_log_state_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_State_Delete = {
  __typename?: 'PayloadJobsFields_log_state_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_State_Read = {
  __typename?: 'PayloadJobsFields_log_state_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_State_Update = {
  __typename?: 'PayloadJobsFields_log_state_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_TaskId = {
  __typename?: 'PayloadJobsFields_log_taskID';
  create?: Maybe<PayloadJobsFields_Log_TaskId_Create>;
  delete?: Maybe<PayloadJobsFields_Log_TaskId_Delete>;
  read?: Maybe<PayloadJobsFields_Log_TaskId_Read>;
  update?: Maybe<PayloadJobsFields_Log_TaskId_Update>;
};

export type PayloadJobsFields_Log_TaskId_Create = {
  __typename?: 'PayloadJobsFields_log_taskID_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_TaskId_Delete = {
  __typename?: 'PayloadJobsFields_log_taskID_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_TaskId_Read = {
  __typename?: 'PayloadJobsFields_log_taskID_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_TaskId_Update = {
  __typename?: 'PayloadJobsFields_log_taskID_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_TaskSlug = {
  __typename?: 'PayloadJobsFields_log_taskSlug';
  create?: Maybe<PayloadJobsFields_Log_TaskSlug_Create>;
  delete?: Maybe<PayloadJobsFields_Log_TaskSlug_Delete>;
  read?: Maybe<PayloadJobsFields_Log_TaskSlug_Read>;
  update?: Maybe<PayloadJobsFields_Log_TaskSlug_Update>;
};

export type PayloadJobsFields_Log_TaskSlug_Create = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_TaskSlug_Delete = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_TaskSlug_Read = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Log_TaskSlug_Update = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Processing = {
  __typename?: 'PayloadJobsFields_processing';
  create?: Maybe<PayloadJobsFields_Processing_Create>;
  delete?: Maybe<PayloadJobsFields_Processing_Delete>;
  read?: Maybe<PayloadJobsFields_Processing_Read>;
  update?: Maybe<PayloadJobsFields_Processing_Update>;
};

export type PayloadJobsFields_Processing_Create = {
  __typename?: 'PayloadJobsFields_processing_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Processing_Delete = {
  __typename?: 'PayloadJobsFields_processing_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Processing_Read = {
  __typename?: 'PayloadJobsFields_processing_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Processing_Update = {
  __typename?: 'PayloadJobsFields_processing_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Queue = {
  __typename?: 'PayloadJobsFields_queue';
  create?: Maybe<PayloadJobsFields_Queue_Create>;
  delete?: Maybe<PayloadJobsFields_Queue_Delete>;
  read?: Maybe<PayloadJobsFields_Queue_Read>;
  update?: Maybe<PayloadJobsFields_Queue_Update>;
};

export type PayloadJobsFields_Queue_Create = {
  __typename?: 'PayloadJobsFields_queue_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Queue_Delete = {
  __typename?: 'PayloadJobsFields_queue_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Queue_Read = {
  __typename?: 'PayloadJobsFields_queue_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_Queue_Update = {
  __typename?: 'PayloadJobsFields_queue_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TaskSlug = {
  __typename?: 'PayloadJobsFields_taskSlug';
  create?: Maybe<PayloadJobsFields_TaskSlug_Create>;
  delete?: Maybe<PayloadJobsFields_TaskSlug_Delete>;
  read?: Maybe<PayloadJobsFields_TaskSlug_Read>;
  update?: Maybe<PayloadJobsFields_TaskSlug_Update>;
};

export type PayloadJobsFields_TaskSlug_Create = {
  __typename?: 'PayloadJobsFields_taskSlug_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TaskSlug_Delete = {
  __typename?: 'PayloadJobsFields_taskSlug_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TaskSlug_Read = {
  __typename?: 'PayloadJobsFields_taskSlug_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TaskSlug_Update = {
  __typename?: 'PayloadJobsFields_taskSlug_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TaskStatus = {
  __typename?: 'PayloadJobsFields_taskStatus';
  create?: Maybe<PayloadJobsFields_TaskStatus_Create>;
  delete?: Maybe<PayloadJobsFields_TaskStatus_Delete>;
  read?: Maybe<PayloadJobsFields_TaskStatus_Read>;
  update?: Maybe<PayloadJobsFields_TaskStatus_Update>;
};

export type PayloadJobsFields_TaskStatus_Create = {
  __typename?: 'PayloadJobsFields_taskStatus_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TaskStatus_Delete = {
  __typename?: 'PayloadJobsFields_taskStatus_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TaskStatus_Read = {
  __typename?: 'PayloadJobsFields_taskStatus_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TaskStatus_Update = {
  __typename?: 'PayloadJobsFields_taskStatus_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TotalTried = {
  __typename?: 'PayloadJobsFields_totalTried';
  create?: Maybe<PayloadJobsFields_TotalTried_Create>;
  delete?: Maybe<PayloadJobsFields_TotalTried_Delete>;
  read?: Maybe<PayloadJobsFields_TotalTried_Read>;
  update?: Maybe<PayloadJobsFields_TotalTried_Update>;
};

export type PayloadJobsFields_TotalTried_Create = {
  __typename?: 'PayloadJobsFields_totalTried_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TotalTried_Delete = {
  __typename?: 'PayloadJobsFields_totalTried_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TotalTried_Read = {
  __typename?: 'PayloadJobsFields_totalTried_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_TotalTried_Update = {
  __typename?: 'PayloadJobsFields_totalTried_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_UpdatedAt = {
  __typename?: 'PayloadJobsFields_updatedAt';
  create?: Maybe<PayloadJobsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadJobsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadJobsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadJobsFields_UpdatedAt_Update>;
};

export type PayloadJobsFields_UpdatedAt_Create = {
  __typename?: 'PayloadJobsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadJobsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_UpdatedAt_Read = {
  __typename?: 'PayloadJobsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_UpdatedAt_Update = {
  __typename?: 'PayloadJobsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_WaitUntil = {
  __typename?: 'PayloadJobsFields_waitUntil';
  create?: Maybe<PayloadJobsFields_WaitUntil_Create>;
  delete?: Maybe<PayloadJobsFields_WaitUntil_Delete>;
  read?: Maybe<PayloadJobsFields_WaitUntil_Read>;
  update?: Maybe<PayloadJobsFields_WaitUntil_Update>;
};

export type PayloadJobsFields_WaitUntil_Create = {
  __typename?: 'PayloadJobsFields_waitUntil_Create';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_WaitUntil_Delete = {
  __typename?: 'PayloadJobsFields_waitUntil_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_WaitUntil_Read = {
  __typename?: 'PayloadJobsFields_waitUntil_Read';
  permission: Scalars['Boolean'];
};

export type PayloadJobsFields_WaitUntil_Update = {
  __typename?: 'PayloadJobsFields_waitUntil_Update';
  permission: Scalars['Boolean'];
};

export type PayloadJobsReadAccess = {
  __typename?: 'PayloadJobsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadJobsReadDocAccess = {
  __typename?: 'PayloadJobsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadJobsUpdateAccess = {
  __typename?: 'PayloadJobsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadJobsUpdateDocAccess = {
  __typename?: 'PayloadJobsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadKv = {
  __typename?: 'PayloadKv';
  data: Scalars['JSON'];
  id: Scalars['String'];
  key: Scalars['String'];
};

export type PayloadKvCreateAccess = {
  __typename?: 'PayloadKvCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadKvCreateDocAccess = {
  __typename?: 'PayloadKvCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadKvDeleteAccess = {
  __typename?: 'PayloadKvDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadKvDeleteDocAccess = {
  __typename?: 'PayloadKvDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadKvDocAccessFields = {
  __typename?: 'PayloadKvDocAccessFields';
  data?: Maybe<PayloadKvDocAccessFields_Data>;
  key?: Maybe<PayloadKvDocAccessFields_Key>;
};

export type PayloadKvDocAccessFields_Data = {
  __typename?: 'PayloadKvDocAccessFields_data';
  create?: Maybe<PayloadKvDocAccessFields_Data_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_Data_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_Data_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Data_Update>;
};

export type PayloadKvDocAccessFields_Data_Create = {
  __typename?: 'PayloadKvDocAccessFields_data_Create';
  permission: Scalars['Boolean'];
};

export type PayloadKvDocAccessFields_Data_Delete = {
  __typename?: 'PayloadKvDocAccessFields_data_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadKvDocAccessFields_Data_Read = {
  __typename?: 'PayloadKvDocAccessFields_data_Read';
  permission: Scalars['Boolean'];
};

export type PayloadKvDocAccessFields_Data_Update = {
  __typename?: 'PayloadKvDocAccessFields_data_Update';
  permission: Scalars['Boolean'];
};

export type PayloadKvDocAccessFields_Key = {
  __typename?: 'PayloadKvDocAccessFields_key';
  create?: Maybe<PayloadKvDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadKvDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadKvDocAccessFields_Key_Read>;
  update?: Maybe<PayloadKvDocAccessFields_Key_Update>;
};

export type PayloadKvDocAccessFields_Key_Create = {
  __typename?: 'PayloadKvDocAccessFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadKvDocAccessFields_Key_Delete = {
  __typename?: 'PayloadKvDocAccessFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadKvDocAccessFields_Key_Read = {
  __typename?: 'PayloadKvDocAccessFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadKvDocAccessFields_Key_Update = {
  __typename?: 'PayloadKvDocAccessFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadKvFields = {
  __typename?: 'PayloadKvFields';
  data?: Maybe<PayloadKvFields_Data>;
  key?: Maybe<PayloadKvFields_Key>;
};

export type PayloadKvFields_Data = {
  __typename?: 'PayloadKvFields_data';
  create?: Maybe<PayloadKvFields_Data_Create>;
  delete?: Maybe<PayloadKvFields_Data_Delete>;
  read?: Maybe<PayloadKvFields_Data_Read>;
  update?: Maybe<PayloadKvFields_Data_Update>;
};

export type PayloadKvFields_Data_Create = {
  __typename?: 'PayloadKvFields_data_Create';
  permission: Scalars['Boolean'];
};

export type PayloadKvFields_Data_Delete = {
  __typename?: 'PayloadKvFields_data_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadKvFields_Data_Read = {
  __typename?: 'PayloadKvFields_data_Read';
  permission: Scalars['Boolean'];
};

export type PayloadKvFields_Data_Update = {
  __typename?: 'PayloadKvFields_data_Update';
  permission: Scalars['Boolean'];
};

export type PayloadKvFields_Key = {
  __typename?: 'PayloadKvFields_key';
  create?: Maybe<PayloadKvFields_Key_Create>;
  delete?: Maybe<PayloadKvFields_Key_Delete>;
  read?: Maybe<PayloadKvFields_Key_Read>;
  update?: Maybe<PayloadKvFields_Key_Update>;
};

export type PayloadKvFields_Key_Create = {
  __typename?: 'PayloadKvFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadKvFields_Key_Delete = {
  __typename?: 'PayloadKvFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadKvFields_Key_Read = {
  __typename?: 'PayloadKvFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadKvFields_Key_Update = {
  __typename?: 'PayloadKvFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadKvReadAccess = {
  __typename?: 'PayloadKvReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadKvReadDocAccess = {
  __typename?: 'PayloadKvReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadKvUpdateAccess = {
  __typename?: 'PayloadKvUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadKvUpdateDocAccess = {
  __typename?: 'PayloadKvUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadKv_Data_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadKv_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadKv_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadKv_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKv_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKv_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadKv_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadKv_Where_Or>>>;
  data?: InputMaybe<PayloadKv_Data_Operator>;
  id?: InputMaybe<PayloadKv_Id_Operator>;
  key?: InputMaybe<PayloadKv_Key_Operator>;
};

export type PayloadKvs = {
  __typename?: 'PayloadKvs';
  docs: Array<PayloadKv>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: PayloadLockedDocument_User_Relationship;
};


export type PayloadLockedDocumentDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type PayloadLockedDocumentUserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Categories = 'categories',
  Hosts = 'hosts',
  LabelReleases = 'labelReleases',
  LiveVideos = 'liveVideos',
  Media = 'media',
  Merch = 'merch',
  NewsPosts = 'newsPosts',
  RestartLibretime = 'restartLibretime',
  Shows = 'shows',
  Tags = 'tags',
  Users = 'users'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = Category | Host | LabelRelease | LiveVideo | Media | Merch | NewsPost | RestartLibretime | Show | Tag | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Categories = 'categories',
  Hosts = 'hosts',
  LabelReleases = 'labelReleases',
  LiveVideos = 'liveVideos',
  Media = 'media',
  Merch = 'merch',
  NewsPosts = 'newsPosts',
  RestartLibretime = 'restartLibretime',
  Shows = 'shows',
  Tags = 'tags',
  Users = 'users'
}

export enum PayloadLockedDocument_Document_RelationTo {
  Categories = 'categories',
  Hosts = 'hosts',
  LabelReleases = 'labelReleases',
  LiveVideos = 'liveVideos',
  Media = 'media',
  Merch = 'merch',
  NewsPosts = 'newsPosts',
  RestartLibretime = 'restartLibretime',
  Shows = 'shows',
  Tags = 'tags',
  Users = 'users'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  Categories = 'categories',
  Hosts = 'hosts',
  LabelReleases = 'labelReleases',
  LiveVideos = 'liveVideos',
  Media = 'media',
  Merch = 'merch',
  NewsPosts = 'newsPosts',
  RestartLibretime = 'restartLibretime',
  Shows = 'shows',
  Tags = 'tags',
  Users = 'users'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']>;
};


export type PayloadPreferenceUserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Query = {
  __typename?: 'Query';
  AboutPage?: Maybe<AboutPage>;
  Access?: Maybe<Access>;
  Categories?: Maybe<Categories>;
  Category?: Maybe<Category>;
  DonatePage?: Maybe<DonatePage>;
  GoFundMe?: Maybe<GoFundMe>;
  Host?: Maybe<Host>;
  Hosts?: Maybe<Hosts>;
  LabelRelease?: Maybe<LabelRelease>;
  LabelReleases?: Maybe<LabelReleases>;
  LiveVideo?: Maybe<LiveVideo>;
  LiveVideos?: Maybe<LiveVideos>;
  Media?: Maybe<Media>;
  Merch?: Maybe<Merch>;
  Merches?: Maybe<Merches>;
  NewsPost?: Maybe<NewsPost>;
  NewsPostBySlug?: Maybe<NewsPost>;
  NewsPosts?: Maybe<NewsPosts>;
  Owncast?: Maybe<Owncast>;
  PayloadJob?: Maybe<PayloadJob>;
  PayloadJobs?: Maybe<PayloadJobs>;
  PayloadKv?: Maybe<PayloadKv>;
  PayloadKvs?: Maybe<PayloadKvs>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  RestartLibretime?: Maybe<RestartLibretime>;
  RestartLibretimes?: Maybe<RestartLibretimes>;
  Show?: Maybe<Show>;
  ShowBySlug?: Maybe<Show>;
  Shows?: Maybe<Shows>;
  ShowsByCategory?: Maybe<ShowsByCategory>;
  Tag?: Maybe<Tag>;
  Tags?: Maybe<Tags>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  YoutubeChannel?: Maybe<YoutubeChannel>;
  allMedia?: Maybe<AllMedia>;
  countCategories?: Maybe<CountCategories>;
  countHosts?: Maybe<CountHosts>;
  countLabelReleases?: Maybe<CountLabelReleases>;
  countLiveVideos?: Maybe<CountLiveVideos>;
  countMerches?: Maybe<CountMerches>;
  countNewsPosts?: Maybe<CountNewsPosts>;
  countPayloadJobs?: Maybe<CountPayloadJobs>;
  countPayloadKvs?: Maybe<CountPayloadKvs>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countRestartLibretimes?: Maybe<CountRestartLibretimes>;
  countShows?: Maybe<CountShows>;
  countTags?: Maybe<CountTags>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessAboutPage?: Maybe<AboutPageDocAccess>;
  docAccessCategory?: Maybe<CategoriesDocAccess>;
  docAccessDonatePage?: Maybe<DonatePageDocAccess>;
  docAccessHost?: Maybe<HostsDocAccess>;
  docAccessLabelRelease?: Maybe<LabelReleasesDocAccess>;
  docAccessLiveVideo?: Maybe<LiveVideosDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessMerch?: Maybe<MerchDocAccess>;
  docAccessNewsPost?: Maybe<NewsPostsDocAccess>;
  docAccessPayloadJob?: Maybe<Payload_JobsDocAccess>;
  docAccessPayloadKv?: Maybe<Payload_KvDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessRestartLibretime?: Maybe<RestartLibretimeDocAccess>;
  docAccessShow?: Maybe<ShowsDocAccess>;
  docAccessTag?: Maybe<TagsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meUser?: Maybe<UsersMe>;
  versionNewsPost?: Maybe<NewsPostVersion>;
  versionsNewsPosts?: Maybe<VersionsNewsPosts>;
};


export type QueryAboutPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Category_Where>;
};


export type QueryCategoryArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryDonatePageArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHostArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryHostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Host_Where>;
};


export type QueryLabelReleaseArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLabelReleasesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LabelRelease_Where>;
};


export type QueryLiveVideoArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryLiveVideosArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LiveVideo_Where>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMerchArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMerchesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Merch_Where>;
};


export type QueryNewsPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNewsPostBySlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
};


export type QueryNewsPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NewsPost_Where>;
};


export type QueryPayloadJobArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPayloadJobsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadJob_Where>;
};


export type QueryPayloadKvArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadKv_Where>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryRestartLibretimeArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryRestartLibretimesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RestartLibretime_Where>;
};


export type QueryShowArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryShowBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryShowsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Show_Where>;
};


export type QueryShowsByCategoryArgs = {
  categoryName: Scalars['String'];
};


export type QueryTagArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id: Scalars['String'];
  locale?: InputMaybe<LocaleInputType>;
  select?: InputMaybe<Scalars['Boolean']>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Category_Where>;
};


export type QueryCountHostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Host_Where>;
};


export type QueryCountLabelReleasesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LabelRelease_Where>;
};


export type QueryCountLiveVideosArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<LiveVideo_Where>;
};


export type QueryCountMerchesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Merch_Where>;
};


export type QueryCountNewsPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NewsPost_Where>;
};


export type QueryCountPayloadJobsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadJob_Where>;
};


export type QueryCountPayloadKvsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadKv_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountRestartLibretimesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<RestartLibretime_Where>;
};


export type QueryCountShowsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Show_Where>;
};


export type QueryCountTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessCategoryArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessHostArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessLabelReleaseArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessLiveVideoArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessMerchArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessNewsPostArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPayloadJobArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPayloadKvArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessRestartLibretimeArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessShowArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessTagArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String'];
};


export type QueryVersionNewsPostArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  id?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<LocaleInputType>;
  trash?: InputMaybe<Scalars['Boolean']>;
};


export type QueryVersionsNewsPostsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<LocaleInputType>;
  page?: InputMaybe<Scalars['Int']>;
  pagination?: InputMaybe<Scalars['Boolean']>;
  select?: InputMaybe<Scalars['Boolean']>;
  sort?: InputMaybe<Scalars['String']>;
  trash?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<VersionsNewsPost_Where>;
};

export type RestartLibretime = {
  __typename?: 'RestartLibretime';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  results?: Maybe<Scalars['String']>;
  taskFinished?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RestartLibretimeCreateAccess = {
  __typename?: 'RestartLibretimeCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RestartLibretimeCreateDocAccess = {
  __typename?: 'RestartLibretimeCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RestartLibretimeDeleteAccess = {
  __typename?: 'RestartLibretimeDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RestartLibretimeDeleteDocAccess = {
  __typename?: 'RestartLibretimeDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RestartLibretimeDocAccessFields = {
  __typename?: 'RestartLibretimeDocAccessFields';
  createdAt?: Maybe<RestartLibretimeDocAccessFields_CreatedAt>;
  results?: Maybe<RestartLibretimeDocAccessFields_Results>;
  taskFinished?: Maybe<RestartLibretimeDocAccessFields_TaskFinished>;
  updatedAt?: Maybe<RestartLibretimeDocAccessFields_UpdatedAt>;
};

export type RestartLibretimeDocAccessFields_CreatedAt = {
  __typename?: 'RestartLibretimeDocAccessFields_createdAt';
  create?: Maybe<RestartLibretimeDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<RestartLibretimeDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<RestartLibretimeDocAccessFields_CreatedAt_Read>;
  update?: Maybe<RestartLibretimeDocAccessFields_CreatedAt_Update>;
};

export type RestartLibretimeDocAccessFields_CreatedAt_Create = {
  __typename?: 'RestartLibretimeDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_CreatedAt_Delete = {
  __typename?: 'RestartLibretimeDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_CreatedAt_Read = {
  __typename?: 'RestartLibretimeDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_CreatedAt_Update = {
  __typename?: 'RestartLibretimeDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_Results = {
  __typename?: 'RestartLibretimeDocAccessFields_results';
  create?: Maybe<RestartLibretimeDocAccessFields_Results_Create>;
  delete?: Maybe<RestartLibretimeDocAccessFields_Results_Delete>;
  read?: Maybe<RestartLibretimeDocAccessFields_Results_Read>;
  update?: Maybe<RestartLibretimeDocAccessFields_Results_Update>;
};

export type RestartLibretimeDocAccessFields_Results_Create = {
  __typename?: 'RestartLibretimeDocAccessFields_results_Create';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_Results_Delete = {
  __typename?: 'RestartLibretimeDocAccessFields_results_Delete';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_Results_Read = {
  __typename?: 'RestartLibretimeDocAccessFields_results_Read';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_Results_Update = {
  __typename?: 'RestartLibretimeDocAccessFields_results_Update';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_TaskFinished = {
  __typename?: 'RestartLibretimeDocAccessFields_taskFinished';
  create?: Maybe<RestartLibretimeDocAccessFields_TaskFinished_Create>;
  delete?: Maybe<RestartLibretimeDocAccessFields_TaskFinished_Delete>;
  read?: Maybe<RestartLibretimeDocAccessFields_TaskFinished_Read>;
  update?: Maybe<RestartLibretimeDocAccessFields_TaskFinished_Update>;
};

export type RestartLibretimeDocAccessFields_TaskFinished_Create = {
  __typename?: 'RestartLibretimeDocAccessFields_taskFinished_Create';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_TaskFinished_Delete = {
  __typename?: 'RestartLibretimeDocAccessFields_taskFinished_Delete';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_TaskFinished_Read = {
  __typename?: 'RestartLibretimeDocAccessFields_taskFinished_Read';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_TaskFinished_Update = {
  __typename?: 'RestartLibretimeDocAccessFields_taskFinished_Update';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_UpdatedAt = {
  __typename?: 'RestartLibretimeDocAccessFields_updatedAt';
  create?: Maybe<RestartLibretimeDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<RestartLibretimeDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<RestartLibretimeDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<RestartLibretimeDocAccessFields_UpdatedAt_Update>;
};

export type RestartLibretimeDocAccessFields_UpdatedAt_Create = {
  __typename?: 'RestartLibretimeDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'RestartLibretimeDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_UpdatedAt_Read = {
  __typename?: 'RestartLibretimeDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeDocAccessFields_UpdatedAt_Update = {
  __typename?: 'RestartLibretimeDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields = {
  __typename?: 'RestartLibretimeFields';
  createdAt?: Maybe<RestartLibretimeFields_CreatedAt>;
  results?: Maybe<RestartLibretimeFields_Results>;
  taskFinished?: Maybe<RestartLibretimeFields_TaskFinished>;
  updatedAt?: Maybe<RestartLibretimeFields_UpdatedAt>;
};

export type RestartLibretimeFields_CreatedAt = {
  __typename?: 'RestartLibretimeFields_createdAt';
  create?: Maybe<RestartLibretimeFields_CreatedAt_Create>;
  delete?: Maybe<RestartLibretimeFields_CreatedAt_Delete>;
  read?: Maybe<RestartLibretimeFields_CreatedAt_Read>;
  update?: Maybe<RestartLibretimeFields_CreatedAt_Update>;
};

export type RestartLibretimeFields_CreatedAt_Create = {
  __typename?: 'RestartLibretimeFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_CreatedAt_Delete = {
  __typename?: 'RestartLibretimeFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_CreatedAt_Read = {
  __typename?: 'RestartLibretimeFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_CreatedAt_Update = {
  __typename?: 'RestartLibretimeFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_Results = {
  __typename?: 'RestartLibretimeFields_results';
  create?: Maybe<RestartLibretimeFields_Results_Create>;
  delete?: Maybe<RestartLibretimeFields_Results_Delete>;
  read?: Maybe<RestartLibretimeFields_Results_Read>;
  update?: Maybe<RestartLibretimeFields_Results_Update>;
};

export type RestartLibretimeFields_Results_Create = {
  __typename?: 'RestartLibretimeFields_results_Create';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_Results_Delete = {
  __typename?: 'RestartLibretimeFields_results_Delete';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_Results_Read = {
  __typename?: 'RestartLibretimeFields_results_Read';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_Results_Update = {
  __typename?: 'RestartLibretimeFields_results_Update';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_TaskFinished = {
  __typename?: 'RestartLibretimeFields_taskFinished';
  create?: Maybe<RestartLibretimeFields_TaskFinished_Create>;
  delete?: Maybe<RestartLibretimeFields_TaskFinished_Delete>;
  read?: Maybe<RestartLibretimeFields_TaskFinished_Read>;
  update?: Maybe<RestartLibretimeFields_TaskFinished_Update>;
};

export type RestartLibretimeFields_TaskFinished_Create = {
  __typename?: 'RestartLibretimeFields_taskFinished_Create';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_TaskFinished_Delete = {
  __typename?: 'RestartLibretimeFields_taskFinished_Delete';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_TaskFinished_Read = {
  __typename?: 'RestartLibretimeFields_taskFinished_Read';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_TaskFinished_Update = {
  __typename?: 'RestartLibretimeFields_taskFinished_Update';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_UpdatedAt = {
  __typename?: 'RestartLibretimeFields_updatedAt';
  create?: Maybe<RestartLibretimeFields_UpdatedAt_Create>;
  delete?: Maybe<RestartLibretimeFields_UpdatedAt_Delete>;
  read?: Maybe<RestartLibretimeFields_UpdatedAt_Read>;
  update?: Maybe<RestartLibretimeFields_UpdatedAt_Update>;
};

export type RestartLibretimeFields_UpdatedAt_Create = {
  __typename?: 'RestartLibretimeFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_UpdatedAt_Delete = {
  __typename?: 'RestartLibretimeFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_UpdatedAt_Read = {
  __typename?: 'RestartLibretimeFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeFields_UpdatedAt_Update = {
  __typename?: 'RestartLibretimeFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type RestartLibretimeReadAccess = {
  __typename?: 'RestartLibretimeReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RestartLibretimeReadDocAccess = {
  __typename?: 'RestartLibretimeReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RestartLibretimeUpdateAccess = {
  __typename?: 'RestartLibretimeUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RestartLibretimeUpdateDocAccess = {
  __typename?: 'RestartLibretimeUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type RestartLibretime_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type RestartLibretime_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type RestartLibretime_Results_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type RestartLibretime_TaskFinished_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type RestartLibretime_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type RestartLibretime_Where = {
  AND?: InputMaybe<Array<InputMaybe<RestartLibretime_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<RestartLibretime_Where_Or>>>;
  createdAt?: InputMaybe<RestartLibretime_CreatedAt_Operator>;
  id?: InputMaybe<RestartLibretime_Id_Operator>;
  results?: InputMaybe<RestartLibretime_Results_Operator>;
  taskFinished?: InputMaybe<RestartLibretime_TaskFinished_Operator>;
  updatedAt?: InputMaybe<RestartLibretime_UpdatedAt_Operator>;
};

export type RestartLibretime_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<RestartLibretime_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<RestartLibretime_Where_Or>>>;
  createdAt?: InputMaybe<RestartLibretime_CreatedAt_Operator>;
  id?: InputMaybe<RestartLibretime_Id_Operator>;
  results?: InputMaybe<RestartLibretime_Results_Operator>;
  taskFinished?: InputMaybe<RestartLibretime_TaskFinished_Operator>;
  updatedAt?: InputMaybe<RestartLibretime_UpdatedAt_Operator>;
};

export type RestartLibretime_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<RestartLibretime_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<RestartLibretime_Where_Or>>>;
  createdAt?: InputMaybe<RestartLibretime_CreatedAt_Operator>;
  id?: InputMaybe<RestartLibretime_Id_Operator>;
  results?: InputMaybe<RestartLibretime_Results_Operator>;
  taskFinished?: InputMaybe<RestartLibretime_TaskFinished_Operator>;
  updatedAt?: InputMaybe<RestartLibretime_UpdatedAt_Operator>;
};

export type RestartLibretimes = {
  __typename?: 'RestartLibretimes';
  docs: Array<RestartLibretime>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Show = {
  __typename?: 'Show';
  active?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Category>>;
  coverImage?: Maybe<Media>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['JSON'];
  id: Scalars['String'];
  primaryHosts: Array<Host>;
  showName: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ShowCategoriesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ShowCoverImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};


export type ShowDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type ShowPrimaryHostsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>;
  locale?: InputMaybe<LocaleInputType>;
};

export type Show_Active_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type Show_Categories_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Show_CoverImage_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Show_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Show_Description_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type Show_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Show_PrimaryHosts_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Show_ShowName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Show_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Show_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Show_Where = {
  AND?: InputMaybe<Array<InputMaybe<Show_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Show_Where_Or>>>;
  active?: InputMaybe<Show_Active_Operator>;
  categories?: InputMaybe<Show_Categories_Operator>;
  coverImage?: InputMaybe<Show_CoverImage_Operator>;
  createdAt?: InputMaybe<Show_CreatedAt_Operator>;
  description?: InputMaybe<Show_Description_Operator>;
  id?: InputMaybe<Show_Id_Operator>;
  primaryHosts?: InputMaybe<Show_PrimaryHosts_Operator>;
  showName?: InputMaybe<Show_ShowName_Operator>;
  slug?: InputMaybe<Show_Slug_Operator>;
  updatedAt?: InputMaybe<Show_UpdatedAt_Operator>;
};

export type Show_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Show_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Show_Where_Or>>>;
  active?: InputMaybe<Show_Active_Operator>;
  categories?: InputMaybe<Show_Categories_Operator>;
  coverImage?: InputMaybe<Show_CoverImage_Operator>;
  createdAt?: InputMaybe<Show_CreatedAt_Operator>;
  description?: InputMaybe<Show_Description_Operator>;
  id?: InputMaybe<Show_Id_Operator>;
  primaryHosts?: InputMaybe<Show_PrimaryHosts_Operator>;
  showName?: InputMaybe<Show_ShowName_Operator>;
  slug?: InputMaybe<Show_Slug_Operator>;
  updatedAt?: InputMaybe<Show_UpdatedAt_Operator>;
};

export type Show_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Show_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Show_Where_Or>>>;
  active?: InputMaybe<Show_Active_Operator>;
  categories?: InputMaybe<Show_Categories_Operator>;
  coverImage?: InputMaybe<Show_CoverImage_Operator>;
  createdAt?: InputMaybe<Show_CreatedAt_Operator>;
  description?: InputMaybe<Show_Description_Operator>;
  id?: InputMaybe<Show_Id_Operator>;
  primaryHosts?: InputMaybe<Show_PrimaryHosts_Operator>;
  showName?: InputMaybe<Show_ShowName_Operator>;
  slug?: InputMaybe<Show_Slug_Operator>;
  updatedAt?: InputMaybe<Show_UpdatedAt_Operator>;
};

export type Shows = {
  __typename?: 'Shows';
  docs: Array<Show>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ShowsByCategory = {
  __typename?: 'ShowsByCategory';
  docs: Array<Show>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ShowsCreateAccess = {
  __typename?: 'ShowsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsCreateDocAccess = {
  __typename?: 'ShowsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsDeleteAccess = {
  __typename?: 'ShowsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsDeleteDocAccess = {
  __typename?: 'ShowsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsDocAccessFields = {
  __typename?: 'ShowsDocAccessFields';
  active?: Maybe<ShowsDocAccessFields_Active>;
  categories?: Maybe<ShowsDocAccessFields_Categories>;
  coverImage?: Maybe<ShowsDocAccessFields_CoverImage>;
  createdAt?: Maybe<ShowsDocAccessFields_CreatedAt>;
  description?: Maybe<ShowsDocAccessFields_Description>;
  primaryHosts?: Maybe<ShowsDocAccessFields_PrimaryHosts>;
  showName?: Maybe<ShowsDocAccessFields_ShowName>;
  slug?: Maybe<ShowsDocAccessFields_Slug>;
  updatedAt?: Maybe<ShowsDocAccessFields_UpdatedAt>;
};

export type ShowsDocAccessFields_Active = {
  __typename?: 'ShowsDocAccessFields_active';
  create?: Maybe<ShowsDocAccessFields_Active_Create>;
  delete?: Maybe<ShowsDocAccessFields_Active_Delete>;
  read?: Maybe<ShowsDocAccessFields_Active_Read>;
  update?: Maybe<ShowsDocAccessFields_Active_Update>;
};

export type ShowsDocAccessFields_Active_Create = {
  __typename?: 'ShowsDocAccessFields_active_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Active_Delete = {
  __typename?: 'ShowsDocAccessFields_active_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Active_Read = {
  __typename?: 'ShowsDocAccessFields_active_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Active_Update = {
  __typename?: 'ShowsDocAccessFields_active_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Categories = {
  __typename?: 'ShowsDocAccessFields_categories';
  create?: Maybe<ShowsDocAccessFields_Categories_Create>;
  delete?: Maybe<ShowsDocAccessFields_Categories_Delete>;
  read?: Maybe<ShowsDocAccessFields_Categories_Read>;
  update?: Maybe<ShowsDocAccessFields_Categories_Update>;
};

export type ShowsDocAccessFields_Categories_Create = {
  __typename?: 'ShowsDocAccessFields_categories_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Categories_Delete = {
  __typename?: 'ShowsDocAccessFields_categories_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Categories_Read = {
  __typename?: 'ShowsDocAccessFields_categories_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Categories_Update = {
  __typename?: 'ShowsDocAccessFields_categories_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CoverImage = {
  __typename?: 'ShowsDocAccessFields_coverImage';
  create?: Maybe<ShowsDocAccessFields_CoverImage_Create>;
  delete?: Maybe<ShowsDocAccessFields_CoverImage_Delete>;
  read?: Maybe<ShowsDocAccessFields_CoverImage_Read>;
  update?: Maybe<ShowsDocAccessFields_CoverImage_Update>;
};

export type ShowsDocAccessFields_CoverImage_Create = {
  __typename?: 'ShowsDocAccessFields_coverImage_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CoverImage_Delete = {
  __typename?: 'ShowsDocAccessFields_coverImage_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CoverImage_Read = {
  __typename?: 'ShowsDocAccessFields_coverImage_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CoverImage_Update = {
  __typename?: 'ShowsDocAccessFields_coverImage_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CreatedAt = {
  __typename?: 'ShowsDocAccessFields_createdAt';
  create?: Maybe<ShowsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ShowsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ShowsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ShowsDocAccessFields_CreatedAt_Update>;
};

export type ShowsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ShowsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ShowsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ShowsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ShowsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Description = {
  __typename?: 'ShowsDocAccessFields_description';
  create?: Maybe<ShowsDocAccessFields_Description_Create>;
  delete?: Maybe<ShowsDocAccessFields_Description_Delete>;
  read?: Maybe<ShowsDocAccessFields_Description_Read>;
  update?: Maybe<ShowsDocAccessFields_Description_Update>;
};

export type ShowsDocAccessFields_Description_Create = {
  __typename?: 'ShowsDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Description_Delete = {
  __typename?: 'ShowsDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Description_Read = {
  __typename?: 'ShowsDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Description_Update = {
  __typename?: 'ShowsDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_PrimaryHosts = {
  __typename?: 'ShowsDocAccessFields_primaryHosts';
  create?: Maybe<ShowsDocAccessFields_PrimaryHosts_Create>;
  delete?: Maybe<ShowsDocAccessFields_PrimaryHosts_Delete>;
  read?: Maybe<ShowsDocAccessFields_PrimaryHosts_Read>;
  update?: Maybe<ShowsDocAccessFields_PrimaryHosts_Update>;
};

export type ShowsDocAccessFields_PrimaryHosts_Create = {
  __typename?: 'ShowsDocAccessFields_primaryHosts_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_PrimaryHosts_Delete = {
  __typename?: 'ShowsDocAccessFields_primaryHosts_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_PrimaryHosts_Read = {
  __typename?: 'ShowsDocAccessFields_primaryHosts_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_PrimaryHosts_Update = {
  __typename?: 'ShowsDocAccessFields_primaryHosts_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_ShowName = {
  __typename?: 'ShowsDocAccessFields_showName';
  create?: Maybe<ShowsDocAccessFields_ShowName_Create>;
  delete?: Maybe<ShowsDocAccessFields_ShowName_Delete>;
  read?: Maybe<ShowsDocAccessFields_ShowName_Read>;
  update?: Maybe<ShowsDocAccessFields_ShowName_Update>;
};

export type ShowsDocAccessFields_ShowName_Create = {
  __typename?: 'ShowsDocAccessFields_showName_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_ShowName_Delete = {
  __typename?: 'ShowsDocAccessFields_showName_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_ShowName_Read = {
  __typename?: 'ShowsDocAccessFields_showName_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_ShowName_Update = {
  __typename?: 'ShowsDocAccessFields_showName_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Slug = {
  __typename?: 'ShowsDocAccessFields_slug';
  create?: Maybe<ShowsDocAccessFields_Slug_Create>;
  delete?: Maybe<ShowsDocAccessFields_Slug_Delete>;
  read?: Maybe<ShowsDocAccessFields_Slug_Read>;
  update?: Maybe<ShowsDocAccessFields_Slug_Update>;
};

export type ShowsDocAccessFields_Slug_Create = {
  __typename?: 'ShowsDocAccessFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Slug_Delete = {
  __typename?: 'ShowsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Slug_Read = {
  __typename?: 'ShowsDocAccessFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_Slug_Update = {
  __typename?: 'ShowsDocAccessFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_UpdatedAt = {
  __typename?: 'ShowsDocAccessFields_updatedAt';
  create?: Maybe<ShowsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ShowsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ShowsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ShowsDocAccessFields_UpdatedAt_Update>;
};

export type ShowsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ShowsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ShowsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ShowsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ShowsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ShowsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields = {
  __typename?: 'ShowsFields';
  active?: Maybe<ShowsFields_Active>;
  categories?: Maybe<ShowsFields_Categories>;
  coverImage?: Maybe<ShowsFields_CoverImage>;
  createdAt?: Maybe<ShowsFields_CreatedAt>;
  description?: Maybe<ShowsFields_Description>;
  primaryHosts?: Maybe<ShowsFields_PrimaryHosts>;
  showName?: Maybe<ShowsFields_ShowName>;
  slug?: Maybe<ShowsFields_Slug>;
  updatedAt?: Maybe<ShowsFields_UpdatedAt>;
};

export type ShowsFields_Active = {
  __typename?: 'ShowsFields_active';
  create?: Maybe<ShowsFields_Active_Create>;
  delete?: Maybe<ShowsFields_Active_Delete>;
  read?: Maybe<ShowsFields_Active_Read>;
  update?: Maybe<ShowsFields_Active_Update>;
};

export type ShowsFields_Active_Create = {
  __typename?: 'ShowsFields_active_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Active_Delete = {
  __typename?: 'ShowsFields_active_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Active_Read = {
  __typename?: 'ShowsFields_active_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Active_Update = {
  __typename?: 'ShowsFields_active_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Categories = {
  __typename?: 'ShowsFields_categories';
  create?: Maybe<ShowsFields_Categories_Create>;
  delete?: Maybe<ShowsFields_Categories_Delete>;
  read?: Maybe<ShowsFields_Categories_Read>;
  update?: Maybe<ShowsFields_Categories_Update>;
};

export type ShowsFields_Categories_Create = {
  __typename?: 'ShowsFields_categories_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Categories_Delete = {
  __typename?: 'ShowsFields_categories_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Categories_Read = {
  __typename?: 'ShowsFields_categories_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Categories_Update = {
  __typename?: 'ShowsFields_categories_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CoverImage = {
  __typename?: 'ShowsFields_coverImage';
  create?: Maybe<ShowsFields_CoverImage_Create>;
  delete?: Maybe<ShowsFields_CoverImage_Delete>;
  read?: Maybe<ShowsFields_CoverImage_Read>;
  update?: Maybe<ShowsFields_CoverImage_Update>;
};

export type ShowsFields_CoverImage_Create = {
  __typename?: 'ShowsFields_coverImage_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CoverImage_Delete = {
  __typename?: 'ShowsFields_coverImage_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CoverImage_Read = {
  __typename?: 'ShowsFields_coverImage_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CoverImage_Update = {
  __typename?: 'ShowsFields_coverImage_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CreatedAt = {
  __typename?: 'ShowsFields_createdAt';
  create?: Maybe<ShowsFields_CreatedAt_Create>;
  delete?: Maybe<ShowsFields_CreatedAt_Delete>;
  read?: Maybe<ShowsFields_CreatedAt_Read>;
  update?: Maybe<ShowsFields_CreatedAt_Update>;
};

export type ShowsFields_CreatedAt_Create = {
  __typename?: 'ShowsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CreatedAt_Delete = {
  __typename?: 'ShowsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CreatedAt_Read = {
  __typename?: 'ShowsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_CreatedAt_Update = {
  __typename?: 'ShowsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Description = {
  __typename?: 'ShowsFields_description';
  create?: Maybe<ShowsFields_Description_Create>;
  delete?: Maybe<ShowsFields_Description_Delete>;
  read?: Maybe<ShowsFields_Description_Read>;
  update?: Maybe<ShowsFields_Description_Update>;
};

export type ShowsFields_Description_Create = {
  __typename?: 'ShowsFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Description_Delete = {
  __typename?: 'ShowsFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Description_Read = {
  __typename?: 'ShowsFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Description_Update = {
  __typename?: 'ShowsFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_PrimaryHosts = {
  __typename?: 'ShowsFields_primaryHosts';
  create?: Maybe<ShowsFields_PrimaryHosts_Create>;
  delete?: Maybe<ShowsFields_PrimaryHosts_Delete>;
  read?: Maybe<ShowsFields_PrimaryHosts_Read>;
  update?: Maybe<ShowsFields_PrimaryHosts_Update>;
};

export type ShowsFields_PrimaryHosts_Create = {
  __typename?: 'ShowsFields_primaryHosts_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_PrimaryHosts_Delete = {
  __typename?: 'ShowsFields_primaryHosts_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_PrimaryHosts_Read = {
  __typename?: 'ShowsFields_primaryHosts_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_PrimaryHosts_Update = {
  __typename?: 'ShowsFields_primaryHosts_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_ShowName = {
  __typename?: 'ShowsFields_showName';
  create?: Maybe<ShowsFields_ShowName_Create>;
  delete?: Maybe<ShowsFields_ShowName_Delete>;
  read?: Maybe<ShowsFields_ShowName_Read>;
  update?: Maybe<ShowsFields_ShowName_Update>;
};

export type ShowsFields_ShowName_Create = {
  __typename?: 'ShowsFields_showName_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_ShowName_Delete = {
  __typename?: 'ShowsFields_showName_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_ShowName_Read = {
  __typename?: 'ShowsFields_showName_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_ShowName_Update = {
  __typename?: 'ShowsFields_showName_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Slug = {
  __typename?: 'ShowsFields_slug';
  create?: Maybe<ShowsFields_Slug_Create>;
  delete?: Maybe<ShowsFields_Slug_Delete>;
  read?: Maybe<ShowsFields_Slug_Read>;
  update?: Maybe<ShowsFields_Slug_Update>;
};

export type ShowsFields_Slug_Create = {
  __typename?: 'ShowsFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Slug_Delete = {
  __typename?: 'ShowsFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Slug_Read = {
  __typename?: 'ShowsFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_Slug_Update = {
  __typename?: 'ShowsFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type ShowsFields_UpdatedAt = {
  __typename?: 'ShowsFields_updatedAt';
  create?: Maybe<ShowsFields_UpdatedAt_Create>;
  delete?: Maybe<ShowsFields_UpdatedAt_Delete>;
  read?: Maybe<ShowsFields_UpdatedAt_Read>;
  update?: Maybe<ShowsFields_UpdatedAt_Update>;
};

export type ShowsFields_UpdatedAt_Create = {
  __typename?: 'ShowsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ShowsFields_UpdatedAt_Delete = {
  __typename?: 'ShowsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ShowsFields_UpdatedAt_Read = {
  __typename?: 'ShowsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ShowsFields_UpdatedAt_Update = {
  __typename?: 'ShowsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ShowsReadAccess = {
  __typename?: 'ShowsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsReadDocAccess = {
  __typename?: 'ShowsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsUpdateAccess = {
  __typename?: 'ShowsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ShowsUpdateDocAccess = {
  __typename?: 'ShowsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Tag_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Tag_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Tag_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Tag_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Tag_Where = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tags = {
  __typename?: 'Tags';
  docs: Array<Tag>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type TagsCreateAccess = {
  __typename?: 'TagsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsCreateDocAccess = {
  __typename?: 'TagsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsDeleteAccess = {
  __typename?: 'TagsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsDeleteDocAccess = {
  __typename?: 'TagsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsDocAccessFields = {
  __typename?: 'TagsDocAccessFields';
  createdAt?: Maybe<TagsDocAccessFields_CreatedAt>;
  name?: Maybe<TagsDocAccessFields_Name>;
  updatedAt?: Maybe<TagsDocAccessFields_UpdatedAt>;
};

export type TagsDocAccessFields_CreatedAt = {
  __typename?: 'TagsDocAccessFields_createdAt';
  create?: Maybe<TagsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_CreatedAt_Update>;
};

export type TagsDocAccessFields_CreatedAt_Create = {
  __typename?: 'TagsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_CreatedAt_Read = {
  __typename?: 'TagsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_CreatedAt_Update = {
  __typename?: 'TagsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_Name = {
  __typename?: 'TagsDocAccessFields_name';
  create?: Maybe<TagsDocAccessFields_Name_Create>;
  delete?: Maybe<TagsDocAccessFields_Name_Delete>;
  read?: Maybe<TagsDocAccessFields_Name_Read>;
  update?: Maybe<TagsDocAccessFields_Name_Update>;
};

export type TagsDocAccessFields_Name_Create = {
  __typename?: 'TagsDocAccessFields_name_Create';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_Name_Delete = {
  __typename?: 'TagsDocAccessFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_Name_Read = {
  __typename?: 'TagsDocAccessFields_name_Read';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_Name_Update = {
  __typename?: 'TagsDocAccessFields_name_Update';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_UpdatedAt = {
  __typename?: 'TagsDocAccessFields_updatedAt';
  create?: Maybe<TagsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_UpdatedAt_Update>;
};

export type TagsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TagsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TagsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type TagsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TagsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type TagsFields = {
  __typename?: 'TagsFields';
  createdAt?: Maybe<TagsFields_CreatedAt>;
  name?: Maybe<TagsFields_Name>;
  updatedAt?: Maybe<TagsFields_UpdatedAt>;
};

export type TagsFields_CreatedAt = {
  __typename?: 'TagsFields_createdAt';
  create?: Maybe<TagsFields_CreatedAt_Create>;
  delete?: Maybe<TagsFields_CreatedAt_Delete>;
  read?: Maybe<TagsFields_CreatedAt_Read>;
  update?: Maybe<TagsFields_CreatedAt_Update>;
};

export type TagsFields_CreatedAt_Create = {
  __typename?: 'TagsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type TagsFields_CreatedAt_Delete = {
  __typename?: 'TagsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type TagsFields_CreatedAt_Read = {
  __typename?: 'TagsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type TagsFields_CreatedAt_Update = {
  __typename?: 'TagsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type TagsFields_Name = {
  __typename?: 'TagsFields_name';
  create?: Maybe<TagsFields_Name_Create>;
  delete?: Maybe<TagsFields_Name_Delete>;
  read?: Maybe<TagsFields_Name_Read>;
  update?: Maybe<TagsFields_Name_Update>;
};

export type TagsFields_Name_Create = {
  __typename?: 'TagsFields_name_Create';
  permission: Scalars['Boolean'];
};

export type TagsFields_Name_Delete = {
  __typename?: 'TagsFields_name_Delete';
  permission: Scalars['Boolean'];
};

export type TagsFields_Name_Read = {
  __typename?: 'TagsFields_name_Read';
  permission: Scalars['Boolean'];
};

export type TagsFields_Name_Update = {
  __typename?: 'TagsFields_name_Update';
  permission: Scalars['Boolean'];
};

export type TagsFields_UpdatedAt = {
  __typename?: 'TagsFields_updatedAt';
  create?: Maybe<TagsFields_UpdatedAt_Create>;
  delete?: Maybe<TagsFields_UpdatedAt_Delete>;
  read?: Maybe<TagsFields_UpdatedAt_Read>;
  update?: Maybe<TagsFields_UpdatedAt_Update>;
};

export type TagsFields_UpdatedAt_Create = {
  __typename?: 'TagsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type TagsFields_UpdatedAt_Delete = {
  __typename?: 'TagsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type TagsFields_UpdatedAt_Read = {
  __typename?: 'TagsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type TagsFields_UpdatedAt_Update = {
  __typename?: 'TagsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type TagsReadAccess = {
  __typename?: 'TagsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsReadDocAccess = {
  __typename?: 'TagsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsUpdateAccess = {
  __typename?: 'TagsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type TagsUpdateDocAccess = {
  __typename?: 'TagsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type User = {
  __typename?: 'User';
  apiKey?: Maybe<Scalars['String']>;
  apiKeyIndex?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  enableAPIKey?: Maybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  hash?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<User_Roles>>;
  salt?: Maybe<Scalars['String']>;
  sessions?: Maybe<Array<User_Sessions>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  Creator = 'creator',
  Editor = 'editor'
}

export type User_Sessions = {
  __typename?: 'User_Sessions';
  createdAt?: Maybe<Scalars['DateTime']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
};

export type User_ApiKey_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type User_EnableApiKey_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type User_FirstName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_LastName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum User_Roles {
  Admin = 'admin',
  Creator = 'creator',
  Editor = 'editor'
}

export enum User_Roles_Input {
  Admin = 'admin',
  Creator = 'creator',
  Editor = 'editor'
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
  Creator = 'creator',
  Editor = 'editor'
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_Sessions__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Sessions__ExpiresAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Sessions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  firstName?: InputMaybe<User_FirstName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  lastName?: InputMaybe<User_LastName_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  apiKey?: Maybe<UsersDocAccessFields_ApiKey>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  enableAPIKey?: Maybe<UsersDocAccessFields_EnableApiKey>;
  firstName?: Maybe<UsersDocAccessFields_FirstName>;
  lastName?: Maybe<UsersDocAccessFields_LastName>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  sessions?: Maybe<UsersDocAccessFields_Sessions>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_ApiKey = {
  __typename?: 'UsersDocAccessFields_apiKey';
  create?: Maybe<UsersDocAccessFields_ApiKey_Create>;
  delete?: Maybe<UsersDocAccessFields_ApiKey_Delete>;
  read?: Maybe<UsersDocAccessFields_ApiKey_Read>;
  update?: Maybe<UsersDocAccessFields_ApiKey_Update>;
};

export type UsersDocAccessFields_ApiKey_Create = {
  __typename?: 'UsersDocAccessFields_apiKey_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_ApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_apiKey_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_ApiKey_Read = {
  __typename?: 'UsersDocAccessFields_apiKey_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_ApiKey_Update = {
  __typename?: 'UsersDocAccessFields_apiKey_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_EnableApiKey = {
  __typename?: 'UsersDocAccessFields_enableAPIKey';
  create?: Maybe<UsersDocAccessFields_EnableApiKey_Create>;
  delete?: Maybe<UsersDocAccessFields_EnableApiKey_Delete>;
  read?: Maybe<UsersDocAccessFields_EnableApiKey_Read>;
  update?: Maybe<UsersDocAccessFields_EnableApiKey_Update>;
};

export type UsersDocAccessFields_EnableApiKey_Create = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_EnableApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_EnableApiKey_Read = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_EnableApiKey_Update = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FirstName = {
  __typename?: 'UsersDocAccessFields_firstName';
  create?: Maybe<UsersDocAccessFields_FirstName_Create>;
  delete?: Maybe<UsersDocAccessFields_FirstName_Delete>;
  read?: Maybe<UsersDocAccessFields_FirstName_Read>;
  update?: Maybe<UsersDocAccessFields_FirstName_Update>;
};

export type UsersDocAccessFields_FirstName_Create = {
  __typename?: 'UsersDocAccessFields_firstName_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FirstName_Delete = {
  __typename?: 'UsersDocAccessFields_firstName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FirstName_Read = {
  __typename?: 'UsersDocAccessFields_firstName_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_FirstName_Update = {
  __typename?: 'UsersDocAccessFields_firstName_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName = {
  __typename?: 'UsersDocAccessFields_lastName';
  create?: Maybe<UsersDocAccessFields_LastName_Create>;
  delete?: Maybe<UsersDocAccessFields_LastName_Delete>;
  read?: Maybe<UsersDocAccessFields_LastName_Read>;
  update?: Maybe<UsersDocAccessFields_LastName_Update>;
};

export type UsersDocAccessFields_LastName_Create = {
  __typename?: 'UsersDocAccessFields_lastName_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Delete = {
  __typename?: 'UsersDocAccessFields_lastName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Read = {
  __typename?: 'UsersDocAccessFields_lastName_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_LastName_Update = {
  __typename?: 'UsersDocAccessFields_lastName_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions = {
  __typename?: 'UsersDocAccessFields_sessions';
  create?: Maybe<UsersDocAccessFields_Sessions_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Delete>;
  fields?: Maybe<UsersDocAccessFields_Sessions_Fields>;
  read?: Maybe<UsersDocAccessFields_Sessions_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Update>;
};

export type UsersDocAccessFields_Sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields';
  createdAt?: Maybe<UsersDocAccessFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersDocAccessFields_Sessions_Id>;
};

export type UsersDocAccessFields_Sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_CreatedAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt';
  create?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Update>;
};

export type UsersDocAccessFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt';
  create?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Update>;
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_Id = {
  __typename?: 'UsersDocAccessFields_sessions_id';
  create?: Maybe<UsersDocAccessFields_Sessions_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Id_Update>;
};

export type UsersDocAccessFields_Sessions_Id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_Id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Sessions_Id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  apiKey?: Maybe<UsersFields_ApiKey>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  enableAPIKey?: Maybe<UsersFields_EnableApiKey>;
  firstName?: Maybe<UsersFields_FirstName>;
  lastName?: Maybe<UsersFields_LastName>;
  roles?: Maybe<UsersFields_Roles>;
  sessions?: Maybe<UsersFields_Sessions>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_ApiKey = {
  __typename?: 'UsersFields_apiKey';
  create?: Maybe<UsersFields_ApiKey_Create>;
  delete?: Maybe<UsersFields_ApiKey_Delete>;
  read?: Maybe<UsersFields_ApiKey_Read>;
  update?: Maybe<UsersFields_ApiKey_Update>;
};

export type UsersFields_ApiKey_Create = {
  __typename?: 'UsersFields_apiKey_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_ApiKey_Delete = {
  __typename?: 'UsersFields_apiKey_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_ApiKey_Read = {
  __typename?: 'UsersFields_apiKey_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_ApiKey_Update = {
  __typename?: 'UsersFields_apiKey_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_EnableApiKey = {
  __typename?: 'UsersFields_enableAPIKey';
  create?: Maybe<UsersFields_EnableApiKey_Create>;
  delete?: Maybe<UsersFields_EnableApiKey_Delete>;
  read?: Maybe<UsersFields_EnableApiKey_Read>;
  update?: Maybe<UsersFields_EnableApiKey_Update>;
};

export type UsersFields_EnableApiKey_Create = {
  __typename?: 'UsersFields_enableAPIKey_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_EnableApiKey_Delete = {
  __typename?: 'UsersFields_enableAPIKey_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_EnableApiKey_Read = {
  __typename?: 'UsersFields_enableAPIKey_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_EnableApiKey_Update = {
  __typename?: 'UsersFields_enableAPIKey_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_FirstName = {
  __typename?: 'UsersFields_firstName';
  create?: Maybe<UsersFields_FirstName_Create>;
  delete?: Maybe<UsersFields_FirstName_Delete>;
  read?: Maybe<UsersFields_FirstName_Read>;
  update?: Maybe<UsersFields_FirstName_Update>;
};

export type UsersFields_FirstName_Create = {
  __typename?: 'UsersFields_firstName_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_FirstName_Delete = {
  __typename?: 'UsersFields_firstName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_FirstName_Read = {
  __typename?: 'UsersFields_firstName_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_FirstName_Update = {
  __typename?: 'UsersFields_firstName_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName = {
  __typename?: 'UsersFields_lastName';
  create?: Maybe<UsersFields_LastName_Create>;
  delete?: Maybe<UsersFields_LastName_Delete>;
  read?: Maybe<UsersFields_LastName_Read>;
  update?: Maybe<UsersFields_LastName_Update>;
};

export type UsersFields_LastName_Create = {
  __typename?: 'UsersFields_lastName_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Delete = {
  __typename?: 'UsersFields_lastName_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Read = {
  __typename?: 'UsersFields_lastName_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_LastName_Update = {
  __typename?: 'UsersFields_lastName_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions = {
  __typename?: 'UsersFields_sessions';
  create?: Maybe<UsersFields_Sessions_Create>;
  delete?: Maybe<UsersFields_Sessions_Delete>;
  fields?: Maybe<UsersFields_Sessions_Fields>;
  read?: Maybe<UsersFields_Sessions_Read>;
  update?: Maybe<UsersFields_Sessions_Update>;
};

export type UsersFields_Sessions_Create = {
  __typename?: 'UsersFields_sessions_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields';
  createdAt?: Maybe<UsersFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersFields_Sessions_Id>;
};

export type UsersFields_Sessions_Read = {
  __typename?: 'UsersFields_sessions_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_Update = {
  __typename?: 'UsersFields_sessions_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_CreatedAt = {
  __typename?: 'UsersFields_sessions_createdAt';
  create?: Maybe<UsersFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersFields_Sessions_CreatedAt_Update>;
};

export type UsersFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_ExpiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt';
  create?: Maybe<UsersFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersFields_Sessions_ExpiresAt_Update>;
};

export type UsersFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_Id = {
  __typename?: 'UsersFields_sessions_id';
  create?: Maybe<UsersFields_Sessions_Id_Create>;
  delete?: Maybe<UsersFields_Sessions_Id_Delete>;
  read?: Maybe<UsersFields_Sessions_Id_Read>;
  update?: Maybe<UsersFields_Sessions_Id_Update>;
};

export type UsersFields_Sessions_Id_Create = {
  __typename?: 'UsersFields_sessions_id_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_Id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_Id_Read = {
  __typename?: 'UsersFields_sessions_id_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Sessions_Id_Update = {
  __typename?: 'UsersFields_sessions_id_Update';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type YoutubeChannel = {
  __typename?: 'YoutubeChannel';
  channelId?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isLive?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  videoId?: Maybe<Scalars['String']>;
};

export type AboutPageAccess = {
  __typename?: 'aboutPageAccess';
  fields?: Maybe<AboutPageFields>;
  read?: Maybe<AboutPageReadAccess>;
  update?: Maybe<AboutPageUpdateAccess>;
};

export type AboutPageDocAccess = {
  __typename?: 'aboutPageDocAccess';
  fields?: Maybe<AboutPageDocAccessFields>;
  read?: Maybe<AboutPageReadDocAccess>;
  update?: Maybe<AboutPageUpdateDocAccess>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type CategoriesAccess = {
  __typename?: 'categoriesAccess';
  create?: Maybe<CategoriesCreateAccess>;
  delete?: Maybe<CategoriesDeleteAccess>;
  fields?: Maybe<CategoriesFields>;
  read?: Maybe<CategoriesReadAccess>;
  update?: Maybe<CategoriesUpdateAccess>;
};

export type CategoriesDocAccess = {
  __typename?: 'categoriesDocAccess';
  create?: Maybe<CategoriesCreateDocAccess>;
  delete?: Maybe<CategoriesDeleteDocAccess>;
  fields?: Maybe<CategoriesDocAccessFields>;
  read?: Maybe<CategoriesReadDocAccess>;
  update?: Maybe<CategoriesUpdateDocAccess>;
};

export type CountCategories = {
  __typename?: 'countCategories';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountHosts = {
  __typename?: 'countHosts';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountLabelReleases = {
  __typename?: 'countLabelReleases';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountLiveVideos = {
  __typename?: 'countLiveVideos';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountMerches = {
  __typename?: 'countMerches';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountNewsPosts = {
  __typename?: 'countNewsPosts';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountPayloadJobs = {
  __typename?: 'countPayloadJobs';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountPayloadKvs = {
  __typename?: 'countPayloadKvs';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountRestartLibretimes = {
  __typename?: 'countRestartLibretimes';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountShows = {
  __typename?: 'countShows';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountTags = {
  __typename?: 'countTags';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']>;
};

export type DonatePageAccess = {
  __typename?: 'donatePageAccess';
  fields?: Maybe<DonatePageFields>;
  read?: Maybe<DonatePageReadAccess>;
  update?: Maybe<DonatePageUpdateAccess>;
};

export type DonatePageDocAccess = {
  __typename?: 'donatePageDocAccess';
  fields?: Maybe<DonatePageDocAccessFields>;
  read?: Maybe<DonatePageReadDocAccess>;
  update?: Maybe<DonatePageUpdateDocAccess>;
};

export type HostsAccess = {
  __typename?: 'hostsAccess';
  create?: Maybe<HostsCreateAccess>;
  delete?: Maybe<HostsDeleteAccess>;
  fields?: Maybe<HostsFields>;
  read?: Maybe<HostsReadAccess>;
  update?: Maybe<HostsUpdateAccess>;
};

export type HostsDocAccess = {
  __typename?: 'hostsDocAccess';
  create?: Maybe<HostsCreateDocAccess>;
  delete?: Maybe<HostsDeleteDocAccess>;
  fields?: Maybe<HostsDocAccessFields>;
  read?: Maybe<HostsReadDocAccess>;
  update?: Maybe<HostsUpdateDocAccess>;
};

export type LabelReleasesAccess = {
  __typename?: 'labelReleasesAccess';
  create?: Maybe<LabelReleasesCreateAccess>;
  delete?: Maybe<LabelReleasesDeleteAccess>;
  fields?: Maybe<LabelReleasesFields>;
  read?: Maybe<LabelReleasesReadAccess>;
  update?: Maybe<LabelReleasesUpdateAccess>;
};

export type LabelReleasesDocAccess = {
  __typename?: 'labelReleasesDocAccess';
  create?: Maybe<LabelReleasesCreateDocAccess>;
  delete?: Maybe<LabelReleasesDeleteDocAccess>;
  fields?: Maybe<LabelReleasesDocAccessFields>;
  read?: Maybe<LabelReleasesReadDocAccess>;
  update?: Maybe<LabelReleasesUpdateDocAccess>;
};

export type LiveVideosAccess = {
  __typename?: 'liveVideosAccess';
  create?: Maybe<LiveVideosCreateAccess>;
  delete?: Maybe<LiveVideosDeleteAccess>;
  fields?: Maybe<LiveVideosFields>;
  read?: Maybe<LiveVideosReadAccess>;
  update?: Maybe<LiveVideosUpdateAccess>;
};

export type LiveVideosDocAccess = {
  __typename?: 'liveVideosDocAccess';
  create?: Maybe<LiveVideosCreateDocAccess>;
  delete?: Maybe<LiveVideosDeleteDocAccess>;
  fields?: Maybe<LiveVideosDocAccessFields>;
  read?: Maybe<LiveVideosReadDocAccess>;
  update?: Maybe<LiveVideosUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MerchAccess = {
  __typename?: 'merchAccess';
  create?: Maybe<MerchCreateAccess>;
  delete?: Maybe<MerchDeleteAccess>;
  fields?: Maybe<MerchFields>;
  read?: Maybe<MerchReadAccess>;
  update?: Maybe<MerchUpdateAccess>;
};

export type MerchDocAccess = {
  __typename?: 'merchDocAccess';
  create?: Maybe<MerchCreateDocAccess>;
  delete?: Maybe<MerchDeleteDocAccess>;
  fields?: Maybe<MerchDocAccessFields>;
  read?: Maybe<MerchReadDocAccess>;
  update?: Maybe<MerchUpdateDocAccess>;
};

export type MutationAboutPageInput = {
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationCategoryInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationCategoryUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationDonatePageInput = {
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationHostInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationHostUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationLabelReleaseInput = {
  blurb: Scalars['String'];
  createdAt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type MutationLabelReleaseUpdateInput = {
  blurb?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MutationLiveVideoInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  sortableId?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
  videoId?: InputMaybe<Scalars['String']>;
};

export type MutationLiveVideoUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  sortableId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  videoId?: InputMaybe<Scalars['String']>;
};

export type MutationMediaInput = {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  focalX?: InputMaybe<Scalars['Float']>;
  focalY?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  focalX?: InputMaybe<Scalars['Float']>;
  focalY?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  thumbnailURL?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_SizesInput = {
  lg?: InputMaybe<MutationMediaUpdate_Sizes_LgInput>;
  opengraph?: InputMaybe<MutationMediaUpdate_Sizes_OpengraphInput>;
  sm?: InputMaybe<MutationMediaUpdate_Sizes_SmInput>;
  xl?: InputMaybe<MutationMediaUpdate_Sizes_XlInput>;
  xs?: InputMaybe<MutationMediaUpdate_Sizes_XsInput>;
};

export type MutationMediaUpdate_Sizes_LgInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_Sizes_OpengraphInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_Sizes_SmInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_Sizes_XlInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMediaUpdate_Sizes_XsInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_SizesInput = {
  lg?: InputMaybe<MutationMedia_Sizes_LgInput>;
  opengraph?: InputMaybe<MutationMedia_Sizes_OpengraphInput>;
  sm?: InputMaybe<MutationMedia_Sizes_SmInput>;
  xl?: InputMaybe<MutationMedia_Sizes_XlInput>;
  xs?: InputMaybe<MutationMedia_Sizes_XsInput>;
};

export type MutationMedia_Sizes_LgInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_Sizes_OpengraphInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_Sizes_SmInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_Sizes_XlInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMedia_Sizes_XsInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationMerchInput = {
  blurb: Scalars['String'];
  createdAt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  soldOut?: InputMaybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type MutationMerchUpdateInput = {
  blurb?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  soldOut?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MutationNewsPostInput = {
  _status?: InputMaybe<NewsPost__Status_MutationInput>;
  author?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  blurb: Scalars['String'];
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['String']>;
  heyZineUrl?: InputMaybe<Scalars['String']>;
  previewBanner?: InputMaybe<Scalars['String']>;
  publishDate?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationNewsPostUpdateInput = {
  _status?: InputMaybe<NewsPostUpdate__Status_MutationInput>;
  author?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  blurb?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['String']>;
  heyZineUrl?: InputMaybe<Scalars['String']>;
  previewBanner?: InputMaybe<Scalars['String']>;
  publishDate?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationPayloadJobInput = {
  completedAt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  error?: InputMaybe<Scalars['JSON']>;
  hasError?: InputMaybe<Scalars['Boolean']>;
  input?: InputMaybe<Scalars['JSON']>;
  log?: InputMaybe<Array<InputMaybe<MutationPayloadJob_LogInput>>>;
  processing?: InputMaybe<Scalars['Boolean']>;
  queue?: InputMaybe<Scalars['String']>;
  taskSlug?: InputMaybe<PayloadJob_TaskSlug_MutationInput>;
  taskStatus?: InputMaybe<Scalars['JSON']>;
  totalTried?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  waitUntil?: InputMaybe<Scalars['String']>;
};

export type MutationPayloadJobUpdateInput = {
  completedAt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  error?: InputMaybe<Scalars['JSON']>;
  hasError?: InputMaybe<Scalars['Boolean']>;
  input?: InputMaybe<Scalars['JSON']>;
  log?: InputMaybe<Array<InputMaybe<MutationPayloadJobUpdate_LogInput>>>;
  processing?: InputMaybe<Scalars['Boolean']>;
  queue?: InputMaybe<Scalars['String']>;
  taskSlug?: InputMaybe<PayloadJobUpdate_TaskSlug_MutationInput>;
  taskStatus?: InputMaybe<Scalars['JSON']>;
  totalTried?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  waitUntil?: InputMaybe<Scalars['String']>;
};

export type MutationPayloadJobUpdate_LogInput = {
  completedAt: Scalars['String'];
  error?: InputMaybe<Scalars['JSON']>;
  executedAt: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['JSON']>;
  output?: InputMaybe<Scalars['JSON']>;
  state: Scalars['String'];
  taskID: Scalars['String'];
  taskSlug: PayloadJobUpdate_Log_TaskSlug_MutationInput;
};

export type MutationPayloadJob_LogInput = {
  completedAt: Scalars['String'];
  error?: InputMaybe<Scalars['JSON']>;
  executedAt: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  input?: InputMaybe<Scalars['JSON']>;
  output?: InputMaybe<Scalars['JSON']>;
  state: Scalars['String'];
  taskID: Scalars['String'];
  taskSlug: PayloadJob_Log_TaskSlug_MutationInput;
};

export type MutationPayloadKvInput = {
  data: Scalars['JSON'];
  key: Scalars['String'];
};

export type MutationPayloadKvUpdateInput = {
  data?: InputMaybe<Scalars['JSON']>;
  key?: InputMaybe<Scalars['String']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
};

export type MutationRestartLibretimeInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  results?: InputMaybe<Scalars['String']>;
  taskFinished?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationRestartLibretimeUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  results?: InputMaybe<Scalars['String']>;
  taskFinished?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationShowInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  description: Scalars['JSON'];
  primaryHosts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  showName: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationShowUpdateInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  coverImage?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['JSON']>;
  primaryHosts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  showName?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationTagInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserInput = {
  apiKey?: InputMaybe<Scalars['String']>;
  apiKeyIndex?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  enableAPIKey?: InputMaybe<Scalars['Boolean']>;
  firstName: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<User_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUser_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdateInput = {
  apiKey?: InputMaybe<Scalars['String']>;
  apiKeyIndex?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  enableAPIKey?: InputMaybe<Scalars['Boolean']>;
  firstName?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationUserUpdate_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  expiresAt: Scalars['String'];
  id: Scalars['String'];
};

export type MutationUser_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  expiresAt: Scalars['String'];
  id: Scalars['String'];
};

export type NewsPostsAccess = {
  __typename?: 'newsPostsAccess';
  create?: Maybe<NewsPostsCreateAccess>;
  delete?: Maybe<NewsPostsDeleteAccess>;
  fields?: Maybe<NewsPostsFields>;
  read?: Maybe<NewsPostsReadAccess>;
  readVersions?: Maybe<NewsPostsReadVersionsAccess>;
  update?: Maybe<NewsPostsUpdateAccess>;
};

export type NewsPostsDocAccess = {
  __typename?: 'newsPostsDocAccess';
  create?: Maybe<NewsPostsCreateDocAccess>;
  delete?: Maybe<NewsPostsDeleteDocAccess>;
  fields?: Maybe<NewsPostsDocAccessFields>;
  read?: Maybe<NewsPostsReadDocAccess>;
  readVersions?: Maybe<NewsPostsReadVersionsDocAccess>;
  update?: Maybe<NewsPostsUpdateDocAccess>;
};

export type Payload_JobsAccess = {
  __typename?: 'payload_jobsAccess';
  create?: Maybe<PayloadJobsCreateAccess>;
  delete?: Maybe<PayloadJobsDeleteAccess>;
  fields?: Maybe<PayloadJobsFields>;
  read?: Maybe<PayloadJobsReadAccess>;
  update?: Maybe<PayloadJobsUpdateAccess>;
};

export type Payload_JobsDocAccess = {
  __typename?: 'payload_jobsDocAccess';
  create?: Maybe<PayloadJobsCreateDocAccess>;
  delete?: Maybe<PayloadJobsDeleteDocAccess>;
  fields?: Maybe<PayloadJobsDocAccessFields>;
  read?: Maybe<PayloadJobsReadDocAccess>;
  update?: Maybe<PayloadJobsUpdateDocAccess>;
};

export type Payload_KvAccess = {
  __typename?: 'payload_kvAccess';
  create?: Maybe<PayloadKvCreateAccess>;
  delete?: Maybe<PayloadKvDeleteAccess>;
  fields?: Maybe<PayloadKvFields>;
  read?: Maybe<PayloadKvReadAccess>;
  update?: Maybe<PayloadKvUpdateAccess>;
};

export type Payload_KvDocAccess = {
  __typename?: 'payload_kvDocAccess';
  create?: Maybe<PayloadKvCreateDocAccess>;
  delete?: Maybe<PayloadKvDeleteDocAccess>;
  fields?: Maybe<PayloadKvDocAccessFields>;
  read?: Maybe<PayloadKvReadDocAccess>;
  update?: Maybe<PayloadKvUpdateDocAccess>;
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type RestartLibretimeAccess = {
  __typename?: 'restartLibretimeAccess';
  create?: Maybe<RestartLibretimeCreateAccess>;
  delete?: Maybe<RestartLibretimeDeleteAccess>;
  fields?: Maybe<RestartLibretimeFields>;
  read?: Maybe<RestartLibretimeReadAccess>;
  update?: Maybe<RestartLibretimeUpdateAccess>;
};

export type RestartLibretimeDocAccess = {
  __typename?: 'restartLibretimeDocAccess';
  create?: Maybe<RestartLibretimeCreateDocAccess>;
  delete?: Maybe<RestartLibretimeDeleteDocAccess>;
  fields?: Maybe<RestartLibretimeDocAccessFields>;
  read?: Maybe<RestartLibretimeReadDocAccess>;
  update?: Maybe<RestartLibretimeUpdateDocAccess>;
};

export type ShowsAccess = {
  __typename?: 'showsAccess';
  create?: Maybe<ShowsCreateAccess>;
  delete?: Maybe<ShowsDeleteAccess>;
  fields?: Maybe<ShowsFields>;
  read?: Maybe<ShowsReadAccess>;
  update?: Maybe<ShowsUpdateAccess>;
};

export type ShowsDocAccess = {
  __typename?: 'showsDocAccess';
  create?: Maybe<ShowsCreateDocAccess>;
  delete?: Maybe<ShowsDeleteDocAccess>;
  fields?: Maybe<ShowsDocAccessFields>;
  read?: Maybe<ShowsReadDocAccess>;
  update?: Maybe<ShowsUpdateDocAccess>;
};

export type TagsAccess = {
  __typename?: 'tagsAccess';
  create?: Maybe<TagsCreateAccess>;
  delete?: Maybe<TagsDeleteAccess>;
  fields?: Maybe<TagsFields>;
  read?: Maybe<TagsReadAccess>;
  update?: Maybe<TagsUpdateAccess>;
};

export type TagsDocAccess = {
  __typename?: 'tagsDocAccess';
  create?: Maybe<TagsCreateDocAccess>;
  delete?: Maybe<TagsDeleteDocAccess>;
  fields?: Maybe<TagsDocAccessFields>;
  read?: Maybe<TagsReadDocAccess>;
  update?: Maybe<TagsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String'];
  email: Scalars['EmailAddress'];
  roles?: Maybe<Array<UsersJwt_Roles>>;
};

export enum UsersJwt_Roles {
  Admin = 'admin',
  Creator = 'creator',
  Editor = 'editor'
}

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['Int']>;
  strategy?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
  strategy?: Maybe<Scalars['String']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type VersionsNewsPost_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsNewsPost_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsNewsPost_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsNewsPost_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export enum VersionsNewsPost_PublishedLocale_Input {
  En = 'en',
  Pt = 'pt'
}

export type VersionsNewsPost_PublishedLocale_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsNewsPost_PublishedLocale_Input>>>;
  equals?: InputMaybe<VersionsNewsPost_PublishedLocale_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsNewsPost_PublishedLocale_Input>>>;
  not_equals?: InputMaybe<VersionsNewsPost_PublishedLocale_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsNewsPost_PublishedLocale_Input>>>;
};

export type VersionsNewsPost_Snapshot_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type VersionsNewsPost_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export enum VersionsNewsPost_Version___Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export type VersionsNewsPost_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsNewsPost_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsNewsPost_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<VersionsNewsPost_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsNewsPost_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsNewsPost_Version___Status_Input>>>;
};

export type VersionsNewsPost_Version__AuthorId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsNewsPost_Version__AuthorName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsNewsPost_Version__Author_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsNewsPost_Version__Blurb_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsNewsPost_Version__Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
};

export type VersionsNewsPost_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsNewsPost_Version__HeyZineUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsNewsPost_Version__PreviewBanner_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsNewsPost_Version__PublishDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsNewsPost_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsNewsPost_Version__Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type VersionsNewsPost_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type VersionsNewsPost_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type VersionsNewsPost_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsNewsPost_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsNewsPost_Where_Or>>>;
  createdAt?: InputMaybe<VersionsNewsPost_CreatedAt_Operator>;
  id?: InputMaybe<VersionsNewsPost_Id_Operator>;
  latest?: InputMaybe<VersionsNewsPost_Latest_Operator>;
  parent?: InputMaybe<VersionsNewsPost_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsNewsPost_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsNewsPost_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsNewsPost_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsNewsPost_Version___Status_Operator>;
  version__author?: InputMaybe<VersionsNewsPost_Version__Author_Operator>;
  version__authorId?: InputMaybe<VersionsNewsPost_Version__AuthorId_Operator>;
  version__authorName?: InputMaybe<VersionsNewsPost_Version__AuthorName_Operator>;
  version__blurb?: InputMaybe<VersionsNewsPost_Version__Blurb_Operator>;
  version__content?: InputMaybe<VersionsNewsPost_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsNewsPost_Version__CreatedAt_Operator>;
  version__heyZineUrl?: InputMaybe<VersionsNewsPost_Version__HeyZineUrl_Operator>;
  version__previewBanner?: InputMaybe<VersionsNewsPost_Version__PreviewBanner_Operator>;
  version__publishDate?: InputMaybe<VersionsNewsPost_Version__PublishDate_Operator>;
  version__slug?: InputMaybe<VersionsNewsPost_Version__Slug_Operator>;
  version__tags?: InputMaybe<VersionsNewsPost_Version__Tags_Operator>;
  version__title?: InputMaybe<VersionsNewsPost_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsNewsPost_Version__UpdatedAt_Operator>;
};

export type VersionsNewsPost_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsNewsPost_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsNewsPost_Where_Or>>>;
  createdAt?: InputMaybe<VersionsNewsPost_CreatedAt_Operator>;
  id?: InputMaybe<VersionsNewsPost_Id_Operator>;
  latest?: InputMaybe<VersionsNewsPost_Latest_Operator>;
  parent?: InputMaybe<VersionsNewsPost_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsNewsPost_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsNewsPost_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsNewsPost_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsNewsPost_Version___Status_Operator>;
  version__author?: InputMaybe<VersionsNewsPost_Version__Author_Operator>;
  version__authorId?: InputMaybe<VersionsNewsPost_Version__AuthorId_Operator>;
  version__authorName?: InputMaybe<VersionsNewsPost_Version__AuthorName_Operator>;
  version__blurb?: InputMaybe<VersionsNewsPost_Version__Blurb_Operator>;
  version__content?: InputMaybe<VersionsNewsPost_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsNewsPost_Version__CreatedAt_Operator>;
  version__heyZineUrl?: InputMaybe<VersionsNewsPost_Version__HeyZineUrl_Operator>;
  version__previewBanner?: InputMaybe<VersionsNewsPost_Version__PreviewBanner_Operator>;
  version__publishDate?: InputMaybe<VersionsNewsPost_Version__PublishDate_Operator>;
  version__slug?: InputMaybe<VersionsNewsPost_Version__Slug_Operator>;
  version__tags?: InputMaybe<VersionsNewsPost_Version__Tags_Operator>;
  version__title?: InputMaybe<VersionsNewsPost_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsNewsPost_Version__UpdatedAt_Operator>;
};

export type VersionsNewsPost_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsNewsPost_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsNewsPost_Where_Or>>>;
  createdAt?: InputMaybe<VersionsNewsPost_CreatedAt_Operator>;
  id?: InputMaybe<VersionsNewsPost_Id_Operator>;
  latest?: InputMaybe<VersionsNewsPost_Latest_Operator>;
  parent?: InputMaybe<VersionsNewsPost_Parent_Operator>;
  publishedLocale?: InputMaybe<VersionsNewsPost_PublishedLocale_Operator>;
  snapshot?: InputMaybe<VersionsNewsPost_Snapshot_Operator>;
  updatedAt?: InputMaybe<VersionsNewsPost_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsNewsPost_Version___Status_Operator>;
  version__author?: InputMaybe<VersionsNewsPost_Version__Author_Operator>;
  version__authorId?: InputMaybe<VersionsNewsPost_Version__AuthorId_Operator>;
  version__authorName?: InputMaybe<VersionsNewsPost_Version__AuthorName_Operator>;
  version__blurb?: InputMaybe<VersionsNewsPost_Version__Blurb_Operator>;
  version__content?: InputMaybe<VersionsNewsPost_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsNewsPost_Version__CreatedAt_Operator>;
  version__heyZineUrl?: InputMaybe<VersionsNewsPost_Version__HeyZineUrl_Operator>;
  version__previewBanner?: InputMaybe<VersionsNewsPost_Version__PreviewBanner_Operator>;
  version__publishDate?: InputMaybe<VersionsNewsPost_Version__PublishDate_Operator>;
  version__slug?: InputMaybe<VersionsNewsPost_Version__Slug_Operator>;
  version__tags?: InputMaybe<VersionsNewsPost_Version__Tags_Operator>;
  version__title?: InputMaybe<VersionsNewsPost_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsNewsPost_Version__UpdatedAt_Operator>;
};

export type VersionsNewsPosts = {
  __typename?: 'versionsNewsPosts';
  docs: Array<NewsPostVersion>;
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page: Scalars['Int'];
  pagingCounter: Scalars['Int'];
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ShowByFieldsQueryVariables = Exact<{
  where?: InputMaybe<Show_Where>;
}>;


export type ShowByFieldsQuery = { __typename?: 'Query', Shows?: { __typename?: 'Shows', docs: Array<{ __typename?: 'Show', id: string }> } | null };

export type ShowsQueryVariables = Exact<{
  where?: InputMaybe<Show_Where>;
}>;


export type ShowsQuery = { __typename?: 'Query', Shows?: { __typename?: 'Shows', docs: Array<{ __typename?: 'Show', slug: string }> } | null };

export type AllShowIDsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type AllShowIDsQuery = { __typename?: 'Query', Shows?: { __typename?: 'Shows', docs: Array<{ __typename?: 'Show', slug: string, id: string, showName: string, primaryHosts: Array<{ __typename?: 'Host', name: string }> }> } | null };

export type ShowsQueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ShowsQueryQuery = { __typename?: 'Query', Shows?: { __typename?: 'Shows', totalDocs: number, offset?: number | null, limit: number, totalPages: number, page: number, pagingCounter: number, hasPrevPage: boolean, hasNextPage: boolean, prevPage?: number | null, nextPage?: number | null, docs: Array<{ __typename?: 'Show', id: string, active?: boolean | null, slug: string, createdAt?: any | null, showName: string, description: any, primaryHosts: Array<{ __typename?: 'Host', id: string, createdAt?: any | null, updatedAt?: any | null, name: string }>, categories?: Array<{ __typename?: 'Category', id: string, createdAt?: any | null, updatedAt?: any | null, name: string }> | null, coverImage?: { __typename?: 'Media', alt?: string | null, sizes?: { __typename?: 'Media_Sizes', lg?: { __typename?: 'Media_Sizes_Lg', url?: string | null, width?: number | null, height?: number | null } | null, sm?: { __typename?: 'Media_Sizes_Sm', url?: string | null, width?: number | null, height?: number | null } | null } | null } | null }> } | null };

export type CategoriesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type CategoriesQuery = { __typename?: 'Query', Categories?: { __typename?: 'Categories', docs: Array<{ __typename?: 'Category', name: string }> } | null };

export type ShowsByCategoryQueryVariables = Exact<{
  categoryName: Scalars['String'];
}>;


export type ShowsByCategoryQuery = { __typename?: 'Query', ShowsByCategory?: { __typename?: 'ShowsByCategory', limit: number, docs: Array<{ __typename?: 'Show', showName: string, id: string, slug: string, createdAt?: any | null, description: any, categories?: Array<{ __typename?: 'Category', name: string }> | null, primaryHosts: Array<{ __typename?: 'Host', name: string }>, coverImage?: { __typename?: 'Media', alt?: string | null, sizes?: { __typename?: 'Media_Sizes', lg?: { __typename?: 'Media_Sizes_Lg', url?: string | null, width?: number | null, height?: number | null } | null, sm?: { __typename?: 'Media_Sizes_Sm', url?: string | null, width?: number | null, height?: number | null } | null } | null } | null }> } | null };

export type ShowBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowBySlugQuery = { __typename?: 'Query', ShowBySlug?: { __typename?: 'Show', slug: string, showName: string, id: string, description: any, createdAt?: any | null, categories?: Array<{ __typename?: 'Category', name: string }> | null, primaryHosts: Array<{ __typename?: 'Host', name: string }>, coverImage?: { __typename?: 'Media', alt?: string | null, sizes?: { __typename?: 'Media_Sizes', lg?: { __typename?: 'Media_Sizes_Lg', url?: string | null, width?: number | null, height?: number | null } | null } | null } | null } | null };

export type NewsPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsPost_Where>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type NewsPostsQuery = { __typename?: 'Query', NewsPosts?: { __typename?: 'NewsPosts', totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'NewsPost', id: string, blurb?: string | null, slug?: string | null, publishDate?: any | null, title?: string | null, updatedAt?: any | null, authorName?: string | null, authorId?: string | null, previewBanner?: { __typename?: 'Media', url?: string | null } | null }> } | null };

export type NewsPostQueryVariables = Exact<{
  newsPostId: Scalars['String'];
  draft?: InputMaybe<Scalars['Boolean']>;
}>;


export type NewsPostQuery = { __typename?: 'Query', NewsPost?: { __typename?: 'NewsPost', authorId?: string | null, authorName?: string | null, blurb?: string | null, content?: any | null, createdAt?: any | null, id: string, publishDate?: any | null, slug?: string | null, title?: string | null, previewBanner?: { __typename?: 'Media', url?: string | null } | null, tags?: Array<{ __typename?: 'Tag', name: string, id: string }> | null } | null };

export type NewsPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type NewsPostBySlugQuery = { __typename?: 'Query', NewsPostBySlug?: { __typename?: 'NewsPost', authorId?: string | null, authorName?: string | null, blurb?: string | null, content?: any | null, heyZineUrl?: string | null, createdAt?: any | null, id: string, publishDate?: any | null, slug?: string | null, title?: string | null, previewBanner?: { __typename?: 'Media', url?: string | null } | null, tags?: Array<{ __typename?: 'Tag', name: string, id: string }> | null } | null };

export type NewsPostContentBySlugAndLocaleQueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Scalars['String'];
}>;


export type NewsPostContentBySlugAndLocaleQuery = { __typename?: 'Query', NewsPostBySlug?: { __typename?: 'NewsPost', content?: any | null } | null };

export type TagsQueryVariables = Exact<{
  where?: InputMaybe<Tag_Where>;
}>;


export type TagsQuery = { __typename?: 'Query', Tags?: { __typename?: 'Tags', docs: Array<{ __typename?: 'Tag', id: string, name: string }> } | null };

export type SearchHostsQueryVariables = Exact<{
  where?: InputMaybe<Host_Where>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type SearchHostsQuery = { __typename?: 'Query', Hosts?: { __typename?: 'Hosts', docs: Array<{ __typename?: 'Host', name: string, id: string }> } | null };

export type MerchQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type MerchQuery = { __typename?: 'Query', Merches?: { __typename?: 'Merches', docs: Array<{ __typename?: 'Merch', id: string, blurb: string, soldOut?: boolean | null, title: string, url: string, image?: { __typename?: 'Media', url?: string | null } | null }> } | null };

export type LabelReleasesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type LabelReleasesQuery = { __typename?: 'Query', LabelReleases?: { __typename?: 'LabelReleases', docs: Array<{ __typename?: 'LabelRelease', id: string, blurb: string, title: string, url: string, image?: { __typename?: 'Media', url?: string | null } | null }> } | null };

export type LiveVideosQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type LiveVideosQuery = { __typename?: 'Query', LiveVideos?: { __typename?: 'LiveVideos', docs: Array<{ __typename?: 'LiveVideo', id: string, title: string, url: string, date?: any | null, videoId?: string | null, image?: { __typename?: 'Media', url?: string | null } | null }> } | null };

export type PaginatedLiveVideosQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type PaginatedLiveVideosQuery = { __typename?: 'Query', LiveVideos?: { __typename?: 'LiveVideos', totalDocs: number, totalPages: number, docs: Array<{ __typename?: 'LiveVideo', id: string, title: string, url: string, date?: any | null, videoId?: string | null, image?: { __typename?: 'Media', url?: string | null } | null }> } | null };

export type AboutPageQueryQueryVariables = Exact<{
  locale?: InputMaybe<LocaleInputType>;
}>;


export type AboutPageQueryQuery = { __typename?: 'Query', AboutPage?: { __typename?: 'AboutPage', content?: any | null } | null };

export type DonatePageQueryQueryVariables = Exact<{
  locale?: InputMaybe<LocaleInputType>;
}>;


export type DonatePageQueryQuery = { __typename?: 'Query', DonatePage?: { __typename?: 'DonatePage', content?: any | null } | null };

export type YoutubeChannelQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type YoutubeChannelQueryQuery = { __typename?: 'Query', YoutubeChannel?: { __typename?: 'YoutubeChannel', isLive?: boolean | null, channelId?: string | null, url?: string | null, videoId?: string | null, imageUrl?: string | null } | null };

export type OwncastQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type OwncastQueryQuery = { __typename?: 'Query', Owncast?: { __typename?: 'Owncast', isLive?: boolean | null } | null };


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
export const PaginatedLiveVideosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginatedLiveVideos"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"LiveVideos"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}}]}}]}}]} as unknown as DocumentNode<PaginatedLiveVideosQuery, PaginatedLiveVideosQueryVariables>;
export const AboutPageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AboutPageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"AboutPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<AboutPageQueryQuery, AboutPageQueryQueryVariables>;
export const DonatePageQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DonatePageQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocaleInputType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"DonatePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<DonatePageQueryQuery, DonatePageQueryQueryVariables>;
export const YoutubeChannelQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"YoutubeChannelQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"YoutubeChannel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isLive"}},{"kind":"Field","name":{"kind":"Name","value":"channelId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]} as unknown as DocumentNode<YoutubeChannelQueryQuery, YoutubeChannelQueryQueryVariables>;
export const OwncastQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"OwncastQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Owncast"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isLive"}}]}}]}}]} as unknown as DocumentNode<OwncastQueryQuery, OwncastQueryQueryVariables>;