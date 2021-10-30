import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 50px;
  margin-left: 10px;

  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  border-radius: 5px;
  border: ${(props) =>
    props.primary ? '1px solid grey' : props.secondary ? 'none' : 'blue'};

  background-color: ${(props) =>
    props.primary ? '#fff' : props.secondary ? '#4F70B5' : 'blue'};
  color: ${(props) =>
    props.primary ? '#000' : props.secondary ? '#fff' : '#fff000'};

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }
`;
