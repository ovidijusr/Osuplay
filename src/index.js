import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import * as firebase from "firebase";
import firebaseConfig from "./utils/firebase.config"
import osuplay from './reducers';
import './index.css';
import Auth from './containers/Auth/Auth';

import App from './containers/App';

firebase.initializeApp(firebaseConfig);

const store = createStore(
  osuplay,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

const root = document.getElementById('root');

render (
  <div>.</div>, root
)
firebase.auth().onAuthStateChanged((state) => {
  if (state) {
    store.dispatch({
      type: 'SET_USER_DATA',
      payload: state,
    })
  }

  render(
    <Provider store={store}>
      {!!state ? <App /> : <Auth /> }
    </Provider>
  , root);


})



