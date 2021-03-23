import React from 'react'
import './reproductor.sass'

const Reproductor = props => (
  <div 
      className={ props.fullScreen ? 'VideoPlayer is-fullScreen' : 'VideoPlayer'}
      >
    { props.children }
  </div>
)

export default Reproductor