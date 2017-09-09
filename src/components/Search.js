import React, { Component } from 'react'
import './Search.css';
export default class Search extends Component {

  render() {
    return (
      <div className="search">
        <input className="search__input" type="text" name="searchbar"/>
        <button className="search__button">Find</button>
      </div>
    )
  }
}
