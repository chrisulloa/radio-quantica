import { CollectionConfig } from 'payload/types';
import { CDNBaseURL } from '../utils/config';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'xs',
        width: 400,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'sm',
        width: 768,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'lg',
        width: 1280,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'xl',
        width: 1920,
        height: undefined,
        position: 'centre',
      },
      {
        name: 'opengraph',
        width: 1200,
        height: 630,
        position: 'centre',
      },
    ],
    mimeTypes: ['image/*'],
    adminThumbnail: ({ doc }: { doc: { filename: string } }) =>
      `${CDNBaseURL}/media/${doc.filename}`,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};

export default Media;
