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
      <StyledH2>Or</StyledH2>
      <StyledForm>
        <div>
          <StyledLabel htmlFor='name'>Name</StyledLabel>
          <br />
          <StyledInput
            type='text'
            required
            value={signupName}
            onChange={(e) => setSignupName(e.target.value)}
          />
        </div>
        <div>
          <StyledLabel htmlFor='email'>Email</StyledLabel>
          <br />
          <StyledInput
            type='email'
            required
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
          />
        </div>
        <div>
          <StyledLabel htmlFor='password'>Password</StyledLabel>
          <br />
          <StyledInput
            type='password'
            required
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
          />
        </div>
        <div>
          <StyledSubmit type='submit' value='Submit' />
        </div>
      </StyledForm>
    </>
  );
};

export default Form;
