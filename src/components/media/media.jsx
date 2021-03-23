import React, { PureComponent } from 'react'
import './media.sass'

class Media extends PureComponent {

  handleClick = (ev) => {
    this.props.handleOpenModal(this.props)
  }

  render() {

    return (
      <div className="Media" onClick = { this.handleClick } >
        <div className="Media-cover">
          <img className="Media-image"
               src= {this.props.cover} 
               alt={this.props.title} 
               width={ 260 } 
               height={ 160 } />
        </div>
        <h3 className="Media-title">{ this.props.title }</h3>
        <p className="Media-author"> {this.props.author} </p>
      </div>
    )
  }
}

export default Media 