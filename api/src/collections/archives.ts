/* eslint-disable no-param-reassign */
import {
  CollectionAfterChangeHook,
  CollectionBeforeChangeHook,
  CollectionConfig,
} from 'payload/types';
import { DateTime } from 'luxon';
import { Archive, Show } from 'payload/generated-types';
import slugify from '../utils/slugify';
import CustomTextField from '../components/imagePreview';
import { revalidateResource } from '../utils/revalidate';

const showInfoRegex =
  /^(.+?(?= w\/))|((?<=w\/ ).*?(?=( -)|( \()))|(\(([^)]+)\))|(?<= - ).*$/g;

export const parseShowDate = (dateValue: string) => {
  const date = dateValue
    .trim()
    .replace('st', '')
    .replace('th', '')
    .replace('rd', '')
    .replace('nd', '');

  const dt = DateTime.fromFormat(date, 'LLL d yyyy');
  if (!dt.isValid) {
    console.log(`Could not parse date ${date}`);
    console.log(DateTime.fromFormatExplain(date, 'LLL d yyyy'));
    return undefined;
  }
  return dt.toISODate();
};

export const parseShowInfo = (title: string) => {
  const result = [...title.matchAll(showInfoRegex)].map((m) => m[0]);
  if (!result || result.length < 3) {
    console.log(`Regex failed for ${title}, missing show info.`);
    return undefined;
  }
  const showInfo: {
    fullTitle: string;
    showName?: string;
    subtitle?: string;
    hosts?: string;
    date?: string;
    slug?: string;
  } = { fullTitle: title };

  result.forEach((val, i) => {
    if (i === 0) {
      showInfo.showName = val;
    }
    if (i === 1) {
      showInfo.hosts = val;
    }
    if (i === 2 || i === 3) {
      if (val.includes('(') && val.includes(')')) {
        showInfo.subtitle = val.replace('(', '').replace(')', '');
      } else {
        showInfo.date = parseShowDate(val);
      }
    }
  });

  if (!showInfo.date) {
    console.log(`Regex failed for ${title}, missing date.`);
    return undefined;
  }

  showInfo.slug = slugify(title);

  return showInfo;
};

const beforeChangeHook: CollectionBeforeChangeHook<Archive> = ({
  data,
  originalDoc,
}) => {
  if (originalDoc) {
    return data;
  }
  if (!originalDoc && !data.fullTitle) {
    console.error(`Missing fullTitle to parse slug`);
    throw Error('Missing fullTitle');
  }
  const showInfo = parseShowInfo(data.fullTitle);
  if (!showInfo) {
    console.error(`Failed to parse show info from: ${data.fullTitle}`);
    throw Error('Failed to parse show info');
  }
  data.slug = showInfo.slug;
  data.subtitle = showInfo.subtitle;
  data.date = showInfo.date;
  return data;
};

const afterChangeHook: CollectionAfterChangeHook<Archive> = async ({
  doc,
  req,
  previousDoc,
}) => {
  if (previousDoc) {
    const isShow = (show: Show | string): show is Show => typeof show !== 'string';

    let showSlug: string;
    if (isShow(doc.show)) {
      showSlug = doc.show.id;
    } else {
      const show = await req.payload.findByID({
        collection: 'shows',
        id: doc.show,
      });
      showSlug = show.slug as string;
    }

    await revalidateResource(`/show/${showSlug}/archive/${doc.slug}`);

    if (!previousDoc.staffPick && doc.staffPick === true) {
      await revalidateResource('/');
    }
  }
  return doc;
};

const Archives: CollectionConfig = {
  slug: 'archive',
  admin: { useAsTitle: 'fullTitle' },
  hooks: {
    beforeChange: [beforeChangeHook],
    afterChange: [afterChangeHook],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      admin: { readOnly: true },
    },
    {
      name: 'categories',
      type: 'relationship',
      hasMany: true,
      relationTo: 'categories',
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
        readOnly: true,
      },
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'fullTitle',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'hosts',
      type: 'relationship',
      relationTo: 'hosts',
      hasMany: true,
    },
    {
      name: 'images',
      type: 'group',
      fields: [
        {
          name: 'imageUrl320',
          type: 'text',
          admin: {
            components: {
              Field: CustomTextField,
            },
          },
        },
        {
          name: 'imageUrl640',
          type: 'text',
          admin: {
            components: {
              Field: CustomTextField,
            },
          },
        },
        {
          name: 'imageUrl1080',
          type: 'text',
          admin: {
            components: {
              Field: CustomTextField,
            },
          },
        },
      ],
    },
    {
      name: 'show',
      type: 'relationship',
      relationTo: 'shows',
      hasMany: false,
    },
    {
      name: 'archiveUploads',
      type: 'relationship',
      relationTo: 'archiveUploads',
      hasMany: true,
    },
    {
      name: 'staffPick',
      type: 'checkbox',
    },
    {
      name: 'tracklist',
      type: 'array',
      label: 'Tracklist',
      minRows: 0,
      maxRows: 100,
      labels: {
        singular: 'Track ID',
        plural: 'Track IDs',
      },
      required: false,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'artist',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'song',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
};
export default Archives;
