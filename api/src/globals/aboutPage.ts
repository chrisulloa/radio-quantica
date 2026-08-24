/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { GlobalAfterChangeHook, GlobalConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
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
      editor: lexicalEditor(),
    },
  ],
  slug: 'aboutPage',
};

export default AboutPage;
