import React from 'react'
import './search.sass'

const Search = (props) => (
  <div className="Search">
    <form onSubmit = {props.handleSubmit} >
      <input
            ref={props.setInput} 
            className="Search-input" 
            type="text" 
            name="search" 
            placeholder="Busca tu video favorito"
            value = { props.value }
            onChange={props.handleChange}
            autoComplete = "off"
            />
    </form>
    <a href="https://github.com/angelvasqueznep" 
       rel="noopener noreferrer" 
       target="_blank" 
       className="Usuario">
      <img src="https://avatars0.githubusercontent.com/u/34588300?s=400&u=84fc5a04e5f6af8ff19b888be30fddea80532702&v=4" alt="Ángel Vásquez"/>
      <h3>Ángel Vásquez</h3>
    </a>
  </div>
)

export default Search