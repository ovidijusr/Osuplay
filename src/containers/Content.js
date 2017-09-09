import React, { Component } from 'react'
import './Content.css';
import Result from '../components/Result';
const tempArray = Array(10).fill(0);
const renderContent = tempArray.map((number,i) =>
  <Result
    background="http://osu.hexide.com/beatmaps/414/content/image/custom/165x165/crop"
    className="content__result result"
    key={i}
  >
    {number}
  </Result>
);
class Content extends Component {
  render() {
    return (
      <div className="content">
        {renderContent}
      </div>
    );
  }

}

export default Content;