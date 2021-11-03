import {
  StyledH2,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSubmit,
} from './Form.style';
import FormRender from './RenderProps/FormRender';

const Form = () => {
  return (
    <>
      <StyledH2>Or</StyledH2>
      <FormRender
        render={(
          message,
          inputName,
          inputEmail,
          inputPassword,
          setInputName,
          setInputEmail,
          setInputPassword,
          validation
        ) => (
          <StyledForm onSubmit={(e) => validation(e)}>
            <div>
              <StyledLabel htmlFor='name'>Name</StyledLabel>
              <br />
              <StyledInput
                type='text'
                value={inputName}
                placeholder='♙ Joy Shaleb'
                onChange={(e) => setInputName(e.target.value)}
              />
            </div>
            <div>
              <StyledLabel htmlFor=' email'>Email</StyledLabel>
              <br />
              <StyledInput
                type='email'
                value={inputEmail}
                placeholder='✉ abc@gmail.com'
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </div>
            <div>
              <StyledLabel htmlFor='password'>Password</StyledLabel>
              <br />
              <StyledInput
                type='password'
                value={inputPassword}
                placeholder='♯ ********'
                onChange={(e) => setInputPassword(e.target.value)}
              />
            </div>
            <div>
              <StyledSubmit type='submit' value='Submit' />
            </div>
            {message && <p>{message}</p>}
          </StyledForm>
        )}
      />
    </>
  );
};

export default Form;
