export const websiteUrl =
  process.env.NODE_ENV !== 'development'
    ? 'https://particle.fm'
    : 'http://localhost:3001';

export const validCORSURLs =
  process.env.NODE_ENV !== 'development'
    ? [
        'https://studio.apollographql.com',
        'https://particle.fm',
        'https://www.particle.fm',
        'https://beta.particle.fm',
        'https://*.vercel.app',
      ]
    : ['http://localhost:3001', 'https://studio.apollographql.com'];

export const serverURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://api.particle.fm';

export const CDNBaseURL = 'https://radio-quantica.ams3.cdn.digitaloceanspaces.com';

export const spacesURL = 'https://ams3.digitaloceanspaces.com';
export const spacesBucket = 'radio-quantica';
