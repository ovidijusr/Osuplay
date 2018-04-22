import React from 'react';
import propTypes from 'prop-types';
import './PlayerSeeker.css';

const PlayerSeeker = (props) => (
  <div className="player-seeker">
    <div
      className="player-seeker__progress"
      style={{
        width: `${props.currentTime / props.totalTime * 100}%`,
      }}
    />
  </div>
)

PlayerSeeker.propTypes = {
  currentTime: propTypes.number,
  totalTime: propTypes.number,
}

export default PlayerSeeker;
