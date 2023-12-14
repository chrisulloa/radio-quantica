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

export const CDNBaseURL = 'https://cdn.particle.fm';

export const spacesURL = 'https://sfo3.digitaloceanspaces.com';
export const spacesBucket = 'particle-fm-space';
