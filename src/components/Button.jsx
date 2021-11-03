import React from 'react';
//--styles
import { StyledButton } from './Button.style';

const Button = ({ logo, text, action, primary, secondary }) => {
  return (
    <StyledButton onClick={action} primary={primary} secondary={secondary}>
      <h3>
        {logo} {text}
      </h3>
    </StyledButton>
  );
};

export default Button;
