/* eslint-disable no-param-reassign */
import {
  CollectionAfterOperationHook,
  CollectionBeforeChangeHook,
  CollectionConfig,
} from 'payload/types';
import { LiveVideo } from 'payload/generated-types';
import payload from 'payload';
import { revalidateResource } from '../utils/revalidate';

const youtubeVideoId = (url: string) => {
  const splitted = url.split('v=');
  const splittedAgain = splitted[1].split('&');
  return splittedAgain[0];
};

const uploadImageHook: CollectionBeforeChangeHook<LiveVideo> = async ({ data }) => {
  try {
    const videoId = youtubeVideoId(data.url);
    const imageUrl = `https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`;
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
      data.image = `${result.id}`;
      data.videoId = videoId;
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
    },
    {
      name: 'url',
      type: 'text',
      validate: (val: string) => {
        let isValidUrl = true;
        try {
          const url = new URL(val);
          isValidUrl = url.host.includes('youtube.com');
        } catch (e) {
          isValidUrl = false;
        }

        if (val.includes('/embed/')) {
          return 'Please provide a regular YouTube URL, not embed URL. See example in description.';
        }
        if (val.includes('/live/')) {
          return 'Please provide a regular YouTube URL, not live URL. See example in description.';
        }

        return (
          isValidUrl || 'The URL is invalid. Please provide a valid YouTube link.'
        );
      },
      admin: {
        description:
          'Please provide the full YouTube URL, e.g. https://www.youtube.com/tV1FLGn62jA',
      },
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      defaultValue: () => new Date(),
    },
    {
      name: 'videoId',
      type: 'text',
      admin: { readOnly: true },
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
