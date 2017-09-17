import React from 'react'
import './Result.css';
function Result(props) {
  return (
    <div
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
      <img
        src={props.background}
        alt=""
        className="result__image"
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
  )
}

export default Result
