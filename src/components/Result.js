import React from 'react'
import './Result.css';

function Result(props) {
  return (
    <div
      className={props.className}
    >
      {props.children}
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
        <div
          onClick={() => props.onPlaylistAdd()}
        >
          add to playlist
        </div>
      </div>
    </div>
  )
}

export default Result
