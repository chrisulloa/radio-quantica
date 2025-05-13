import { CollectionAfterOperationHook, CollectionConfig } from 'payload';
import { revalidateResource } from '../utils/revalidate';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const afterCreateHook: CollectionAfterOperationHook = ({
  args, // arguments passed into the operation
  operation, // name of the operation
  req, // full express request
  result, // the result of the operation, before modifications
}) => {
  if (operation === 'create') {
    revalidateResource(`/news`, true);
  }

  return result; // return modified result as necessary
};

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  hooks: {
    afterOperation: [afterCreateHook],
  },
  fields: [
    {
      name: 'name',
      label: 'Tag',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
  ],
};

export default Tags;
