import { useState } from 'react';

const FormRender = ({ render }) => {
  //Hooks
  //--state
  const [message, setMessage] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  //Custom functions
  const validation = (e) => {
    e.preventDefault();
    if (!inputName || !inputEmail || !inputPassword) {
      setMessage('Please provide all information');
    } else {
      setMessage('You sign up successufuly');
      setInputName('');
      setInputEmail('');
      setInputPassword('');
    }
  };

  return render(
    message,
    inputName,
    inputEmail,
    inputPassword,
    setInputName,
    setInputEmail,
    setInputPassword,
    validation
  );
};

export default FormRender;
