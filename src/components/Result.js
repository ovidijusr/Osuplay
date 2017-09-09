import React from 'react'
import './Result.css';
function Result(props) {
  return (
    <div
      className={props.className}
      style={{backgroundImage: `url(${props.background})`}}
    >
      {props.children}
    </div>
  )
}

export default Result
