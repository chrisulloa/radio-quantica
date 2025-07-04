import { NewsPost } from 'payload/generated-types';
import {
  CollectionAfterChangeHook,
  CollectionAfterOperationHook,
  CollectionBeforeChangeHook,
  CollectionConfig,
  ValidationError,
} from 'payload';
import { Buffer } from 'buffer';
import slugify from '../utils/slugify';
import { revalidateResource } from '../utils/revalidate';
import { websiteUrl } from '../utils/config';
import { isAdminOrEditor } from '../access/isAdminOrEditor';

const beforeChangeHook: CollectionBeforeChangeHook<NewsPost> = ({
  data,
  originalDoc,
}) => {
  if (!originalDoc || !data.title) {
    throw new ValidationError({
      collection: 'newsPosts',
      errors: [
        {
          message: 'Missing title',
          path: 'title',
        },
      ],
    });
  }

  if (!data.content && !data.heyZineUrl) {
    throw new ValidationError({
      collection: 'newsPosts',
      errors: [
        {
          message: 'You have to provide content or heyZineURL',
          path: 'content',
        },
        {
          message: 'You have to provide content or heyZineURL',
          path: 'heyZineUrl',
        },
      ],
    });
  }

  if (data.slug && originalDoc) {
    return data;
  }

  data.slug = slugify(data.title);

  return data;
};

const afterChangeHook: CollectionAfterChangeHook<NewsPost> = ({
  doc,
  previousDoc,
}) => {
  if (previousDoc) {
    revalidateResource(`/news/${doc.slug}`, true);
  }

  revalidateResource('/');
  revalidateResource('/news');
  revalidateResource('/news/page/1');
  revalidateResource('/news/page/2');
  revalidateResource('/news/page/3');
  revalidateResource('/news/page/4');
  revalidateResource('/news/page/5');

  return doc;
};

const afterCreateHook: CollectionAfterOperationHook = ({
  args, // arguments passed into the operation
  operation, // name of the operation
  req, // full express request
  result, // the result of the operation, before modifications
}) => {
  if (operation === 'create' || operation === 'delete' || operation === 'update') {
    revalidateResource('/');
    revalidateResource('/news');
    revalidateResource('/news/page/1');
    revalidateResource('/news/page/2');
    revalidateResource('/news/page/3');
    revalidateResource('/news/page/4');
    revalidateResource('/news/page/5');
  }

  return result; // return modified result as necessary
};

const NewsPosts: CollectionConfig = {
  slug: 'newsPosts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'publishDate', 'tags', 'status'],
    group: 'Content',
    preview: (doc, { token }) => {
      try {
        const post = doc as unknown as NewsPost;
        const identifier = JSON.stringify({ id: post.id, token });
        const encoded: string = Buffer.from(identifier, 'utf8').toString('base64');
        if (post?.id) {
          return `${websiteUrl}/news/preview/${encoded}`;
        }
      } catch (e) {
        console.log('Failed to generate preview URL');
        console.log(e);
      }

      return null;
    },
  },
  hooks: {
    beforeChange: [beforeChangeHook],
    afterChange: [afterChangeHook],
    afterOperation: [afterCreateHook],
  },
  access: {
    read: ({ req: { user } }) => {
      // users who are authenticated will see all posts
      if (user) {
        return true;
      }

      // query publishDate to control when posts are visible to guests
      return {
        and: [
          {
            publishDate: {
              less_than: new Date().toJSON(),
            },
            _status: {
              equals: 'published',
            },
          },
        ],
      };
    },
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  versions: { drafts: true },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: false,
      localized: true,
    },
    {
      name: 'heyZineUrl',
      type: 'text',
      required: false,
      admin: {
        description:
          'Add a heyzine URL to embed in the post https://heyzine.com/flip-book/38e360b571.html',
      },
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      // defaultValues can use functions to return data to populate the create form and also when making POST requests the server will use the value or function to fill in any undefined fields before validation occurs
      defaultValue: ({ user }: { user: { id: string } }) => user.id,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'authorName',
      type: 'text',
      admin: {
        hidden: true, // hides the field from the admin panel
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            delete siblingData.text;
          },
        ],
        afterRead: [
          async ({ data, req }) => {
            const author = await req.payload.findByID({
              collection: 'users',
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              id: data.author,
            });

            return `${author.firstName} ${author.lastName}`;
          },
        ],
      },
    },
    {
      name: 'authorId',
      type: 'text',
      admin: {
        hidden: true, // hides the field from the admin panel
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            delete siblingData.text;
          },
        ],
        afterRead: [
          ({ data }) =>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            data.author,
        ],
      },
    },
    {
      name: 'blurb',
      type: 'text',
      maxLength: 150,
      admin: {
        description: 'Max 150 characters',
      },
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      admin: { readOnly: true },
    },
    {
      name: 'publishDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        description: 'Posts will not be public until this date',
      },
      defaultValue: () => new Date(),
    },
    {
      name: 'previewBanner',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tags',
      type: 'relationship',
      hasMany: true,
      relationTo: 'tags',
    },
  ],
};

export default NewsPosts;
