import styled from 'styled-components';

export const StyledH2 = styled.h2`
  text-align: center;
  font-style: italic;
  border-bottom: 2px solid grey;
  padding-bottom: 10px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-style: italic;
  font-size: 18px;
`;

export const StyledInput = styled.input`
  margin-bottom: 15px;
  width: 95%;
  height: 20px;
  border: 2px solid grey;
  border-radius: 5px;
`;

export const StyledSubmit = styled.input`
  border-radius: 5px;
  padding: 5px;
  background-color: green;
  color: white;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 1px 1px black;
  }
`;
