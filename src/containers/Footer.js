import React, { Component } from 'react'
import { connect } from 'react-redux';
import { VideoSeekSlider } from 'react-video-seek-slider';
import './Footer.css'
import '../components/VideoSeekSlider.css';
import Player from '../components/Player';
// import PlayerSeeker from '../components/PlayerSeeker';
import PlayerButton from '../components/PlayerButton';
import * as actions from '../actions/player';
import * as playlistActions from '../actions/playlist';
import playButton from '../images/icons/music-play.svg';
import pauseButton from '../images/icons/music-pause.svg';
import previousTrack from '../images/icons/previous-track.svg';
import nextTrack from '../images/icons/next-track.svg';
import VolumeSlider from '../components/VolumeSlider';

class Footer extends Component {
  render() {
    const { player, playlist, actions } = this.props;
    const { playlistState, lists } = playlist;
    return (
        <div className="footer">
          <VideoSeekSlider
            max={player.totalTime}
            currentTime={player.currentTime}
            progress={400}
            offset={0}
            onChange={(newTime) => {
              actions.setCurrentTime(newTime)
            }}
            secondsPrefix="00:00:"
            minutesPrefix="00:"
          />

          <PlayerButton
            className="player-button"
            onClick={() => actions.previousSong()}
            icon={previousTrack}
            src=""
          />
          <PlayerButton
            className="player-button"
            onClick={() => actions.togglePause()}
            icon={player.pause ?
              playButton :
              pauseButton
            }
            src=""
          />
          <PlayerButton
            className="player-button"
            icon={nextTrack}
            onClick={() => actions.nextSong()}
            src=""
          />
          <Player
            {...({...player, actions: {...actions}} )}
            song={
              typeof(lists[playlistState.name][playlistState.key]) !== 'undefined' &&
              lists[playlistState.name][playlistState.key].url
            }
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
  playlist: state.playlist,
})
const mapDispatchToProps = (dispatch) => (
  {
    actions: {
      setSong: (id) => dispatch(actions.setSong(id)),
      setTotalTime: (time) => dispatch(actions.setTotalTime(time)),
      setCurrentTime: (time) => dispatch(actions.setCurrentTime(time)),
      setVolume: (volume) => dispatch(actions.setVolume(volume)),
      previousSong: () => dispatch(playlistActions.previousSong()),
      nextSong: () => dispatch(playlistActions.nextSong()),
      togglePause: (pause) => dispatch(actions.togglePause()),
    }
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
