import { CollectionAfterOperationHook, CollectionConfig } from 'payload/types';
import { LiveVideo } from 'payload/generated-types';
import { revalidateResource } from '../utils/revalidate';

const afterOperationHook: CollectionAfterOperationHook<LiveVideo> = ({
  args, // arguments passed into the operation
  operation, // name of the operation
  req, // full express request
  result, // the result of the operation, before modifications
}) => {
  if (operation === 'create' || operation === 'update' || operation === 'delete') {
    revalidateResource('/', true);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result; // return modified result as necessary
};

const LiveVideos: CollectionConfig = {
  slug: 'liveVideos',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterOperation: [afterOperationHook],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: "This isn't displayed currently, just used to display in CMS.",
      },
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      defaultValue: () => new Date(),
    },
  ],
};

export default LiveVideos;
