import { CollectionAfterOperationHook, CollectionConfig } from 'payload';
import { LabelRelease } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const afterOperationHook: CollectionAfterOperationHook = ({
  args, // arguments passed into the operation
  operation, // name of the operation
  req, // full express request
  result, // the result of the operation, before modifications
}) => {
  if (operation === 'create' || operation === 'update' || operation === 'delete') {
    revalidateResource('/', true);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result; // return modified result as necessary
};

const LabelReleases: CollectionConfig = {
  slug: 'labelReleases',
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
      admin: {
        description: 'Max 150 characters.',
      },
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
      admin: {
        description: () => 'Square image preferred.',
      },
    },
  ],
};

export default LabelReleases;
