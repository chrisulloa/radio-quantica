/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { GlobalAfterChangeHook, GlobalConfig } from 'payload/types';
import { revalidateResource } from '../utils/revalidate';

const afterChangeHook: GlobalAfterChangeHook = ({ doc }) => {
  revalidateResource('/donate', true);
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
  ],
  slug: 'donatePage',
};

export default DonatePage;
