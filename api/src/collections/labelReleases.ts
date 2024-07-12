import { CollectionAfterChangeHook, CollectionConfig } from 'payload/types';
import { LabelRelease } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: CollectionAfterChangeHook<LabelRelease> = async ({
  doc,
}) => {
  await revalidateResource('/');
  return doc;
};

const LabelReleases: CollectionConfig = {
  slug: 'labelReleases',
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
      admin: {
        description: ({ path, value }) =>
          `${
            typeof value === 'string' ? 150 - value.length : '150'
          } characters left`,
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
