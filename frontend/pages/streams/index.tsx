import { paginatedVidsQuery } from "../../lib/gql/documents/queries";
import client from "../../lib/services/graphql";
import VideosPage from "../../components/videosPage";

const PAGE_SIZE = 6;

export async function getStaticProps() {
  const { data } = await client.query({
    query: paginatedVidsQuery,
    variables: { page: 1, limit: PAGE_SIZE, sort: "-date" },
    fetchPolicy: "no-cache",
  });

  const vids = data.LiveVideos?.docs;

  return {
    props: {
      vids,
      pageSize: PAGE_SIZE,
      currentPage: 1,
      totalPages: data.LiveVideos?.totalPages,
    },
  };
}

export default VideosPage;
