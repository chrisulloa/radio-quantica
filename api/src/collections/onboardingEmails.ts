/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import {
  CollectionBeforeChangeHook,
  CollectionConfig,
  PayloadRequest,
} from 'payload/types';
import { Host, OnboardingEmail, Show } from 'payload/generated-types';
import { emailParams, sesClient } from '../utils/email';
import { websiteUrl } from '../utils/config';
import { isAdmin } from '../access/isAdmin';

export interface NewHostReplacementValues {
  host: string;
  occurrence: string;
  firstShowDate: string;
  show: string;
  showPageUrl: string;
}

const templateParams = async (
  doc: Partial<OnboardingEmail>,
  req: PayloadRequest
) => {
  const isShow = (show: Show | string): show is Show => typeof show !== 'string';

  let showSlug: string;
  let showName: string;
  let show: Show;
  if (isShow(doc.show)) {
    show = doc.show;
    showSlug = doc.show.id;
    showName = doc.show.showName;
  } else {
    show = (await req.payload.findByID({
      collection: 'shows',
      id: doc.show,
      depth: 0,
    })) as unknown as Show;
    showSlug = show.slug;
    showName = show.showName;
  }

  const isHost = (host: Host | string): host is Host => typeof host !== 'string';

  const emails: string[] = [];

  await Promise.all(
    show.primaryHosts.map(async (host: Host | string) => {
      if (isHost(host)) {
        emails.push(host.email);
      } else {
        const hostLookup = await req.payload.findByID({
          collection: 'hosts',
          id: host,
        });
        emails.push(hostLookup.email as string);
      }
    })
  );

  const replacementValues: NewHostReplacementValues = {
    host: doc.hostName,
    occurrence: doc.occurrence,
    firstShowDate: doc.firstShowDate,
    show: showName,
    showPageUrl: `${websiteUrl}/show/${showSlug}`,
  };

  const defaultValues: NewHostReplacementValues = {
    host: 'host',
    occurrence: 'occurrence',
    firstShowDate: 'first show date',
    show: 'show name',
    showPageUrl: 'https://particle.fm',
  };

  doc.recipients = emails.map((email) => ({ email }));
  const destinations = [
    {
      Destination: {
        ToAddresses: emails,
        BccAddresses: ['christian@particle.fm'],
      },
      ReplacementTemplateData: JSON.stringify(replacementValues),
    },
  ];
  return emailParams(
    destinations,
    'newHostTemplate',
    JSON.stringify(defaultValues)
  );
};

const beforeChangeHook: CollectionBeforeChangeHook<OnboardingEmail> = async ({
  data,
  req,
}) => {
  const sendEmail = !data.emailSent;
  if (sendEmail) {
    try {
      const params = await templateParams(data, req);
      const result = await sesClient.sendBulkTemplatedEmail(params);
      if (
        result.Status &&
        result.Status.length > 0 &&
        result.Status[0].Status === 'Success'
      ) {
        data.emailSent = true;
      }
    } catch (e) {
      console.log('Failed to send email');
      console.log(e);
    }
  }
  return data;
};

const OnboardingEmails: CollectionConfig = {
  slug: 'onboardingEmails',
  hooks: {
    beforeChange: [beforeChangeHook],
  },
  access: {
    read: isAdmin,
  },
  admin: {
    group: 'Emails',
  },
  fields: [
    {
      name: 'show',
      type: 'relationship',
      hasMany: false,
      relationTo: 'shows',
      required: true,
    },
    {
      name: 'firstShowDate',
      type: 'text',
      required: true,
    },
    {
      name: 'occurrence',
      type: 'text',
      required: true,
    },
    {
      name: 'hostName',
      type: 'text',
      required: true,
    },
    {
      name: 'recipients',
      type: 'array',
      fields: [{ type: 'row', fields: [{ name: 'email', type: 'email' }] }],
      admin: { readOnly: true },
    },
    {
      name: 'emailSent',
      type: 'checkbox',
      admin: { readOnly: true },
    },
  ],
};
export default OnboardingEmails;
