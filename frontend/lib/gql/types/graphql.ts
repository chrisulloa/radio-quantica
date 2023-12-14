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

export type Access = {
  __typename?: 'Access';
  archive?: Maybe<ArchiveAccess>;
  archiveUploads?: Maybe<ArchiveUploadsAccess>;
  canAccessAdmin: Scalars['Boolean'];
  categories?: Maybe<CategoriesAccess>;
  hosts?: Maybe<HostsAccess>;
  mailingListSubscribers?: Maybe<MailingListSubscribersAccess>;
  newsMedia?: Maybe<NewsMediaAccess>;
  newsPosts?: Maybe<NewsPostsAccess>;
  onboardingEmails?: Maybe<OnboardingEmailsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  shows?: Maybe<ShowsAccess>;
  tags?: Maybe<TagsAccess>;
  users?: Maybe<UsersAccess>;
};

export type Archive = {
  __typename?: 'Archive';
  archiveUploads?: Maybe<Array<ArchiveUpload>>;
  categories?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  date?: Maybe<Scalars['DateTime']>;
  fullTitle: Scalars['String'];
  hosts?: Maybe<Array<Host>>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Archive_Images>;
  show?: Maybe<Show>;
  slug?: Maybe<Scalars['String']>;
  staffPick?: Maybe<Scalars['Boolean']>;
  subtitle?: Maybe<Scalars['String']>;
  tracklist?: Maybe<Array<Archive_Tracklist>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ArchiveCreateAccess = {
  __typename?: 'ArchiveCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveCreateDocAccess = {
  __typename?: 'ArchiveCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveDeleteAccess = {
  __typename?: 'ArchiveDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveDeleteDocAccess = {
  __typename?: 'ArchiveDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveDocAccessFields = {
  __typename?: 'ArchiveDocAccessFields';
  archiveUploads?: Maybe<ArchiveDocAccessFields_ArchiveUploads>;
  categories?: Maybe<ArchiveDocAccessFields_Categories>;
  createdAt?: Maybe<ArchiveDocAccessFields_CreatedAt>;
  date?: Maybe<ArchiveDocAccessFields_Date>;
  fullTitle?: Maybe<ArchiveDocAccessFields_FullTitle>;
  hosts?: Maybe<ArchiveDocAccessFields_Hosts>;
  images?: Maybe<ArchiveDocAccessFields_Images>;
  show?: Maybe<ArchiveDocAccessFields_Show>;
  slug?: Maybe<ArchiveDocAccessFields_Slug>;
  staffPick?: Maybe<ArchiveDocAccessFields_StaffPick>;
  subtitle?: Maybe<ArchiveDocAccessFields_Subtitle>;
  tracklist?: Maybe<ArchiveDocAccessFields_Tracklist>;
  updatedAt?: Maybe<ArchiveDocAccessFields_UpdatedAt>;
};

export type ArchiveDocAccessFields_ArchiveUploads = {
  __typename?: 'ArchiveDocAccessFields_archiveUploads';
  create?: Maybe<ArchiveDocAccessFields_ArchiveUploads_Create>;
  delete?: Maybe<ArchiveDocAccessFields_ArchiveUploads_Delete>;
  read?: Maybe<ArchiveDocAccessFields_ArchiveUploads_Read>;
  update?: Maybe<ArchiveDocAccessFields_ArchiveUploads_Update>;
};

export type ArchiveDocAccessFields_ArchiveUploads_Create = {
  __typename?: 'ArchiveDocAccessFields_archiveUploads_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_ArchiveUploads_Delete = {
  __typename?: 'ArchiveDocAccessFields_archiveUploads_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_ArchiveUploads_Read = {
  __typename?: 'ArchiveDocAccessFields_archiveUploads_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_ArchiveUploads_Update = {
  __typename?: 'ArchiveDocAccessFields_archiveUploads_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Categories = {
  __typename?: 'ArchiveDocAccessFields_categories';
  create?: Maybe<ArchiveDocAccessFields_Categories_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Categories_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Categories_Read>;
  update?: Maybe<ArchiveDocAccessFields_Categories_Update>;
};

export type ArchiveDocAccessFields_Categories_Create = {
  __typename?: 'ArchiveDocAccessFields_categories_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Categories_Delete = {
  __typename?: 'ArchiveDocAccessFields_categories_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Categories_Read = {
  __typename?: 'ArchiveDocAccessFields_categories_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Categories_Update = {
  __typename?: 'ArchiveDocAccessFields_categories_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_CreatedAt = {
  __typename?: 'ArchiveDocAccessFields_createdAt';
  create?: Maybe<ArchiveDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ArchiveDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ArchiveDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ArchiveDocAccessFields_CreatedAt_Update>;
};

export type ArchiveDocAccessFields_CreatedAt_Create = {
  __typename?: 'ArchiveDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ArchiveDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_CreatedAt_Read = {
  __typename?: 'ArchiveDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_CreatedAt_Update = {
  __typename?: 'ArchiveDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Date = {
  __typename?: 'ArchiveDocAccessFields_date';
  create?: Maybe<ArchiveDocAccessFields_Date_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Date_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Date_Read>;
  update?: Maybe<ArchiveDocAccessFields_Date_Update>;
};

export type ArchiveDocAccessFields_Date_Create = {
  __typename?: 'ArchiveDocAccessFields_date_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Date_Delete = {
  __typename?: 'ArchiveDocAccessFields_date_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Date_Read = {
  __typename?: 'ArchiveDocAccessFields_date_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Date_Update = {
  __typename?: 'ArchiveDocAccessFields_date_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_FullTitle = {
  __typename?: 'ArchiveDocAccessFields_fullTitle';
  create?: Maybe<ArchiveDocAccessFields_FullTitle_Create>;
  delete?: Maybe<ArchiveDocAccessFields_FullTitle_Delete>;
  read?: Maybe<ArchiveDocAccessFields_FullTitle_Read>;
  update?: Maybe<ArchiveDocAccessFields_FullTitle_Update>;
};

export type ArchiveDocAccessFields_FullTitle_Create = {
  __typename?: 'ArchiveDocAccessFields_fullTitle_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_FullTitle_Delete = {
  __typename?: 'ArchiveDocAccessFields_fullTitle_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_FullTitle_Read = {
  __typename?: 'ArchiveDocAccessFields_fullTitle_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_FullTitle_Update = {
  __typename?: 'ArchiveDocAccessFields_fullTitle_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Hosts = {
  __typename?: 'ArchiveDocAccessFields_hosts';
  create?: Maybe<ArchiveDocAccessFields_Hosts_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Hosts_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Hosts_Read>;
  update?: Maybe<ArchiveDocAccessFields_Hosts_Update>;
};

export type ArchiveDocAccessFields_Hosts_Create = {
  __typename?: 'ArchiveDocAccessFields_hosts_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Hosts_Delete = {
  __typename?: 'ArchiveDocAccessFields_hosts_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Hosts_Read = {
  __typename?: 'ArchiveDocAccessFields_hosts_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Hosts_Update = {
  __typename?: 'ArchiveDocAccessFields_hosts_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images = {
  __typename?: 'ArchiveDocAccessFields_images';
  create?: Maybe<ArchiveDocAccessFields_Images_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Images_Delete>;
  fields?: Maybe<ArchiveDocAccessFields_Images_Fields>;
  read?: Maybe<ArchiveDocAccessFields_Images_Read>;
  update?: Maybe<ArchiveDocAccessFields_Images_Update>;
};

export type ArchiveDocAccessFields_Images_Create = {
  __typename?: 'ArchiveDocAccessFields_images_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_Delete = {
  __typename?: 'ArchiveDocAccessFields_images_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_Fields = {
  __typename?: 'ArchiveDocAccessFields_images_Fields';
  imageUrl320?: Maybe<ArchiveDocAccessFields_Images_ImageUrl320>;
  imageUrl640?: Maybe<ArchiveDocAccessFields_Images_ImageUrl640>;
  imageUrl1080?: Maybe<ArchiveDocAccessFields_Images_ImageUrl1080>;
};

export type ArchiveDocAccessFields_Images_Read = {
  __typename?: 'ArchiveDocAccessFields_images_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_Update = {
  __typename?: 'ArchiveDocAccessFields_images_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl320 = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl320';
  create?: Maybe<ArchiveDocAccessFields_Images_ImageUrl320_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Images_ImageUrl320_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Images_ImageUrl320_Read>;
  update?: Maybe<ArchiveDocAccessFields_Images_ImageUrl320_Update>;
};

export type ArchiveDocAccessFields_Images_ImageUrl320_Create = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl320_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl320_Delete = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl320_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl320_Read = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl320_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl320_Update = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl320_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl640 = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl640';
  create?: Maybe<ArchiveDocAccessFields_Images_ImageUrl640_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Images_ImageUrl640_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Images_ImageUrl640_Read>;
  update?: Maybe<ArchiveDocAccessFields_Images_ImageUrl640_Update>;
};

export type ArchiveDocAccessFields_Images_ImageUrl640_Create = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl640_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl640_Delete = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl640_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl640_Read = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl640_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl640_Update = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl640_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl1080 = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl1080';
  create?: Maybe<ArchiveDocAccessFields_Images_ImageUrl1080_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Images_ImageUrl1080_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Images_ImageUrl1080_Read>;
  update?: Maybe<ArchiveDocAccessFields_Images_ImageUrl1080_Update>;
};

export type ArchiveDocAccessFields_Images_ImageUrl1080_Create = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl1080_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl1080_Delete = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl1080_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl1080_Read = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl1080_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Images_ImageUrl1080_Update = {
  __typename?: 'ArchiveDocAccessFields_images_imageUrl1080_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Show = {
  __typename?: 'ArchiveDocAccessFields_show';
  create?: Maybe<ArchiveDocAccessFields_Show_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Show_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Show_Read>;
  update?: Maybe<ArchiveDocAccessFields_Show_Update>;
};

export type ArchiveDocAccessFields_Show_Create = {
  __typename?: 'ArchiveDocAccessFields_show_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Show_Delete = {
  __typename?: 'ArchiveDocAccessFields_show_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Show_Read = {
  __typename?: 'ArchiveDocAccessFields_show_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Show_Update = {
  __typename?: 'ArchiveDocAccessFields_show_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Slug = {
  __typename?: 'ArchiveDocAccessFields_slug';
  create?: Maybe<ArchiveDocAccessFields_Slug_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Slug_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Slug_Read>;
  update?: Maybe<ArchiveDocAccessFields_Slug_Update>;
};

export type ArchiveDocAccessFields_Slug_Create = {
  __typename?: 'ArchiveDocAccessFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Slug_Delete = {
  __typename?: 'ArchiveDocAccessFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Slug_Read = {
  __typename?: 'ArchiveDocAccessFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Slug_Update = {
  __typename?: 'ArchiveDocAccessFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_StaffPick = {
  __typename?: 'ArchiveDocAccessFields_staffPick';
  create?: Maybe<ArchiveDocAccessFields_StaffPick_Create>;
  delete?: Maybe<ArchiveDocAccessFields_StaffPick_Delete>;
  read?: Maybe<ArchiveDocAccessFields_StaffPick_Read>;
  update?: Maybe<ArchiveDocAccessFields_StaffPick_Update>;
};

export type ArchiveDocAccessFields_StaffPick_Create = {
  __typename?: 'ArchiveDocAccessFields_staffPick_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_StaffPick_Delete = {
  __typename?: 'ArchiveDocAccessFields_staffPick_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_StaffPick_Read = {
  __typename?: 'ArchiveDocAccessFields_staffPick_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_StaffPick_Update = {
  __typename?: 'ArchiveDocAccessFields_staffPick_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Subtitle = {
  __typename?: 'ArchiveDocAccessFields_subtitle';
  create?: Maybe<ArchiveDocAccessFields_Subtitle_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Subtitle_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Subtitle_Read>;
  update?: Maybe<ArchiveDocAccessFields_Subtitle_Update>;
};

export type ArchiveDocAccessFields_Subtitle_Create = {
  __typename?: 'ArchiveDocAccessFields_subtitle_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Subtitle_Delete = {
  __typename?: 'ArchiveDocAccessFields_subtitle_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Subtitle_Read = {
  __typename?: 'ArchiveDocAccessFields_subtitle_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Subtitle_Update = {
  __typename?: 'ArchiveDocAccessFields_subtitle_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist = {
  __typename?: 'ArchiveDocAccessFields_tracklist';
  create?: Maybe<ArchiveDocAccessFields_Tracklist_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Tracklist_Delete>;
  fields?: Maybe<ArchiveDocAccessFields_Tracklist_Fields>;
  read?: Maybe<ArchiveDocAccessFields_Tracklist_Read>;
  update?: Maybe<ArchiveDocAccessFields_Tracklist_Update>;
};

export type ArchiveDocAccessFields_Tracklist_Create = {
  __typename?: 'ArchiveDocAccessFields_tracklist_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Delete = {
  __typename?: 'ArchiveDocAccessFields_tracklist_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Fields = {
  __typename?: 'ArchiveDocAccessFields_tracklist_Fields';
  artist?: Maybe<ArchiveDocAccessFields_Tracklist_Artist>;
  id?: Maybe<ArchiveDocAccessFields_Tracklist_Id>;
  song?: Maybe<ArchiveDocAccessFields_Tracklist_Song>;
};

export type ArchiveDocAccessFields_Tracklist_Read = {
  __typename?: 'ArchiveDocAccessFields_tracklist_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Update = {
  __typename?: 'ArchiveDocAccessFields_tracklist_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Artist = {
  __typename?: 'ArchiveDocAccessFields_tracklist_artist';
  create?: Maybe<ArchiveDocAccessFields_Tracklist_Artist_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Tracklist_Artist_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Tracklist_Artist_Read>;
  update?: Maybe<ArchiveDocAccessFields_Tracklist_Artist_Update>;
};

export type ArchiveDocAccessFields_Tracklist_Artist_Create = {
  __typename?: 'ArchiveDocAccessFields_tracklist_artist_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Artist_Delete = {
  __typename?: 'ArchiveDocAccessFields_tracklist_artist_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Artist_Read = {
  __typename?: 'ArchiveDocAccessFields_tracklist_artist_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Artist_Update = {
  __typename?: 'ArchiveDocAccessFields_tracklist_artist_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Id = {
  __typename?: 'ArchiveDocAccessFields_tracklist_id';
  create?: Maybe<ArchiveDocAccessFields_Tracklist_Id_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Tracklist_Id_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Tracklist_Id_Read>;
  update?: Maybe<ArchiveDocAccessFields_Tracklist_Id_Update>;
};

export type ArchiveDocAccessFields_Tracklist_Id_Create = {
  __typename?: 'ArchiveDocAccessFields_tracklist_id_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Id_Delete = {
  __typename?: 'ArchiveDocAccessFields_tracklist_id_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Id_Read = {
  __typename?: 'ArchiveDocAccessFields_tracklist_id_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Id_Update = {
  __typename?: 'ArchiveDocAccessFields_tracklist_id_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Song = {
  __typename?: 'ArchiveDocAccessFields_tracklist_song';
  create?: Maybe<ArchiveDocAccessFields_Tracklist_Song_Create>;
  delete?: Maybe<ArchiveDocAccessFields_Tracklist_Song_Delete>;
  read?: Maybe<ArchiveDocAccessFields_Tracklist_Song_Read>;
  update?: Maybe<ArchiveDocAccessFields_Tracklist_Song_Update>;
};

export type ArchiveDocAccessFields_Tracklist_Song_Create = {
  __typename?: 'ArchiveDocAccessFields_tracklist_song_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Song_Delete = {
  __typename?: 'ArchiveDocAccessFields_tracklist_song_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Song_Read = {
  __typename?: 'ArchiveDocAccessFields_tracklist_song_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_Tracklist_Song_Update = {
  __typename?: 'ArchiveDocAccessFields_tracklist_song_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_UpdatedAt = {
  __typename?: 'ArchiveDocAccessFields_updatedAt';
  create?: Maybe<ArchiveDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ArchiveDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ArchiveDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ArchiveDocAccessFields_UpdatedAt_Update>;
};

export type ArchiveDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ArchiveDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ArchiveDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ArchiveDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ArchiveDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields = {
  __typename?: 'ArchiveFields';
  archiveUploads?: Maybe<ArchiveFields_ArchiveUploads>;
  categories?: Maybe<ArchiveFields_Categories>;
  createdAt?: Maybe<ArchiveFields_CreatedAt>;
  date?: Maybe<ArchiveFields_Date>;
  fullTitle?: Maybe<ArchiveFields_FullTitle>;
  hosts?: Maybe<ArchiveFields_Hosts>;
  images?: Maybe<ArchiveFields_Images>;
  show?: Maybe<ArchiveFields_Show>;
  slug?: Maybe<ArchiveFields_Slug>;
  staffPick?: Maybe<ArchiveFields_StaffPick>;
  subtitle?: Maybe<ArchiveFields_Subtitle>;
  tracklist?: Maybe<ArchiveFields_Tracklist>;
  updatedAt?: Maybe<ArchiveFields_UpdatedAt>;
};

export type ArchiveFields_ArchiveUploads = {
  __typename?: 'ArchiveFields_archiveUploads';
  create?: Maybe<ArchiveFields_ArchiveUploads_Create>;
  delete?: Maybe<ArchiveFields_ArchiveUploads_Delete>;
  read?: Maybe<ArchiveFields_ArchiveUploads_Read>;
  update?: Maybe<ArchiveFields_ArchiveUploads_Update>;
};

export type ArchiveFields_ArchiveUploads_Create = {
  __typename?: 'ArchiveFields_archiveUploads_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_ArchiveUploads_Delete = {
  __typename?: 'ArchiveFields_archiveUploads_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_ArchiveUploads_Read = {
  __typename?: 'ArchiveFields_archiveUploads_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_ArchiveUploads_Update = {
  __typename?: 'ArchiveFields_archiveUploads_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Categories = {
  __typename?: 'ArchiveFields_categories';
  create?: Maybe<ArchiveFields_Categories_Create>;
  delete?: Maybe<ArchiveFields_Categories_Delete>;
  read?: Maybe<ArchiveFields_Categories_Read>;
  update?: Maybe<ArchiveFields_Categories_Update>;
};

export type ArchiveFields_Categories_Create = {
  __typename?: 'ArchiveFields_categories_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Categories_Delete = {
  __typename?: 'ArchiveFields_categories_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Categories_Read = {
  __typename?: 'ArchiveFields_categories_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Categories_Update = {
  __typename?: 'ArchiveFields_categories_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_CreatedAt = {
  __typename?: 'ArchiveFields_createdAt';
  create?: Maybe<ArchiveFields_CreatedAt_Create>;
  delete?: Maybe<ArchiveFields_CreatedAt_Delete>;
  read?: Maybe<ArchiveFields_CreatedAt_Read>;
  update?: Maybe<ArchiveFields_CreatedAt_Update>;
};

export type ArchiveFields_CreatedAt_Create = {
  __typename?: 'ArchiveFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_CreatedAt_Delete = {
  __typename?: 'ArchiveFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_CreatedAt_Read = {
  __typename?: 'ArchiveFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_CreatedAt_Update = {
  __typename?: 'ArchiveFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Date = {
  __typename?: 'ArchiveFields_date';
  create?: Maybe<ArchiveFields_Date_Create>;
  delete?: Maybe<ArchiveFields_Date_Delete>;
  read?: Maybe<ArchiveFields_Date_Read>;
  update?: Maybe<ArchiveFields_Date_Update>;
};

export type ArchiveFields_Date_Create = {
  __typename?: 'ArchiveFields_date_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Date_Delete = {
  __typename?: 'ArchiveFields_date_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Date_Read = {
  __typename?: 'ArchiveFields_date_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Date_Update = {
  __typename?: 'ArchiveFields_date_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_FullTitle = {
  __typename?: 'ArchiveFields_fullTitle';
  create?: Maybe<ArchiveFields_FullTitle_Create>;
  delete?: Maybe<ArchiveFields_FullTitle_Delete>;
  read?: Maybe<ArchiveFields_FullTitle_Read>;
  update?: Maybe<ArchiveFields_FullTitle_Update>;
};

export type ArchiveFields_FullTitle_Create = {
  __typename?: 'ArchiveFields_fullTitle_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_FullTitle_Delete = {
  __typename?: 'ArchiveFields_fullTitle_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_FullTitle_Read = {
  __typename?: 'ArchiveFields_fullTitle_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_FullTitle_Update = {
  __typename?: 'ArchiveFields_fullTitle_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Hosts = {
  __typename?: 'ArchiveFields_hosts';
  create?: Maybe<ArchiveFields_Hosts_Create>;
  delete?: Maybe<ArchiveFields_Hosts_Delete>;
  read?: Maybe<ArchiveFields_Hosts_Read>;
  update?: Maybe<ArchiveFields_Hosts_Update>;
};

export type ArchiveFields_Hosts_Create = {
  __typename?: 'ArchiveFields_hosts_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Hosts_Delete = {
  __typename?: 'ArchiveFields_hosts_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Hosts_Read = {
  __typename?: 'ArchiveFields_hosts_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Hosts_Update = {
  __typename?: 'ArchiveFields_hosts_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images = {
  __typename?: 'ArchiveFields_images';
  create?: Maybe<ArchiveFields_Images_Create>;
  delete?: Maybe<ArchiveFields_Images_Delete>;
  fields?: Maybe<ArchiveFields_Images_Fields>;
  read?: Maybe<ArchiveFields_Images_Read>;
  update?: Maybe<ArchiveFields_Images_Update>;
};

export type ArchiveFields_Images_Create = {
  __typename?: 'ArchiveFields_images_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_Delete = {
  __typename?: 'ArchiveFields_images_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_Fields = {
  __typename?: 'ArchiveFields_images_Fields';
  imageUrl320?: Maybe<ArchiveFields_Images_ImageUrl320>;
  imageUrl640?: Maybe<ArchiveFields_Images_ImageUrl640>;
  imageUrl1080?: Maybe<ArchiveFields_Images_ImageUrl1080>;
};

export type ArchiveFields_Images_Read = {
  __typename?: 'ArchiveFields_images_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_Update = {
  __typename?: 'ArchiveFields_images_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl320 = {
  __typename?: 'ArchiveFields_images_imageUrl320';
  create?: Maybe<ArchiveFields_Images_ImageUrl320_Create>;
  delete?: Maybe<ArchiveFields_Images_ImageUrl320_Delete>;
  read?: Maybe<ArchiveFields_Images_ImageUrl320_Read>;
  update?: Maybe<ArchiveFields_Images_ImageUrl320_Update>;
};

export type ArchiveFields_Images_ImageUrl320_Create = {
  __typename?: 'ArchiveFields_images_imageUrl320_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl320_Delete = {
  __typename?: 'ArchiveFields_images_imageUrl320_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl320_Read = {
  __typename?: 'ArchiveFields_images_imageUrl320_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl320_Update = {
  __typename?: 'ArchiveFields_images_imageUrl320_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl640 = {
  __typename?: 'ArchiveFields_images_imageUrl640';
  create?: Maybe<ArchiveFields_Images_ImageUrl640_Create>;
  delete?: Maybe<ArchiveFields_Images_ImageUrl640_Delete>;
  read?: Maybe<ArchiveFields_Images_ImageUrl640_Read>;
  update?: Maybe<ArchiveFields_Images_ImageUrl640_Update>;
};

export type ArchiveFields_Images_ImageUrl640_Create = {
  __typename?: 'ArchiveFields_images_imageUrl640_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl640_Delete = {
  __typename?: 'ArchiveFields_images_imageUrl640_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl640_Read = {
  __typename?: 'ArchiveFields_images_imageUrl640_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl640_Update = {
  __typename?: 'ArchiveFields_images_imageUrl640_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl1080 = {
  __typename?: 'ArchiveFields_images_imageUrl1080';
  create?: Maybe<ArchiveFields_Images_ImageUrl1080_Create>;
  delete?: Maybe<ArchiveFields_Images_ImageUrl1080_Delete>;
  read?: Maybe<ArchiveFields_Images_ImageUrl1080_Read>;
  update?: Maybe<ArchiveFields_Images_ImageUrl1080_Update>;
};

export type ArchiveFields_Images_ImageUrl1080_Create = {
  __typename?: 'ArchiveFields_images_imageUrl1080_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl1080_Delete = {
  __typename?: 'ArchiveFields_images_imageUrl1080_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl1080_Read = {
  __typename?: 'ArchiveFields_images_imageUrl1080_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Images_ImageUrl1080_Update = {
  __typename?: 'ArchiveFields_images_imageUrl1080_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Show = {
  __typename?: 'ArchiveFields_show';
  create?: Maybe<ArchiveFields_Show_Create>;
  delete?: Maybe<ArchiveFields_Show_Delete>;
  read?: Maybe<ArchiveFields_Show_Read>;
  update?: Maybe<ArchiveFields_Show_Update>;
};

export type ArchiveFields_Show_Create = {
  __typename?: 'ArchiveFields_show_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Show_Delete = {
  __typename?: 'ArchiveFields_show_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Show_Read = {
  __typename?: 'ArchiveFields_show_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Show_Update = {
  __typename?: 'ArchiveFields_show_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Slug = {
  __typename?: 'ArchiveFields_slug';
  create?: Maybe<ArchiveFields_Slug_Create>;
  delete?: Maybe<ArchiveFields_Slug_Delete>;
  read?: Maybe<ArchiveFields_Slug_Read>;
  update?: Maybe<ArchiveFields_Slug_Update>;
};

export type ArchiveFields_Slug_Create = {
  __typename?: 'ArchiveFields_slug_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Slug_Delete = {
  __typename?: 'ArchiveFields_slug_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Slug_Read = {
  __typename?: 'ArchiveFields_slug_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Slug_Update = {
  __typename?: 'ArchiveFields_slug_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_StaffPick = {
  __typename?: 'ArchiveFields_staffPick';
  create?: Maybe<ArchiveFields_StaffPick_Create>;
  delete?: Maybe<ArchiveFields_StaffPick_Delete>;
  read?: Maybe<ArchiveFields_StaffPick_Read>;
  update?: Maybe<ArchiveFields_StaffPick_Update>;
};

export type ArchiveFields_StaffPick_Create = {
  __typename?: 'ArchiveFields_staffPick_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_StaffPick_Delete = {
  __typename?: 'ArchiveFields_staffPick_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_StaffPick_Read = {
  __typename?: 'ArchiveFields_staffPick_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_StaffPick_Update = {
  __typename?: 'ArchiveFields_staffPick_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Subtitle = {
  __typename?: 'ArchiveFields_subtitle';
  create?: Maybe<ArchiveFields_Subtitle_Create>;
  delete?: Maybe<ArchiveFields_Subtitle_Delete>;
  read?: Maybe<ArchiveFields_Subtitle_Read>;
  update?: Maybe<ArchiveFields_Subtitle_Update>;
};

export type ArchiveFields_Subtitle_Create = {
  __typename?: 'ArchiveFields_subtitle_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Subtitle_Delete = {
  __typename?: 'ArchiveFields_subtitle_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Subtitle_Read = {
  __typename?: 'ArchiveFields_subtitle_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Subtitle_Update = {
  __typename?: 'ArchiveFields_subtitle_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist = {
  __typename?: 'ArchiveFields_tracklist';
  create?: Maybe<ArchiveFields_Tracklist_Create>;
  delete?: Maybe<ArchiveFields_Tracklist_Delete>;
  fields?: Maybe<ArchiveFields_Tracklist_Fields>;
  read?: Maybe<ArchiveFields_Tracklist_Read>;
  update?: Maybe<ArchiveFields_Tracklist_Update>;
};

export type ArchiveFields_Tracklist_Create = {
  __typename?: 'ArchiveFields_tracklist_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Delete = {
  __typename?: 'ArchiveFields_tracklist_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Fields = {
  __typename?: 'ArchiveFields_tracklist_Fields';
  artist?: Maybe<ArchiveFields_Tracklist_Artist>;
  id?: Maybe<ArchiveFields_Tracklist_Id>;
  song?: Maybe<ArchiveFields_Tracklist_Song>;
};

export type ArchiveFields_Tracklist_Read = {
  __typename?: 'ArchiveFields_tracklist_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Update = {
  __typename?: 'ArchiveFields_tracklist_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Artist = {
  __typename?: 'ArchiveFields_tracklist_artist';
  create?: Maybe<ArchiveFields_Tracklist_Artist_Create>;
  delete?: Maybe<ArchiveFields_Tracklist_Artist_Delete>;
  read?: Maybe<ArchiveFields_Tracklist_Artist_Read>;
  update?: Maybe<ArchiveFields_Tracklist_Artist_Update>;
};

export type ArchiveFields_Tracklist_Artist_Create = {
  __typename?: 'ArchiveFields_tracklist_artist_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Artist_Delete = {
  __typename?: 'ArchiveFields_tracklist_artist_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Artist_Read = {
  __typename?: 'ArchiveFields_tracklist_artist_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Artist_Update = {
  __typename?: 'ArchiveFields_tracklist_artist_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Id = {
  __typename?: 'ArchiveFields_tracklist_id';
  create?: Maybe<ArchiveFields_Tracklist_Id_Create>;
  delete?: Maybe<ArchiveFields_Tracklist_Id_Delete>;
  read?: Maybe<ArchiveFields_Tracklist_Id_Read>;
  update?: Maybe<ArchiveFields_Tracklist_Id_Update>;
};

export type ArchiveFields_Tracklist_Id_Create = {
  __typename?: 'ArchiveFields_tracklist_id_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Id_Delete = {
  __typename?: 'ArchiveFields_tracklist_id_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Id_Read = {
  __typename?: 'ArchiveFields_tracklist_id_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Id_Update = {
  __typename?: 'ArchiveFields_tracklist_id_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Song = {
  __typename?: 'ArchiveFields_tracklist_song';
  create?: Maybe<ArchiveFields_Tracklist_Song_Create>;
  delete?: Maybe<ArchiveFields_Tracklist_Song_Delete>;
  read?: Maybe<ArchiveFields_Tracklist_Song_Read>;
  update?: Maybe<ArchiveFields_Tracklist_Song_Update>;
};

export type ArchiveFields_Tracklist_Song_Create = {
  __typename?: 'ArchiveFields_tracklist_song_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Song_Delete = {
  __typename?: 'ArchiveFields_tracklist_song_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Song_Read = {
  __typename?: 'ArchiveFields_tracklist_song_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_Tracklist_Song_Update = {
  __typename?: 'ArchiveFields_tracklist_song_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_UpdatedAt = {
  __typename?: 'ArchiveFields_updatedAt';
  create?: Maybe<ArchiveFields_UpdatedAt_Create>;
  delete?: Maybe<ArchiveFields_UpdatedAt_Delete>;
  read?: Maybe<ArchiveFields_UpdatedAt_Read>;
  update?: Maybe<ArchiveFields_UpdatedAt_Update>;
};

export type ArchiveFields_UpdatedAt_Create = {
  __typename?: 'ArchiveFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_UpdatedAt_Delete = {
  __typename?: 'ArchiveFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_UpdatedAt_Read = {
  __typename?: 'ArchiveFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveFields_UpdatedAt_Update = {
  __typename?: 'ArchiveFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveReadAccess = {
  __typename?: 'ArchiveReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveReadDocAccess = {
  __typename?: 'ArchiveReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUpdateAccess = {
  __typename?: 'ArchiveUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUpdateDocAccess = {
  __typename?: 'ArchiveUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUpload = {
  __typename?: 'ArchiveUpload';
  archive: Archive;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  service: ArchiveUpload_Service;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
};

export type ArchiveUpload_Archive_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type ArchiveUpload_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type ArchiveUpload_Description_Operator = {
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
};

export type ArchiveUpload_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export enum ArchiveUpload_Service {
  Mixcloud = 'mixcloud',
  Soundcloud = 'soundcloud'
}

export enum ArchiveUpload_Service_Input {
  Mixcloud = 'mixcloud',
  Soundcloud = 'soundcloud'
}

export type ArchiveUpload_Service_Operator = {
  contains?: InputMaybe<ArchiveUpload_Service_Input>;
  equals?: InputMaybe<ArchiveUpload_Service_Input>;
  like?: InputMaybe<ArchiveUpload_Service_Input>;
  not_equals?: InputMaybe<ArchiveUpload_Service_Input>;
};

export type ArchiveUpload_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type ArchiveUpload_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ArchiveUpload_Where = {
  AND?: InputMaybe<Array<InputMaybe<ArchiveUpload_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ArchiveUpload_Where_Or>>>;
  archive?: InputMaybe<ArchiveUpload_Archive_Operator>;
  createdAt?: InputMaybe<ArchiveUpload_CreatedAt_Operator>;
  description?: InputMaybe<ArchiveUpload_Description_Operator>;
  id?: InputMaybe<ArchiveUpload_Id_Operator>;
  service?: InputMaybe<ArchiveUpload_Service_Operator>;
  updatedAt?: InputMaybe<ArchiveUpload_UpdatedAt_Operator>;
  url?: InputMaybe<ArchiveUpload_Url_Operator>;
};

export type ArchiveUpload_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<ArchiveUpload_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ArchiveUpload_Where_Or>>>;
  archive?: InputMaybe<ArchiveUpload_Archive_Operator>;
  createdAt?: InputMaybe<ArchiveUpload_CreatedAt_Operator>;
  description?: InputMaybe<ArchiveUpload_Description_Operator>;
  id?: InputMaybe<ArchiveUpload_Id_Operator>;
  service?: InputMaybe<ArchiveUpload_Service_Operator>;
  updatedAt?: InputMaybe<ArchiveUpload_UpdatedAt_Operator>;
  url?: InputMaybe<ArchiveUpload_Url_Operator>;
};

export type ArchiveUpload_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<ArchiveUpload_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ArchiveUpload_Where_Or>>>;
  archive?: InputMaybe<ArchiveUpload_Archive_Operator>;
  createdAt?: InputMaybe<ArchiveUpload_CreatedAt_Operator>;
  description?: InputMaybe<ArchiveUpload_Description_Operator>;
  id?: InputMaybe<ArchiveUpload_Id_Operator>;
  service?: InputMaybe<ArchiveUpload_Service_Operator>;
  updatedAt?: InputMaybe<ArchiveUpload_UpdatedAt_Operator>;
  url?: InputMaybe<ArchiveUpload_Url_Operator>;
};

export type ArchiveUploads = {
  __typename?: 'ArchiveUploads';
  docs?: Maybe<Array<Maybe<ArchiveUpload>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ArchiveUploadsCreateAccess = {
  __typename?: 'ArchiveUploadsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUploadsCreateDocAccess = {
  __typename?: 'ArchiveUploadsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUploadsDeleteAccess = {
  __typename?: 'ArchiveUploadsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUploadsDeleteDocAccess = {
  __typename?: 'ArchiveUploadsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUploadsDocAccessFields = {
  __typename?: 'ArchiveUploadsDocAccessFields';
  archive?: Maybe<ArchiveUploadsDocAccessFields_Archive>;
  createdAt?: Maybe<ArchiveUploadsDocAccessFields_CreatedAt>;
  description?: Maybe<ArchiveUploadsDocAccessFields_Description>;
  service?: Maybe<ArchiveUploadsDocAccessFields_Service>;
  updatedAt?: Maybe<ArchiveUploadsDocAccessFields_UpdatedAt>;
  url?: Maybe<ArchiveUploadsDocAccessFields_Url>;
};

export type ArchiveUploadsDocAccessFields_Archive = {
  __typename?: 'ArchiveUploadsDocAccessFields_archive';
  create?: Maybe<ArchiveUploadsDocAccessFields_Archive_Create>;
  delete?: Maybe<ArchiveUploadsDocAccessFields_Archive_Delete>;
  read?: Maybe<ArchiveUploadsDocAccessFields_Archive_Read>;
  update?: Maybe<ArchiveUploadsDocAccessFields_Archive_Update>;
};

export type ArchiveUploadsDocAccessFields_Archive_Create = {
  __typename?: 'ArchiveUploadsDocAccessFields_archive_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Archive_Delete = {
  __typename?: 'ArchiveUploadsDocAccessFields_archive_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Archive_Read = {
  __typename?: 'ArchiveUploadsDocAccessFields_archive_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Archive_Update = {
  __typename?: 'ArchiveUploadsDocAccessFields_archive_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_CreatedAt = {
  __typename?: 'ArchiveUploadsDocAccessFields_createdAt';
  create?: Maybe<ArchiveUploadsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ArchiveUploadsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ArchiveUploadsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ArchiveUploadsDocAccessFields_CreatedAt_Update>;
};

export type ArchiveUploadsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ArchiveUploadsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ArchiveUploadsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ArchiveUploadsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ArchiveUploadsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Description = {
  __typename?: 'ArchiveUploadsDocAccessFields_description';
  create?: Maybe<ArchiveUploadsDocAccessFields_Description_Create>;
  delete?: Maybe<ArchiveUploadsDocAccessFields_Description_Delete>;
  read?: Maybe<ArchiveUploadsDocAccessFields_Description_Read>;
  update?: Maybe<ArchiveUploadsDocAccessFields_Description_Update>;
};

export type ArchiveUploadsDocAccessFields_Description_Create = {
  __typename?: 'ArchiveUploadsDocAccessFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Description_Delete = {
  __typename?: 'ArchiveUploadsDocAccessFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Description_Read = {
  __typename?: 'ArchiveUploadsDocAccessFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Description_Update = {
  __typename?: 'ArchiveUploadsDocAccessFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Service = {
  __typename?: 'ArchiveUploadsDocAccessFields_service';
  create?: Maybe<ArchiveUploadsDocAccessFields_Service_Create>;
  delete?: Maybe<ArchiveUploadsDocAccessFields_Service_Delete>;
  read?: Maybe<ArchiveUploadsDocAccessFields_Service_Read>;
  update?: Maybe<ArchiveUploadsDocAccessFields_Service_Update>;
};

export type ArchiveUploadsDocAccessFields_Service_Create = {
  __typename?: 'ArchiveUploadsDocAccessFields_service_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Service_Delete = {
  __typename?: 'ArchiveUploadsDocAccessFields_service_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Service_Read = {
  __typename?: 'ArchiveUploadsDocAccessFields_service_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Service_Update = {
  __typename?: 'ArchiveUploadsDocAccessFields_service_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_UpdatedAt = {
  __typename?: 'ArchiveUploadsDocAccessFields_updatedAt';
  create?: Maybe<ArchiveUploadsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ArchiveUploadsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ArchiveUploadsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ArchiveUploadsDocAccessFields_UpdatedAt_Update>;
};

export type ArchiveUploadsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ArchiveUploadsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ArchiveUploadsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ArchiveUploadsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ArchiveUploadsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Url = {
  __typename?: 'ArchiveUploadsDocAccessFields_url';
  create?: Maybe<ArchiveUploadsDocAccessFields_Url_Create>;
  delete?: Maybe<ArchiveUploadsDocAccessFields_Url_Delete>;
  read?: Maybe<ArchiveUploadsDocAccessFields_Url_Read>;
  update?: Maybe<ArchiveUploadsDocAccessFields_Url_Update>;
};

export type ArchiveUploadsDocAccessFields_Url_Create = {
  __typename?: 'ArchiveUploadsDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Url_Delete = {
  __typename?: 'ArchiveUploadsDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Url_Read = {
  __typename?: 'ArchiveUploadsDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsDocAccessFields_Url_Update = {
  __typename?: 'ArchiveUploadsDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields = {
  __typename?: 'ArchiveUploadsFields';
  archive?: Maybe<ArchiveUploadsFields_Archive>;
  createdAt?: Maybe<ArchiveUploadsFields_CreatedAt>;
  description?: Maybe<ArchiveUploadsFields_Description>;
  service?: Maybe<ArchiveUploadsFields_Service>;
  updatedAt?: Maybe<ArchiveUploadsFields_UpdatedAt>;
  url?: Maybe<ArchiveUploadsFields_Url>;
};

export type ArchiveUploadsFields_Archive = {
  __typename?: 'ArchiveUploadsFields_archive';
  create?: Maybe<ArchiveUploadsFields_Archive_Create>;
  delete?: Maybe<ArchiveUploadsFields_Archive_Delete>;
  read?: Maybe<ArchiveUploadsFields_Archive_Read>;
  update?: Maybe<ArchiveUploadsFields_Archive_Update>;
};

export type ArchiveUploadsFields_Archive_Create = {
  __typename?: 'ArchiveUploadsFields_archive_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Archive_Delete = {
  __typename?: 'ArchiveUploadsFields_archive_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Archive_Read = {
  __typename?: 'ArchiveUploadsFields_archive_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Archive_Update = {
  __typename?: 'ArchiveUploadsFields_archive_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_CreatedAt = {
  __typename?: 'ArchiveUploadsFields_createdAt';
  create?: Maybe<ArchiveUploadsFields_CreatedAt_Create>;
  delete?: Maybe<ArchiveUploadsFields_CreatedAt_Delete>;
  read?: Maybe<ArchiveUploadsFields_CreatedAt_Read>;
  update?: Maybe<ArchiveUploadsFields_CreatedAt_Update>;
};

export type ArchiveUploadsFields_CreatedAt_Create = {
  __typename?: 'ArchiveUploadsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_CreatedAt_Delete = {
  __typename?: 'ArchiveUploadsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_CreatedAt_Read = {
  __typename?: 'ArchiveUploadsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_CreatedAt_Update = {
  __typename?: 'ArchiveUploadsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Description = {
  __typename?: 'ArchiveUploadsFields_description';
  create?: Maybe<ArchiveUploadsFields_Description_Create>;
  delete?: Maybe<ArchiveUploadsFields_Description_Delete>;
  read?: Maybe<ArchiveUploadsFields_Description_Read>;
  update?: Maybe<ArchiveUploadsFields_Description_Update>;
};

export type ArchiveUploadsFields_Description_Create = {
  __typename?: 'ArchiveUploadsFields_description_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Description_Delete = {
  __typename?: 'ArchiveUploadsFields_description_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Description_Read = {
  __typename?: 'ArchiveUploadsFields_description_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Description_Update = {
  __typename?: 'ArchiveUploadsFields_description_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Service = {
  __typename?: 'ArchiveUploadsFields_service';
  create?: Maybe<ArchiveUploadsFields_Service_Create>;
  delete?: Maybe<ArchiveUploadsFields_Service_Delete>;
  read?: Maybe<ArchiveUploadsFields_Service_Read>;
  update?: Maybe<ArchiveUploadsFields_Service_Update>;
};

export type ArchiveUploadsFields_Service_Create = {
  __typename?: 'ArchiveUploadsFields_service_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Service_Delete = {
  __typename?: 'ArchiveUploadsFields_service_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Service_Read = {
  __typename?: 'ArchiveUploadsFields_service_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Service_Update = {
  __typename?: 'ArchiveUploadsFields_service_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_UpdatedAt = {
  __typename?: 'ArchiveUploadsFields_updatedAt';
  create?: Maybe<ArchiveUploadsFields_UpdatedAt_Create>;
  delete?: Maybe<ArchiveUploadsFields_UpdatedAt_Delete>;
  read?: Maybe<ArchiveUploadsFields_UpdatedAt_Read>;
  update?: Maybe<ArchiveUploadsFields_UpdatedAt_Update>;
};

export type ArchiveUploadsFields_UpdatedAt_Create = {
  __typename?: 'ArchiveUploadsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_UpdatedAt_Delete = {
  __typename?: 'ArchiveUploadsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_UpdatedAt_Read = {
  __typename?: 'ArchiveUploadsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_UpdatedAt_Update = {
  __typename?: 'ArchiveUploadsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Url = {
  __typename?: 'ArchiveUploadsFields_url';
  create?: Maybe<ArchiveUploadsFields_Url_Create>;
  delete?: Maybe<ArchiveUploadsFields_Url_Delete>;
  read?: Maybe<ArchiveUploadsFields_Url_Read>;
  update?: Maybe<ArchiveUploadsFields_Url_Update>;
};

export type ArchiveUploadsFields_Url_Create = {
  __typename?: 'ArchiveUploadsFields_url_Create';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Url_Delete = {
  __typename?: 'ArchiveUploadsFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Url_Read = {
  __typename?: 'ArchiveUploadsFields_url_Read';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsFields_Url_Update = {
  __typename?: 'ArchiveUploadsFields_url_Update';
  permission: Scalars['Boolean'];
};

export type ArchiveUploadsReadAccess = {
  __typename?: 'ArchiveUploadsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUploadsReadDocAccess = {
  __typename?: 'ArchiveUploadsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUploadsUpdateAccess = {
  __typename?: 'ArchiveUploadsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type ArchiveUploadsUpdateDocAccess = {
  __typename?: 'ArchiveUploadsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Archive_Images = {
  __typename?: 'Archive_Images';
  imageUrl320?: Maybe<Scalars['String']>;
  imageUrl640?: Maybe<Scalars['String']>;
  imageUrl1080?: Maybe<Scalars['String']>;
};

export type Archive_Tracklist = {
  __typename?: 'Archive_Tracklist';
  artist?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  song?: Maybe<Scalars['String']>;
};

export type Archive_ArchiveUploads_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Archive_Categories_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Archive_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Archive_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Archive_FullTitle_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_Hosts_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Archive_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_Images__ImageUrl320_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_Images__ImageUrl640_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_Images__ImageUrl1080_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_Show_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type Archive_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_StaffPick_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type Archive_Subtitle_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_Tracklist__Artist_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_Tracklist__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_Tracklist__Song_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Archive_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type Archive_Where = {
  AND?: InputMaybe<Array<InputMaybe<Archive_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_Where_Or>>>;
  archiveUploads?: InputMaybe<Archive_ArchiveUploads_Operator>;
  categories?: InputMaybe<Archive_Categories_Operator>;
  createdAt?: InputMaybe<Archive_CreatedAt_Operator>;
  date?: InputMaybe<Archive_Date_Operator>;
  fullTitle?: InputMaybe<Archive_FullTitle_Operator>;
  hosts?: InputMaybe<Archive_Hosts_Operator>;
  id?: InputMaybe<Archive_Id_Operator>;
  images__imageUrl320?: InputMaybe<Archive_Images__ImageUrl320_Operator>;
  images__imageUrl640?: InputMaybe<Archive_Images__ImageUrl640_Operator>;
  images__imageUrl1080?: InputMaybe<Archive_Images__ImageUrl1080_Operator>;
  show?: InputMaybe<Archive_Show_Operator>;
  slug?: InputMaybe<Archive_Slug_Operator>;
  staffPick?: InputMaybe<Archive_StaffPick_Operator>;
  subtitle?: InputMaybe<Archive_Subtitle_Operator>;
  tracklist__artist?: InputMaybe<Archive_Tracklist__Artist_Operator>;
  tracklist__id?: InputMaybe<Archive_Tracklist__Id_Operator>;
  tracklist__song?: InputMaybe<Archive_Tracklist__Song_Operator>;
  updatedAt?: InputMaybe<Archive_UpdatedAt_Operator>;
};

export type Archive_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Archive_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_Where_Or>>>;
  archiveUploads?: InputMaybe<Archive_ArchiveUploads_Operator>;
  categories?: InputMaybe<Archive_Categories_Operator>;
  createdAt?: InputMaybe<Archive_CreatedAt_Operator>;
  date?: InputMaybe<Archive_Date_Operator>;
  fullTitle?: InputMaybe<Archive_FullTitle_Operator>;
  hosts?: InputMaybe<Archive_Hosts_Operator>;
  id?: InputMaybe<Archive_Id_Operator>;
  images__imageUrl320?: InputMaybe<Archive_Images__ImageUrl320_Operator>;
  images__imageUrl640?: InputMaybe<Archive_Images__ImageUrl640_Operator>;
  images__imageUrl1080?: InputMaybe<Archive_Images__ImageUrl1080_Operator>;
  show?: InputMaybe<Archive_Show_Operator>;
  slug?: InputMaybe<Archive_Slug_Operator>;
  staffPick?: InputMaybe<Archive_StaffPick_Operator>;
  subtitle?: InputMaybe<Archive_Subtitle_Operator>;
  tracklist__artist?: InputMaybe<Archive_Tracklist__Artist_Operator>;
  tracklist__id?: InputMaybe<Archive_Tracklist__Id_Operator>;
  tracklist__song?: InputMaybe<Archive_Tracklist__Song_Operator>;
  updatedAt?: InputMaybe<Archive_UpdatedAt_Operator>;
};

export type Archive_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Archive_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_Where_Or>>>;
  archiveUploads?: InputMaybe<Archive_ArchiveUploads_Operator>;
  categories?: InputMaybe<Archive_Categories_Operator>;
  createdAt?: InputMaybe<Archive_CreatedAt_Operator>;
  date?: InputMaybe<Archive_Date_Operator>;
  fullTitle?: InputMaybe<Archive_FullTitle_Operator>;
  hosts?: InputMaybe<Archive_Hosts_Operator>;
  id?: InputMaybe<Archive_Id_Operator>;
  images__imageUrl320?: InputMaybe<Archive_Images__ImageUrl320_Operator>;
  images__imageUrl640?: InputMaybe<Archive_Images__ImageUrl640_Operator>;
  images__imageUrl1080?: InputMaybe<Archive_Images__ImageUrl1080_Operator>;
  show?: InputMaybe<Archive_Show_Operator>;
  slug?: InputMaybe<Archive_Slug_Operator>;
  staffPick?: InputMaybe<Archive_StaffPick_Operator>;
  subtitle?: InputMaybe<Archive_Subtitle_Operator>;
  tracklist__artist?: InputMaybe<Archive_Tracklist__Artist_Operator>;
  tracklist__id?: InputMaybe<Archive_Tracklist__Id_Operator>;
  tracklist__song?: InputMaybe<Archive_Tracklist__Song_Operator>;
  updatedAt?: InputMaybe<Archive_UpdatedAt_Operator>;
};

export type Archives = {
  __typename?: 'Archives';
  docs?: Maybe<Array<Maybe<Archive>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Categories = {
  __typename?: 'Categories';
  docs?: Maybe<Array<Maybe<Category>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
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
  id?: Maybe<Scalars['String']>;
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

export type Host = {
  __typename?: 'Host';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: Host_Type;
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

export type Host_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
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

export enum Host_Type {
  Guest = 'guest',
  Resident = 'resident'
}

export enum Host_Type_Input {
  Guest = 'guest',
  Resident = 'resident'
}

export type Host_Type_Operator = {
  contains?: InputMaybe<Host_Type_Input>;
  equals?: InputMaybe<Host_Type_Input>;
  like?: InputMaybe<Host_Type_Input>;
  not_equals?: InputMaybe<Host_Type_Input>;
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
  email?: InputMaybe<Host_Email_Operator>;
  id?: InputMaybe<Host_Id_Operator>;
  name?: InputMaybe<Host_Name_Operator>;
  type?: InputMaybe<Host_Type_Operator>;
  updatedAt?: InputMaybe<Host_UpdatedAt_Operator>;
};

export type Host_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Host_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Host_Where_Or>>>;
  createdAt?: InputMaybe<Host_CreatedAt_Operator>;
  email?: InputMaybe<Host_Email_Operator>;
  id?: InputMaybe<Host_Id_Operator>;
  name?: InputMaybe<Host_Name_Operator>;
  type?: InputMaybe<Host_Type_Operator>;
  updatedAt?: InputMaybe<Host_UpdatedAt_Operator>;
};

export type Host_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Host_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Host_Where_Or>>>;
  createdAt?: InputMaybe<Host_CreatedAt_Operator>;
  email?: InputMaybe<Host_Email_Operator>;
  id?: InputMaybe<Host_Id_Operator>;
  name?: InputMaybe<Host_Name_Operator>;
  type?: InputMaybe<Host_Type_Operator>;
  updatedAt?: InputMaybe<Host_UpdatedAt_Operator>;
};

export type Hosts = {
  __typename?: 'Hosts';
  docs?: Maybe<Array<Maybe<Host>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
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
  email?: Maybe<HostsDocAccessFields_Email>;
  name?: Maybe<HostsDocAccessFields_Name>;
  type?: Maybe<HostsDocAccessFields_Type>;
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

export type HostsDocAccessFields_Email = {
  __typename?: 'HostsDocAccessFields_email';
  create?: Maybe<HostsDocAccessFields_Email_Create>;
  delete?: Maybe<HostsDocAccessFields_Email_Delete>;
  read?: Maybe<HostsDocAccessFields_Email_Read>;
  update?: Maybe<HostsDocAccessFields_Email_Update>;
};

export type HostsDocAccessFields_Email_Create = {
  __typename?: 'HostsDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Email_Delete = {
  __typename?: 'HostsDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Email_Read = {
  __typename?: 'HostsDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Email_Update = {
  __typename?: 'HostsDocAccessFields_email_Update';
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

export type HostsDocAccessFields_Type = {
  __typename?: 'HostsDocAccessFields_type';
  create?: Maybe<HostsDocAccessFields_Type_Create>;
  delete?: Maybe<HostsDocAccessFields_Type_Delete>;
  read?: Maybe<HostsDocAccessFields_Type_Read>;
  update?: Maybe<HostsDocAccessFields_Type_Update>;
};

export type HostsDocAccessFields_Type_Create = {
  __typename?: 'HostsDocAccessFields_type_Create';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Type_Delete = {
  __typename?: 'HostsDocAccessFields_type_Delete';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Type_Read = {
  __typename?: 'HostsDocAccessFields_type_Read';
  permission: Scalars['Boolean'];
};

export type HostsDocAccessFields_Type_Update = {
  __typename?: 'HostsDocAccessFields_type_Update';
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
  email?: Maybe<HostsFields_Email>;
  name?: Maybe<HostsFields_Name>;
  type?: Maybe<HostsFields_Type>;
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

export type HostsFields_Email = {
  __typename?: 'HostsFields_email';
  create?: Maybe<HostsFields_Email_Create>;
  delete?: Maybe<HostsFields_Email_Delete>;
  read?: Maybe<HostsFields_Email_Read>;
  update?: Maybe<HostsFields_Email_Update>;
};

export type HostsFields_Email_Create = {
  __typename?: 'HostsFields_email_Create';
  permission: Scalars['Boolean'];
};

export type HostsFields_Email_Delete = {
  __typename?: 'HostsFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type HostsFields_Email_Read = {
  __typename?: 'HostsFields_email_Read';
  permission: Scalars['Boolean'];
};

export type HostsFields_Email_Update = {
  __typename?: 'HostsFields_email_Update';
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

export type HostsFields_Type = {
  __typename?: 'HostsFields_type';
  create?: Maybe<HostsFields_Type_Create>;
  delete?: Maybe<HostsFields_Type_Delete>;
  read?: Maybe<HostsFields_Type_Read>;
  update?: Maybe<HostsFields_Type_Update>;
};

export type HostsFields_Type_Create = {
  __typename?: 'HostsFields_type_Create';
  permission: Scalars['Boolean'];
};

export type HostsFields_Type_Delete = {
  __typename?: 'HostsFields_type_Delete';
  permission: Scalars['Boolean'];
};

export type HostsFields_Type_Read = {
  __typename?: 'HostsFields_type_Read';
  permission: Scalars['Boolean'];
};

export type HostsFields_Type_Update = {
  __typename?: 'HostsFields_type_Update';
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

export type MailingListSubscriber = {
  __typename?: 'MailingListSubscriber';
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['EmailAddress'];
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MailingListSubscriber_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type MailingListSubscriber_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type MailingListSubscriber_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MailingListSubscriber_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type MailingListSubscriber_Where = {
  AND?: InputMaybe<Array<InputMaybe<MailingListSubscriber_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<MailingListSubscriber_Where_Or>>>;
  createdAt?: InputMaybe<MailingListSubscriber_CreatedAt_Operator>;
  email?: InputMaybe<MailingListSubscriber_Email_Operator>;
  id?: InputMaybe<MailingListSubscriber_Id_Operator>;
  updatedAt?: InputMaybe<MailingListSubscriber_UpdatedAt_Operator>;
};

export type MailingListSubscriber_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<MailingListSubscriber_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<MailingListSubscriber_Where_Or>>>;
  createdAt?: InputMaybe<MailingListSubscriber_CreatedAt_Operator>;
  email?: InputMaybe<MailingListSubscriber_Email_Operator>;
  id?: InputMaybe<MailingListSubscriber_Id_Operator>;
  updatedAt?: InputMaybe<MailingListSubscriber_UpdatedAt_Operator>;
};

export type MailingListSubscriber_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<MailingListSubscriber_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<MailingListSubscriber_Where_Or>>>;
  createdAt?: InputMaybe<MailingListSubscriber_CreatedAt_Operator>;
  email?: InputMaybe<MailingListSubscriber_Email_Operator>;
  id?: InputMaybe<MailingListSubscriber_Id_Operator>;
  updatedAt?: InputMaybe<MailingListSubscriber_UpdatedAt_Operator>;
};

export type MailingListSubscribers = {
  __typename?: 'MailingListSubscribers';
  docs?: Maybe<Array<Maybe<MailingListSubscriber>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type MailingListSubscribersCreateAccess = {
  __typename?: 'MailingListSubscribersCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MailingListSubscribersCreateDocAccess = {
  __typename?: 'MailingListSubscribersCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MailingListSubscribersDeleteAccess = {
  __typename?: 'MailingListSubscribersDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MailingListSubscribersDeleteDocAccess = {
  __typename?: 'MailingListSubscribersDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MailingListSubscribersDocAccessFields = {
  __typename?: 'MailingListSubscribersDocAccessFields';
  createdAt?: Maybe<MailingListSubscribersDocAccessFields_CreatedAt>;
  email?: Maybe<MailingListSubscribersDocAccessFields_Email>;
  updatedAt?: Maybe<MailingListSubscribersDocAccessFields_UpdatedAt>;
};

export type MailingListSubscribersDocAccessFields_CreatedAt = {
  __typename?: 'MailingListSubscribersDocAccessFields_createdAt';
  create?: Maybe<MailingListSubscribersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MailingListSubscribersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MailingListSubscribersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MailingListSubscribersDocAccessFields_CreatedAt_Update>;
};

export type MailingListSubscribersDocAccessFields_CreatedAt_Create = {
  __typename?: 'MailingListSubscribersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MailingListSubscribersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_CreatedAt_Read = {
  __typename?: 'MailingListSubscribersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_CreatedAt_Update = {
  __typename?: 'MailingListSubscribersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_Email = {
  __typename?: 'MailingListSubscribersDocAccessFields_email';
  create?: Maybe<MailingListSubscribersDocAccessFields_Email_Create>;
  delete?: Maybe<MailingListSubscribersDocAccessFields_Email_Delete>;
  read?: Maybe<MailingListSubscribersDocAccessFields_Email_Read>;
  update?: Maybe<MailingListSubscribersDocAccessFields_Email_Update>;
};

export type MailingListSubscribersDocAccessFields_Email_Create = {
  __typename?: 'MailingListSubscribersDocAccessFields_email_Create';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_Email_Delete = {
  __typename?: 'MailingListSubscribersDocAccessFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_Email_Read = {
  __typename?: 'MailingListSubscribersDocAccessFields_email_Read';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_Email_Update = {
  __typename?: 'MailingListSubscribersDocAccessFields_email_Update';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_UpdatedAt = {
  __typename?: 'MailingListSubscribersDocAccessFields_updatedAt';
  create?: Maybe<MailingListSubscribersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MailingListSubscribersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MailingListSubscribersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MailingListSubscribersDocAccessFields_UpdatedAt_Update>;
};

export type MailingListSubscribersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MailingListSubscribersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MailingListSubscribersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MailingListSubscribersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MailingListSubscribersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields = {
  __typename?: 'MailingListSubscribersFields';
  createdAt?: Maybe<MailingListSubscribersFields_CreatedAt>;
  email?: Maybe<MailingListSubscribersFields_Email>;
  updatedAt?: Maybe<MailingListSubscribersFields_UpdatedAt>;
};

export type MailingListSubscribersFields_CreatedAt = {
  __typename?: 'MailingListSubscribersFields_createdAt';
  create?: Maybe<MailingListSubscribersFields_CreatedAt_Create>;
  delete?: Maybe<MailingListSubscribersFields_CreatedAt_Delete>;
  read?: Maybe<MailingListSubscribersFields_CreatedAt_Read>;
  update?: Maybe<MailingListSubscribersFields_CreatedAt_Update>;
};

export type MailingListSubscribersFields_CreatedAt_Create = {
  __typename?: 'MailingListSubscribersFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_CreatedAt_Delete = {
  __typename?: 'MailingListSubscribersFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_CreatedAt_Read = {
  __typename?: 'MailingListSubscribersFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_CreatedAt_Update = {
  __typename?: 'MailingListSubscribersFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_Email = {
  __typename?: 'MailingListSubscribersFields_email';
  create?: Maybe<MailingListSubscribersFields_Email_Create>;
  delete?: Maybe<MailingListSubscribersFields_Email_Delete>;
  read?: Maybe<MailingListSubscribersFields_Email_Read>;
  update?: Maybe<MailingListSubscribersFields_Email_Update>;
};

export type MailingListSubscribersFields_Email_Create = {
  __typename?: 'MailingListSubscribersFields_email_Create';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_Email_Delete = {
  __typename?: 'MailingListSubscribersFields_email_Delete';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_Email_Read = {
  __typename?: 'MailingListSubscribersFields_email_Read';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_Email_Update = {
  __typename?: 'MailingListSubscribersFields_email_Update';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_UpdatedAt = {
  __typename?: 'MailingListSubscribersFields_updatedAt';
  create?: Maybe<MailingListSubscribersFields_UpdatedAt_Create>;
  delete?: Maybe<MailingListSubscribersFields_UpdatedAt_Delete>;
  read?: Maybe<MailingListSubscribersFields_UpdatedAt_Read>;
  update?: Maybe<MailingListSubscribersFields_UpdatedAt_Update>;
};

export type MailingListSubscribersFields_UpdatedAt_Create = {
  __typename?: 'MailingListSubscribersFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_UpdatedAt_Delete = {
  __typename?: 'MailingListSubscribersFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_UpdatedAt_Read = {
  __typename?: 'MailingListSubscribersFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersFields_UpdatedAt_Update = {
  __typename?: 'MailingListSubscribersFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type MailingListSubscribersReadAccess = {
  __typename?: 'MailingListSubscribersReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MailingListSubscribersReadDocAccess = {
  __typename?: 'MailingListSubscribersReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MailingListSubscribersUpdateAccess = {
  __typename?: 'MailingListSubscribersUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type MailingListSubscribersUpdateDocAccess = {
  __typename?: 'MailingListSubscribersUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArchive?: Maybe<Archive>;
  createArchiveUpload?: Maybe<ArchiveUpload>;
  createCategory?: Maybe<Category>;
  createHost?: Maybe<Host>;
  createMailingListSubscriber?: Maybe<MailingListSubscriber>;
  createNewsMedia?: Maybe<NewsMedia>;
  createNewsPost?: Maybe<NewsPost>;
  createOnboardingEmail?: Maybe<OnboardingEmail>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createShow?: Maybe<Show>;
  createTag?: Maybe<Tag>;
  createUser?: Maybe<User>;
  deleteArchive?: Maybe<Archive>;
  deleteArchiveUpload?: Maybe<ArchiveUpload>;
  deleteCategory?: Maybe<Category>;
  deleteHost?: Maybe<Host>;
  deleteMailingListSubscriber?: Maybe<MailingListSubscriber>;
  deleteNewsMedia?: Maybe<NewsMedia>;
  deleteNewsPost?: Maybe<NewsPost>;
  deleteOnboardingEmail?: Maybe<OnboardingEmail>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteShow?: Maybe<Show>;
  deleteTag?: Maybe<Tag>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  restoreVersionNewsPost?: Maybe<NewsPost>;
  unlockUser: Scalars['Boolean'];
  updateArchive?: Maybe<Archive>;
  updateArchiveUpload?: Maybe<ArchiveUpload>;
  updateCategory?: Maybe<Category>;
  updateHost?: Maybe<Host>;
  updateMailingListSubscriber?: Maybe<MailingListSubscriber>;
  updateNewsMedia?: Maybe<NewsMedia>;
  updateNewsPost?: Maybe<NewsPost>;
  updateOnboardingEmail?: Maybe<OnboardingEmail>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateShow?: Maybe<Show>;
  updateTag?: Maybe<Tag>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateArchiveArgs = {
  data: MutationArchiveInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateArchiveUploadArgs = {
  data: MutationArchiveUploadInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateCategoryArgs = {
  data: MutationCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateHostArgs = {
  data: MutationHostInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateMailingListSubscriberArgs = {
  data: MutationMailingListSubscriberInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateNewsMediaArgs = {
  data: MutationNewsMediaInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateNewsPostArgs = {
  data: MutationNewsPostInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOnboardingEmailArgs = {
  data: MutationOnboardingEmailInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateShowArgs = {
  data: MutationShowInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateTagArgs = {
  data: MutationTagInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteArchiveArgs = {
  id: Scalars['String'];
};


export type MutationDeleteArchiveUploadArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String'];
};


export type MutationDeleteHostArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMailingListSubscriberArgs = {
  id: Scalars['String'];
};


export type MutationDeleteNewsMediaArgs = {
  id: Scalars['String'];
};


export type MutationDeleteNewsPostArgs = {
  id: Scalars['String'];
};


export type MutationDeleteOnboardingEmailArgs = {
  id: Scalars['String'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String'];
};


export type MutationDeleteShowArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']>;
  email: Scalars['String'];
  expiration?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};


export type MutationRestoreVersionNewsPostArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String'];
};


export type MutationUpdateArchiveArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationArchiveUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateArchiveUploadArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationArchiveUploadUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateHostArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationHostUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateMailingListSubscriberArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationMailingListSubscriberUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateNewsMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationNewsMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateNewsPostArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationNewsPostUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateOnboardingEmailArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationOnboardingEmailUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateShowArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationShowUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateTagArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationTagUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']>;
};

export type NewsMedia = {
  __typename?: 'NewsMedia';
  alt?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  prefix?: Maybe<Scalars['String']>;
  sizes?: Maybe<NewsMedia_Sizes>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type NewsMediaCreateAccess = {
  __typename?: 'NewsMediaCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsMediaCreateDocAccess = {
  __typename?: 'NewsMediaCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsMediaDeleteAccess = {
  __typename?: 'NewsMediaDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsMediaDeleteDocAccess = {
  __typename?: 'NewsMediaDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsMediaDocAccessFields = {
  __typename?: 'NewsMediaDocAccessFields';
  alt?: Maybe<NewsMediaDocAccessFields_Alt>;
  createdAt?: Maybe<NewsMediaDocAccessFields_CreatedAt>;
  filename?: Maybe<NewsMediaDocAccessFields_Filename>;
  filesize?: Maybe<NewsMediaDocAccessFields_Filesize>;
  height?: Maybe<NewsMediaDocAccessFields_Height>;
  mimeType?: Maybe<NewsMediaDocAccessFields_MimeType>;
  prefix?: Maybe<NewsMediaDocAccessFields_Prefix>;
  sizes?: Maybe<NewsMediaDocAccessFields_Sizes>;
  updatedAt?: Maybe<NewsMediaDocAccessFields_UpdatedAt>;
  url?: Maybe<NewsMediaDocAccessFields_Url>;
  width?: Maybe<NewsMediaDocAccessFields_Width>;
};

export type NewsMediaDocAccessFields_Alt = {
  __typename?: 'NewsMediaDocAccessFields_alt';
  create?: Maybe<NewsMediaDocAccessFields_Alt_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Alt_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Alt_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Alt_Update>;
};

export type NewsMediaDocAccessFields_Alt_Create = {
  __typename?: 'NewsMediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Alt_Delete = {
  __typename?: 'NewsMediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Alt_Read = {
  __typename?: 'NewsMediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Alt_Update = {
  __typename?: 'NewsMediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_CreatedAt = {
  __typename?: 'NewsMediaDocAccessFields_createdAt';
  create?: Maybe<NewsMediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<NewsMediaDocAccessFields_CreatedAt_Update>;
};

export type NewsMediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'NewsMediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'NewsMediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'NewsMediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'NewsMediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Filename = {
  __typename?: 'NewsMediaDocAccessFields_filename';
  create?: Maybe<NewsMediaDocAccessFields_Filename_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Filename_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Filename_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Filename_Update>;
};

export type NewsMediaDocAccessFields_Filename_Create = {
  __typename?: 'NewsMediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Filename_Delete = {
  __typename?: 'NewsMediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Filename_Read = {
  __typename?: 'NewsMediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Filename_Update = {
  __typename?: 'NewsMediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Filesize = {
  __typename?: 'NewsMediaDocAccessFields_filesize';
  create?: Maybe<NewsMediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Filesize_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Filesize_Update>;
};

export type NewsMediaDocAccessFields_Filesize_Create = {
  __typename?: 'NewsMediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Filesize_Delete = {
  __typename?: 'NewsMediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Filesize_Read = {
  __typename?: 'NewsMediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Filesize_Update = {
  __typename?: 'NewsMediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Height = {
  __typename?: 'NewsMediaDocAccessFields_height';
  create?: Maybe<NewsMediaDocAccessFields_Height_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Height_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Height_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Height_Update>;
};

export type NewsMediaDocAccessFields_Height_Create = {
  __typename?: 'NewsMediaDocAccessFields_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Height_Delete = {
  __typename?: 'NewsMediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Height_Read = {
  __typename?: 'NewsMediaDocAccessFields_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Height_Update = {
  __typename?: 'NewsMediaDocAccessFields_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_MimeType = {
  __typename?: 'NewsMediaDocAccessFields_mimeType';
  create?: Maybe<NewsMediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_MimeType_Read>;
  update?: Maybe<NewsMediaDocAccessFields_MimeType_Update>;
};

export type NewsMediaDocAccessFields_MimeType_Create = {
  __typename?: 'NewsMediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_MimeType_Delete = {
  __typename?: 'NewsMediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_MimeType_Read = {
  __typename?: 'NewsMediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_MimeType_Update = {
  __typename?: 'NewsMediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Prefix = {
  __typename?: 'NewsMediaDocAccessFields_prefix';
  create?: Maybe<NewsMediaDocAccessFields_Prefix_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Prefix_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Prefix_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Prefix_Update>;
};

export type NewsMediaDocAccessFields_Prefix_Create = {
  __typename?: 'NewsMediaDocAccessFields_prefix_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Prefix_Delete = {
  __typename?: 'NewsMediaDocAccessFields_prefix_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Prefix_Read = {
  __typename?: 'NewsMediaDocAccessFields_prefix_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Prefix_Update = {
  __typename?: 'NewsMediaDocAccessFields_prefix_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes = {
  __typename?: 'NewsMediaDocAccessFields_sizes';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<NewsMediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Fields = {
  __typename?: 'NewsMediaDocAccessFields_sizes_Fields';
  lg?: Maybe<NewsMediaDocAccessFields_Sizes_Lg>;
  opengraph?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph>;
  sm?: Maybe<NewsMediaDocAccessFields_Sizes_Sm>;
  xl?: Maybe<NewsMediaDocAccessFields_Sizes_Xl>;
  xs?: Maybe<NewsMediaDocAccessFields_Sizes_Xs>;
};

export type NewsMediaDocAccessFields_Sizes_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Delete>;
  fields?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Fields>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Lg_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Fields = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_Fields';
  filename?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filename>;
  filesize?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filesize>;
  height?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Height>;
  mimeType?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_MimeType>;
  url?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Url>;
  width?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Width>;
};

export type NewsMediaDocAccessFields_Sizes_Lg_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filename = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filename';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filename_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filename_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filename_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filename_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filename_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filename_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filename_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filename_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filesize = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filesize';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filesize_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filesize_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filesize_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Filesize_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filesize_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filesize_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filesize_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Filesize_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Height = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_height';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Height_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Height_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Height_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Height_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Lg_Height_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Height_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Height_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Height_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_MimeType = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_mimeType';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_MimeType_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_MimeType_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_MimeType_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_MimeType_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Lg_MimeType_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_MimeType_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_MimeType_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_MimeType_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Url = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_url';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Url_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Url_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Url_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Url_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Lg_Url_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Url_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Url_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Url_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Width = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_width';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Width_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Width_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Width_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Lg_Width_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Lg_Width_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Width_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Width_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Lg_Width_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_lg_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Delete>;
  fields?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Fields>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Fields = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_Fields';
  filename?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filename>;
  filesize?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filesize>;
  height?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Height>;
  mimeType?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_MimeType>;
  url?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Url>;
  width?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Width>;
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filename = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filename';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filename_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filename_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filename_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filename_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filename_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filename_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filename_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filename_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filesize = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filesize';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filesize_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filesize_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filesize_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Filesize_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filesize_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filesize_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filesize_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Filesize_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Height = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_height';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Height_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Height_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Height_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Height_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Height_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Height_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Height_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Height_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_MimeType = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_mimeType';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_MimeType_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_MimeType_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_MimeType_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_MimeType_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_MimeType_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_MimeType_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_MimeType_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_MimeType_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Url = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_url';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Url_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Url_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Url_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Url_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Url_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Url_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Url_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Url_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Width = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_width';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Width_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Width_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Width_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Opengraph_Width_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Width_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Width_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Width_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Opengraph_Width_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_opengraph_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Delete>;
  fields?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Fields>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Sm_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Fields = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_Fields';
  filename?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filename>;
  filesize?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filesize>;
  height?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Height>;
  mimeType?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_MimeType>;
  url?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Url>;
  width?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Width>;
};

export type NewsMediaDocAccessFields_Sizes_Sm_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filename = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filename';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filename_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filename_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filename_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filename_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filename_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filename_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filename_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filename_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filesize = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filesize';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filesize_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filesize_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filesize_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Filesize_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filesize_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filesize_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filesize_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Filesize_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Height = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_height';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Height_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Height_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Height_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Height_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Sm_Height_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Height_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Height_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Height_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_MimeType = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_mimeType';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_MimeType_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_MimeType_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_MimeType_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_MimeType_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Sm_MimeType_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_MimeType_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_MimeType_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_MimeType_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Url = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_url';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Url_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Url_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Url_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Url_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Sm_Url_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Url_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Url_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Url_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Width = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_width';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Width_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Width_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Width_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Sm_Width_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Sm_Width_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Width_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Width_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Sm_Width_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_sm_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Delete>;
  fields?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Fields>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xl_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Fields = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_Fields';
  filename?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filename>;
  filesize?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filesize>;
  height?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Height>;
  mimeType?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_MimeType>;
  url?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Url>;
  width?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Width>;
};

export type NewsMediaDocAccessFields_Sizes_Xl_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filename = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filename';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filename_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filename_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filename_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filename_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filename_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filename_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filename_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filename_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filesize = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filesize';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filesize_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filesize_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filesize_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Filesize_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filesize_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filesize_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filesize_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Filesize_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Height = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_height';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Height_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Height_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Height_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Height_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xl_Height_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Height_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Height_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Height_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_MimeType = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_mimeType';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_MimeType_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_MimeType_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_MimeType_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_MimeType_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xl_MimeType_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_MimeType_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_MimeType_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_MimeType_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Url = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_url';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Url_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Url_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Url_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Url_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xl_Url_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Url_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Url_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Url_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Width = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_width';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Width_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Width_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Width_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xl_Width_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xl_Width_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Width_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Width_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xl_Width_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xl_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Delete>;
  fields?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Fields>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xs_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Fields = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_Fields';
  filename?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filename>;
  filesize?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filesize>;
  height?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Height>;
  mimeType?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_MimeType>;
  url?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Url>;
  width?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Width>;
};

export type NewsMediaDocAccessFields_Sizes_Xs_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filename = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filename';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filename_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filename_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filename_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filename_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filename_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filename_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filename_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filename_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filesize = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filesize';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filesize_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filesize_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filesize_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Filesize_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filesize_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filesize_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filesize_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Filesize_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Height = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_height';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Height_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Height_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Height_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Height_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xs_Height_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Height_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Height_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Height_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_MimeType = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_mimeType';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_MimeType_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_MimeType_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_MimeType_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_MimeType_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xs_MimeType_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_MimeType_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_MimeType_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_MimeType_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Url = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_url';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Url_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Url_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Url_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Url_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xs_Url_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Url_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Url_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Url_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Width = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_width';
  create?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Width_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Width_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Width_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Sizes_Xs_Width_Update>;
};

export type NewsMediaDocAccessFields_Sizes_Xs_Width_Create = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Width_Delete = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Width_Read = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Sizes_Xs_Width_Update = {
  __typename?: 'NewsMediaDocAccessFields_sizes_xs_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_UpdatedAt = {
  __typename?: 'NewsMediaDocAccessFields_updatedAt';
  create?: Maybe<NewsMediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<NewsMediaDocAccessFields_UpdatedAt_Update>;
};

export type NewsMediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'NewsMediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'NewsMediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'NewsMediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'NewsMediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Url = {
  __typename?: 'NewsMediaDocAccessFields_url';
  create?: Maybe<NewsMediaDocAccessFields_Url_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Url_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Url_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Url_Update>;
};

export type NewsMediaDocAccessFields_Url_Create = {
  __typename?: 'NewsMediaDocAccessFields_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Url_Delete = {
  __typename?: 'NewsMediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Url_Read = {
  __typename?: 'NewsMediaDocAccessFields_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Url_Update = {
  __typename?: 'NewsMediaDocAccessFields_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Width = {
  __typename?: 'NewsMediaDocAccessFields_width';
  create?: Maybe<NewsMediaDocAccessFields_Width_Create>;
  delete?: Maybe<NewsMediaDocAccessFields_Width_Delete>;
  read?: Maybe<NewsMediaDocAccessFields_Width_Read>;
  update?: Maybe<NewsMediaDocAccessFields_Width_Update>;
};

export type NewsMediaDocAccessFields_Width_Create = {
  __typename?: 'NewsMediaDocAccessFields_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Width_Delete = {
  __typename?: 'NewsMediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Width_Read = {
  __typename?: 'NewsMediaDocAccessFields_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaDocAccessFields_Width_Update = {
  __typename?: 'NewsMediaDocAccessFields_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields = {
  __typename?: 'NewsMediaFields';
  alt?: Maybe<NewsMediaFields_Alt>;
  createdAt?: Maybe<NewsMediaFields_CreatedAt>;
  filename?: Maybe<NewsMediaFields_Filename>;
  filesize?: Maybe<NewsMediaFields_Filesize>;
  height?: Maybe<NewsMediaFields_Height>;
  mimeType?: Maybe<NewsMediaFields_MimeType>;
  prefix?: Maybe<NewsMediaFields_Prefix>;
  sizes?: Maybe<NewsMediaFields_Sizes>;
  updatedAt?: Maybe<NewsMediaFields_UpdatedAt>;
  url?: Maybe<NewsMediaFields_Url>;
  width?: Maybe<NewsMediaFields_Width>;
};

export type NewsMediaFields_Alt = {
  __typename?: 'NewsMediaFields_alt';
  create?: Maybe<NewsMediaFields_Alt_Create>;
  delete?: Maybe<NewsMediaFields_Alt_Delete>;
  read?: Maybe<NewsMediaFields_Alt_Read>;
  update?: Maybe<NewsMediaFields_Alt_Update>;
};

export type NewsMediaFields_Alt_Create = {
  __typename?: 'NewsMediaFields_alt_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Alt_Delete = {
  __typename?: 'NewsMediaFields_alt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Alt_Read = {
  __typename?: 'NewsMediaFields_alt_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Alt_Update = {
  __typename?: 'NewsMediaFields_alt_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_CreatedAt = {
  __typename?: 'NewsMediaFields_createdAt';
  create?: Maybe<NewsMediaFields_CreatedAt_Create>;
  delete?: Maybe<NewsMediaFields_CreatedAt_Delete>;
  read?: Maybe<NewsMediaFields_CreatedAt_Read>;
  update?: Maybe<NewsMediaFields_CreatedAt_Update>;
};

export type NewsMediaFields_CreatedAt_Create = {
  __typename?: 'NewsMediaFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_CreatedAt_Delete = {
  __typename?: 'NewsMediaFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_CreatedAt_Read = {
  __typename?: 'NewsMediaFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_CreatedAt_Update = {
  __typename?: 'NewsMediaFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Filename = {
  __typename?: 'NewsMediaFields_filename';
  create?: Maybe<NewsMediaFields_Filename_Create>;
  delete?: Maybe<NewsMediaFields_Filename_Delete>;
  read?: Maybe<NewsMediaFields_Filename_Read>;
  update?: Maybe<NewsMediaFields_Filename_Update>;
};

export type NewsMediaFields_Filename_Create = {
  __typename?: 'NewsMediaFields_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Filename_Delete = {
  __typename?: 'NewsMediaFields_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Filename_Read = {
  __typename?: 'NewsMediaFields_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Filename_Update = {
  __typename?: 'NewsMediaFields_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Filesize = {
  __typename?: 'NewsMediaFields_filesize';
  create?: Maybe<NewsMediaFields_Filesize_Create>;
  delete?: Maybe<NewsMediaFields_Filesize_Delete>;
  read?: Maybe<NewsMediaFields_Filesize_Read>;
  update?: Maybe<NewsMediaFields_Filesize_Update>;
};

export type NewsMediaFields_Filesize_Create = {
  __typename?: 'NewsMediaFields_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Filesize_Delete = {
  __typename?: 'NewsMediaFields_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Filesize_Read = {
  __typename?: 'NewsMediaFields_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Filesize_Update = {
  __typename?: 'NewsMediaFields_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Height = {
  __typename?: 'NewsMediaFields_height';
  create?: Maybe<NewsMediaFields_Height_Create>;
  delete?: Maybe<NewsMediaFields_Height_Delete>;
  read?: Maybe<NewsMediaFields_Height_Read>;
  update?: Maybe<NewsMediaFields_Height_Update>;
};

export type NewsMediaFields_Height_Create = {
  __typename?: 'NewsMediaFields_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Height_Delete = {
  __typename?: 'NewsMediaFields_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Height_Read = {
  __typename?: 'NewsMediaFields_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Height_Update = {
  __typename?: 'NewsMediaFields_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_MimeType = {
  __typename?: 'NewsMediaFields_mimeType';
  create?: Maybe<NewsMediaFields_MimeType_Create>;
  delete?: Maybe<NewsMediaFields_MimeType_Delete>;
  read?: Maybe<NewsMediaFields_MimeType_Read>;
  update?: Maybe<NewsMediaFields_MimeType_Update>;
};

export type NewsMediaFields_MimeType_Create = {
  __typename?: 'NewsMediaFields_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_MimeType_Delete = {
  __typename?: 'NewsMediaFields_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_MimeType_Read = {
  __typename?: 'NewsMediaFields_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_MimeType_Update = {
  __typename?: 'NewsMediaFields_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Prefix = {
  __typename?: 'NewsMediaFields_prefix';
  create?: Maybe<NewsMediaFields_Prefix_Create>;
  delete?: Maybe<NewsMediaFields_Prefix_Delete>;
  read?: Maybe<NewsMediaFields_Prefix_Read>;
  update?: Maybe<NewsMediaFields_Prefix_Update>;
};

export type NewsMediaFields_Prefix_Create = {
  __typename?: 'NewsMediaFields_prefix_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Prefix_Delete = {
  __typename?: 'NewsMediaFields_prefix_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Prefix_Read = {
  __typename?: 'NewsMediaFields_prefix_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Prefix_Update = {
  __typename?: 'NewsMediaFields_prefix_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes = {
  __typename?: 'NewsMediaFields_sizes';
  create?: Maybe<NewsMediaFields_Sizes_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Delete>;
  fields?: Maybe<NewsMediaFields_Sizes_Fields>;
  read?: Maybe<NewsMediaFields_Sizes_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Update>;
};

export type NewsMediaFields_Sizes_Create = {
  __typename?: 'NewsMediaFields_sizes_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Delete = {
  __typename?: 'NewsMediaFields_sizes_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Fields = {
  __typename?: 'NewsMediaFields_sizes_Fields';
  lg?: Maybe<NewsMediaFields_Sizes_Lg>;
  opengraph?: Maybe<NewsMediaFields_Sizes_Opengraph>;
  sm?: Maybe<NewsMediaFields_Sizes_Sm>;
  xl?: Maybe<NewsMediaFields_Sizes_Xl>;
  xs?: Maybe<NewsMediaFields_Sizes_Xs>;
};

export type NewsMediaFields_Sizes_Read = {
  __typename?: 'NewsMediaFields_sizes_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Update = {
  __typename?: 'NewsMediaFields_sizes_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg = {
  __typename?: 'NewsMediaFields_sizes_lg';
  create?: Maybe<NewsMediaFields_Sizes_Lg_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Lg_Delete>;
  fields?: Maybe<NewsMediaFields_Sizes_Lg_Fields>;
  read?: Maybe<NewsMediaFields_Sizes_Lg_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Lg_Update>;
};

export type NewsMediaFields_Sizes_Lg_Create = {
  __typename?: 'NewsMediaFields_sizes_lg_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Delete = {
  __typename?: 'NewsMediaFields_sizes_lg_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Fields = {
  __typename?: 'NewsMediaFields_sizes_lg_Fields';
  filename?: Maybe<NewsMediaFields_Sizes_Lg_Filename>;
  filesize?: Maybe<NewsMediaFields_Sizes_Lg_Filesize>;
  height?: Maybe<NewsMediaFields_Sizes_Lg_Height>;
  mimeType?: Maybe<NewsMediaFields_Sizes_Lg_MimeType>;
  url?: Maybe<NewsMediaFields_Sizes_Lg_Url>;
  width?: Maybe<NewsMediaFields_Sizes_Lg_Width>;
};

export type NewsMediaFields_Sizes_Lg_Read = {
  __typename?: 'NewsMediaFields_sizes_lg_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Update = {
  __typename?: 'NewsMediaFields_sizes_lg_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Filename = {
  __typename?: 'NewsMediaFields_sizes_lg_filename';
  create?: Maybe<NewsMediaFields_Sizes_Lg_Filename_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Lg_Filename_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Lg_Filename_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Lg_Filename_Update>;
};

export type NewsMediaFields_Sizes_Lg_Filename_Create = {
  __typename?: 'NewsMediaFields_sizes_lg_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Filename_Delete = {
  __typename?: 'NewsMediaFields_sizes_lg_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Filename_Read = {
  __typename?: 'NewsMediaFields_sizes_lg_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Filename_Update = {
  __typename?: 'NewsMediaFields_sizes_lg_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Filesize = {
  __typename?: 'NewsMediaFields_sizes_lg_filesize';
  create?: Maybe<NewsMediaFields_Sizes_Lg_Filesize_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Lg_Filesize_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Lg_Filesize_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Lg_Filesize_Update>;
};

export type NewsMediaFields_Sizes_Lg_Filesize_Create = {
  __typename?: 'NewsMediaFields_sizes_lg_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Filesize_Delete = {
  __typename?: 'NewsMediaFields_sizes_lg_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Filesize_Read = {
  __typename?: 'NewsMediaFields_sizes_lg_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Filesize_Update = {
  __typename?: 'NewsMediaFields_sizes_lg_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Height = {
  __typename?: 'NewsMediaFields_sizes_lg_height';
  create?: Maybe<NewsMediaFields_Sizes_Lg_Height_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Lg_Height_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Lg_Height_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Lg_Height_Update>;
};

export type NewsMediaFields_Sizes_Lg_Height_Create = {
  __typename?: 'NewsMediaFields_sizes_lg_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Height_Delete = {
  __typename?: 'NewsMediaFields_sizes_lg_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Height_Read = {
  __typename?: 'NewsMediaFields_sizes_lg_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Height_Update = {
  __typename?: 'NewsMediaFields_sizes_lg_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_MimeType = {
  __typename?: 'NewsMediaFields_sizes_lg_mimeType';
  create?: Maybe<NewsMediaFields_Sizes_Lg_MimeType_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Lg_MimeType_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Lg_MimeType_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Lg_MimeType_Update>;
};

export type NewsMediaFields_Sizes_Lg_MimeType_Create = {
  __typename?: 'NewsMediaFields_sizes_lg_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_MimeType_Delete = {
  __typename?: 'NewsMediaFields_sizes_lg_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_MimeType_Read = {
  __typename?: 'NewsMediaFields_sizes_lg_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_MimeType_Update = {
  __typename?: 'NewsMediaFields_sizes_lg_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Url = {
  __typename?: 'NewsMediaFields_sizes_lg_url';
  create?: Maybe<NewsMediaFields_Sizes_Lg_Url_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Lg_Url_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Lg_Url_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Lg_Url_Update>;
};

export type NewsMediaFields_Sizes_Lg_Url_Create = {
  __typename?: 'NewsMediaFields_sizes_lg_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Url_Delete = {
  __typename?: 'NewsMediaFields_sizes_lg_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Url_Read = {
  __typename?: 'NewsMediaFields_sizes_lg_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Url_Update = {
  __typename?: 'NewsMediaFields_sizes_lg_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Width = {
  __typename?: 'NewsMediaFields_sizes_lg_width';
  create?: Maybe<NewsMediaFields_Sizes_Lg_Width_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Lg_Width_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Lg_Width_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Lg_Width_Update>;
};

export type NewsMediaFields_Sizes_Lg_Width_Create = {
  __typename?: 'NewsMediaFields_sizes_lg_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Width_Delete = {
  __typename?: 'NewsMediaFields_sizes_lg_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Width_Read = {
  __typename?: 'NewsMediaFields_sizes_lg_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Lg_Width_Update = {
  __typename?: 'NewsMediaFields_sizes_lg_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph = {
  __typename?: 'NewsMediaFields_sizes_opengraph';
  create?: Maybe<NewsMediaFields_Sizes_Opengraph_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Opengraph_Delete>;
  fields?: Maybe<NewsMediaFields_Sizes_Opengraph_Fields>;
  read?: Maybe<NewsMediaFields_Sizes_Opengraph_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Opengraph_Update>;
};

export type NewsMediaFields_Sizes_Opengraph_Create = {
  __typename?: 'NewsMediaFields_sizes_opengraph_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Delete = {
  __typename?: 'NewsMediaFields_sizes_opengraph_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Fields = {
  __typename?: 'NewsMediaFields_sizes_opengraph_Fields';
  filename?: Maybe<NewsMediaFields_Sizes_Opengraph_Filename>;
  filesize?: Maybe<NewsMediaFields_Sizes_Opengraph_Filesize>;
  height?: Maybe<NewsMediaFields_Sizes_Opengraph_Height>;
  mimeType?: Maybe<NewsMediaFields_Sizes_Opengraph_MimeType>;
  url?: Maybe<NewsMediaFields_Sizes_Opengraph_Url>;
  width?: Maybe<NewsMediaFields_Sizes_Opengraph_Width>;
};

export type NewsMediaFields_Sizes_Opengraph_Read = {
  __typename?: 'NewsMediaFields_sizes_opengraph_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Update = {
  __typename?: 'NewsMediaFields_sizes_opengraph_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Filename = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filename';
  create?: Maybe<NewsMediaFields_Sizes_Opengraph_Filename_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Opengraph_Filename_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Opengraph_Filename_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Opengraph_Filename_Update>;
};

export type NewsMediaFields_Sizes_Opengraph_Filename_Create = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Filename_Delete = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Filename_Read = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Filename_Update = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Filesize = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filesize';
  create?: Maybe<NewsMediaFields_Sizes_Opengraph_Filesize_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Opengraph_Filesize_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Opengraph_Filesize_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Opengraph_Filesize_Update>;
};

export type NewsMediaFields_Sizes_Opengraph_Filesize_Create = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Filesize_Delete = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Filesize_Read = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Filesize_Update = {
  __typename?: 'NewsMediaFields_sizes_opengraph_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Height = {
  __typename?: 'NewsMediaFields_sizes_opengraph_height';
  create?: Maybe<NewsMediaFields_Sizes_Opengraph_Height_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Opengraph_Height_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Opengraph_Height_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Opengraph_Height_Update>;
};

export type NewsMediaFields_Sizes_Opengraph_Height_Create = {
  __typename?: 'NewsMediaFields_sizes_opengraph_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Height_Delete = {
  __typename?: 'NewsMediaFields_sizes_opengraph_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Height_Read = {
  __typename?: 'NewsMediaFields_sizes_opengraph_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Height_Update = {
  __typename?: 'NewsMediaFields_sizes_opengraph_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_MimeType = {
  __typename?: 'NewsMediaFields_sizes_opengraph_mimeType';
  create?: Maybe<NewsMediaFields_Sizes_Opengraph_MimeType_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Opengraph_MimeType_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Opengraph_MimeType_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Opengraph_MimeType_Update>;
};

export type NewsMediaFields_Sizes_Opengraph_MimeType_Create = {
  __typename?: 'NewsMediaFields_sizes_opengraph_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_MimeType_Delete = {
  __typename?: 'NewsMediaFields_sizes_opengraph_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_MimeType_Read = {
  __typename?: 'NewsMediaFields_sizes_opengraph_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_MimeType_Update = {
  __typename?: 'NewsMediaFields_sizes_opengraph_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Url = {
  __typename?: 'NewsMediaFields_sizes_opengraph_url';
  create?: Maybe<NewsMediaFields_Sizes_Opengraph_Url_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Opengraph_Url_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Opengraph_Url_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Opengraph_Url_Update>;
};

export type NewsMediaFields_Sizes_Opengraph_Url_Create = {
  __typename?: 'NewsMediaFields_sizes_opengraph_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Url_Delete = {
  __typename?: 'NewsMediaFields_sizes_opengraph_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Url_Read = {
  __typename?: 'NewsMediaFields_sizes_opengraph_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Url_Update = {
  __typename?: 'NewsMediaFields_sizes_opengraph_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Width = {
  __typename?: 'NewsMediaFields_sizes_opengraph_width';
  create?: Maybe<NewsMediaFields_Sizes_Opengraph_Width_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Opengraph_Width_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Opengraph_Width_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Opengraph_Width_Update>;
};

export type NewsMediaFields_Sizes_Opengraph_Width_Create = {
  __typename?: 'NewsMediaFields_sizes_opengraph_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Width_Delete = {
  __typename?: 'NewsMediaFields_sizes_opengraph_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Width_Read = {
  __typename?: 'NewsMediaFields_sizes_opengraph_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Opengraph_Width_Update = {
  __typename?: 'NewsMediaFields_sizes_opengraph_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm = {
  __typename?: 'NewsMediaFields_sizes_sm';
  create?: Maybe<NewsMediaFields_Sizes_Sm_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Sm_Delete>;
  fields?: Maybe<NewsMediaFields_Sizes_Sm_Fields>;
  read?: Maybe<NewsMediaFields_Sizes_Sm_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Sm_Update>;
};

export type NewsMediaFields_Sizes_Sm_Create = {
  __typename?: 'NewsMediaFields_sizes_sm_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Delete = {
  __typename?: 'NewsMediaFields_sizes_sm_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Fields = {
  __typename?: 'NewsMediaFields_sizes_sm_Fields';
  filename?: Maybe<NewsMediaFields_Sizes_Sm_Filename>;
  filesize?: Maybe<NewsMediaFields_Sizes_Sm_Filesize>;
  height?: Maybe<NewsMediaFields_Sizes_Sm_Height>;
  mimeType?: Maybe<NewsMediaFields_Sizes_Sm_MimeType>;
  url?: Maybe<NewsMediaFields_Sizes_Sm_Url>;
  width?: Maybe<NewsMediaFields_Sizes_Sm_Width>;
};

export type NewsMediaFields_Sizes_Sm_Read = {
  __typename?: 'NewsMediaFields_sizes_sm_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Update = {
  __typename?: 'NewsMediaFields_sizes_sm_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Filename = {
  __typename?: 'NewsMediaFields_sizes_sm_filename';
  create?: Maybe<NewsMediaFields_Sizes_Sm_Filename_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Sm_Filename_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Sm_Filename_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Sm_Filename_Update>;
};

export type NewsMediaFields_Sizes_Sm_Filename_Create = {
  __typename?: 'NewsMediaFields_sizes_sm_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Filename_Delete = {
  __typename?: 'NewsMediaFields_sizes_sm_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Filename_Read = {
  __typename?: 'NewsMediaFields_sizes_sm_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Filename_Update = {
  __typename?: 'NewsMediaFields_sizes_sm_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Filesize = {
  __typename?: 'NewsMediaFields_sizes_sm_filesize';
  create?: Maybe<NewsMediaFields_Sizes_Sm_Filesize_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Sm_Filesize_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Sm_Filesize_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Sm_Filesize_Update>;
};

export type NewsMediaFields_Sizes_Sm_Filesize_Create = {
  __typename?: 'NewsMediaFields_sizes_sm_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Filesize_Delete = {
  __typename?: 'NewsMediaFields_sizes_sm_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Filesize_Read = {
  __typename?: 'NewsMediaFields_sizes_sm_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Filesize_Update = {
  __typename?: 'NewsMediaFields_sizes_sm_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Height = {
  __typename?: 'NewsMediaFields_sizes_sm_height';
  create?: Maybe<NewsMediaFields_Sizes_Sm_Height_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Sm_Height_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Sm_Height_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Sm_Height_Update>;
};

export type NewsMediaFields_Sizes_Sm_Height_Create = {
  __typename?: 'NewsMediaFields_sizes_sm_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Height_Delete = {
  __typename?: 'NewsMediaFields_sizes_sm_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Height_Read = {
  __typename?: 'NewsMediaFields_sizes_sm_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Height_Update = {
  __typename?: 'NewsMediaFields_sizes_sm_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_MimeType = {
  __typename?: 'NewsMediaFields_sizes_sm_mimeType';
  create?: Maybe<NewsMediaFields_Sizes_Sm_MimeType_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Sm_MimeType_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Sm_MimeType_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Sm_MimeType_Update>;
};

export type NewsMediaFields_Sizes_Sm_MimeType_Create = {
  __typename?: 'NewsMediaFields_sizes_sm_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_MimeType_Delete = {
  __typename?: 'NewsMediaFields_sizes_sm_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_MimeType_Read = {
  __typename?: 'NewsMediaFields_sizes_sm_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_MimeType_Update = {
  __typename?: 'NewsMediaFields_sizes_sm_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Url = {
  __typename?: 'NewsMediaFields_sizes_sm_url';
  create?: Maybe<NewsMediaFields_Sizes_Sm_Url_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Sm_Url_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Sm_Url_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Sm_Url_Update>;
};

export type NewsMediaFields_Sizes_Sm_Url_Create = {
  __typename?: 'NewsMediaFields_sizes_sm_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Url_Delete = {
  __typename?: 'NewsMediaFields_sizes_sm_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Url_Read = {
  __typename?: 'NewsMediaFields_sizes_sm_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Url_Update = {
  __typename?: 'NewsMediaFields_sizes_sm_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Width = {
  __typename?: 'NewsMediaFields_sizes_sm_width';
  create?: Maybe<NewsMediaFields_Sizes_Sm_Width_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Sm_Width_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Sm_Width_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Sm_Width_Update>;
};

export type NewsMediaFields_Sizes_Sm_Width_Create = {
  __typename?: 'NewsMediaFields_sizes_sm_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Width_Delete = {
  __typename?: 'NewsMediaFields_sizes_sm_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Width_Read = {
  __typename?: 'NewsMediaFields_sizes_sm_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Sm_Width_Update = {
  __typename?: 'NewsMediaFields_sizes_sm_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl = {
  __typename?: 'NewsMediaFields_sizes_xl';
  create?: Maybe<NewsMediaFields_Sizes_Xl_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xl_Delete>;
  fields?: Maybe<NewsMediaFields_Sizes_Xl_Fields>;
  read?: Maybe<NewsMediaFields_Sizes_Xl_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xl_Update>;
};

export type NewsMediaFields_Sizes_Xl_Create = {
  __typename?: 'NewsMediaFields_sizes_xl_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Delete = {
  __typename?: 'NewsMediaFields_sizes_xl_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Fields = {
  __typename?: 'NewsMediaFields_sizes_xl_Fields';
  filename?: Maybe<NewsMediaFields_Sizes_Xl_Filename>;
  filesize?: Maybe<NewsMediaFields_Sizes_Xl_Filesize>;
  height?: Maybe<NewsMediaFields_Sizes_Xl_Height>;
  mimeType?: Maybe<NewsMediaFields_Sizes_Xl_MimeType>;
  url?: Maybe<NewsMediaFields_Sizes_Xl_Url>;
  width?: Maybe<NewsMediaFields_Sizes_Xl_Width>;
};

export type NewsMediaFields_Sizes_Xl_Read = {
  __typename?: 'NewsMediaFields_sizes_xl_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Update = {
  __typename?: 'NewsMediaFields_sizes_xl_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Filename = {
  __typename?: 'NewsMediaFields_sizes_xl_filename';
  create?: Maybe<NewsMediaFields_Sizes_Xl_Filename_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xl_Filename_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xl_Filename_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xl_Filename_Update>;
};

export type NewsMediaFields_Sizes_Xl_Filename_Create = {
  __typename?: 'NewsMediaFields_sizes_xl_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Filename_Delete = {
  __typename?: 'NewsMediaFields_sizes_xl_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Filename_Read = {
  __typename?: 'NewsMediaFields_sizes_xl_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Filename_Update = {
  __typename?: 'NewsMediaFields_sizes_xl_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Filesize = {
  __typename?: 'NewsMediaFields_sizes_xl_filesize';
  create?: Maybe<NewsMediaFields_Sizes_Xl_Filesize_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xl_Filesize_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xl_Filesize_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xl_Filesize_Update>;
};

export type NewsMediaFields_Sizes_Xl_Filesize_Create = {
  __typename?: 'NewsMediaFields_sizes_xl_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Filesize_Delete = {
  __typename?: 'NewsMediaFields_sizes_xl_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Filesize_Read = {
  __typename?: 'NewsMediaFields_sizes_xl_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Filesize_Update = {
  __typename?: 'NewsMediaFields_sizes_xl_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Height = {
  __typename?: 'NewsMediaFields_sizes_xl_height';
  create?: Maybe<NewsMediaFields_Sizes_Xl_Height_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xl_Height_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xl_Height_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xl_Height_Update>;
};

export type NewsMediaFields_Sizes_Xl_Height_Create = {
  __typename?: 'NewsMediaFields_sizes_xl_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Height_Delete = {
  __typename?: 'NewsMediaFields_sizes_xl_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Height_Read = {
  __typename?: 'NewsMediaFields_sizes_xl_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Height_Update = {
  __typename?: 'NewsMediaFields_sizes_xl_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_MimeType = {
  __typename?: 'NewsMediaFields_sizes_xl_mimeType';
  create?: Maybe<NewsMediaFields_Sizes_Xl_MimeType_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xl_MimeType_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xl_MimeType_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xl_MimeType_Update>;
};

export type NewsMediaFields_Sizes_Xl_MimeType_Create = {
  __typename?: 'NewsMediaFields_sizes_xl_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_MimeType_Delete = {
  __typename?: 'NewsMediaFields_sizes_xl_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_MimeType_Read = {
  __typename?: 'NewsMediaFields_sizes_xl_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_MimeType_Update = {
  __typename?: 'NewsMediaFields_sizes_xl_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Url = {
  __typename?: 'NewsMediaFields_sizes_xl_url';
  create?: Maybe<NewsMediaFields_Sizes_Xl_Url_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xl_Url_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xl_Url_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xl_Url_Update>;
};

export type NewsMediaFields_Sizes_Xl_Url_Create = {
  __typename?: 'NewsMediaFields_sizes_xl_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Url_Delete = {
  __typename?: 'NewsMediaFields_sizes_xl_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Url_Read = {
  __typename?: 'NewsMediaFields_sizes_xl_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Url_Update = {
  __typename?: 'NewsMediaFields_sizes_xl_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Width = {
  __typename?: 'NewsMediaFields_sizes_xl_width';
  create?: Maybe<NewsMediaFields_Sizes_Xl_Width_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xl_Width_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xl_Width_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xl_Width_Update>;
};

export type NewsMediaFields_Sizes_Xl_Width_Create = {
  __typename?: 'NewsMediaFields_sizes_xl_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Width_Delete = {
  __typename?: 'NewsMediaFields_sizes_xl_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Width_Read = {
  __typename?: 'NewsMediaFields_sizes_xl_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xl_Width_Update = {
  __typename?: 'NewsMediaFields_sizes_xl_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs = {
  __typename?: 'NewsMediaFields_sizes_xs';
  create?: Maybe<NewsMediaFields_Sizes_Xs_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xs_Delete>;
  fields?: Maybe<NewsMediaFields_Sizes_Xs_Fields>;
  read?: Maybe<NewsMediaFields_Sizes_Xs_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xs_Update>;
};

export type NewsMediaFields_Sizes_Xs_Create = {
  __typename?: 'NewsMediaFields_sizes_xs_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Delete = {
  __typename?: 'NewsMediaFields_sizes_xs_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Fields = {
  __typename?: 'NewsMediaFields_sizes_xs_Fields';
  filename?: Maybe<NewsMediaFields_Sizes_Xs_Filename>;
  filesize?: Maybe<NewsMediaFields_Sizes_Xs_Filesize>;
  height?: Maybe<NewsMediaFields_Sizes_Xs_Height>;
  mimeType?: Maybe<NewsMediaFields_Sizes_Xs_MimeType>;
  url?: Maybe<NewsMediaFields_Sizes_Xs_Url>;
  width?: Maybe<NewsMediaFields_Sizes_Xs_Width>;
};

export type NewsMediaFields_Sizes_Xs_Read = {
  __typename?: 'NewsMediaFields_sizes_xs_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Update = {
  __typename?: 'NewsMediaFields_sizes_xs_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Filename = {
  __typename?: 'NewsMediaFields_sizes_xs_filename';
  create?: Maybe<NewsMediaFields_Sizes_Xs_Filename_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xs_Filename_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xs_Filename_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xs_Filename_Update>;
};

export type NewsMediaFields_Sizes_Xs_Filename_Create = {
  __typename?: 'NewsMediaFields_sizes_xs_filename_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Filename_Delete = {
  __typename?: 'NewsMediaFields_sizes_xs_filename_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Filename_Read = {
  __typename?: 'NewsMediaFields_sizes_xs_filename_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Filename_Update = {
  __typename?: 'NewsMediaFields_sizes_xs_filename_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Filesize = {
  __typename?: 'NewsMediaFields_sizes_xs_filesize';
  create?: Maybe<NewsMediaFields_Sizes_Xs_Filesize_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xs_Filesize_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xs_Filesize_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xs_Filesize_Update>;
};

export type NewsMediaFields_Sizes_Xs_Filesize_Create = {
  __typename?: 'NewsMediaFields_sizes_xs_filesize_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Filesize_Delete = {
  __typename?: 'NewsMediaFields_sizes_xs_filesize_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Filesize_Read = {
  __typename?: 'NewsMediaFields_sizes_xs_filesize_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Filesize_Update = {
  __typename?: 'NewsMediaFields_sizes_xs_filesize_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Height = {
  __typename?: 'NewsMediaFields_sizes_xs_height';
  create?: Maybe<NewsMediaFields_Sizes_Xs_Height_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xs_Height_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xs_Height_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xs_Height_Update>;
};

export type NewsMediaFields_Sizes_Xs_Height_Create = {
  __typename?: 'NewsMediaFields_sizes_xs_height_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Height_Delete = {
  __typename?: 'NewsMediaFields_sizes_xs_height_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Height_Read = {
  __typename?: 'NewsMediaFields_sizes_xs_height_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Height_Update = {
  __typename?: 'NewsMediaFields_sizes_xs_height_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_MimeType = {
  __typename?: 'NewsMediaFields_sizes_xs_mimeType';
  create?: Maybe<NewsMediaFields_Sizes_Xs_MimeType_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xs_MimeType_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xs_MimeType_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xs_MimeType_Update>;
};

export type NewsMediaFields_Sizes_Xs_MimeType_Create = {
  __typename?: 'NewsMediaFields_sizes_xs_mimeType_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_MimeType_Delete = {
  __typename?: 'NewsMediaFields_sizes_xs_mimeType_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_MimeType_Read = {
  __typename?: 'NewsMediaFields_sizes_xs_mimeType_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_MimeType_Update = {
  __typename?: 'NewsMediaFields_sizes_xs_mimeType_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Url = {
  __typename?: 'NewsMediaFields_sizes_xs_url';
  create?: Maybe<NewsMediaFields_Sizes_Xs_Url_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xs_Url_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xs_Url_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xs_Url_Update>;
};

export type NewsMediaFields_Sizes_Xs_Url_Create = {
  __typename?: 'NewsMediaFields_sizes_xs_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Url_Delete = {
  __typename?: 'NewsMediaFields_sizes_xs_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Url_Read = {
  __typename?: 'NewsMediaFields_sizes_xs_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Url_Update = {
  __typename?: 'NewsMediaFields_sizes_xs_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Width = {
  __typename?: 'NewsMediaFields_sizes_xs_width';
  create?: Maybe<NewsMediaFields_Sizes_Xs_Width_Create>;
  delete?: Maybe<NewsMediaFields_Sizes_Xs_Width_Delete>;
  read?: Maybe<NewsMediaFields_Sizes_Xs_Width_Read>;
  update?: Maybe<NewsMediaFields_Sizes_Xs_Width_Update>;
};

export type NewsMediaFields_Sizes_Xs_Width_Create = {
  __typename?: 'NewsMediaFields_sizes_xs_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Width_Delete = {
  __typename?: 'NewsMediaFields_sizes_xs_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Width_Read = {
  __typename?: 'NewsMediaFields_sizes_xs_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Sizes_Xs_Width_Update = {
  __typename?: 'NewsMediaFields_sizes_xs_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_UpdatedAt = {
  __typename?: 'NewsMediaFields_updatedAt';
  create?: Maybe<NewsMediaFields_UpdatedAt_Create>;
  delete?: Maybe<NewsMediaFields_UpdatedAt_Delete>;
  read?: Maybe<NewsMediaFields_UpdatedAt_Read>;
  update?: Maybe<NewsMediaFields_UpdatedAt_Update>;
};

export type NewsMediaFields_UpdatedAt_Create = {
  __typename?: 'NewsMediaFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_UpdatedAt_Delete = {
  __typename?: 'NewsMediaFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_UpdatedAt_Read = {
  __typename?: 'NewsMediaFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_UpdatedAt_Update = {
  __typename?: 'NewsMediaFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Url = {
  __typename?: 'NewsMediaFields_url';
  create?: Maybe<NewsMediaFields_Url_Create>;
  delete?: Maybe<NewsMediaFields_Url_Delete>;
  read?: Maybe<NewsMediaFields_Url_Read>;
  update?: Maybe<NewsMediaFields_Url_Update>;
};

export type NewsMediaFields_Url_Create = {
  __typename?: 'NewsMediaFields_url_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Url_Delete = {
  __typename?: 'NewsMediaFields_url_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Url_Read = {
  __typename?: 'NewsMediaFields_url_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Url_Update = {
  __typename?: 'NewsMediaFields_url_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Width = {
  __typename?: 'NewsMediaFields_width';
  create?: Maybe<NewsMediaFields_Width_Create>;
  delete?: Maybe<NewsMediaFields_Width_Delete>;
  read?: Maybe<NewsMediaFields_Width_Read>;
  update?: Maybe<NewsMediaFields_Width_Update>;
};

export type NewsMediaFields_Width_Create = {
  __typename?: 'NewsMediaFields_width_Create';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Width_Delete = {
  __typename?: 'NewsMediaFields_width_Delete';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Width_Read = {
  __typename?: 'NewsMediaFields_width_Read';
  permission: Scalars['Boolean'];
};

export type NewsMediaFields_Width_Update = {
  __typename?: 'NewsMediaFields_width_Update';
  permission: Scalars['Boolean'];
};

export type NewsMediaReadAccess = {
  __typename?: 'NewsMediaReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsMediaReadDocAccess = {
  __typename?: 'NewsMediaReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsMediaUpdateAccess = {
  __typename?: 'NewsMediaUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsMediaUpdateDocAccess = {
  __typename?: 'NewsMediaUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type NewsMedia_Sizes = {
  __typename?: 'NewsMedia_Sizes';
  lg?: Maybe<NewsMedia_Sizes_Lg>;
  opengraph?: Maybe<NewsMedia_Sizes_Opengraph>;
  sm?: Maybe<NewsMedia_Sizes_Sm>;
  xl?: Maybe<NewsMedia_Sizes_Xl>;
  xs?: Maybe<NewsMedia_Sizes_Xs>;
};

export type NewsMedia_Sizes_Lg = {
  __typename?: 'NewsMedia_Sizes_Lg';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type NewsMedia_Sizes_Opengraph = {
  __typename?: 'NewsMedia_Sizes_Opengraph';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type NewsMedia_Sizes_Sm = {
  __typename?: 'NewsMedia_Sizes_Sm';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type NewsMedia_Sizes_Xl = {
  __typename?: 'NewsMedia_Sizes_Xl';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type NewsMedia_Sizes_Xs = {
  __typename?: 'NewsMedia_Sizes_Xs';
  filename?: Maybe<Scalars['String']>;
  filesize?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type NewsMedia_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type NewsMedia_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Lg__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Lg__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Lg__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Lg__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Lg__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Lg__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Opengraph__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Opengraph__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Opengraph__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Opengraph__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Opengraph__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Opengraph__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Sm__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Sm__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Sm__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Sm__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Sm__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Sm__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Xl__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Xl__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Xl__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Xl__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Xl__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Xl__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Xs__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Xs__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Xs__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_Sizes__Xs__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Xs__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Sizes__Xs__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedia_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type NewsMedia_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsMedia_Where = {
  AND?: InputMaybe<Array<InputMaybe<NewsMedia_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsMedia_Where_Or>>>;
  alt?: InputMaybe<NewsMedia_Alt_Operator>;
  createdAt?: InputMaybe<NewsMedia_CreatedAt_Operator>;
  filename?: InputMaybe<NewsMedia_Filename_Operator>;
  filesize?: InputMaybe<NewsMedia_Filesize_Operator>;
  height?: InputMaybe<NewsMedia_Height_Operator>;
  id?: InputMaybe<NewsMedia_Id_Operator>;
  mimeType?: InputMaybe<NewsMedia_MimeType_Operator>;
  prefix?: InputMaybe<NewsMedia_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<NewsMedia_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<NewsMedia_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<NewsMedia_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<NewsMedia_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<NewsMedia_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<NewsMedia_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<NewsMedia_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<NewsMedia_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<NewsMedia_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<NewsMedia_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<NewsMedia_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<NewsMedia_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<NewsMedia_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<NewsMedia_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<NewsMedia_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<NewsMedia_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<NewsMedia_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<NewsMedia_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<NewsMedia_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<NewsMedia_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<NewsMedia_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<NewsMedia_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<NewsMedia_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<NewsMedia_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<NewsMedia_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<NewsMedia_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<NewsMedia_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<NewsMedia_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<NewsMedia_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<NewsMedia_Sizes__Xs__Width_Operator>;
  updatedAt?: InputMaybe<NewsMedia_UpdatedAt_Operator>;
  url?: InputMaybe<NewsMedia_Url_Operator>;
  width?: InputMaybe<NewsMedia_Width_Operator>;
};

export type NewsMedia_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<NewsMedia_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsMedia_Where_Or>>>;
  alt?: InputMaybe<NewsMedia_Alt_Operator>;
  createdAt?: InputMaybe<NewsMedia_CreatedAt_Operator>;
  filename?: InputMaybe<NewsMedia_Filename_Operator>;
  filesize?: InputMaybe<NewsMedia_Filesize_Operator>;
  height?: InputMaybe<NewsMedia_Height_Operator>;
  id?: InputMaybe<NewsMedia_Id_Operator>;
  mimeType?: InputMaybe<NewsMedia_MimeType_Operator>;
  prefix?: InputMaybe<NewsMedia_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<NewsMedia_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<NewsMedia_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<NewsMedia_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<NewsMedia_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<NewsMedia_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<NewsMedia_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<NewsMedia_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<NewsMedia_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<NewsMedia_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<NewsMedia_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<NewsMedia_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<NewsMedia_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<NewsMedia_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<NewsMedia_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<NewsMedia_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<NewsMedia_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<NewsMedia_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<NewsMedia_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<NewsMedia_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<NewsMedia_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<NewsMedia_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<NewsMedia_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<NewsMedia_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<NewsMedia_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<NewsMedia_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<NewsMedia_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<NewsMedia_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<NewsMedia_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<NewsMedia_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<NewsMedia_Sizes__Xs__Width_Operator>;
  updatedAt?: InputMaybe<NewsMedia_UpdatedAt_Operator>;
  url?: InputMaybe<NewsMedia_Url_Operator>;
  width?: InputMaybe<NewsMedia_Width_Operator>;
};

export type NewsMedia_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<NewsMedia_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsMedia_Where_Or>>>;
  alt?: InputMaybe<NewsMedia_Alt_Operator>;
  createdAt?: InputMaybe<NewsMedia_CreatedAt_Operator>;
  filename?: InputMaybe<NewsMedia_Filename_Operator>;
  filesize?: InputMaybe<NewsMedia_Filesize_Operator>;
  height?: InputMaybe<NewsMedia_Height_Operator>;
  id?: InputMaybe<NewsMedia_Id_Operator>;
  mimeType?: InputMaybe<NewsMedia_MimeType_Operator>;
  prefix?: InputMaybe<NewsMedia_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<NewsMedia_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<NewsMedia_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<NewsMedia_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<NewsMedia_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<NewsMedia_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<NewsMedia_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<NewsMedia_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<NewsMedia_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<NewsMedia_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<NewsMedia_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<NewsMedia_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<NewsMedia_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<NewsMedia_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<NewsMedia_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<NewsMedia_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<NewsMedia_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<NewsMedia_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<NewsMedia_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<NewsMedia_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<NewsMedia_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<NewsMedia_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<NewsMedia_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<NewsMedia_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<NewsMedia_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<NewsMedia_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<NewsMedia_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<NewsMedia_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<NewsMedia_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<NewsMedia_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<NewsMedia_Sizes__Xs__Width_Operator>;
  updatedAt?: InputMaybe<NewsMedia_UpdatedAt_Operator>;
  url?: InputMaybe<NewsMedia_Url_Operator>;
  width?: InputMaybe<NewsMedia_Width_Operator>;
};

export type NewsMedia_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsMedias = {
  __typename?: 'NewsMedias';
  docs?: Maybe<Array<Maybe<NewsMedia>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
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
  id?: Maybe<Scalars['String']>;
  previewBanner?: Maybe<NewsMedia>;
  publishDate?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NewsPostContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type NewsPostPreviewBannerArgs = {
  where?: InputMaybe<NewsPost_PreviewBanner_Where>;
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
  updatedAt?: Maybe<Scalars['DateTime']>;
  version?: Maybe<NewsPostVersion_Version>;
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
  previewBanner?: Maybe<NewsMedia>;
  publishDate?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type NewsPostVersion_VersionContentArgs = {
  depth?: InputMaybe<Scalars['Int']>;
};


export type NewsPostVersion_VersionPreviewBannerArgs = {
  where?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Where>;
};

export type NewsPostVersion_Version_PreviewBanner_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type NewsPostVersion_Version_PreviewBanner_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Lg__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Sm__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xl__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xs__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPostVersion_Version_PreviewBanner_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type NewsPostVersion_Version_PreviewBanner_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPostVersion_Version_PreviewBanner_Where = {
  AND?: InputMaybe<Array<InputMaybe<NewsPostVersion_Version_PreviewBanner_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsPostVersion_Version_PreviewBanner_Where_Or>>>;
  alt?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Alt_Operator>;
  createdAt?: InputMaybe<NewsPostVersion_Version_PreviewBanner_CreatedAt_Operator>;
  filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Filename_Operator>;
  filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Filesize_Operator>;
  height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Height_Operator>;
  id?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Id_Operator>;
  mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_MimeType_Operator>;
  prefix?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Width_Operator>;
  updatedAt?: InputMaybe<NewsPostVersion_Version_PreviewBanner_UpdatedAt_Operator>;
  url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Url_Operator>;
  width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Width_Operator>;
};

export type NewsPostVersion_Version_PreviewBanner_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<NewsPostVersion_Version_PreviewBanner_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsPostVersion_Version_PreviewBanner_Where_Or>>>;
  alt?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Alt_Operator>;
  createdAt?: InputMaybe<NewsPostVersion_Version_PreviewBanner_CreatedAt_Operator>;
  filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Filename_Operator>;
  filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Filesize_Operator>;
  height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Height_Operator>;
  id?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Id_Operator>;
  mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_MimeType_Operator>;
  prefix?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Width_Operator>;
  updatedAt?: InputMaybe<NewsPostVersion_Version_PreviewBanner_UpdatedAt_Operator>;
  url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Url_Operator>;
  width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Width_Operator>;
};

export type NewsPostVersion_Version_PreviewBanner_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<NewsPostVersion_Version_PreviewBanner_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsPostVersion_Version_PreviewBanner_Where_Or>>>;
  alt?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Alt_Operator>;
  createdAt?: InputMaybe<NewsPostVersion_Version_PreviewBanner_CreatedAt_Operator>;
  filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Filename_Operator>;
  filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Filesize_Operator>;
  height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Height_Operator>;
  id?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Id_Operator>;
  mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_MimeType_Operator>;
  prefix?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Sizes__Xs__Width_Operator>;
  updatedAt?: InputMaybe<NewsPostVersion_Version_PreviewBanner_UpdatedAt_Operator>;
  url?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Url_Operator>;
  width?: InputMaybe<NewsPostVersion_Version_PreviewBanner_Width_Operator>;
};

export type NewsPostVersion_Version_PreviewBanner_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export enum NewsPostVersion_Version__Status {
  Draft = 'draft',
  Published = 'published'
}

export type NewsPost_PreviewBanner_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type NewsPost_PreviewBanner_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Lg__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Lg__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Lg__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Lg__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Lg__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Lg__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Opengraph__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Opengraph__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Opengraph__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Opengraph__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Opengraph__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Opengraph__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Sm__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Sm__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Sm__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Sm__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Sm__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Sm__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Xl__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Xl__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Xl__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Xl__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Xl__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Xl__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Xs__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Xs__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Xs__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_Sizes__Xs__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Xs__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Sizes__Xs__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

export type NewsPost_PreviewBanner_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type NewsPost_PreviewBanner_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type NewsPost_PreviewBanner_Where = {
  AND?: InputMaybe<Array<InputMaybe<NewsPost_PreviewBanner_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsPost_PreviewBanner_Where_Or>>>;
  alt?: InputMaybe<NewsPost_PreviewBanner_Alt_Operator>;
  createdAt?: InputMaybe<NewsPost_PreviewBanner_CreatedAt_Operator>;
  filename?: InputMaybe<NewsPost_PreviewBanner_Filename_Operator>;
  filesize?: InputMaybe<NewsPost_PreviewBanner_Filesize_Operator>;
  height?: InputMaybe<NewsPost_PreviewBanner_Height_Operator>;
  id?: InputMaybe<NewsPost_PreviewBanner_Id_Operator>;
  mimeType?: InputMaybe<NewsPost_PreviewBanner_MimeType_Operator>;
  prefix?: InputMaybe<NewsPost_PreviewBanner_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Width_Operator>;
  updatedAt?: InputMaybe<NewsPost_PreviewBanner_UpdatedAt_Operator>;
  url?: InputMaybe<NewsPost_PreviewBanner_Url_Operator>;
  width?: InputMaybe<NewsPost_PreviewBanner_Width_Operator>;
};

export type NewsPost_PreviewBanner_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<NewsPost_PreviewBanner_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsPost_PreviewBanner_Where_Or>>>;
  alt?: InputMaybe<NewsPost_PreviewBanner_Alt_Operator>;
  createdAt?: InputMaybe<NewsPost_PreviewBanner_CreatedAt_Operator>;
  filename?: InputMaybe<NewsPost_PreviewBanner_Filename_Operator>;
  filesize?: InputMaybe<NewsPost_PreviewBanner_Filesize_Operator>;
  height?: InputMaybe<NewsPost_PreviewBanner_Height_Operator>;
  id?: InputMaybe<NewsPost_PreviewBanner_Id_Operator>;
  mimeType?: InputMaybe<NewsPost_PreviewBanner_MimeType_Operator>;
  prefix?: InputMaybe<NewsPost_PreviewBanner_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Width_Operator>;
  updatedAt?: InputMaybe<NewsPost_PreviewBanner_UpdatedAt_Operator>;
  url?: InputMaybe<NewsPost_PreviewBanner_Url_Operator>;
  width?: InputMaybe<NewsPost_PreviewBanner_Width_Operator>;
};

export type NewsPost_PreviewBanner_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<NewsPost_PreviewBanner_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsPost_PreviewBanner_Where_Or>>>;
  alt?: InputMaybe<NewsPost_PreviewBanner_Alt_Operator>;
  createdAt?: InputMaybe<NewsPost_PreviewBanner_CreatedAt_Operator>;
  filename?: InputMaybe<NewsPost_PreviewBanner_Filename_Operator>;
  filesize?: InputMaybe<NewsPost_PreviewBanner_Filesize_Operator>;
  height?: InputMaybe<NewsPost_PreviewBanner_Height_Operator>;
  id?: InputMaybe<NewsPost_PreviewBanner_Id_Operator>;
  mimeType?: InputMaybe<NewsPost_PreviewBanner_MimeType_Operator>;
  prefix?: InputMaybe<NewsPost_PreviewBanner_Prefix_Operator>;
  sizes__lg__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Filename_Operator>;
  sizes__lg__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Filesize_Operator>;
  sizes__lg__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Height_Operator>;
  sizes__lg__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__MimeType_Operator>;
  sizes__lg__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Url_Operator>;
  sizes__lg__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Lg__Width_Operator>;
  sizes__opengraph__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Filename_Operator>;
  sizes__opengraph__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Filesize_Operator>;
  sizes__opengraph__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Height_Operator>;
  sizes__opengraph__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__MimeType_Operator>;
  sizes__opengraph__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Url_Operator>;
  sizes__opengraph__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Opengraph__Width_Operator>;
  sizes__sm__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Filename_Operator>;
  sizes__sm__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Filesize_Operator>;
  sizes__sm__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Height_Operator>;
  sizes__sm__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__MimeType_Operator>;
  sizes__sm__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Url_Operator>;
  sizes__sm__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Sm__Width_Operator>;
  sizes__xl__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Filename_Operator>;
  sizes__xl__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Filesize_Operator>;
  sizes__xl__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Height_Operator>;
  sizes__xl__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__MimeType_Operator>;
  sizes__xl__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Url_Operator>;
  sizes__xl__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xl__Width_Operator>;
  sizes__xs__filename?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Filename_Operator>;
  sizes__xs__filesize?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Filesize_Operator>;
  sizes__xs__height?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Height_Operator>;
  sizes__xs__mimeType?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__MimeType_Operator>;
  sizes__xs__url?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Url_Operator>;
  sizes__xs__width?: InputMaybe<NewsPost_PreviewBanner_Sizes__Xs__Width_Operator>;
  updatedAt?: InputMaybe<NewsPost_PreviewBanner_UpdatedAt_Operator>;
  url?: InputMaybe<NewsPost_PreviewBanner_Url_Operator>;
  width?: InputMaybe<NewsPost_PreviewBanner_Width_Operator>;
};

export type NewsPost_PreviewBanner_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
};

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
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
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
  docs?: Maybe<Array<Maybe<NewsPost>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
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

export type OnboardingEmail = {
  __typename?: 'OnboardingEmail';
  createdAt?: Maybe<Scalars['DateTime']>;
  emailSent?: Maybe<Scalars['Boolean']>;
  firstShowDate: Scalars['String'];
  hostName: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  occurrence: Scalars['String'];
  recipients?: Maybe<Array<OnboardingEmail_Recipients>>;
  show: Show;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OnboardingEmail_Recipients = {
  __typename?: 'OnboardingEmail_Recipients';
  email?: Maybe<Scalars['EmailAddress']>;
  id?: Maybe<Scalars['String']>;
};

export type OnboardingEmail_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type OnboardingEmail_EmailSent_Operator = {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
};

export type OnboardingEmail_FirstShowDate_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OnboardingEmail_HostName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OnboardingEmail_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OnboardingEmail_Occurrence_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OnboardingEmail_Recipients__Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
};

export type OnboardingEmail_Recipients__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type OnboardingEmail_Show_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
};

export type OnboardingEmail_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
};

export type OnboardingEmail_Where = {
  AND?: InputMaybe<Array<InputMaybe<OnboardingEmail_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<OnboardingEmail_Where_Or>>>;
  createdAt?: InputMaybe<OnboardingEmail_CreatedAt_Operator>;
  emailSent?: InputMaybe<OnboardingEmail_EmailSent_Operator>;
  firstShowDate?: InputMaybe<OnboardingEmail_FirstShowDate_Operator>;
  hostName?: InputMaybe<OnboardingEmail_HostName_Operator>;
  id?: InputMaybe<OnboardingEmail_Id_Operator>;
  occurrence?: InputMaybe<OnboardingEmail_Occurrence_Operator>;
  recipients__email?: InputMaybe<OnboardingEmail_Recipients__Email_Operator>;
  recipients__id?: InputMaybe<OnboardingEmail_Recipients__Id_Operator>;
  show?: InputMaybe<OnboardingEmail_Show_Operator>;
  updatedAt?: InputMaybe<OnboardingEmail_UpdatedAt_Operator>;
};

export type OnboardingEmail_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<OnboardingEmail_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<OnboardingEmail_Where_Or>>>;
  createdAt?: InputMaybe<OnboardingEmail_CreatedAt_Operator>;
  emailSent?: InputMaybe<OnboardingEmail_EmailSent_Operator>;
  firstShowDate?: InputMaybe<OnboardingEmail_FirstShowDate_Operator>;
  hostName?: InputMaybe<OnboardingEmail_HostName_Operator>;
  id?: InputMaybe<OnboardingEmail_Id_Operator>;
  occurrence?: InputMaybe<OnboardingEmail_Occurrence_Operator>;
  recipients__email?: InputMaybe<OnboardingEmail_Recipients__Email_Operator>;
  recipients__id?: InputMaybe<OnboardingEmail_Recipients__Id_Operator>;
  show?: InputMaybe<OnboardingEmail_Show_Operator>;
  updatedAt?: InputMaybe<OnboardingEmail_UpdatedAt_Operator>;
};

export type OnboardingEmail_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<OnboardingEmail_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<OnboardingEmail_Where_Or>>>;
  createdAt?: InputMaybe<OnboardingEmail_CreatedAt_Operator>;
  emailSent?: InputMaybe<OnboardingEmail_EmailSent_Operator>;
  firstShowDate?: InputMaybe<OnboardingEmail_FirstShowDate_Operator>;
  hostName?: InputMaybe<OnboardingEmail_HostName_Operator>;
  id?: InputMaybe<OnboardingEmail_Id_Operator>;
  occurrence?: InputMaybe<OnboardingEmail_Occurrence_Operator>;
  recipients__email?: InputMaybe<OnboardingEmail_Recipients__Email_Operator>;
  recipients__id?: InputMaybe<OnboardingEmail_Recipients__Id_Operator>;
  show?: InputMaybe<OnboardingEmail_Show_Operator>;
  updatedAt?: InputMaybe<OnboardingEmail_UpdatedAt_Operator>;
};

export type OnboardingEmails = {
  __typename?: 'OnboardingEmails';
  docs?: Maybe<Array<Maybe<OnboardingEmail>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type OnboardingEmailsCreateAccess = {
  __typename?: 'OnboardingEmailsCreateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type OnboardingEmailsCreateDocAccess = {
  __typename?: 'OnboardingEmailsCreateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type OnboardingEmailsDeleteAccess = {
  __typename?: 'OnboardingEmailsDeleteAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type OnboardingEmailsDeleteDocAccess = {
  __typename?: 'OnboardingEmailsDeleteDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type OnboardingEmailsDocAccessFields = {
  __typename?: 'OnboardingEmailsDocAccessFields';
  createdAt?: Maybe<OnboardingEmailsDocAccessFields_CreatedAt>;
  emailSent?: Maybe<OnboardingEmailsDocAccessFields_EmailSent>;
  firstShowDate?: Maybe<OnboardingEmailsDocAccessFields_FirstShowDate>;
  hostName?: Maybe<OnboardingEmailsDocAccessFields_HostName>;
  occurrence?: Maybe<OnboardingEmailsDocAccessFields_Occurrence>;
  recipients?: Maybe<OnboardingEmailsDocAccessFields_Recipients>;
  show?: Maybe<OnboardingEmailsDocAccessFields_Show>;
  updatedAt?: Maybe<OnboardingEmailsDocAccessFields_UpdatedAt>;
};

export type OnboardingEmailsDocAccessFields_CreatedAt = {
  __typename?: 'OnboardingEmailsDocAccessFields_createdAt';
  create?: Maybe<OnboardingEmailsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<OnboardingEmailsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_CreatedAt_Update>;
};

export type OnboardingEmailsDocAccessFields_CreatedAt_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_CreatedAt_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_CreatedAt_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_EmailSent = {
  __typename?: 'OnboardingEmailsDocAccessFields_emailSent';
  create?: Maybe<OnboardingEmailsDocAccessFields_EmailSent_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_EmailSent_Delete>;
  read?: Maybe<OnboardingEmailsDocAccessFields_EmailSent_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_EmailSent_Update>;
};

export type OnboardingEmailsDocAccessFields_EmailSent_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_emailSent_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_EmailSent_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_emailSent_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_EmailSent_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_emailSent_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_EmailSent_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_emailSent_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_FirstShowDate = {
  __typename?: 'OnboardingEmailsDocAccessFields_firstShowDate';
  create?: Maybe<OnboardingEmailsDocAccessFields_FirstShowDate_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_FirstShowDate_Delete>;
  read?: Maybe<OnboardingEmailsDocAccessFields_FirstShowDate_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_FirstShowDate_Update>;
};

export type OnboardingEmailsDocAccessFields_FirstShowDate_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_firstShowDate_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_FirstShowDate_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_firstShowDate_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_FirstShowDate_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_firstShowDate_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_FirstShowDate_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_firstShowDate_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_HostName = {
  __typename?: 'OnboardingEmailsDocAccessFields_hostName';
  create?: Maybe<OnboardingEmailsDocAccessFields_HostName_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_HostName_Delete>;
  read?: Maybe<OnboardingEmailsDocAccessFields_HostName_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_HostName_Update>;
};

export type OnboardingEmailsDocAccessFields_HostName_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_hostName_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_HostName_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_hostName_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_HostName_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_hostName_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_HostName_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_hostName_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Occurrence = {
  __typename?: 'OnboardingEmailsDocAccessFields_occurrence';
  create?: Maybe<OnboardingEmailsDocAccessFields_Occurrence_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_Occurrence_Delete>;
  read?: Maybe<OnboardingEmailsDocAccessFields_Occurrence_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_Occurrence_Update>;
};

export type OnboardingEmailsDocAccessFields_Occurrence_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_occurrence_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Occurrence_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_occurrence_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Occurrence_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_occurrence_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Occurrence_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_occurrence_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients';
  create?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Delete>;
  fields?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Fields>;
  read?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Update>;
};

export type OnboardingEmailsDocAccessFields_Recipients_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Fields = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_Fields';
  email?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Email>;
  id?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Id>;
};

export type OnboardingEmailsDocAccessFields_Recipients_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Email = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_email';
  create?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Email_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Email_Delete>;
  read?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Email_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Email_Update>;
};

export type OnboardingEmailsDocAccessFields_Recipients_Email_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_email_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Email_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_email_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Email_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_email_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Email_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_email_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Id = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_id';
  create?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Id_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Id_Delete>;
  read?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Id_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_Recipients_Id_Update>;
};

export type OnboardingEmailsDocAccessFields_Recipients_Id_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_id_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Id_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_id_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Id_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_id_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Recipients_Id_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_recipients_id_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Show = {
  __typename?: 'OnboardingEmailsDocAccessFields_show';
  create?: Maybe<OnboardingEmailsDocAccessFields_Show_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_Show_Delete>;
  read?: Maybe<OnboardingEmailsDocAccessFields_Show_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_Show_Update>;
};

export type OnboardingEmailsDocAccessFields_Show_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_show_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Show_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_show_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Show_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_show_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_Show_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_show_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_UpdatedAt = {
  __typename?: 'OnboardingEmailsDocAccessFields_updatedAt';
  create?: Maybe<OnboardingEmailsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<OnboardingEmailsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<OnboardingEmailsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<OnboardingEmailsDocAccessFields_UpdatedAt_Update>;
};

export type OnboardingEmailsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'OnboardingEmailsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'OnboardingEmailsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'OnboardingEmailsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'OnboardingEmailsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields = {
  __typename?: 'OnboardingEmailsFields';
  createdAt?: Maybe<OnboardingEmailsFields_CreatedAt>;
  emailSent?: Maybe<OnboardingEmailsFields_EmailSent>;
  firstShowDate?: Maybe<OnboardingEmailsFields_FirstShowDate>;
  hostName?: Maybe<OnboardingEmailsFields_HostName>;
  occurrence?: Maybe<OnboardingEmailsFields_Occurrence>;
  recipients?: Maybe<OnboardingEmailsFields_Recipients>;
  show?: Maybe<OnboardingEmailsFields_Show>;
  updatedAt?: Maybe<OnboardingEmailsFields_UpdatedAt>;
};

export type OnboardingEmailsFields_CreatedAt = {
  __typename?: 'OnboardingEmailsFields_createdAt';
  create?: Maybe<OnboardingEmailsFields_CreatedAt_Create>;
  delete?: Maybe<OnboardingEmailsFields_CreatedAt_Delete>;
  read?: Maybe<OnboardingEmailsFields_CreatedAt_Read>;
  update?: Maybe<OnboardingEmailsFields_CreatedAt_Update>;
};

export type OnboardingEmailsFields_CreatedAt_Create = {
  __typename?: 'OnboardingEmailsFields_createdAt_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_CreatedAt_Delete = {
  __typename?: 'OnboardingEmailsFields_createdAt_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_CreatedAt_Read = {
  __typename?: 'OnboardingEmailsFields_createdAt_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_CreatedAt_Update = {
  __typename?: 'OnboardingEmailsFields_createdAt_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_EmailSent = {
  __typename?: 'OnboardingEmailsFields_emailSent';
  create?: Maybe<OnboardingEmailsFields_EmailSent_Create>;
  delete?: Maybe<OnboardingEmailsFields_EmailSent_Delete>;
  read?: Maybe<OnboardingEmailsFields_EmailSent_Read>;
  update?: Maybe<OnboardingEmailsFields_EmailSent_Update>;
};

export type OnboardingEmailsFields_EmailSent_Create = {
  __typename?: 'OnboardingEmailsFields_emailSent_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_EmailSent_Delete = {
  __typename?: 'OnboardingEmailsFields_emailSent_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_EmailSent_Read = {
  __typename?: 'OnboardingEmailsFields_emailSent_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_EmailSent_Update = {
  __typename?: 'OnboardingEmailsFields_emailSent_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_FirstShowDate = {
  __typename?: 'OnboardingEmailsFields_firstShowDate';
  create?: Maybe<OnboardingEmailsFields_FirstShowDate_Create>;
  delete?: Maybe<OnboardingEmailsFields_FirstShowDate_Delete>;
  read?: Maybe<OnboardingEmailsFields_FirstShowDate_Read>;
  update?: Maybe<OnboardingEmailsFields_FirstShowDate_Update>;
};

export type OnboardingEmailsFields_FirstShowDate_Create = {
  __typename?: 'OnboardingEmailsFields_firstShowDate_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_FirstShowDate_Delete = {
  __typename?: 'OnboardingEmailsFields_firstShowDate_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_FirstShowDate_Read = {
  __typename?: 'OnboardingEmailsFields_firstShowDate_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_FirstShowDate_Update = {
  __typename?: 'OnboardingEmailsFields_firstShowDate_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_HostName = {
  __typename?: 'OnboardingEmailsFields_hostName';
  create?: Maybe<OnboardingEmailsFields_HostName_Create>;
  delete?: Maybe<OnboardingEmailsFields_HostName_Delete>;
  read?: Maybe<OnboardingEmailsFields_HostName_Read>;
  update?: Maybe<OnboardingEmailsFields_HostName_Update>;
};

export type OnboardingEmailsFields_HostName_Create = {
  __typename?: 'OnboardingEmailsFields_hostName_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_HostName_Delete = {
  __typename?: 'OnboardingEmailsFields_hostName_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_HostName_Read = {
  __typename?: 'OnboardingEmailsFields_hostName_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_HostName_Update = {
  __typename?: 'OnboardingEmailsFields_hostName_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Occurrence = {
  __typename?: 'OnboardingEmailsFields_occurrence';
  create?: Maybe<OnboardingEmailsFields_Occurrence_Create>;
  delete?: Maybe<OnboardingEmailsFields_Occurrence_Delete>;
  read?: Maybe<OnboardingEmailsFields_Occurrence_Read>;
  update?: Maybe<OnboardingEmailsFields_Occurrence_Update>;
};

export type OnboardingEmailsFields_Occurrence_Create = {
  __typename?: 'OnboardingEmailsFields_occurrence_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Occurrence_Delete = {
  __typename?: 'OnboardingEmailsFields_occurrence_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Occurrence_Read = {
  __typename?: 'OnboardingEmailsFields_occurrence_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Occurrence_Update = {
  __typename?: 'OnboardingEmailsFields_occurrence_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients = {
  __typename?: 'OnboardingEmailsFields_recipients';
  create?: Maybe<OnboardingEmailsFields_Recipients_Create>;
  delete?: Maybe<OnboardingEmailsFields_Recipients_Delete>;
  fields?: Maybe<OnboardingEmailsFields_Recipients_Fields>;
  read?: Maybe<OnboardingEmailsFields_Recipients_Read>;
  update?: Maybe<OnboardingEmailsFields_Recipients_Update>;
};

export type OnboardingEmailsFields_Recipients_Create = {
  __typename?: 'OnboardingEmailsFields_recipients_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Delete = {
  __typename?: 'OnboardingEmailsFields_recipients_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Fields = {
  __typename?: 'OnboardingEmailsFields_recipients_Fields';
  email?: Maybe<OnboardingEmailsFields_Recipients_Email>;
  id?: Maybe<OnboardingEmailsFields_Recipients_Id>;
};

export type OnboardingEmailsFields_Recipients_Read = {
  __typename?: 'OnboardingEmailsFields_recipients_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Update = {
  __typename?: 'OnboardingEmailsFields_recipients_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Email = {
  __typename?: 'OnboardingEmailsFields_recipients_email';
  create?: Maybe<OnboardingEmailsFields_Recipients_Email_Create>;
  delete?: Maybe<OnboardingEmailsFields_Recipients_Email_Delete>;
  read?: Maybe<OnboardingEmailsFields_Recipients_Email_Read>;
  update?: Maybe<OnboardingEmailsFields_Recipients_Email_Update>;
};

export type OnboardingEmailsFields_Recipients_Email_Create = {
  __typename?: 'OnboardingEmailsFields_recipients_email_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Email_Delete = {
  __typename?: 'OnboardingEmailsFields_recipients_email_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Email_Read = {
  __typename?: 'OnboardingEmailsFields_recipients_email_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Email_Update = {
  __typename?: 'OnboardingEmailsFields_recipients_email_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Id = {
  __typename?: 'OnboardingEmailsFields_recipients_id';
  create?: Maybe<OnboardingEmailsFields_Recipients_Id_Create>;
  delete?: Maybe<OnboardingEmailsFields_Recipients_Id_Delete>;
  read?: Maybe<OnboardingEmailsFields_Recipients_Id_Read>;
  update?: Maybe<OnboardingEmailsFields_Recipients_Id_Update>;
};

export type OnboardingEmailsFields_Recipients_Id_Create = {
  __typename?: 'OnboardingEmailsFields_recipients_id_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Id_Delete = {
  __typename?: 'OnboardingEmailsFields_recipients_id_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Id_Read = {
  __typename?: 'OnboardingEmailsFields_recipients_id_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Recipients_Id_Update = {
  __typename?: 'OnboardingEmailsFields_recipients_id_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Show = {
  __typename?: 'OnboardingEmailsFields_show';
  create?: Maybe<OnboardingEmailsFields_Show_Create>;
  delete?: Maybe<OnboardingEmailsFields_Show_Delete>;
  read?: Maybe<OnboardingEmailsFields_Show_Read>;
  update?: Maybe<OnboardingEmailsFields_Show_Update>;
};

export type OnboardingEmailsFields_Show_Create = {
  __typename?: 'OnboardingEmailsFields_show_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Show_Delete = {
  __typename?: 'OnboardingEmailsFields_show_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Show_Read = {
  __typename?: 'OnboardingEmailsFields_show_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_Show_Update = {
  __typename?: 'OnboardingEmailsFields_show_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_UpdatedAt = {
  __typename?: 'OnboardingEmailsFields_updatedAt';
  create?: Maybe<OnboardingEmailsFields_UpdatedAt_Create>;
  delete?: Maybe<OnboardingEmailsFields_UpdatedAt_Delete>;
  read?: Maybe<OnboardingEmailsFields_UpdatedAt_Read>;
  update?: Maybe<OnboardingEmailsFields_UpdatedAt_Update>;
};

export type OnboardingEmailsFields_UpdatedAt_Create = {
  __typename?: 'OnboardingEmailsFields_updatedAt_Create';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_UpdatedAt_Delete = {
  __typename?: 'OnboardingEmailsFields_updatedAt_Delete';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_UpdatedAt_Read = {
  __typename?: 'OnboardingEmailsFields_updatedAt_Read';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsFields_UpdatedAt_Update = {
  __typename?: 'OnboardingEmailsFields_updatedAt_Update';
  permission: Scalars['Boolean'];
};

export type OnboardingEmailsReadAccess = {
  __typename?: 'OnboardingEmailsReadAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type OnboardingEmailsReadDocAccess = {
  __typename?: 'OnboardingEmailsReadDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type OnboardingEmailsUpdateAccess = {
  __typename?: 'OnboardingEmailsUpdateAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type OnboardingEmailsUpdateDocAccess = {
  __typename?: 'OnboardingEmailsUpdateDocAccess';
  permission: Scalars['Boolean'];
  where?: Maybe<Scalars['JSONObject']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']>;
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
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
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
  Access?: Maybe<Access>;
  Archive?: Maybe<Archive>;
  ArchiveUpload?: Maybe<ArchiveUpload>;
  ArchiveUploads?: Maybe<ArchiveUploads>;
  Archives?: Maybe<Archives>;
  Categories?: Maybe<Categories>;
  Category?: Maybe<Category>;
  Host?: Maybe<Host>;
  Hosts?: Maybe<Hosts>;
  MailingListSubscriber?: Maybe<MailingListSubscriber>;
  MailingListSubscribers?: Maybe<MailingListSubscribers>;
  NewsMedia?: Maybe<NewsMedia>;
  NewsMedias?: Maybe<NewsMedias>;
  NewsPost?: Maybe<NewsPost>;
  NewsPostBySlug?: Maybe<NewsPost>;
  NewsPosts?: Maybe<NewsPosts>;
  OnboardingEmail?: Maybe<OnboardingEmail>;
  OnboardingEmails?: Maybe<OnboardingEmails>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Show?: Maybe<Show>;
  ShowBySlug?: Maybe<Show>;
  Shows?: Maybe<Shows>;
  ShowsByCategory?: Maybe<ShowsByCategory>;
  Tag?: Maybe<Tag>;
  Tags?: Maybe<Tags>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  docAccessArchive?: Maybe<ArchiveDocAccess>;
  docAccessArchiveUpload?: Maybe<ArchiveUploadsDocAccess>;
  docAccessCategory?: Maybe<CategoriesDocAccess>;
  docAccessHost?: Maybe<HostsDocAccess>;
  docAccessMailingListSubscriber?: Maybe<MailingListSubscribersDocAccess>;
  docAccessNewsMedia?: Maybe<NewsMediaDocAccess>;
  docAccessNewsPost?: Maybe<NewsPostsDocAccess>;
  docAccessOnboardingEmail?: Maybe<OnboardingEmailsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessShow?: Maybe<ShowsDocAccess>;
  docAccessTag?: Maybe<TagsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']>;
  meUser?: Maybe<UsersMe>;
  versionNewsPost?: Maybe<NewsPostVersion>;
  versionsNewsPosts?: Maybe<VersionsNewsPosts>;
};


export type QueryArchiveArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryArchiveUploadArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryArchiveUploadsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<ArchiveUpload_Where>;
};


export type QueryArchivesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Archive_Where>;
};


export type QueryCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Category_Where>;
};


export type QueryCategoryArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryHostArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryHostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Host_Where>;
};


export type QueryMailingListSubscriberArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryMailingListSubscribersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<MailingListSubscriber_Where>;
};


export type QueryNewsMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryNewsMediasArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<NewsMedia_Where>;
};


export type QueryNewsPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryNewsPostBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryNewsPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<NewsPost_Where>;
};


export type QueryOnboardingEmailArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryOnboardingEmailsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<OnboardingEmail_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryShowArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryShowBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryShowsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Show_Where>;
};


export type QueryShowsByCategoryArgs = {
  categoryName: Scalars['String'];
};


export type QueryTagArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<User_Where>;
};


export type QueryDocAccessArchiveArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessArchiveUploadArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessCategoryArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessHostArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessMailingListSubscriberArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessNewsMediaArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessNewsPostArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessOnboardingEmailArgs = {
  id: Scalars['String'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
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
  id?: InputMaybe<Scalars['String']>;
};


export type QueryVersionsNewsPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<VersionsNewsPost_Where>;
};

export type Show = {
  __typename?: 'Show';
  active?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Category>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['JSON'];
  id?: Maybe<Scalars['String']>;
  primaryHosts: Array<Host>;
  showName: Scalars['String'];
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type ShowDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']>;
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
  docs?: Maybe<Array<Maybe<Show>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ShowsByCategory = {
  __typename?: 'ShowsByCategory';
  docs?: Maybe<Array<Maybe<Show>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
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
  id?: Maybe<Scalars['String']>;
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
  docs?: Maybe<Array<Maybe<Tag>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
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
  id?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  lockUntil?: Maybe<Scalars['DateTime']>;
  loginAttempts?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<User_Roles>>;
  salt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  Editor = 'editor'
}

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
  Editor = 'editor'
}

export enum User_Roles_Input {
  Admin = 'admin',
  Editor = 'editor'
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
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
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
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
  password?: Maybe<UsersDocAccessFields_Password>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
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

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
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
  password?: Maybe<UsersFields_Password>;
  roles?: Maybe<UsersFields_Roles>;
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

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
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

export type ArchiveAccess = {
  __typename?: 'archiveAccess';
  create?: Maybe<ArchiveCreateAccess>;
  delete?: Maybe<ArchiveDeleteAccess>;
  fields?: Maybe<ArchiveFields>;
  read?: Maybe<ArchiveReadAccess>;
  update?: Maybe<ArchiveUpdateAccess>;
};

export type ArchiveDocAccess = {
  __typename?: 'archiveDocAccess';
  create?: Maybe<ArchiveCreateDocAccess>;
  delete?: Maybe<ArchiveDeleteDocAccess>;
  fields?: Maybe<ArchiveDocAccessFields>;
  read?: Maybe<ArchiveReadDocAccess>;
  update?: Maybe<ArchiveUpdateDocAccess>;
};

export type ArchiveUploadsAccess = {
  __typename?: 'archiveUploadsAccess';
  create?: Maybe<ArchiveUploadsCreateAccess>;
  delete?: Maybe<ArchiveUploadsDeleteAccess>;
  fields?: Maybe<ArchiveUploadsFields>;
  read?: Maybe<ArchiveUploadsReadAccess>;
  update?: Maybe<ArchiveUploadsUpdateAccess>;
};

export type ArchiveUploadsDocAccess = {
  __typename?: 'archiveUploadsDocAccess';
  create?: Maybe<ArchiveUploadsCreateDocAccess>;
  delete?: Maybe<ArchiveUploadsDeleteDocAccess>;
  fields?: Maybe<ArchiveUploadsDocAccessFields>;
  read?: Maybe<ArchiveUploadsReadDocAccess>;
  update?: Maybe<ArchiveUploadsUpdateDocAccess>;
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

export type MailingListSubscribersAccess = {
  __typename?: 'mailingListSubscribersAccess';
  create?: Maybe<MailingListSubscribersCreateAccess>;
  delete?: Maybe<MailingListSubscribersDeleteAccess>;
  fields?: Maybe<MailingListSubscribersFields>;
  read?: Maybe<MailingListSubscribersReadAccess>;
  update?: Maybe<MailingListSubscribersUpdateAccess>;
};

export type MailingListSubscribersDocAccess = {
  __typename?: 'mailingListSubscribersDocAccess';
  create?: Maybe<MailingListSubscribersCreateDocAccess>;
  delete?: Maybe<MailingListSubscribersDeleteDocAccess>;
  fields?: Maybe<MailingListSubscribersDocAccessFields>;
  read?: Maybe<MailingListSubscribersReadDocAccess>;
  update?: Maybe<MailingListSubscribersUpdateDocAccess>;
};

export type MutationArchiveInput = {
  archiveUploads?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  fullTitle: Scalars['String'];
  hosts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images?: InputMaybe<MutationArchive_ImagesInput>;
  show?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  staffPick?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tracklist?: InputMaybe<Array<InputMaybe<MutationArchive_TracklistInput>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationArchiveUpdateInput = {
  archiveUploads?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  createdAt?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  fullTitle?: InputMaybe<Scalars['String']>;
  hosts?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images?: InputMaybe<MutationArchiveUpdate_ImagesInput>;
  show?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  staffPick?: InputMaybe<Scalars['Boolean']>;
  subtitle?: InputMaybe<Scalars['String']>;
  tracklist?: InputMaybe<Array<InputMaybe<MutationArchiveUpdate_TracklistInput>>>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationArchiveUpdate_ImagesInput = {
  imageUrl320?: InputMaybe<Scalars['String']>;
  imageUrl640?: InputMaybe<Scalars['String']>;
  imageUrl1080?: InputMaybe<Scalars['String']>;
};

export type MutationArchiveUpdate_TracklistInput = {
  artist: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  song: Scalars['String'];
};

export type MutationArchiveUploadInput = {
  archive?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  service: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type MutationArchiveUploadUpdateInput = {
  archive?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type MutationArchive_ImagesInput = {
  imageUrl320?: InputMaybe<Scalars['String']>;
  imageUrl640?: InputMaybe<Scalars['String']>;
  imageUrl1080?: InputMaybe<Scalars['String']>;
};

export type MutationArchive_TracklistInput = {
  artist: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  song: Scalars['String'];
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

export type MutationHostInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationHostUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationMailingListSubscriberInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationMailingListSubscriberUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationNewsMediaInput = {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationNewsMedia_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  prefix?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<MutationNewsMediaUpdate_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMediaUpdate_SizesInput = {
  lg?: InputMaybe<MutationNewsMediaUpdate_Sizes_LgInput>;
  opengraph?: InputMaybe<MutationNewsMediaUpdate_Sizes_OpengraphInput>;
  sm?: InputMaybe<MutationNewsMediaUpdate_Sizes_SmInput>;
  xl?: InputMaybe<MutationNewsMediaUpdate_Sizes_XlInput>;
  xs?: InputMaybe<MutationNewsMediaUpdate_Sizes_XsInput>;
};

export type MutationNewsMediaUpdate_Sizes_LgInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMediaUpdate_Sizes_OpengraphInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMediaUpdate_Sizes_SmInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMediaUpdate_Sizes_XlInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMediaUpdate_Sizes_XsInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMedia_SizesInput = {
  lg?: InputMaybe<MutationNewsMedia_Sizes_LgInput>;
  opengraph?: InputMaybe<MutationNewsMedia_Sizes_OpengraphInput>;
  sm?: InputMaybe<MutationNewsMedia_Sizes_SmInput>;
  xl?: InputMaybe<MutationNewsMedia_Sizes_XlInput>;
  xs?: InputMaybe<MutationNewsMedia_Sizes_XsInput>;
};

export type MutationNewsMedia_Sizes_LgInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMedia_Sizes_OpengraphInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMedia_Sizes_SmInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMedia_Sizes_XlInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsMedia_Sizes_XsInput = {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type MutationNewsPostInput = {
  _status?: InputMaybe<NewsPost__Status_MutationInput>;
  author?: InputMaybe<Scalars['String']>;
  authorId?: InputMaybe<Scalars['String']>;
  authorName?: InputMaybe<Scalars['String']>;
  blurb: Scalars['String'];
  content: Scalars['JSON'];
  createdAt?: InputMaybe<Scalars['String']>;
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
  previewBanner?: InputMaybe<Scalars['String']>;
  publishDate?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationOnboardingEmailInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  firstShowDate: Scalars['String'];
  hostName: Scalars['String'];
  occurrence: Scalars['String'];
  recipients?: InputMaybe<Array<InputMaybe<MutationOnboardingEmail_RecipientsInput>>>;
  show?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationOnboardingEmailUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']>;
  emailSent?: InputMaybe<Scalars['Boolean']>;
  firstShowDate?: InputMaybe<Scalars['String']>;
  hostName?: InputMaybe<Scalars['String']>;
  occurrence?: InputMaybe<Scalars['String']>;
  recipients?: InputMaybe<Array<InputMaybe<MutationOnboardingEmailUpdate_RecipientsInput>>>;
  show?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type MutationOnboardingEmailUpdate_RecipientsInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type MutationOnboardingEmail_RecipientsInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
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

export type MutationShowInput = {
  active?: InputMaybe<Scalars['Boolean']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
  updatedAt?: InputMaybe<Scalars['String']>;
};

export type NewsMediaAccess = {
  __typename?: 'newsMediaAccess';
  create?: Maybe<NewsMediaCreateAccess>;
  delete?: Maybe<NewsMediaDeleteAccess>;
  fields?: Maybe<NewsMediaFields>;
  read?: Maybe<NewsMediaReadAccess>;
  update?: Maybe<NewsMediaUpdateAccess>;
};

export type NewsMediaDocAccess = {
  __typename?: 'newsMediaDocAccess';
  create?: Maybe<NewsMediaCreateDocAccess>;
  delete?: Maybe<NewsMediaDeleteDocAccess>;
  fields?: Maybe<NewsMediaDocAccessFields>;
  read?: Maybe<NewsMediaReadDocAccess>;
  update?: Maybe<NewsMediaUpdateDocAccess>;
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

export type OnboardingEmailsAccess = {
  __typename?: 'onboardingEmailsAccess';
  create?: Maybe<OnboardingEmailsCreateAccess>;
  delete?: Maybe<OnboardingEmailsDeleteAccess>;
  fields?: Maybe<OnboardingEmailsFields>;
  read?: Maybe<OnboardingEmailsReadAccess>;
  update?: Maybe<OnboardingEmailsUpdateAccess>;
};

export type OnboardingEmailsDocAccess = {
  __typename?: 'onboardingEmailsDocAccess';
  create?: Maybe<OnboardingEmailsCreateDocAccess>;
  delete?: Maybe<OnboardingEmailsDeleteDocAccess>;
  fields?: Maybe<OnboardingEmailsDocAccessFields>;
  read?: Maybe<OnboardingEmailsReadDocAccess>;
  update?: Maybe<OnboardingEmailsUpdateDocAccess>;
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
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']>;
  refreshedToken?: Maybe<Scalars['String']>;
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

export type VersionsNewsPost_Version__PreviewBanner_Operator = {
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
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
  updatedAt?: InputMaybe<VersionsNewsPost_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsNewsPost_Version___Status_Operator>;
  version__author?: InputMaybe<VersionsNewsPost_Version__Author_Operator>;
  version__authorId?: InputMaybe<VersionsNewsPost_Version__AuthorId_Operator>;
  version__authorName?: InputMaybe<VersionsNewsPost_Version__AuthorName_Operator>;
  version__blurb?: InputMaybe<VersionsNewsPost_Version__Blurb_Operator>;
  version__content?: InputMaybe<VersionsNewsPost_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsNewsPost_Version__CreatedAt_Operator>;
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
  updatedAt?: InputMaybe<VersionsNewsPost_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsNewsPost_Version___Status_Operator>;
  version__author?: InputMaybe<VersionsNewsPost_Version__Author_Operator>;
  version__authorId?: InputMaybe<VersionsNewsPost_Version__AuthorId_Operator>;
  version__authorName?: InputMaybe<VersionsNewsPost_Version__AuthorName_Operator>;
  version__blurb?: InputMaybe<VersionsNewsPost_Version__Blurb_Operator>;
  version__content?: InputMaybe<VersionsNewsPost_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsNewsPost_Version__CreatedAt_Operator>;
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
  updatedAt?: InputMaybe<VersionsNewsPost_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsNewsPost_Version___Status_Operator>;
  version__author?: InputMaybe<VersionsNewsPost_Version__Author_Operator>;
  version__authorId?: InputMaybe<VersionsNewsPost_Version__AuthorId_Operator>;
  version__authorName?: InputMaybe<VersionsNewsPost_Version__AuthorName_Operator>;
  version__blurb?: InputMaybe<VersionsNewsPost_Version__Blurb_Operator>;
  version__content?: InputMaybe<VersionsNewsPost_Version__Content_Operator>;
  version__createdAt?: InputMaybe<VersionsNewsPost_Version__CreatedAt_Operator>;
  version__previewBanner?: InputMaybe<VersionsNewsPost_Version__PreviewBanner_Operator>;
  version__publishDate?: InputMaybe<VersionsNewsPost_Version__PublishDate_Operator>;
  version__slug?: InputMaybe<VersionsNewsPost_Version__Slug_Operator>;
  version__tags?: InputMaybe<VersionsNewsPost_Version__Tags_Operator>;
  version__title?: InputMaybe<VersionsNewsPost_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsNewsPost_Version__UpdatedAt_Operator>;
};

export type VersionsNewsPosts = {
  __typename?: 'versionsNewsPosts';
  docs?: Maybe<Array<Maybe<NewsPostVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPrevPage?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  nextPage?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  pagingCounter?: Maybe<Scalars['Int']>;
  prevPage?: Maybe<Scalars['Int']>;
  totalDocs?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type ShowByFieldsQueryVariables = Exact<{
  where?: InputMaybe<Show_Where>;
}>;


export type ShowByFieldsQuery = { __typename?: 'Query', Shows?: { __typename?: 'Shows', docs?: Array<{ __typename?: 'Show', id?: string | null } | null> | null } | null };

export type ArchiveBySlugQueryVariables = Exact<{
  where?: InputMaybe<Archive_Where>;
}>;


export type ArchiveBySlugQuery = { __typename?: 'Query', Archives?: { __typename?: 'Archives', docs?: Array<{ __typename?: 'Archive', fullTitle: string, date?: any | null, subtitle?: string | null, slug?: string | null, show?: { __typename?: 'Show', id?: string | null, slug: string } | null, hosts?: Array<{ __typename?: 'Host', name: string }> | null, images?: { __typename?: 'Archive_Images', imageUrl640?: string | null, imageUrl320?: string | null, imageUrl1080?: string | null } | null, archiveUploads?: Array<{ __typename?: 'ArchiveUpload', id?: string | null, url: string, service: ArchiveUpload_Service, description?: string | null }> | null } | null> | null } | null };

export type ShowsQueryVariables = Exact<{
  where?: InputMaybe<Show_Where>;
}>;


export type ShowsQuery = { __typename?: 'Query', Shows?: { __typename?: 'Shows', docs?: Array<{ __typename?: 'Show', slug: string } | null> | null } | null };

export type ArchivesQueryVariables = Exact<{
  where?: InputMaybe<Archive_Where>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type ArchivesQuery = { __typename?: 'Query', Archives?: { __typename?: 'Archives', page?: number | null, hasNextPage?: boolean | null, hasPrevPage?: boolean | null, docs?: Array<{ __typename?: 'Archive', fullTitle: string, subtitle?: string | null, slug?: string | null, date?: any | null, hosts?: Array<{ __typename?: 'Host', name: string }> | null, archiveUploads?: Array<{ __typename?: 'ArchiveUpload', description?: string | null }> | null } | null> | null } | null };

export type ArchiveQueryVariables = Exact<{
  where?: InputMaybe<Archive_Where>;
}>;


export type ArchiveQuery = { __typename?: 'Query', Archives?: { __typename?: 'Archives', totalDocs?: number | null, offset?: number | null, limit?: number | null, totalPages?: number | null, page?: number | null, pagingCounter?: number | null, hasPrevPage?: boolean | null, hasNextPage?: boolean | null, prevPage?: number | null, nextPage?: number | null, docs?: Array<{ __typename?: 'Archive', id?: string | null, createdAt?: any | null, updatedAt?: any | null, slug?: string | null, date?: any | null, subtitle?: string | null, fullTitle: string, categories?: Array<{ __typename?: 'Category', id?: string | null, createdAt?: any | null, updatedAt?: any | null, name: string }> | null, hosts?: Array<{ __typename?: 'Host', id?: string | null, createdAt?: any | null, updatedAt?: any | null, name: string, email?: any | null }> | null, show?: { __typename?: 'Show', id?: string | null, createdAt?: any | null, updatedAt?: any | null, showName: string, slug: string, description: any, primaryHosts: Array<{ __typename?: 'Host', id?: string | null, createdAt?: any | null, updatedAt?: any | null, name: string, email?: any | null }> } | null, archiveUploads?: Array<{ __typename?: 'ArchiveUpload', id?: string | null, createdAt?: any | null, updatedAt?: any | null, service: ArchiveUpload_Service, url: string, description?: string | null, archive: { __typename?: 'Archive', id?: string | null, createdAt?: any | null, updatedAt?: any | null, slug?: string | null, date?: any | null, subtitle?: string | null, fullTitle: string } }> | null } | null> | null } | null };

export type AllShowIDsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type AllShowIDsQuery = { __typename?: 'Query', Shows?: { __typename?: 'Shows', docs?: Array<{ __typename?: 'Show', slug: string, id?: string | null, showName: string, primaryHosts: Array<{ __typename?: 'Host', name: string }> } | null> | null } | null };

export type ShowsQueryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ShowsQueryQuery = { __typename?: 'Query', Shows?: { __typename?: 'Shows', totalDocs?: number | null, offset?: number | null, limit?: number | null, totalPages?: number | null, page?: number | null, pagingCounter?: number | null, hasPrevPage?: boolean | null, hasNextPage?: boolean | null, prevPage?: number | null, nextPage?: number | null, docs?: Array<{ __typename?: 'Show', id?: string | null, active?: boolean | null, slug: string, createdAt?: any | null, showName: string, description: any, primaryHosts: Array<{ __typename?: 'Host', id?: string | null, createdAt?: any | null, updatedAt?: any | null, name: string, email?: any | null }>, categories?: Array<{ __typename?: 'Category', id?: string | null, createdAt?: any | null, updatedAt?: any | null, name: string }> | null } | null> | null } | null };

export type AllArchivesQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<Archive_Where>;
}>;


export type AllArchivesQuery = { __typename?: 'Query', Archives?: { __typename?: 'Archives', hasNextPage?: boolean | null, hasPrevPage?: boolean | null, page?: number | null, docs?: Array<{ __typename?: 'Archive', id?: string | null, subtitle?: string | null, fullTitle: string, date?: any | null, slug?: string | null, show?: { __typename?: 'Show', slug: string, showName: string, id?: string | null } | null, images?: { __typename?: 'Archive_Images', imageUrl640?: string | null, imageUrl320?: string | null, imageUrl1080?: string | null } | null, hosts?: Array<{ __typename?: 'Host', name: string }> | null, archiveUploads?: Array<{ __typename?: 'ArchiveUpload', description?: string | null }> | null } | null> | null } | null };

export type CategoriesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type CategoriesQuery = { __typename?: 'Query', Categories?: { __typename?: 'Categories', docs?: Array<{ __typename?: 'Category', name: string } | null> | null } | null };

export type ShowsByCategoryQueryVariables = Exact<{
  categoryName: Scalars['String'];
}>;


export type ShowsByCategoryQuery = { __typename?: 'Query', ShowsByCategory?: { __typename?: 'ShowsByCategory', limit?: number | null, docs?: Array<{ __typename?: 'Show', showName: string, id?: string | null, slug: string, createdAt?: any | null, description: any, categories?: Array<{ __typename?: 'Category', name: string }> | null, primaryHosts: Array<{ __typename?: 'Host', name: string }> } | null> | null } | null };

export type ShowBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ShowBySlugQuery = { __typename?: 'Query', ShowBySlug?: { __typename?: 'Show', slug: string, showName: string, id?: string | null, description: any, createdAt?: any | null, categories?: Array<{ __typename?: 'Category', name: string }> | null, primaryHosts: Array<{ __typename?: 'Host', name: string }> } | null };

export type NewsPostsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsPost_Where>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type NewsPostsQuery = { __typename?: 'Query', NewsPosts?: { __typename?: 'NewsPosts', docs?: Array<{ __typename?: 'NewsPost', id?: string | null, blurb?: string | null, slug?: string | null, publishDate?: any | null, title?: string | null, updatedAt?: any | null, authorName?: string | null, authorId?: string | null } | null> | null } | null };

export type NewsPostQueryVariables = Exact<{
  newsPostId: Scalars['String'];
  draft?: InputMaybe<Scalars['Boolean']>;
}>;


export type NewsPostQuery = { __typename?: 'Query', NewsPost?: { __typename?: 'NewsPost', authorId?: string | null, authorName?: string | null, blurb?: string | null, content?: any | null, createdAt?: any | null, id?: string | null, publishDate?: any | null, slug?: string | null, title?: string | null, tags?: Array<{ __typename?: 'Tag', name: string, id?: string | null }> | null } | null };

export type NewsPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type NewsPostBySlugQuery = { __typename?: 'Query', NewsPostBySlug?: { __typename?: 'NewsPost', authorId?: string | null, authorName?: string | null, blurb?: string | null, content?: any | null, createdAt?: any | null, id?: string | null, publishDate?: any | null, slug?: string | null, title?: string | null, tags?: Array<{ __typename?: 'Tag', name: string, id?: string | null }> | null } | null };

export type TagsQueryVariables = Exact<{
  where?: InputMaybe<Tag_Where>;
}>;


export type TagsQuery = { __typename?: 'Query', Tags?: { __typename?: 'Tags', docs?: Array<{ __typename?: 'Tag', id?: string | null, name: string } | null> | null } | null };

export type ArchivesPicksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Archive_Where>;
  sort?: InputMaybe<Scalars['String']>;
}>;


export type ArchivesPicksQuery = { __typename?: 'Query', Archives?: { __typename?: 'Archives', docs?: Array<{ __typename?: 'Archive', id?: string | null, subtitle?: string | null, fullTitle: string, date?: any | null, slug?: string | null, show?: { __typename?: 'Show', slug: string, showName: string, id?: string | null } | null, images?: { __typename?: 'Archive_Images', imageUrl640?: string | null, imageUrl320?: string | null, imageUrl1080?: string | null } | null, hosts?: Array<{ __typename?: 'Host', name: string }> | null, archiveUploads?: Array<{ __typename?: 'ArchiveUpload', description?: string | null }> | null } | null> | null } | null };

export type SearchHostsQueryVariables = Exact<{
  where?: InputMaybe<Host_Where>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type SearchHostsQuery = { __typename?: 'Query', Hosts?: { __typename?: 'Hosts', docs?: Array<{ __typename?: 'Host', name: string, id?: string | null } | null> | null } | null };


export const ShowByFieldsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowByFields"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Show_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Shows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<ShowByFieldsQuery, ShowByFieldsQueryVariables>;
export const ArchiveBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ArchiveBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Archive_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Archives"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"show"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fullTitle"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageUrl640"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl320"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl1080"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archiveUploads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"service"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ArchiveBySlugQuery, ArchiveBySlugQueryVariables>;
export const ShowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Shows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Show_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Shows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<ShowsQuery, ShowsQueryVariables>;
export const ArchivesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Archives"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Archive_where"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Archives"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fullTitle"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"archiveUploads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}}]}}]}}]} as unknown as DocumentNode<ArchivesQuery, ArchivesQueryVariables>;
export const ArchiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Archive"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Archive_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Archives"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"fullTitle"}},{"kind":"Field","name":{"kind":"Name","value":"hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"show"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"primaryHosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"archiveUploads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"archive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"fullTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"service"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pagingCounter"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]} as unknown as DocumentNode<ArchiveQuery, ArchiveQueryVariables>;
export const AllShowIDsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllShowIDs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Shows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"primaryHosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllShowIDsQuery, AllShowIDsQueryVariables>;
export const ShowsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Shows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"primaryHosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"pagingCounter"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"prevPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}}]}}]}}]} as unknown as DocumentNode<ShowsQueryQuery, ShowsQueryQueryVariables>;
export const AllArchivesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllArchives"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Archive_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Archives"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"show"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageUrl640"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl320"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl1080"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archiveUploads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"fullTitle"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<AllArchivesQuery, AllArchivesQueryVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Categories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const ShowsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowsByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"categoryName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryHosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"limit"}}]}}]}}]} as unknown as DocumentNode<ShowsByCategoryQuery, ShowsByCategoryQueryVariables>;
export const ShowBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ShowBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryHosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<ShowBySlugQuery, ShowBySlugQueryVariables>;
export const NewsPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"NewsPost_where"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NewsPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blurb"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}}]}}]}}]}}]} as unknown as DocumentNode<NewsPostsQuery, NewsPostsQueryVariables>;
export const NewsPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newsPostId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NewsPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newsPostId"}}},{"kind":"Argument","name":{"kind":"Name","value":"draft"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"blurb"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewsPostQuery, NewsPostQueryVariables>;
export const NewsPostBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsPostBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NewsPostBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"authorName"}},{"kind":"Field","name":{"kind":"Name","value":"blurb"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<NewsPostBySlugQuery, NewsPostBySlugQueryVariables>;
export const TagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Tag_where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Tags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<TagsQuery, TagsQueryVariables>;
export const ArchivesPicksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ArchivesPicks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Archive_where"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Archives"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"show"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"showName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageUrl640"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl320"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl1080"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archiveUploads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"fullTitle"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<ArchivesPicksQuery, ArchivesPicksQueryVariables>;
export const SearchHostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchHosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Host_where"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Hosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<SearchHostsQuery, SearchHostsQueryVariables>;