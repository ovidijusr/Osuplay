import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';

// let store = createStore(osuplay);
class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Footer />
        </div>
    );
  }

}



export default App;
