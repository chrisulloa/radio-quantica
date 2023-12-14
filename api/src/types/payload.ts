/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    shows: Show;
    hosts: Host;
    archive: Archive;
    archiveUploads: ArchiveUpload;
    categories: Category;
    newsPosts: NewsPost;
    newsMedia: NewsMedia;
    tags: Tag;
    onboardingEmails: OnboardingEmail;
    mailingListSubscribers: MailingListSubscriber;
  };
  globals: {};
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  roles?: ('admin' | 'editor')[];
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Show {
  id: string;
  showName: string;
  slug: string;
  description: {
    [k: string]: unknown;
  }[];
  primaryHosts: string[] | Host[];
  categories?: string[] | Category[];
  active?: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface Host {
  id: string;
  name: string;
  email?: string;
  type: 'resident' | 'guest';
  updatedAt: string;
  createdAt: string;
}
export interface Category {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}
export interface Archive {
  id: string;
  slug?: string;
  categories?: string[] | Category[];
  date?: string;
  subtitle?: string;
  fullTitle: string;
  hosts?: string[] | Host[];
  images?: {
    imageUrl320?: string;
    imageUrl640?: string;
    imageUrl1080?: string;
  };
  show?: string | Show;
  archiveUploads?: string[] | ArchiveUpload[];
  staffPick?: boolean;
  tracklist?: {
    artist: string;
    song: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface ArchiveUpload {
  id: string;
  archive: string | Archive;
  service: 'soundcloud' | 'mixcloud';
  url: string;
  description?: string;
  updatedAt: string;
  createdAt: string;
}
export interface NewsPost {
  id: string;
  title: string;
  content: {
    [k: string]: unknown;
  }[];
  author?: string | User;
  authorName?: string;
  authorId?: string;
  blurb: string;
  slug?: string;
  publishDate?: string;
  tags?: string[] | Tag[];
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Tag {
  id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}
export interface NewsMedia {
  id: string;
  alt?: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
  sizes?: {
    xs?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    sm?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    lg?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    xl?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
    opengraph?: {
      url?: string;
      width?: number;
      height?: number;
      mimeType?: string;
      filesize?: number;
      filename?: string;
    };
  };
}
export interface OnboardingEmail {
  id: string;
  show: string | Show;
  firstShowDate: string;
  occurrence: string;
  hostName: string;
  recipients?: {
    email?: string;
    id?: string;
  }[];
  emailSent?: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface MailingListSubscriber {
  id: string;
  email: string;
  updatedAt: string;
  createdAt: string;
}
