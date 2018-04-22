import React, { Component } from 'react'
import { connect } from 'react-redux';
import { VideoSeekSlider } from 'react-video-seek-slider';
import './Footer.css'
import '../components/VideoSeekSlider.css';
import Player from '../components/Player';
// import PlayerSeeker from '../components/PlayerSeeker';
import PlayerButton from '../components/PlayerButton';
import * as actions from '../actions/player';
import playButton from '../images/icons/music-play.svg';
import pauseButton from '../images/icons/music-pause.svg';
import VolumeSlider from '../components/VolumeSlider';

class Footer extends Component {
  render() {
    const { player, actions } = this.props;
    return (
        <div className="footer">
          <VideoSeekSlider
            max={this.props.player.totalTime}
            currentTime={this.props.player.currentTime}
            progress={400}
            offset={0}
            onChange={(newTime) => {
              this.props.actions.setCurrentTime(newTime)
            }}
            secondsPrefix="00:00:"
            minutesPrefix="00:"
          />

          <div>test</div>
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
          <VolumeSlider
            volume={player.volume}
            setVolumeFn={actions.setVolume}
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
      setTotalTime: (time) => dispatch(actions.setTotalTime(time)),
      setCurrentTime: (time) => dispatch(actions.setCurrentTime(time)),
      setVolume: (volume) => dispatch(actions.setVolume(volume)),
      togglePause: (pause) => dispatch(actions.togglePause()),
    }
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
