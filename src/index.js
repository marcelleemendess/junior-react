import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { ApolloClient, gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   gql
// } from "@apollo/client";

import store from "./containers/redux/store";

const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: httpLink,
  cache
})

client.query({
  query: gql`
   {
      categories {
        name
        products {
          id
          name
          inStock
          gallery 
          description
          category
          attributes {
            id
            name
            type
            items {
              displayValue
              value
              id
            }
          }
          prices {
            currency {
              label
              symbol
            }
            amount
          }
          brand
        }
      },
      product(id:"huarache-x-stussy-le" ){
        id
        name 
        inStock
        gallery 
      },
      currencies {
        label
        symbol
      }
    }
  `
}).then(res => console.log(res))

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store} >
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

