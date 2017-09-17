import React, { Component } from 'react'
import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className="search">
        <input
          onKeyUp={(e) => this.props.actions.searchSong({
            name: e.target.value,
          })}
          placeholder="Enter your favorite song or artist name!"
          className="search__input" type="text" name="searchbar"/>
      </div>
    )
  }
}

