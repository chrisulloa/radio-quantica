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
    },
  ],
};

export default LabelReleases;
