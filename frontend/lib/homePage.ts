import { homePageQuery } from "./gql/documents/queries";
import client from "./services/graphql";

export async function getHomePageData() {
  const { data } = await client.query({
    query: homePageQuery,
    fetchPolicy: "no-cache",
  });

  return data.HomePage;
}
