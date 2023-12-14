import {
  BulkEmailDestination,
  SES,
  SendBulkTemplatedEmailCommandInput,
} from '@aws-sdk/client-ses';

export const sesClient = new SES({
  region: 'us-west-1',
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

const EMAIL_SENDER = 'Particle FM <info@particle.fm>';

export const emailParams = (
  destinations: BulkEmailDestination[],
  templateName: string,
  defaultTemplateData: string
): SendBulkTemplatedEmailCommandInput => ({
  Destinations: destinations,
  Source: EMAIL_SENDER /* required */,
  Template: templateName /* required */,
  DefaultTemplateData: defaultTemplateData,
});
