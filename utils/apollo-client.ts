import { ApolloClient, InMemoryCache } from "@apollo/client";
import { PrismicLink } from "apollo-link-prismic";

export const client = new ApolloClient({
    link: PrismicLink({
        uri: "https://myblogpost.cdn.prismic.io/graphql",
        accessToken: process.env.ACCESS_TOKEN
    }),
    cache: new InMemoryCache()
});
