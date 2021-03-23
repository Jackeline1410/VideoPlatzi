import React, { Component } from 'react'
import HomeLayout from '@/components/home/homeLayout'
import Categories from '@/components/categories/categories'
import Related from '@/components/related/related'
import ModalContainer from '@/components/modal/modalContainer'
import Modal from '@/components/modal/modal'
import Error from '@/components/error/error'
import ReproductorContainer from '@/components/reproductor/reproductorContainer'
import {connect} from 'react-redux'

class App extends Component {
  state = {
    modalVisible: false,
    title: '',
    botonVisible: true
  }

  handleOpenModal = (ev) => {
    this.setState({
      modalVisible: true,
      infoMedia: ev
    })
  }
 
  handleCloseModal = (ev) => {
    this.setState({
      modalVisible: false
    })
  }
  
  handleFullScreen = (event) => {
    this.setState({
      botonVisible: event
    })
  }
  
  render() {
    return (
      <Error>
        <HomeLayout>

          <Related/>

          
          <Categories 
            categories={this.props.categories} 
            handleOpenModal={this.handleOpenModal}
            search = {this.props.search}
            />
          {
            this.state.modalVisible &&
            <ModalContainer>
              <Modal
                handleClick = { this.handleCloseModal }
                botonVisible = {this.state.botonVisible}
                >
                <ReproductorContainer
                  handleFullScreen = { this.handleFullScreen }
                  title = { this.state.infoMedia.title }
                  src = {this.state.infoMedia.src}
                />
              </Modal>
            </ModalContainer> 
          }
        </HomeLayout>
      </Error>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    categories: state.data.categories,
    search: state.search
  }
}

export default connect(mapStateToProps)(App)
