import NewsPost from "../../../components/newsPost";
import isAdminOrEditor from "../../../lib/auth";
import { draftNewsPostQuery } from "../../../lib/gql/documents/queries";
import { NewsPostBySlugQuery } from "../../../lib/gql/types/graphql";
import client from "../../../lib/services/graphql";

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

const decodeID = (pageId: string) => {
  try {
    const decoded = Buffer.from(pageId, "base64").toString("utf8");
    const { token, id } = JSON.parse(decoded);
    return {
      token,
      id,
    };
  } catch (e) {
    return null;
  }
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  const decoded = decodeID(params.id);

  if (!decoded || !(await isAdminOrEditor(decoded.token))) {
    return { notFound: true };
  }

  const { id, token } = decoded;
  const { data } = await client.query({
    query: draftNewsPostQuery,
    variables: { draft: true, newsPostId: id },
    fetchPolicy: "no-cache",
    context: {
      headers: {
        Authorization: `JWT ${token}`,
      },
    },
  });

  if (!data || !data.NewsPost) return { notFound: true };

  return {
    props: {
      post: data.NewsPost,
    },
    revalidate: 1,
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
  return (
    <NewsPost post={post} enContent={post.content} ptContent={null}></NewsPost>
  );
}
