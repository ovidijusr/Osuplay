import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Footer from './Footer';
import test from '../actions/index';

// let store = createStore(osuplay);
class App extends Component {
  render() {
    return (
        <div
          className="app"
          onClick={() => this.props.actions.todoActions('a')}
        >
          Welcome to Osuplay

          <Footer />
        </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  propName: 'tst',
})
const mapDispatchToProps = (dispatch) => (
  {
    actions: {
      todoActions: (id) => dispatch(test(id)),
    }
  }
)

export default connect(mapStateToProps,mapDispatchToProps)(App);
