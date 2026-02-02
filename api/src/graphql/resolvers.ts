import axios from 'axios';
import { Payload } from 'payload';
import { parse } from 'node-html-parser';
import { randomInt } from 'crypto';
import { youtubeLiveImageUrl } from '../utils/youtube';
import cache from '../utils/cache';
import { SiteSetting } from 'payload/generated-types';

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
    locale: args.locale as 'en' | 'pt' | 'all',
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

interface YoutubeChannelResolverResult {
  isLive: boolean;
  channelId: string;
  imageUrl?: string;
  videoId?: string;
  url?: string;
}

const fetchYoutubeLivePage = async (channelId: string) => {
  const response = await axios.get(
    `https://youtube.com/channel/${channelId}/live`,
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
  return response.data as string;
};

export const owncastResolver = async (
  _obj: unknown,
  _args: unknown,
  context: { payload: Payload }
) => {
  const status = await context.payload.findGlobal({
    slug: 'siteSettings',
  });

  return { isLive: !!status.isLive };
};

export const youtubeChannelResolver = async (_obj, _args, _context) => {
  let isLive = false;
  let result: YoutubeChannelResolverResult | undefined;
  const channelId = 'UCrJUlunwq20no8FY9oczb_A';
  const cacheKey = `YoutubeLiveResult`;
  const cacheValue = cache.getCache(cacheKey) as
    | YoutubeChannelResolverResult
    | undefined;

  if (cacheValue) {
    result = cacheValue;
  } else {
    const text = await fetchYoutubeLivePage(channelId);
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
      const videoIdMatches = text.match(/"watchEndpoint":{"videoId":"(.*?)"/);
      if (videoIdMatches) {
        const videoId = videoIdMatches[1];
        const imageUrl = youtubeLiveImageUrl(videoId);
        result = {
          isLive: true,
          channelId,
          url: canonicalURL,
          imageUrl,
          videoId,
        };
      } else {
        result = { isLive: false, channelId };
      }
    } else {
      result = {
        isLive,
        channelId,
      };
    }
    cache.setCache(cacheKey, result);
  }

  return result;
};

interface GoFundMeResponse {
  uniqueDonorCount: number;
  goalAmount: {
    amount: number;
  };
  currentAmount: {
    amount: number;
  };
  donationCount: number;
  donationsEnabled: boolean;
}

interface GoFundMeValue {
  uniqueDonorCount: number;
  goalAmount: number;
  currentAmount: number;
  donationCount: number;
}

export const goFundMeStatusResolver = async (_obj, _args, _context) => {
  const cacheKey = 'GoFundMeResult';
  const cacheValue = cache.getCache(cacheKey) as GoFundMeValue | undefined;
  let result: GoFundMeValue | undefined;

  if (cacheValue) {
    result = cacheValue;
  } else {
    const resp = await fetch('https://graphql.gofundme.com/graphql', {
      method: 'POST',
      body: JSON.stringify({
        operationName: 'Cofund_GetFundraiser',
        query:
          'query Cofund_GetFundraiser($slug: ID!) { fundraiser(slug: $slug) { currentAmount { amount } donationCount donationsEnabled uniqueDonorCount goalAmount { amount currencyCode }}}',
        variables: {
          slug: 'help-radio-quantica-move-studio-start-a-community-artspace',
        },
      }),

      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        'content-type': 'application/json',
      },
    });
    const {
      data: { fundraiser },
    } = (await resp.json()) as {
      data: { fundraiser: GoFundMeResponse };
    };
    const fundraiserData = fundraiser;
    result = {
      uniqueDonorCount: fundraiserData.uniqueDonorCount,
      goalAmount: fundraiserData.goalAmount.amount,
      currentAmount: fundraiserData.currentAmount.amount,
      donationCount: fundraiserData.donationCount,
    };
    cache.setCache(cacheKey, result);
  }
  return result;
};
