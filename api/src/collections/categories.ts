import { Category } from 'payload/generated-types';
import {
  CollectionAfterChangeHook,
  CollectionAfterOperationHook,
  CollectionConfig,
} from 'payload';
import { revalidateResource } from '../utils/revalidate';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const afterChangeHook: CollectionAfterChangeHook<Category> = ({
  doc,
  previousDoc,
}) => {
  revalidateResource('/shows', true);
  if (!previousDoc) {
    revalidateResource(`/categories/${doc.name}`, true);
  }
  return doc;
};

const afterCreateHook: CollectionAfterOperationHook = ({
  args, // arguments passed into the operation
  operation, // name of the operation
  req, // full express request
  result, // the result of the operation, before modifications
}) => {
  const doc = result as Category;
  if (operation === 'create') {
    revalidateResource(`/categories/${doc.name}`, true);
    revalidateResource('/shows', true);
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
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
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
