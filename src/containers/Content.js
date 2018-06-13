import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import './Content.css';
import * as actions from '../actions/player';
import * as playlistActions from '../actions/playlist';
import Result from '../components/Result';
import API from '../utils/api';

class Content extends Component {

  render() {
    const { results, actions } = this.props;
    const renderContent = results.search.result.map((result,i) =>
      <Result
        onClick={() => actions.setSong(getSongData(result))}
        onPlaylistAdd={() => actions.addToPlaylist(getSongData(result))}
        background={API.getImage(result.ranked_id, 128, 128)}
        artist={result.title.split("-")[0]}
        songName={result.title.split("-")[1]}
        className="content__result result"
        key={i}
      >
        {result.name}
      </Result>
    );
    return (
      <div className="content">
        <div className="content__wrapper">
        {
          results.search.query &&
          <h1 className="content__query">
            Search for {results.search.query}
          </h1>
        }
        <div className="content__results">
          {renderContent}
        </div>
        </div>
      </div>
    );
  }

}
const getSongData = (result) => ({
  key: 'queue',
  data: {
    id: result.ranked_id,
    name: result.title,
    url: API.getSong(result.ranked_id),
    image: API.getImage(result.ranked_id, 128, 128),
  }
})

const mapStateToProps = (state, ownProps) => ({
  results: state.results,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    setSong: (id) => dispatch(actions.setSong(id)),
    addToPlaylist: (key, data) => dispatch(playlistActions.addToPlaylist(key,data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Content);
