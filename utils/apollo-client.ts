import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

export const client = new ApolloClient({
  // Provide required constructor fields
  cache,
  uri: process.env.SCHEMA_URL,
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
