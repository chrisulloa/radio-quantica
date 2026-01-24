import {
  CollectionAfterOperationHook,
  CollectionBeforeChangeHook,
  CollectionConfig,
} from 'payload';
import { LiveVideo } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';
import { youtubeImageUrl, youtubeVideoId } from '../utils/youtube';
import { UUIDv7 } from 'uuidv7-js';

const uploadImageHook: CollectionBeforeChangeHook<LiveVideo> = async ({
  data,
  req,
}) => {
  try {
    const videoId = youtubeVideoId(data.url.trim());
    const imageUrl = youtubeImageUrl(videoId);
    const name = `${data.title
      .trim()
      .replace(/[^a-z0-9]/gi, '_')
      .toLowerCase()}_thumbnail.webp`;
    const resp = await fetch(imageUrl);
    if (resp.ok && resp.body) {
      const arrayBuffer = await resp.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBuffer);
      const imageData = Buffer.from(uint8Array);
      const result = await req.payload.create({
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

const addSortableId: CollectionBeforeChangeHook<LiveVideo> = ({ data }) => {
  try {
    if (data.date) {
      const uuid = new UUIDv7();
      const parsedDate = Date.parse(data.date);
      data.sortableId = uuid.gen(parsedDate);
    }
  } catch (e) {
    console.log(e);
    console.log(`Failed to generate sortable ID for ${data.title}`);
  }
  return data;
};

const afterOperationHook: CollectionAfterOperationHook = ({
  operation, // name of the operation
  result, // the result of the operation, before modifications
}) => {
  if (operation === 'create' || operation === 'update' || operation === 'delete') {
    revalidateResource('/', true);
    revalidateResource('/streams');
    revalidateResource('/streams/page/1');
    revalidateResource('/streams/page/2');
    revalidateResource('/streams/page/3');
    revalidateResource('/streams/page/4');
    revalidateResource('/streams/page/5');
  }

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
    beforeChange: [uploadImageHook, addSortableId],
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

        if (!val) {
          return 'Please enter a URL.';
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
    {
      name: 'sortableId',
      type: 'text',
      admin: { readOnly: true },
      unique: true,
      index: true,
    },
  ],
};

export default LiveVideos;
