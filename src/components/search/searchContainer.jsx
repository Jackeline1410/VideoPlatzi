import React,{Component} from 'react'
import Search from './search'
import { connect } from 'react-redux'


class SearchContainer extends Component {
  state = {
    value: ""
  }
  
  handleSubmit = ev => {
    ev.preventDefault()
    
    this.setState({
      value: ''
    })
  }
  
  setInputRef = element => {
    this.input = element
  }
  
  handleInputChange = event => {
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: event.target.value
      }
    })
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return (
      <Search 
        setInput = { this.setInputRef }
        handleSubmit = { this.handleSubmit }
        handleChange = {this.handleInputChange}
        value = { this.state.value }
      />
    )
  }
}

export default connect()(SearchContainer)