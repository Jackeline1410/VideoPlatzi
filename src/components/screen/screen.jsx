import React from 'react'
import { FullScreen, FullScreenExit } from '@/components/icon/icon.js'

function Screen (props) {
  return (
    <div 
        className="Screen"
        onClick = { props.handleFullScreen }
        >
          {
            !props.fullScreen ? <FullScreen 
                                      color= {props.color}
                                      size={props.size}
                                    /> 
                                    : 
                                    <FullScreenExit 
                                      color= {props.color}
                                      size={props.size}
                                      viewBox = { '0 0 24 24' }
                                />
          }
    </div>
  )
}

export default Screen