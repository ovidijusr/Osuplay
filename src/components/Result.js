import React from 'react'
import './Result.css';
import playIcon  from '../images/icons/song-action-play.svg'
import pauseIcon  from '../images/icons/song-action-pause.svg'
import moreOptions  from '../images/icons/more-options.svg'

function Result(props) {
  return (
    <div
      className={props.className}
    >
      <div className="result__song-info">
        <img
          alt=""
          className="result__image"
          src={props.background}
          onClick={props.onClick}
        />
        <div className="result__text-container">
          <span className="result__text-song-name">
            {props.songName}
          </span>
          <span className="result__text-song-artist">
            {props.artist}
          </span>

        </div>
      </div>
      <div className="result__song-actions">
          <img
            className="result__song-action"
            onClick={props.onClick}
            // onClick={() => props.onPlaylistAdd()}
            src={!props.isPlaying ?
              playIcon :
              pauseIcon
            }
            alt="play"
          />
          <img
            className="result__song-action"
            // onClick={() => props.onPlaylistAdd()}
            src={moreOptions}
            alt="play"
          />
      </div>
    </div>
  )
}

export default Result
