import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Content.css';
import * as actions from '../actions/index';
import Result from '../components/Result';
import API from '../utils/api';

class Content extends Component {

  render() {
    const { results, actions } = this.props;
    const renderContent = results.search.result.map((result,i) =>
      <Result
        onClick={() => actions.setSong(API.getSong(result.ranked_id))}
        background={API.getImage(result.ranked_id, 128, 128)}
        className="content__result result"
        key={i}
      >
        {result.name}
      </Result>
    );
    return (
      <div className="content">
        {renderContent}
      </div>
    );
  }

}
const mapStateToProps = (state, ownProps) => ({
  results: state.results,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setSong: (id) => dispatch(actions.setSong(id)),
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Content);