import React, {Component} from 'react'

class Error extends Component {
  state = {
    handleError: false 
  }

  componentDidCatch (err, info) {
    console.log("ERROR:APP ROTA")
    this.setState = {
      handleError: true
    }
  }

  render () {
    if (this.state.handleError) {
      return (
        <p style={{color: 'white'}}>Ha ocurrido un error</p>
      )
    }
    return (
      this.props.children
    )
  }
}

export default Error