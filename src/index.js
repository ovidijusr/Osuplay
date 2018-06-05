import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import * as firebase from "firebase";
import firebaseConfig from "./utils/firebase.config"
import osuplay from './reducers';
import './index.css';
import App from './containers/App';
import Auth from './containers/Auth/Auth';

firebase.initializeApp(firebaseConfig);
// const databaseRef = firebase.database().ref();
// databaseRef.child("test")

var provider = new firebase.auth.GoogleAuthProvider();
// firebase.auth().signInWithPopup(provider).then(function(result) {
//   // This gives you a Google Access Token. You can use it to access the Google API.
//   var token = result.credential.accessToken;
//   // The signed-in user info.
//   var user = result.user;
//   console.log(user)
//   // ...
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   // The email of the user's account used.
//   var email = error.email;
//   // The firebase.auth.AuthCredential type that was used.
//   var credential = error.credential;
//   // ...
// });

const store = createStore(
  osuplay,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

const isLoggedin = false;
const root = document.getElementById('root');
render(
  <Provider store={store}>
    {isLoggedin ? <App /> : <Auth /> }
  </Provider>
, root);

