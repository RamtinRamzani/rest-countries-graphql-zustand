import { ApolloClient, InMemoryCache } from "@apollo/client";

const api = import.meta.env.VITE_API_URL; // || "http://localhost:4000/";

export const client = new ApolloClient({
  uri: api,
  cache: new InMemoryCache(),
});
