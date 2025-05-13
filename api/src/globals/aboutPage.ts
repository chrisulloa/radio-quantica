import type { GlobalAfterChangeHook, GlobalConfig } from 'payload';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: GlobalAfterChangeHook = ({ doc }) => {
  revalidateResource('/about', true);
  return doc;
};

const AboutPage: GlobalConfig = {
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [afterChangeHook],
  },
  fields: [
    {
      name: 'content',
      type: 'richText',
      localized: true,
    },
  ],
  slug: 'aboutPage',
};

export default AboutPage;
