import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import osuplay from './reducers';
import './index.css';
import App from './containers/App';

const store = createStore(
  osuplay,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
const root = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>
, root);

