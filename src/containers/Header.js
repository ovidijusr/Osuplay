import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Header.css'
import * as results from '../actions/results';

import osuPlayLogo from '../images/icons/osuplay-logo.svg';

import userIcon from '../images/icons/user.svg'

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
        <img
          alt="Logo"
          className="header__logo"
          src={osuPlayLogo}
        />
        <div className="header__search">
          <Search
            results={this.props.results}
            actions={this.props.actions}
          />
        </div>
        <div className="header__menu">
          <img
            src={userIcon}
            width="40px"
            alt="user icon"/>
        </div>
      </div>
    )
  }
}

Header.propTypes = propTypes

Header.defaultProps = defaultProps

const mapStateToProps = (state, ownProps) => ({
  results: state.results,
})
const mapDispatchToProps = (dispatch) => ({
  actions: {
    updateSearch: (data) => dispatch(results.updateSearch(data)),
    searchSong: (data) => dispatch(results.searchSong(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
