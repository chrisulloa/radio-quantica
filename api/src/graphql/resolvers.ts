import axios from 'axios';
import { Payload } from 'payload';
import { parse } from 'node-html-parser';
import { randomInt } from 'crypto';
import { youtubeLiveImageUrl } from '../utils/youtube';

export const showsByCategoryResolver = async (
  obj,
  args: { categoryName: string },
  context: { req: { payload: Payload } }
) => {
  const { docs } = await context.req.payload.find({
    collection: 'categories',
    where: {
      name: {
        equals: args.categoryName,
      },
    },
  });
  if (!docs || docs[0] == null) return { docs: [] };
  const categoryId = docs[0].id;
  const results = await context.req.payload.find({
    collection: 'shows',
    depth: 0,
    where: {
      categories: {
        contains: categoryId,
      },
    },
  });
  return results;
};

export const showBySlugResolver = async (
  obj,
  args: { slug: string },
  context: { req: { payload: Payload } }
) => {
  const { docs } = await context.req.payload.find({
    collection: 'shows',
    depth: 0,
    where: {
      slug: {
        equals: args.slug,
      },
    },
  });

  if (!docs || docs.length === 0) return null;

  return docs[0];
};

export const newsPostBySlugResolver = async (
  obj,
  args: { slug: string; locale?: string },
  context: { req: { payload: Payload } }
) => {
  const { docs } = await context.req.payload.find({
    collection: 'newsPosts',
    depth: 0,
    locale: args.locale,
    fallbackLocale: null,
    where: {
      slug: {
        equals: args.slug,
      },
    },
  });

  if (!docs || docs.length === 0) return null;

  return docs[0];
};

export const youtubeChannelResolver = async (_obj, _args, _context) => {
  let isLive = false;
  const channelId = 'UCO6K_kkdP-lnSCiO3tPx7WA'; // 'UCrJUlunwq20no8FY9oczb_A';
  const response = await axios.get(
    `https://youtube.com/channel/UCO6K_kkdP-lnSCiO3tPx7WA/live`,
    {
      responseType: 'document',
      headers: {
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'cache-control': 'no-cache',
        'User-Agent':
          'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Mobile Safari/537.36',
        Cookie: `CONSENT=YES+cb.20210420-15-p1.en-GB+FX+${randomInt(100, 999)}`,
      },
    }
  );
  const text = response.data as string;
  const html = parse(text);
  const canonicalURLTag = html.querySelector('link[rel=canonical]');
  const canonicalURL = canonicalURLTag.getAttribute('href');
  const referralLink =
    canonicalURL.includes('/watch?v=') || canonicalURL.includes('/live');
  if (referralLink) {
    const livePage = await axios.get(canonicalURL, { responseType: 'document' });
    const scheduledText = (livePage.data as string).match('Scheduled for');
    if (!scheduledText) {
      isLive = true;
    }
  }
  if (isLive) {
    const videoIdMatches = text.match(/"watchEndpoint":{"videoId":"(.*)"}/);
    const videoId = videoIdMatches[1];
    const imageUrl = youtubeLiveImageUrl(videoId);
    return {
      isLive: true,
      channelId,
      url: canonicalURL,
      imageUrl,
      videoId,
    };
  }
  return {
    isLive,
    channelId,
  };
};
