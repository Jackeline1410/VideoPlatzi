import React from 'react'
import './progressBar.sass'

function ProgressBar (props) {
  return (
    <div className="ProgressBar">
      <input 
          type="range"
          min={0}
          max={props.duration}
          value={props.tiempoTranscurrido}
          onChange = {props.handleProgressChange}
       />
    </div>
  )
}

export default ProgressBar