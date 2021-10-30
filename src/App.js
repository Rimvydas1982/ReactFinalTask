import RegistrationForm from './components/RegistrationForm';
import React, { useState } from 'react';
import ModalButton from '.././src/components/ModalComponent/Button/ModalButton';
import Modal from '.././src/components/ModalComponent/Modal/Modal';

const App = () => {
  //Hooks
  //--state
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <section>
        <ModalButton text='Sign Up' action={openModal} />
      </section>

      {isOpen && (
        <Modal onClose={closeModal}>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
};

export default App;
