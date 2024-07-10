import { CollectionConfig } from 'payload/types';

const Hosts: CollectionConfig = {
  slug: 'hosts',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Artist Name',
      required: true,
      index: true,
    },
  ],
};
export default Hosts;
