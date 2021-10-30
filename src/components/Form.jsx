import React, { useState } from 'react';
import {
  StyledH2,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSubmit,
} from './Form.style';

const Form = () => {
  //Hooks
  //local
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  return (
    <>
      <StyledH2>Sign up</StyledH2>
      <StyledForm>
        <div>
          <StyledLabel htmlFor='name'>Your name</StyledLabel>
          <br />
          <StyledInput
            type='text'
            required
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
        </div>
        <div>
          <StyledLabel htmlFor='email'>Your email</StyledLabel>
          <br />
          <StyledInput
            type='email'
            required
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
        </div>
        <div>
          <StyledLabel htmlFor='password'>Your password</StyledLabel>
          <br />
          <StyledInput
            type='password'
            required
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
        </div>
        <div>
          <StyledSubmit type='submit' value='Sign Up' />
        </div>
      </StyledForm>
    </>
  );
};

export default Form;
