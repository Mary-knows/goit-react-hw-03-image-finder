import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.css';

const ModalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscKeydown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscKeydown);
    };

    handleOverlayClick = ({ target, currentTarget }) => {
        if (target === currentTarget) {
            this.props.onClose();
        }
    };

    handleEscKeydown = ({ code }) => {
        if (code === 'Escape') {
            this.props.onClose();
        }
    };

      render() {
          const { bigImage,tags } = this.props;

          return createPortal(
              <div className='Overlay' onClick={this.handleOverlayClick}>
                  <div className='Modal'>
                      <img src={bigImage} alt={tags} />
                  </div>
              </div>,
              ModalRoot
          );
  }
}

Modal.propTypes = {
  bigImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
