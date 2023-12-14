import { ApolloClient, InMemoryCache } from "@apollo/client";
import serverBaseURL from "../utils";

const graphqlURL = `${serverBaseURL}/api/graphql`;

const client = new ApolloClient({
  uri: graphqlURL,
  cache: new InMemoryCache(),
});

export default client;
