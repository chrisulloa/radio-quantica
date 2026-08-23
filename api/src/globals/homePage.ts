import type { GlobalAfterChangeHook, GlobalConfig } from 'payload';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: GlobalAfterChangeHook = ({ doc }) => {
  revalidateResource('/', true);
  return doc;
};

const HomePage: GlobalConfig = {
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [afterChangeHook],
  },
  fields: [
    {
      name: 'announcementCards',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'subtitle', type: 'text' },
        { name: 'url', type: 'text', required: true },
        { name: 'newTab', type: 'checkbox', defaultValue: false },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
  slug: 'homePage',
};

export default HomePage;
