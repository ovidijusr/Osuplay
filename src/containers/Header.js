import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Header.css'
import * as results from '../actions/results';
import PlayIcon from '../images/icons/music-play.svg'
import Search from '../components/Search'
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
        <div className="header__search">
          <Search
            actions={this.props.actions}
          />
        </div>
      </div>
    )
  }
}

Header.propTypes = propTypes

Header.defaultProps = defaultProps

const mapStateToProps = (state, ownProps) => ({
  search: state.search,
})
const mapDispatchToProps = (dispatch) => ({
  actions: {
    searchSong: (data) => dispatch(results.searchSong(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
