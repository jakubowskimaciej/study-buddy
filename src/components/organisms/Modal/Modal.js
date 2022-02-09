import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './Modal.styles';
import { Button } from 'components/atoms/Button/Button';

const Modal = ({ handleClose, children, isOpen, onRequestClose }) => {
  return (
    <Wrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      {children}
      <Button isBig onClick={handleClose}>
        Close modal
      </Button>
    </Wrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default Modal;
