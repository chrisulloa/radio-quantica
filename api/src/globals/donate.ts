/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { GlobalAfterChangeHook, GlobalConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { SlateToLexicalFeature } from '@payloadcms/richtext-lexical/migrate';
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
      // TODO: remove SlateToLexicalFeature once the migration to convert
      // existing Slate content to Lexical has run in production.
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          SlateToLexicalFeature({ disableHooks: true }),
        ],
      }),
    },
  ],
  slug: 'donatePage',
};

export default DonatePage;
