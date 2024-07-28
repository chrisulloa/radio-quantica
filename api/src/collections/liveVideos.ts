import {
  CollectionAfterOperationHook,
  CollectionBeforeChangeHook,
  CollectionConfig,
} from 'payload/types';
import { LiveVideo } from 'payload/generated-types';
import payload from 'payload';
import { revalidateResource } from '../utils/revalidate';

const youtubeImageUrl = (url: string) => {
  const val = new URL(url);
  const { pathname } = val;
  const videoId = pathname.replace('/embed/', '');
  return `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`;
};

const uploadImageHook: CollectionBeforeChangeHook<LiveVideo> = async ({ data }) => {
  try {
    const imageUrl = youtubeImageUrl(data.url);
    const name = `${data.title
      .replace(/[^a-z0-9]/gi, '_')
      .toLowerCase()}_thumbnail.webp`;
    const resp = await fetch(imageUrl);
    if (resp.ok && resp.body) {
      const arrayBuffer = await resp.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const imageData = Buffer.from(uint8Array);
      const result = await payload.create({
        collection: 'media',
        data: {
          alt: `${data.title} thumbnail`,
        },
        file: {
          data: imageData,
          mimetype: 'image/webp',
          name,
          size: Buffer.byteLength(arrayBuffer),
        },
      });
      // eslint-disable-next-line no-param-reassign
      data.image = `${result.id}`;
      return data;
    }
  } catch (e) {
    console.log('Failed to generate YouTube thumbnail.');
    console.log(e);
  }
  return data;
};

const afterOperationHook: CollectionAfterOperationHook<LiveVideo> = ({
  operation, // name of the operation
  result, // the result of the operation, before modifications
}) => {
  if (operation === 'create' || operation === 'update' || operation === 'delete') {
    revalidateResource('/', true);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result; // return modified result as necessary
};

const LiveVideos: CollectionConfig = {
  slug: 'liveVideos',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterOperation: [afterOperationHook],
    beforeChange: [uploadImageHook],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: "This isn't displayed currently, just used to display in CMS.",
      },
    },
    {
      name: 'url',
      type: 'text',
      validate: (val: string) => {
        let isValidUrl = true;
        try {
          const url = new URL(val);
          isValidUrl = url.pathname.includes('/embed/');
        } catch (e) {
          isValidUrl = false;
        }

        return isValidUrl || 'The URL is invalid.';
      },
      admin: {
        description:
          'Please provide the embed URL, e.g. https://www.youtube.com/embed/tV1FLGn62jA?si=oY5HkXCgr2nCM5XB',
      },
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      defaultValue: () => new Date(),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: { readOnly: true },
    },
  ],
};

export default LiveVideos;
