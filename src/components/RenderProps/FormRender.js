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
    } else if (
      inputName.length < 5 ||
      inputName.charAt(0) !== inputName.charAt(0).toUpperCase()
    ) {
      setMessage(
        'Name must be at least five letters long and first letter capital'
      );
    } else {
      setMessage('You sign up successfully');
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
