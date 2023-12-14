import { CollectionConfig } from 'payload/types';

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
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
