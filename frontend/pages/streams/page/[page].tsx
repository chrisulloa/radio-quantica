import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { paginatedVidsQuery } from "../../../lib/gql/documents/queries";
import client from "../../../lib/services/graphql";
import VideoPage from "../../../components/videosPage";

const PAGE_SIZE = 6;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 4 }).map((_, i) => `/streams/page/${i + 2}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1;

  if (page === 1) {
    return {
      redirect: {
        destination: "/streams",
        permanent: false,
      },
    };
  }

  const { data } = await client.query({
    query: paginatedVidsQuery,
    variables: { page, limit: PAGE_SIZE, sort: "-sortableId" },
    fetchPolicy: "no-cache",
  });

  const vids = data.LiveVideos?.docs;

  if (!vids?.length) return { notFound: true };

  return {
    props: {
      vids,
      currentPage: page,
      pageSize: PAGE_SIZE,
      totalPages: data.LiveVideos?.totalPages,
    },
    revalidate: 60 * 60 * 24, // ISR Cache: Once a day
  };
};

export default VideoPage;
