import { CollectionAfterOperationHook, CollectionConfig } from 'payload/types';
import { Tag } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';

const afterCreateHook: CollectionAfterOperationHook<Tag> = async ({
  args, // arguments passed into the operation
  operation, // name of the operation
  req, // full express request
  result, // the result of the operation, before modifications
}) => {
  if (operation === 'create') {
    await revalidateResource(`/news`);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result; // return modified result as necessary
};

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
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
