import axios from 'axios';
import { websiteUrl } from './config';

const secret = process.env.REVALIDATE_TOKEN;
const revalidateOptions = (path: string) => ({
  method: 'GET',
  url: `${websiteUrl}/api/revalidate`,
  params: {
    path,
    secret,
  },
});

export const revalidateResource = async (path: string, shouldWait = false) => {
  try {
    if (process.env.NODE_ENV !== 'development') {
      if (shouldWait) {
        setTimeout(() => {
          console.log('Waiting before revalidating');
        }, 5000);
      }
      await axios.request(revalidateOptions(path));
    }
  } catch {
    console.log(`Failed to revalidate for path ${path}`);
  }
};

export default revalidateOptions;
