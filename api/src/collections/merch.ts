import {
  CollectionAfterChangeHook,
  CollectionAfterOperationHook,
  CollectionConfig,
} from 'payload/types';
import { Merch } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';

const afterOperationHook: CollectionAfterOperationHook<Merch> = ({
  operation, // name of the operation
  result, // the result of the operation, before modifications
}) => {
  if (operation === 'create' || operation === 'update' || operation === 'delete') {
    revalidateResource('/', true);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result; // return modified result as necessary
};

const afterChangeHook: CollectionAfterChangeHook<Merch> = ({ doc }) => {
  revalidateResource('/', true);

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
    afterOperation: [afterOperationHook],
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
