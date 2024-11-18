import {
  latestNewsQuery,
  tagLookupQuery,
} from "../../lib/gql/documents/queries";
import client from "../../lib/services/graphql";
import NewsPage from "../../components/newsPage";

const PAGE_SIZE = 4;

export async function getStaticProps() {
  const { data } = await client.query({
    query: latestNewsQuery,
    variables: { page: 1, limit: PAGE_SIZE, sort: "-publishDate" },
    fetchPolicy: "no-cache",
  });

  const newsPosts = data.NewsPosts?.docs;

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
      pageSize: PAGE_SIZE,
      currentPage: 1,
      totalPages: data.NewsPosts?.totalPages,
    },
  };
}

export default NewsPage;
