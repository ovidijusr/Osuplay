import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Player extends Component {
  componentDidMount() {
    const audio = this.audioEl;

    setInterval(() => {
      const currentAudioTime = Math.round(audio.currentTime);
      if (this.props.currentTime !== currentAudioTime) {
        this.props.actions.setCurrentTime(currentAudioTime);
      }
    }, 1000)

    audio.addEventListener('error', (e) => {
      this.props.onError(e);
    });

    // When enough of the file has downloaded to start playing
    audio.addEventListener('canplay', (e) => {
      this.props.onCanPlay(e);
    });

    // When enough of the file has downloaded to play the entire file
    audio.addEventListener('canplaythrough', (e) => {
      this.props.onCanPlayThrough(e);
    });

    // When audio play starts
    audio.addEventListener('loadeddata', (e) => {
      const playTime = Math.floor(e.target.duration);
      this.props.actions.setTotalTime(playTime);
    });

    // When unloading the audio player (switching to another src)
    audio.addEventListener('abort', (e) => {
      this.clearListenTrack();
      this.props.onAbort(e);
    });

    // When the file has finished playing to the end
    audio.addEventListener('ended', (e) => {
      this.clearListenTrack();
      this.props.onEnded(e);
    });

    // When the user pauses playback
    audio.addEventListener('pause', (e) => {
      this.clearListenTrack();
      this.props.onPause(e);
    });

    // When the user drags the time indicator to a new time
    audio.addEventListener('seeked', (e) => {
      this.props.onSeeked(e);
    });

    audio.addEventListener('loadedmetadata', (e) => {
      this.props.onLoadedMetadata(e);
    });
  }

  /**
   * Set an interval to call props.onListen every props.listenInterval time period
   */
  setListenTrack() {
    if (!this.listenTracker) {
      const listenInterval = this.props.listenInterval;
      this.listenTracker = setInterval(() => {
        this.props.onListen(this.audioEl.currentTime);
      }, listenInterval);
    }
  }

  /**
   * Clear the onListen interval
   */
  clearListenTrack() {
    if (this.listenTracker) {
      clearInterval(this.listenTracker);
      this.listenTracker = null;
    }
  }

  render() {
    if (typeof this.props.pause === "boolean") {
      if (this.props.pause && !this.audioEl.paused) {
        this.audioEl.pause()
      }

      if(this.audioEl.src !== this.props.song) {
        this.audioEl.src = this.props.song;
        this.audioEl.play();
      }

      if (!this.props.pause && this.audioEl.paused) {
        this.audioEl.play();
      }
    }

    const incompatibilityMessage = this.props.children || (
      <p>Your browser does not support the <code>audio</code> element.</p>
    );

    // Set controls to be true by default unless explicity stated otherwise
    const controls = !(this.props.controls === false);

    // Set lockscreen / process audio title on devices
    const title = this.props.title ? this.props.title : this.props.src;


    return (
      <audio
        autoPlay={this.props.autoPlay}
        className={`player ${this.props.className}`}
        controls={controls}
        loop={this.props.loop}
        muted={this.props.muted}
        onPlay={this.onPlay}
        preload={this.props.preload}
        ref={(ref) => { this.audioEl = ref; }}
        style={this.props.style}
        title={title}
      >
        {incompatibilityMessage}
      </audio>
    );
  }
}

Player.defaultProps = {
  autoPlay: false,
  children: null,
  className: '',
  controls: false,
  listenInterval: 10000,
  loop: false,
  muted: false,
  onAbort: () => {},
  onCanPlay: () => {},
  onCanPlayThrough: () => {},
  onEnded: () => {},
  onError: () => {},
  onListen: () => {},
  onPause: () => {},
  onPlay: () => {},
  onSeeked: () => {},
  onLoadedMetadata: () => {},
  preload: 'metadata',
  src: null,
  style: {},
  title: '',
};

Player.propTypes = {
  autoPlay: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string,
  controls: PropTypes.bool,
  listenInterval: PropTypes.number,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  onAbort: PropTypes.func,
  onCanPlay: PropTypes.func,
  onCanPlayThrough: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func,
  onListen: PropTypes.func,
  onPause: PropTypes.func,
  onPlay: PropTypes.func,
  onSeeked: PropTypes.func,
  onLoadedMetadata: PropTypes.func,
  preload: PropTypes.oneOf(['', 'none', 'metadata', 'auto']),
  src: PropTypes.string, // Not required b/c can use <source>
  style: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string,
};

export default Player;
