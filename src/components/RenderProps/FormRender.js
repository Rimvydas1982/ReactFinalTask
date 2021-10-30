import React, { useState } from 'react';

const FormRender = ({ render }) => {
  //Hooks
  //--state
  const [message, setMessage] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  //Custom functions
  const validation = () => {
    if (!inputName || !inputEmail || !inputPassword) {
      setMessage('Please provide all information');
    } else {
      setMessage('You sign up successufuly');
    }
  };

  return render(message, validation);
};

export default FormRender;
