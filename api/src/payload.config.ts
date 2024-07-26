import { buildConfig } from 'payload/config';
import path from 'path';
import { GraphQLString } from 'graphql';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import buildPaginatedListType from 'payload/dist/graphql/schema/buildPaginatedListType';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import Collections from './collections';
import {
  showsByCategoryResolver,
  showBySlugResolver,
  newsPostBySlugResolver,
} from './graphql/resolvers';
import {
  spacesURL,
  spacesBucket,
  validCORSURLs,
  serverURL,
  CDNBaseURL,
} from './utils/config';
import Globals from './globals';
import Users from './collections/users';

const adapter = s3Adapter({
  config: {
    forcePathStyle: false,
    credentials: {
      accessKeyId: process.env.SPACES_KEY,
      secretAccessKey: process.env.SPACES_SECRET,
    },
    region: 'us-west-1',
    endpoint: spacesURL,
  },
  acl: 'public-read',
  bucket: spacesBucket,
});

export default buildConfig({
  admin: {
    user: Users.slug,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGO_URL,
  }),
  rateLimit: {
    window: 18000,
    max: 5000,
  },
  serverURL,
  collections: Collections,
  globals: Globals,
  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'Portuguese', code: 'pt' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          prefix: 'media',
          adapter,
          generateFileURL: (args) =>
            `${CDNBaseURL}/${args.prefix}/${args.filename}`,
        },
      },
    }),
  ],
  graphQL: {
    queries: (GraphQL, payload) => ({
      NewsPostBySlug: {
        type: payload.collections.newsPosts.graphQL?.type,
        args: {
          slug: {
            type: new GraphQL.GraphQLNonNull(GraphQLString),
          },
          locale: {
            type: GraphQLString,
          },
        },
        resolve: newsPostBySlugResolver,
      },
      ShowBySlug: {
        type: payload.collections.shows.graphQL?.type,
        args: {
          slug: {
            type: new GraphQL.GraphQLNonNull(GraphQLString),
          },
        },
        resolve: showBySlugResolver,
      },
      ShowsByCategory: {
        type: buildPaginatedListType(
          'ShowsByCategory',
          payload.collections.shows.graphQL?.type
        ),
        args: {
          categoryName: {
            type: new GraphQL.GraphQLNonNull(GraphQLString),
          },
        },
        resolve: showsByCategoryResolver,
      },
    }),
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'types', 'payload.ts'),
  },
  cors: validCORSURLs,
  csrf: validCORSURLs,
});
