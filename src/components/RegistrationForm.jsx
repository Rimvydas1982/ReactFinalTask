import React from 'react';
import FormLogo from './FormLogo';
import FormReg from './FormReg';
//styles
import { FormWpapper, SignUpWrapper } from './RegistrationForm.style';

const RegistrationForm = () => {
  return (
    <FormWpapper>
      <FormLogo />
      <SignUpWrapper>
        <FormReg />
      </SignUpWrapper>
    </FormWpapper>
  );
};

export default RegistrationForm;
