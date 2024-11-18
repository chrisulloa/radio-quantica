import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import {
  latestNewsQuery,
  tagLookupQuery,
} from "../../../lib/gql/documents/queries";
import client from "../../../lib/services/graphql";
import NewsPage from "../../../components/newsPage";

const PAGE_SIZE = 4;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 5 }).map((_, i) => `/news/page/${i + 2}`),
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
        destination: "/news",
        permanent: false,
      },
    };
  }

  const { data } = await client.query({
    query: latestNewsQuery,
    variables: { page, limit: PAGE_SIZE, sort: "-publishDate" },
    fetchPolicy: "no-cache",
  });

  const newsPosts = data.NewsPosts?.docs;

  if (!newsPosts?.length) return { notFound: true };

  const { data: tagsData } = await client.query({
    query: tagLookupQuery,
    fetchPolicy: "no-cache",
  });
  const tags =
    tagsData?.Tags?.docs
      ?.map((tag) => tag?.name)
      .filter((name): name is string => Boolean(name)) || [];

  return {
    props: {
      tags,
      newsPosts,
      currentPage: page,
      pageSize: PAGE_SIZE,
      totalPages: data.NewsPosts?.totalPages,
    },
    revalidate: 60 * 60 * 24, // ISR Cache: Once a day
  };
};

export default NewsPage;
