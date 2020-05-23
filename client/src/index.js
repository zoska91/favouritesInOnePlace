import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './data/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ReactQueryConfigProvider } from 'react-query';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  headers: {
    authorization: localStorage.getItem('token'),
  },
});

const queryConfig = {
  suspense: true,
};

ReactDOM.render(
  <ReactQueryConfigProvider config={queryConfig}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </ReactQueryConfigProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
