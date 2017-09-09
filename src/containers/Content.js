import React, { Component } from 'react'
import './Content.css';

const tempArray = Array(10).fill(0);
const test = tempArray.map((number,i) =>
  <li key={i} >{number}</li>
);
class Content extends Component {
  render() {
    return (
      <div className="content">
        Content
        {test}
      </div>
    );
  }

}

export default Content;