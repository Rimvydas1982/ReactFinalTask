//Styles
import { StyledButton } from './ModalButton.style';

const ModalButton = ({ text, action }) => {
  return (
    <StyledButton disabled={action ? false : true} onClick={action}>
      {text}
    </StyledButton>
  );
};

export default ModalButton;
