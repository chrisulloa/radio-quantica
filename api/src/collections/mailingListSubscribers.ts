/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';

const MailingListSubscribers: CollectionConfig = {
  slug: 'mailingListSubscribers',
  access: {
    read: isAdmin,
    create: () => true,
  },
  admin: {
    group: 'Emails',
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
  ],
};
export default MailingListSubscribers;
