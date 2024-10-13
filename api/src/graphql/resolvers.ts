import axios from 'axios';
import { Payload } from 'payload';
import { parse } from 'node-html-parser';
import { youtubeImageUrl, youtubeVideoId } from '../utils/youtube';

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
  const channelId = 'UCrJUlunwq20no8FY9oczb_A';
  const response = await axios.get(
    `https://youtube.com/channel/${channelId}/live`,
    { responseType: 'document' }
  );
  console.log(response.status);
  const text = response.data as string;
  const html = parse(text);
  const canonicalURLTag = html.querySelector('link[rel=canonical]');
  const canonicalURL = canonicalURLTag.getAttribute('href');
  const referralLink = canonicalURL.includes('/watch?v=');
  console.log(referralLink);
  if (referralLink) {
    const livePage = await axios.get(canonicalURL, { responseType: 'document' });
    console.log(livePage.status);
    const scheduledText = (livePage.data as string).match('Scheduled for');
    console.log(scheduledText);
    if (!scheduledText) {
      isLive = true;
    }
  }
  if (isLive) {
    const videoId = youtubeVideoId(canonicalURL);
    const imageUrl = youtubeImageUrl(videoId);
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
