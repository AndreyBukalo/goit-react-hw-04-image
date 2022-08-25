import { Overlay, ModalContainer } from './Modal.styled';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
  };

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return createPortal(
      <Overlay onClick={this.onBackdropClick}>
        <ModalContainer>
          <img src={this.props.url} alt="" />
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
}
