import React from 'react'
import logo from '@/images/logo.png'
import './related.sass'

function Related (props) {
  return (
    <div className = 'Related' >
      <img src={logo} width={250} alt=""/>
      <h2>La mejor plataforma de videos</h2>
      <h3>Mi Play List</h3>
      <ol className="list">
        <li>El señor de los anillos: El retorno del rey</li>
        <li>El club de la pelea</li>
        <li>Star Wars</li>
        <li>Toy Story 3</li>
        <li>American History X</li>
        <li>Wall-E</li>
        <li>El cisne negro</li>
        <li>Origen</li>
        <li>Efecto mariposa</li>
        <li>3.19 nada es casualidad</li>
      </ol>
    </div>
  )
}

export default Related