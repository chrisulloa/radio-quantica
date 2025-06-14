import type { CollectionConfig, CollectionAfterChangeHook } from 'payload';
import { isAdmin } from '../access/isAdmin';
import type { RestartLibretime } from 'payload/generated-types';
const afterChangeHook: CollectionAfterChangeHook<RestartLibretime> = async ({
  doc,
  operation,
  req,
}) => {
  if (operation === 'create') {
    const job = await req.payload.jobs.queue({
      task: 'restartServer',
      input: {
        collectionId: doc.id,
        collectionName: 'restartLibretime',
      },
    });
    req.payload.jobs.runByID({ id: job.id });
  }
};

const RestartLibretime: CollectionConfig = {
  slug: 'restartLibretime',
  access: {
    read: isAdmin,
  },
  hooks: {
    afterChange: [afterChangeHook],
  },
  labels: {
    plural: 'Restart Libretime',
    singular: 'Restart Libretime',
  },
  admin: {
    group: 'Tasks',
  },
  fields: [
    {
      name: 'results',
      admin: {
        description: 'Debug log of results',
        readOnly: true,
      },
      type: 'text',
    },
    {
      name: 'taskFinished',
      type: 'checkbox',
      admin: { readOnly: true },
    },
  ],
};
export default RestartLibretime;
