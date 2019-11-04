import React, { Component } from 'react';
import './App.css';
import Cjmp from './Cjmp';
import Modal from './Modal';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  openModalWindow = e => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModalWindow = e => {
    if (e.target.tagName === 'IMG') {
      return;
    }
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <>
        <Cjmp openModal={this.openModalWindow} />
        {isModalOpen && <Modal closeModal={this.closeModalWindow} />}
      </>
    );
  }
}

export default App;
