/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { GlobalAfterChangeHook, GlobalConfig } from 'payload/types';
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
