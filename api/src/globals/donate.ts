import type { GlobalConfig } from 'payload/types';

const DonatePage: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Content',
      type: 'richText',
      localized: true,
    },
    {
      name: 'Donate URL',
      type: 'text',
    },
  ],
  slug: 'donatePage',
};

export default DonatePage;
