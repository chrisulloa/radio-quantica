import type { GlobalConfig } from 'payload/types';

const AboutPage: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Content',
      type: 'richText',
      localized: true,
    },
  ],
  slug: 'aboutPage',
};

export default AboutPage;
