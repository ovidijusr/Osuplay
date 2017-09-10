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
          onKeyUp={(e) => this.props.actions.updateSearch(e.target.value)}
          className="search__input" type="text" name="searchbar"/>
        <button
          className="search__button"
          onClick={() => this.props.actions.searchSong({
            name: this.props.results.search.query,
          })}
        >Find</button>
      </div>
    )
  }
}

