import { CollectionAfterChangeHook, CollectionConfig } from 'payload/types';
import { Merch } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: CollectionAfterChangeHook<Merch> = async ({ doc }) => {
  await revalidateResource('/');
  return doc;
};

const Merches: CollectionConfig = {
  slug: 'merch',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [afterChangeHook],
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
      admin: {
        description: ({ path, value }) =>
          `${
            typeof value === 'string' ? 150 - value.length : '150'
          } characters left`,
      },
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
    {
      name: 'soldOut',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};

export default Merches;
