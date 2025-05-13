import {
  CollectionAfterChangeHook,
  CollectionAfterOperationHook,
  CollectionConfig,
} from 'payload';
import { Merch } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const afterOperationHook: CollectionAfterOperationHook = ({
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
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
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
        description: 'Max 150 characters',
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
