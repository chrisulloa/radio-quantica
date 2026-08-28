import {
  newsPostBySlugQuery,
  newsPostContentBySlugAndLocaleQuery,
} from "../../lib/gql/documents/queries";
import { NewsPostBySlugQuery } from "../../lib/gql/types/graphql";
import client from "../../lib/services/graphql";
import NewsPost from "../../components/newsPost";

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

const fetchPost = async (slug: string, draft: boolean, jwt?: string) => {
  const { data } = await client.query({
    query: newsPostBySlugQuery,
    variables: { slug, draft },
    fetchPolicy: "no-cache",
    ...(draft &&
      jwt && {
        context: {
          headers: { Authorization: `JWT ${jwt}` },
        },
      }),
  });

  return data?.NewsPostBySlug;
};

const fetchLocalizedContent = async (
  slug: string,
  locale: "pt" | "en",
  draft: boolean,
  jwt?: string,
) => {
  const { data } = await client.query({
    query: newsPostContentBySlugAndLocaleQuery,
    variables: { slug, locale, draft },
    fetchPolicy: "no-cache",
    ...(draft &&
      jwt && {
        context: {
          headers: { Authorization: `JWT ${jwt}` },
        },
      }),
  });

  return data?.NewsPostBySlug?.content;
};

export async function getStaticProps({
  params,
  draftMode,
  previewData,
}: {
  params: { newsPostSlug: string };
  draftMode: boolean;
  previewData?: string;
}) {
  // If the preview JWT has expired, Payload rejects it and the resolver's
  // auth guard returns null — fall back to the published fetch rather than
  // 404ing someone whose preview session simply timed out.
  let post =
    draftMode && previewData
      ? await fetchPost(params.newsPostSlug, true, previewData)
      : undefined;
  const isDraft = Boolean(post);

  if (!post) {
    post = await fetchPost(params.newsPostSlug, false);
  }

  if (!post) return { notFound: true };

  const jwt = isDraft ? previewData : undefined;
  const [ptContent, enContent] = await Promise.all([
    fetchLocalizedContent(params.newsPostSlug, "pt", isDraft, jwt),
    fetchLocalizedContent(params.newsPostSlug, "en", isDraft, jwt),
  ]);

  return {
    props: {
      post,
      isDraft,
      content: {
        pt: ptContent,
        en: enContent,
      },
    },
  };
}

export default function NewsPostPage({
  post,
  isDraft,
  content,
}: {
  post: NewsPostBySlugQuery["NewsPostBySlug"];
  isDraft: boolean;
  content: { pt: any; en: any };
}) {
  if (!post) {
    return <div></div>;
  }
  return (
    <NewsPost
      post={post}
      isDraft={isDraft}
      enContent={content.en}
      ptContent={content.pt}
    ></NewsPost>
  );
}
