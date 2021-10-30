import React from 'react';
import { StyledButton } from './Button.style';

const Button = ({ logo, text, action, primary, secondary }) => {
  return (
    <StyledButton onClick={action} primary={primary} secondary={secondary}>
      {logo}

      {text}
    </StyledButton>
  );
};

export default Button;
