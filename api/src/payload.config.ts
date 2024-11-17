/* eslint-disable @typescript-eslint/no-misused-promises */
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
  youtubeChannelResolver,
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

const mockModulePath = path.resolve(__dirname, './utils/mock');
const filesPath = path.resolve(__dirname, './utils/files');
const cachePath = path.resolve(__dirname, './utils/cache');

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
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          [filesPath]: mockModulePath,
          [cachePath]: mockModulePath,
        },
      },
    }),
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
  endpoints: [
    {
      path: '/week-info',
      method: 'get',
      handler: async (_req, res) => {
        const result = await fetch(
          'https://airtime.radioquantica.com/api/week-info',
          {
            headers: {
              method: 'GET',
              'Content-Type': 'application/json',
            },
          }
        );
        const data = (await result.json()) as unknown;

        res.status(200).send(data);
      },
    },
    {
      path: '/live-info',
      method: 'get',
      handler: async (_req, res) => {
        const result = await fetch(
          'https://airtime.radioquantica.com/api/live-info',
          {
            headers: {
              method: 'GET',
              'Content-Type': 'application/json',
            },
          }
        );
        const data = (await result.json()) as unknown;

        res.status(200).send(data);
      },
    },
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
      YoutubeChannel: {
        type: new GraphQL.GraphQLObjectType({
          name: 'YoutubeChannel',
          fields: {
            isLive: { type: GraphQL.GraphQLBoolean },
            channelId: { type: GraphQL.GraphQLString },
            url: { type: GraphQL.GraphQLString },
            imageUrl: { type: GraphQL.GraphQLString },
            videoId: {
              type: GraphQL.GraphQLString,
            },
          },
        }),
        resolve: youtubeChannelResolver,
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
