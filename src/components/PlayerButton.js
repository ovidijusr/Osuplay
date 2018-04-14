import React from 'react'
import PropTypes from 'prop-types'
import './PlayerButton.css'
const propTypes = {}

const PlayerButton = ({icon, ...props}) => (
  <div {...props}>
    <img className="player-button__play" src={icon} alt="" />
  </div>
)

PlayerButton.propTypes = propTypes

PlayerButton.defaultProps = {
  src: PropTypes.string,
}

export default PlayerButton
