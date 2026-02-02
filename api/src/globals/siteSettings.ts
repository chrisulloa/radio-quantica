import type { GlobalConfig } from 'payload';

const SiteSettings: GlobalConfig = {
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'isLive',
      type: 'checkbox',
    },
  ],
  slug: 'siteSettings',
};

export default SiteSettings;
