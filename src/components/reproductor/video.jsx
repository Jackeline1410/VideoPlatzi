import React,{Component} from 'react'
import './video.sass'

class Video extends Component {
  tooglePlay = () => {
    if(this.props.play) {
      this.video.pause()
    } else {
      this.video.play()
    }
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.play !== this.props.play) {
      this.tooglePlay ()
    } 
  }

  setRef = element => {
    this.video = element
  }
  
  render () {

    return (
      <div className="Video">
        <video
          onSeeking = { this.props.handleSeeking } // Me estoy moviendo | Componente empieza a cargar
          onSeeked = { this.props.handleSeeked } // Ya me movi | Componente ya cargó
          onTimeUpdate = { this.props.handleTimeUpdate }
          onLoadedMetadata = { this.props.handleLoadedMetadata }
          muted= {false}
          play = { this.props.play }
          ref={ this.setRef }
          autoPlay={ this.props.play } 
          src={ this.props.src }
        />
      </div>
    )
  }
}

export default Video