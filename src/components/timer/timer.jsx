import React from 'react'
import './timer.sass'

const formatTime = time => time < 10 ? `0${time}` : time

const formattedTime = secs => {
  const minutos = parseInt( secs / 60, 10 ) 
  const seconds = parseInt( secs % 60, 10 )

  return `${formatTime(minutos)}:${formatTime(seconds)}`
}

function Timer (props) {
  return (
    <div className="Timer">
       <p> 
         <span>
             { formattedTime(props.tiempoTranscurrido) } / { formattedTime(props.duration) } 
         </span>
        </p>
    </div>
  )
}

export default Timer