import React from 'react';
// svg
import Logo from '../images/Logo';
import FaceUser from '../images/FaceUser';
//styles
import { StyledFormLogo, StyledOffer } from './FormLogo.style';

const FormLogo = () => {
  return (
    <StyledFormLogo>
      <div>
        <h1>
          <Logo />
        </h1>
      </div>
      <div>
        <FaceUser />
      </div>
      <StyledOffer>
        <h2>Start for free & Get</h2>
        <h2>Attractive offers Today !</h2>
      </StyledOffer>
    </StyledFormLogo>
  );
};

export default FormLogo;
