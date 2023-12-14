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
      label: 'Host Name',
      required: true,
      index: true,
    },
    {
      name: 'email',
      type: 'email',
      required: false,
    },
    {
      name: 'type',
      type: 'radio',
      options: ['resident', 'guest'],
      required: true,
      defaultValue: 'guest',
    },
  ],
};
export default Hosts;
