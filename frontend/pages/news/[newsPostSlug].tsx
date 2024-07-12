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

export async function getStaticProps({
  params,
}: {
  params: { newsPostSlug: string };
}) {
  const { data } = await client.query({
    query: newsPostBySlugQuery,
    variables: { slug: params.newsPostSlug },
    fetchPolicy: "no-cache",
  });

  if (!data || !data.NewsPostBySlug) return { notFound: true };

  const { data: ptData } = await client.query({
    query: newsPostContentBySlugAndLocaleQuery,
    variables: { slug: params.newsPostSlug, locale: "pt" },
    fetchPolicy: "no-cache",
  });

  const { data: enData } = await client.query({
    query: newsPostContentBySlugAndLocaleQuery,
    variables: { slug: params.newsPostSlug, locale: "en" },
    fetchPolicy: "no-cache",
  });

  return {
    props: {
      post: data.NewsPostBySlug,
      content: {
        pt: ptData.NewsPostBySlug?.content,
        en: enData.NewsPostBySlug?.content,
      },
    },
  };
}

export default function NewsPostPage({
  post,
  content,
}: {
  post: NewsPostBySlugQuery["NewsPostBySlug"];
  content: { pt: any; en: any };
}) {
  if (!post) {
    return <div></div>;
  }
  return (
    <NewsPost
      post={post}
      enContent={content.en}
      ptContent={content.pt}
    ></NewsPost>
  );
}
