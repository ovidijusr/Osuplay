import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Header.css'
import * as results from '../actions/results';
import * as user from '../actions/user';

import osuPlayLogo from '../images/icons/osuplay-logo.svg';

import userIcon from '../images/icons/default-logo.png';

import * as firebase from "firebase";
import Search from '../components/Search'
const propTypes = {}

const defaultProps = {}

const menuItems = ['Browse','Playlist','Channels']
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
        <div className="header__nav">
          {menuItems.map((item,key) =>
            (<div key={key} className="header__nav-item">{item}</div>)
          )}
        </div>
        <div className="header__search">
          <Search
            results={this.props.results}
            actions={this.props.actions}
          />
        </div>
        <div className="header__menu"
        >
          {
            this.props.user.modal === "headerMenu" &&
            (
              <div>
                <div
                  className="header__menu-hover-background"
                  onClick={() => {this.props.actions.setModalVisibility("")}}
                >
                </div>
                <div className="header__menu-hover"
                >
                  <p>Profile</p>
                  <p
                    onClick={
                      () => firebase.auth().signOut()
                    }
                  >
                    Logout
                  </p>
              </div>
              </div>
            )
          }

          <span
            className="header__menu-username"
            onClick={() => {this.props.actions.setModalVisibility("headerMenu")}}
          >

            {this.props.user.data.email}
          </span>
          <img
            className="header__menu-image"
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
  user: state.user,
  results: state.results,
})
const mapDispatchToProps = (dispatch) => ({
  actions: {
    updateSearch: (data) => dispatch(results.updateSearch(data)),
    setModalVisibility: (data) => dispatch(user.setModalVisibility(data)),
    searchSong: (data) => dispatch(results.searchSong(data))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);
