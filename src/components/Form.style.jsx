import styled from 'styled-components';

export const StyledH2 = styled.h2`
  font-family: 'Poppins', sans-serif;
  text-align: center;
  padding-bottom: 10px;
  font-weight: 400;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 18px;
`;

export const StyledInput = styled.input`
  margin-top: 10px;
  padding: 5px 0;
  margin-bottom: 15px;
  width: 95%;
  height: 20px;
  border: 2px solid rgb(128, 128, 128, 0.5);
  border-radius: 5px;
`;

export const StyledSubmit = styled.input`
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  padding: 10px;
  font-size: large;
  width: 95%;
  background-color: #f2877d;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
