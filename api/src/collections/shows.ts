import { CollectionAfterChangeHook, CollectionConfig } from 'payload/types';
import { Show } from 'payload/generated-types';
import isEqual from 'lodash/isEqual';
import { revalidateResource } from '../utils/revalidate';
import { CDNBaseURL } from '../utils/config';

const afterChangeHook: CollectionAfterChangeHook<Show> = async ({
  doc,
  previousDoc,
}) => {
  if (previousDoc && previousDoc.slug === doc.slug) {
    const path = `/show/${doc.slug}`;
    await revalidateResource(path);
  }
  // If show name or hosts change update the home page
  if (
    previousDoc.showName !== doc.showName ||
    !isEqual(previousDoc.primaryHosts, doc.primaryHosts)
  ) {
    await revalidateResource('/');
  }
  return doc;
};

const Shows: CollectionConfig = {
  slug: 'shows',
  access: {
    read: () => true,
  },
  admin: {
    listSearchableFields: ['hosts'],
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
