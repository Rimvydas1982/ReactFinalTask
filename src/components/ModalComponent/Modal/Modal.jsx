import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

//Styles

import {
  Overlay,
  ModalWrapper,
  StyledModal,
  CloseButtonWrapper,
  CloseButton,
} from './Modal.style';

const Modal = ({ children, onClose }) => {
  //Hooks
  //--side effects

  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    });
  }, [onClose]);

  //Custom functions
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') onClose();
    return;
  };

  return ReactDOM.createPortal(
    <>
      <Overlay></Overlay>
      <ModalWrapper onClick={(e) => closeOnOverlay(e)} data-id='modalWrapper'>
        <StyledModal>
          <CloseButtonWrapper>
            <CloseButton onClick={onClose}>✕</CloseButton>
          </CloseButtonWrapper>
          <div>{children}</div>
        </StyledModal>
      </ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
