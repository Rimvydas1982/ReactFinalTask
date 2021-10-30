import React from 'react';
import Button from './Button';
import Form from './Form';
import { FcGoogle } from 'react-icons/fc';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FormRegWrapper, StyledP, BuutonWrapper } from './FormReg.style';

const FormReg = () => {
  return (
    <>
      <FormRegWrapper>
        <h1>Get started</h1>
        <p>Already have an account?</p>
        <StyledP>Log In</StyledP>
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
