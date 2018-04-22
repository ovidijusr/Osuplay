import React from 'react';
import './VolumeSlider.css';

const VolumeSlider = (props) => (
  <div className="volume-slider">
    <input
      className ="volume-slider__range"
      type="range"
      min="0"
      max="1"
      onChange={(newValue) => {
        props.setVolumeFn(newValue.target.value);
      }}
      value={props.volume}
      step="0.01"
    />
  </div>
)

VolumeSlider.propTypes = {}

export default VolumeSlider;
