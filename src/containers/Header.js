import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.css'
import PlayIcon from '../images/icons/music-play.svg'
const propTypes = {}

const defaultProps = {}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="header">
        <h1 className="header__title">
          <span>Osu</span>
          <img
            alt="logo"
            src={PlayIcon}
            width="32px"
          />
        </h1>
      </div>
    )
  }
}

Header.propTypes = propTypes

Header.defaultProps = defaultProps

export default Header
