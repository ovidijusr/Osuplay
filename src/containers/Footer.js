import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Footer.css'
import Player from '../components/Player';
import PlayerButton from '../components/PlayerButton';
import * as actions from '../actions/player';
import playButton from '../images/icons/music-play.svg';
import pauseButton from '../images/icons/music-pause.svg';
class Footer extends Component {

  render() {
    const { player, actions } = this.props;
    return (
        <div className="footer">
          <PlayerButton
            className="player-button"
            onClick={() => this.props.actions.togglePause()}
            icon={player.pause || !player.song ?
              playButton :
              pauseButton
            }
            src=""
          />
          <Player
            {...({...player, actions: {...actions}} )}
          />
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  player: state.player,
})
const mapDispatchToProps = (dispatch) => (
  {
    actions: {
      setSong: (id) => dispatch(actions.setSong(id)),
      setCurrentTime: (time) => dispatch(actions.setCurrentTime(time)),
      togglePause: (pause) => dispatch(actions.togglePause()),
    }
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
