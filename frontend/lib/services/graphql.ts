import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { serverBaseURL } from "../utils";

const graphqlURL = `${serverBaseURL}/api/graphql`;

const client = new ApolloClient({
  link: new HttpLink({ uri: graphqlURL }),
  cache: new InMemoryCache(),
});

export default client;
