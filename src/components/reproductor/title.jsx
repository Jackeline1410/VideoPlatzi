import React from 'react'
import './title.sass'

const Title = props => (
  <div className="Title">
    <h2>
      { props.title }
    </h2>
  </div>
)

export default Title