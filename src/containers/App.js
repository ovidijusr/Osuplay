import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// let store = createStore(osuplay);
class App extends Component {
  render() {
    return (
        <Fragment>
          <Header />
          <Content />
          <Footer />
        </Fragment>
    );
  }

}



export default App;
