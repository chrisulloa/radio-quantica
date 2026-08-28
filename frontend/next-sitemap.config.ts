import type { IConfig } from "next-sitemap";

const SITE_URL = "https://www.radioquantica.com";
const API_URL =
  process.env.NODE_ENV !== "development"
    ? "https://api.radioquantica.com"
    : process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3000";

interface PaginatedResult<T> {
  docs: T[];
  hasNextPage: boolean;
  nextPage: number | null;
}

/** One-shot GraphQL request against the Payload API, for use in this
 * standalone (non-Next.js) build script. Mirrors lib/services/graphql.ts,
 * but plain `fetch` instead of Apollo Client since this runs outside the
 * Next.js/React runtime. */
const graphqlRequest = async <T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> => {
  const res = await fetch(`${API_URL}/api/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  const { data, errors } = (await res.json()) as {
    data: T;
    errors?: { message: string }[];
  };
  if (errors) {
    throw new Error(`GraphQL error: ${errors.map((e) => e.message).join(", ")}`);
  }
  return data;
};

/** Walks every page of a paginated Payload list query, collecting `docs`. */
const fetchAllDocs = async <T>(
  query: string,
  dataKey: string
): Promise<T[]> => {
  const docs: T[] = [];
  let page: number | null = 1;

  while (page) {
    const data: Record<string, PaginatedResult<T>> = await graphqlRequest(query, {
      page,
      limit: 200,
    });
    const result: PaginatedResult<T> = data[dataKey];
    docs.push(...(result?.docs || []));
    page = result?.hasNextPage ? result.nextPage : null;
  }

  return docs;
};

interface TagSummary {
  name: string | null;
}

interface NewsPostSummary {
  slug: string | null;
  updatedAt: string | null;
}

const toISO = (date: string | null | undefined) =>
  date ? new Date(date).toISOString() : undefined;

const config: IConfig = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    // Preview links carry an auth token and must never be crawled or
    // indexed (see pages/api/preview.ts) — already covered by /api/.
    policies: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
  },
  additionalPaths: async () => {
    // pages/shows/[id]/index.tsx and pages/categories/[id].tsx are already
    // pre-rendered for every show/category at build time (getStaticPaths),
    // so next-sitemap's default page discovery picks those up on its own.
    // News posts and tags use `paths: [], fallback: true` (rendered
    // on-demand), so they need to be listed explicitly here.
    const [newsPosts, tagsData] = await Promise.all([
      fetchAllDocs<NewsPostSummary>(
        `query($page: Int, $limit: Int) {
          NewsPosts(page: $page, limit: $limit) {
            docs { slug updatedAt }
            hasNextPage
            nextPage
          }
        }`,
        "NewsPosts"
      ),
      graphqlRequest<{ Tags: { docs: TagSummary[] } | null }>(
        `query { Tags(limit: 200) { docs { name } } }`
      ),
    ]);

    const newsPaths = newsPosts
      .filter((post): post is NewsPostSummary & { slug: string } => !!post?.slug)
      .map((post) => ({
        loc: `/news/${encodeURIComponent(post.slug)}`,
        lastmod: toISO(post.updatedAt),
      }));

    const tagNames = [
      ...new Set(
        (tagsData.Tags?.docs || [])
          .map((doc) => doc?.name)
          .filter((name): name is string => !!name)
      ),
    ];
    const tagPaths = tagNames.map((name) => ({
      loc: `/news/tag/${encodeURIComponent(name)}`,
    }));

    return [...newsPaths, ...tagPaths];
  },
};

export default config;
