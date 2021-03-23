import React, {Component} from 'react'
import Reproductor from './reproductor'
import Title from './title'
import Video from './video'
import PlayPause from '@/components/icon/playPause.jsx'
import Timer from '@/components/timer/timer.jsx'
import VideoPlayerControl from '@/components/video-player-control/video-player-control.jsx'
import ProgressBar from '@/components/progressBar/progressBar.jsx';
import Spinner from '@/components/spinner/spinner.jsx'
import Volumen from '@/components/volumen/volumen.jsx'
import Screen from '@/components/screen/screen.jsx' 

class ReproductorContainer extends Component {
  
  state = {
    play: true,
    videoDuration: 0,
    videoTiempoTranscurrido: 0,
    loading: false,
    mute: false,
    volumenActual: .7,
    lastVolumen: 0,
    fullScreen: false
  }

  togglePlay = () => {
    this.setState({
      play: !this.state.play
    })
  }
  
  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      videoDuration: this.video.duration 
    })
  }

  handleTimeUpdate = event => {
    this.setState({
      videoTiempoTranscurrido: this.video.currentTime
    })
  }

  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  
  handleSeeked = event => {
    this.setState({
      loading: false
    })
    
  }

  handleVolumenChange = event => {
    this.setState({
      volumenActual: event.target.value,
      mute: false
    })
    this.video.volume = event.target.value 
  }

  handleClickMute = () => {

    this.setState({
      lastVolumen: this.state.volumenActual,
      volumenActual: this.state.volumenActual === 0 ? this.state.lastVolumen : 0,
      mute: this.state.volumenActual === 0 ? false : true
    })

    this.video.volume = this.state.lastVolumen
  }

  handleFullScreen = () => {
    this.setState({
      fullScreen: this.state.fullScreen ? false : true
    })
    if(!this.state.fullScreen) {
      this.props.handleFullScreen(this.state.fullScreen)
    } else {
      this.props.handleFullScreen(this.state.fullScreen)
    }
  }

  render () {
    return (
      <Reproductor
        fullScreen = { this.state.fullScreen }
      >

        <Title title={ this.props.title }/>

        <VideoPlayerControl>
          
          <PlayPause 
                      autofocus
                      size = { 20 } 
                      color = "#72f7de"
                      handleClick= { this.togglePlay } 
                      play = { this.state.play }
                      />

          <Timer 
                duration = { this.state.videoDuration }
                tiempoTranscurrido = { this.state.videoTiempoTranscurrido }
          />
          
          <ProgressBar
            duration = { this.state.videoDuration }
            tiempoTranscurrido = { this.state.videoTiempoTranscurrido }
            handleProgressChange = { this.handleProgressChange }
          />

          <Volumen
            mute = { this.state.mute}
            volumenActual = { this.state.volumenActual }
            handleClickMute = { this.handleClickMute }
            handleVolumenChange = { this.handleVolumenChange }
          /> 

          <Screen
            handleFullScreen = { this.handleFullScreen }
            fullScreen = { this.state.fullScreen }
            color= "#72f7de"
            size={19}
          />

        </VideoPlayerControl>

        <Spinner
          loading = { this.state.loading }
        />

        <Video
              handleSeeking = { this.handleSeeking }
              handleSeeked = { this.handleSeeked }
              handleTimeUpdate = { this.handleTimeUpdate }
              handleLoadedMetadata = { this.handleLoadedMetadata }
              play = { this.state.play }
              autoPlay={ this.state.play }
              src={ this.props.src }

        />
      </Reproductor>
    )
  }
}

export default ReproductorContainer