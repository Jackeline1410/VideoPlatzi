import React from 'react'
import { VolumenIcon, MuteIcon } from '@/components/icon/icon.js'
import './volumen.sass'

function Volumen (props) {

  return (
    <div 
    className="Volumen"
    >
        <div
          onClick = {props.handleClickMute}
          >

          {
            !props.mute ? <VolumenIcon 
            color= "#72f7de"
            size={20}
            /> : <MuteIcon 
            color= "#72f7de"
            size={20}
            
            />
          }

        </div>

        <div className="Volumen-range">
          <input 
              type="range"
              min = {0}
              max = {1}
              value = {props.volumenActual}
              step = {.05}
              onChange = { props.handleVolumenChange }
          />
        </div>
        
    </div>
  )
}

export default Volumen