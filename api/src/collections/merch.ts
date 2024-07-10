import { CollectionConfig } from 'payload/types';

const Merch: CollectionConfig = {
  slug: 'merch',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'blurb',
      type: 'text',
      maxLength: 150,
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default Merch;
