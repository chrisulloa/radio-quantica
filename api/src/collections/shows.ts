import {
  CollectionAfterChangeHook,
  CollectionAfterOperationHook,
  CollectionConfig,
} from 'payload/types';
import { Show } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: CollectionAfterChangeHook<Show> = ({ doc }) => {
  revalidateResource(`/show/${doc.slug}`, true);
  revalidateResource('/shows', true);

  return doc;
};

const afterCreateHook: CollectionAfterOperationHook<Show> = ({
  args, // arguments passed into the operation
  operation, // name of the operation
  req, // full express request
  result, // the result of the operation, before modifications
}) => {
  const doc = result as Show;
  if (operation === 'create') {
    revalidateResource(`/show/${doc.slug}`, true);
    revalidateResource('/shows', true);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result; // return modified result as necessary
};

const Shows: CollectionConfig = {
  slug: 'shows',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'showName',
  },
  hooks: { afterChange: [afterChangeHook], afterOperation: [afterCreateHook] },
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
