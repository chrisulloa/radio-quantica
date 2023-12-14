import { newsPostBySlugQuery } from "../../lib/gql/documents/queries";
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

  return {
    props: {
      post: data.NewsPostBySlug,
    },
  };
}

export default function NewsPostPage({
  post,
}: {
  post: NewsPostBySlugQuery["NewsPostBySlug"];
}) {
  if (!post) {
    return <div></div>;
  }
  return <NewsPost post={post}></NewsPost>;
}
