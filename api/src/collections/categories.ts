import { Category } from 'payload/generated-types';
import { CollectionAfterChangeHook, CollectionConfig } from 'payload/types';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: CollectionAfterChangeHook<Category> = async ({
  doc,
  previousDoc,
}) => {
  await revalidateResource('/');
  if (!previousDoc) {
    await revalidateResource(`/categories/${doc.name}`);
  }
  return doc;
};

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  hooks: { afterChange: [afterChangeHook] },
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
