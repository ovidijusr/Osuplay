import React from 'react'
import PropTypes from 'prop-types'
import './PlayerButton.css'
const propTypes = {}

const defaultProps = {}

const PlayerButton = props => (
  <div {...props}>
    <img src={props.icon} alt="" />
  </div>
)

PlayerButton.propTypes = propTypes

PlayerButton.defaultProps = defaultProps

export default PlayerButton
