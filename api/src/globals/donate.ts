import type { GlobalConfig } from 'payload/types';

const DonatePage: GlobalConfig = {
  access: {
    read: () => true,
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
