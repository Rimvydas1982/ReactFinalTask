import React from 'react';
import Button from './Button';
import Form from './Form';
//React icons
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookCircleLine } from 'react-icons/ri';
//Style
import {
  FormRegWrapper,
  StyledP2,
  StyledP1,
  BuutonWrapper,
} from './FormReg.style';

const FormReg = () => {
  return (
    <>
      <FormRegWrapper>
        <h1>Get started</h1>
        <StyledP1>Already have an account?</StyledP1>
        <StyledP2>Log In</StyledP2>
        <BuutonWrapper>
          <Button logo={<FcGoogle size={15} />} text={` sign up`} primary />
          <Button
            logo={<RiFacebookCircleLine size={15} />}
            text='sign up'
            secondary
          />
        </BuutonWrapper>
        <Form />
      </FormRegWrapper>
    </>
  );
};

export default FormReg;
