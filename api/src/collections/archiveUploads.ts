import { CollectionBeforeChangeHook, CollectionConfig } from 'payload/types';
import { ArchiveUpload } from 'payload/generated-types';

const beforeChangeHook: CollectionBeforeChangeHook<ArchiveUpload> = async ({
  data,
  req,
  operation,
}) => {
  const res = await req.payload.find({
    collection: 'archiveUploads',
    where: {
      and: [
        { service: { equals: data.service } },
        { archive: { equals: data.archive } },
      ],
    },
  });
  if (res.docs.length > 0 && operation === 'create') {
    throw new Error('Archive upload already exists');
  }
  return data;
};

const ArchiveUploads: CollectionConfig = {
  slug: 'archiveUploads',
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [beforeChangeHook],
  },
  fields: [
    {
      name: 'archive',
      type: 'relationship',
      hasMany: false,
      relationTo: 'archive',
      required: true,
    },
    {
      name: 'service',
      type: 'radio',
      options: [
        {
          label: 'Soundcloud',
          value: 'soundcloud',
        },
        {
          label: 'Mixcloud',
          value: 'mixcloud',
        },
      ],
      defaultValue: 'soundcloud',
      required: true,
      admin: {
        layout: 'horizontal',
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
  ],
};
export default ArchiveUploads;
