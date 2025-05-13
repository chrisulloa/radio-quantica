import { CollectionConfig } from 'payload';
import { CDNBaseURL } from '../utils/config';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  upload: {
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
