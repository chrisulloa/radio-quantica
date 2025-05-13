/* eslint-disable @typescript-eslint/no-misused-promises */
import { buildConfig } from 'payload';
import path from 'path';
import { GraphQLString } from 'graphql';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { buildPaginatedListType } from '@payloadcms/graphql/types';
import { s3Storage } from '@payloadcms/storage-s3';
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
import sharp from 'sharp';
import seed from './seed';

const __dirname = path.resolve();

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET,
  admin: {
    user: Users.slug,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGO_URL,
  }),
  serverURL,
  sharp,
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
  onInit: async (payload) => {
    if (process.env.SEED) {
      await seed(payload);
    }
  },
  plugins: [
    s3Storage({
      bucket: spacesBucket,
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
      collections: {
        media: {
          prefix: 'media',
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
      handler: async (_req) => {
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

        return Response.json(data);
      },
    },
    {
      path: '/live-info',
      method: 'get',
      handler: async (_req) => {
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

        return Response.json(data);
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
    outputFile: path.resolve(__dirname, 'src', 'types', 'payload.ts'),
  },
  cors: validCORSURLs,
  csrf: validCORSURLs,
});
