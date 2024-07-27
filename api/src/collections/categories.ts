import { Category } from 'payload/generated-types';
import {
  CollectionAfterChangeHook,
  CollectionAfterOperationHook,
  CollectionConfig,
} from 'payload/types';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: CollectionAfterChangeHook<Category> = async ({
  doc,
  previousDoc,
}) => {
  await revalidateResource('/shows');
  if (!previousDoc) {
    await revalidateResource(`/categories/${doc.name}`);
  }
  return doc;
};

const afterCreateHook: CollectionAfterOperationHook<Category> = async ({
  args, // arguments passed into the operation
  operation, // name of the operation
  req, // full express request
  result, // the result of the operation, before modifications
}) => {
  const doc = result as Category;
  if (operation === 'create') {
    await revalidateResource(`/categories/${doc.name}`);
    await revalidateResource('/shows');
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result; // return modified result as necessary
};

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  hooks: { afterChange: [afterChangeHook], afterOperation: [afterCreateHook] },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Category',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
  ],
};
export default Categories;
