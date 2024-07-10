/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { GlobalAfterChangeHook, GlobalConfig } from 'payload/types';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: GlobalAfterChangeHook = async ({ doc }) => {
  await revalidateResource('/donate');
  return doc;
};

const DonatePage: GlobalConfig = {
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
    {
      name: 'donateUrl',
      type: 'text',
    },
  ],
  slug: 'donatePage',
};

export default DonatePage;
