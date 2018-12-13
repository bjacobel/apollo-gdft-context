import React from "react";
import ReactDOMServer from "react-dom/server";
import { ApolloProvider, getDataFromTree, Query } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { ApolloLink, Observable } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import gql from "graphql-tag";

import MyContext from "./MyContext";
import ContextEater from "./ContextEater";

export default async () => {
  const queryResponse = Observable.of({ data: { id: 1 } });
  const client = new ApolloClient({
    ssrMode: true,
    link: new ApolloLink(() => queryResponse),
    cache: new InMemoryCache()
  });

  const query = gql`
    query {
      id
    }
  `;

  const AppToRender = (
    <MyContext.Provider value={"a string"}>
      <ApolloProvider client={client}>
        <Query query={query}>
          {({ loading, error, data }) => (
            <ContextEater data={data} />
          )}
        </Query>
      </ApolloProvider>
    </MyContext.Provider>
  );

  await getDataFromTree(AppToRender);

  return ReactDOMServer.renderToString(AppToRender);
}
