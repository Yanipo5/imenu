import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

export default new ApolloClient({
  link: new HttpLink({ uri: process.env.VUE_APP_GRAPHQL_SERVER }),
  cache: new InMemoryCache()
});
