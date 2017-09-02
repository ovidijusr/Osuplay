import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import osuplay from '../reducers';
import './App.css';
import Footer from './Footer';

let store = createStore(osuplay);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          Welcome to Osuplay
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
