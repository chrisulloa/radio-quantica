import { readFileSync } from 'fs';
import path from 'path';
import logger from './logging';

export interface DevCreds {
  azuracast_api_key?: string;
}

const azuracastCreds = ((): DevCreds => {
  if (process.env.azuracast_api_key) {
    logger.info('Found azuracast_creds env variable.');
    return { azuracast_api_key: process.env.azuracast_api_key };
  }
  try {
    logger.info('Fetching azuracast_creds from creds.json file.');
    const f = readFileSync(path.join(__dirname, '../creds.json'), 'utf-8');
    return JSON.parse(f) as DevCreds;
  } catch {
    logger.info('Azuracast creds.json file not found.');
  }

  return {};
})();

export default azuracastCreds;
