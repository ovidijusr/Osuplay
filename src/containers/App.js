import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// let store = createStore(osuplay);
class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
    );
  }

}



export default App;
