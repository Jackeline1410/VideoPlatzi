import React from 'react'
import Media from '@/components/media/media.jsx'
import './playlist.sass'

function PlayList (props) {

    return (
      <div className="Playlist ">
        {
          props.playList.map( item => {
            return (
              <Media 
                {...item} 
                key={item.title}
                handleOpenModal={props.handleOpenModal}
              /> 
            )
          })
        }
      </div>
    )
}

export default PlayList