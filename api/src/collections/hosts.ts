import { CollectionConfig } from 'payload';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const Hosts: CollectionConfig = {
  slug: 'hosts',
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
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
