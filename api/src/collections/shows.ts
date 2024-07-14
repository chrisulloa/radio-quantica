import { CollectionAfterChangeHook, CollectionConfig } from 'payload/types';
import { Show } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: CollectionAfterChangeHook<Show> = async ({ doc }) => {
  const path = `/show/${doc.slug}`;
  await revalidateResource(path);
  await revalidateResource('/shows');
  return doc;
};

const Shows: CollectionConfig = {
  slug: 'shows',
  access: {
    read: () => true,
  },
  admin: {
    listSearchableFields: ['primaryHosts'],
    useAsTitle: 'showName',
  },
  hooks: { afterChange: [afterChangeHook] },
  fields: [
    {
      name: 'showName',
      label: 'Show Name',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        description: () => "Hyphenated values like 'this-show-is-awesome'",
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'primaryHosts',
      type: 'relationship',
      relationTo: 'hosts',
      hasMany: true,
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      hasMany: true,
      relationTo: 'categories',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};
export default Shows;
