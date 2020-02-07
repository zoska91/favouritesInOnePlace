import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';

const StyledForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledSubmit = styled.button`
  background-color: ${({ theme }) => theme.submitButton};
  padding: 1.5vh 15vw;
  border: none;
  border-radius: 5px;
  box-shadow: inset 3px 3px 5px 3px ${({ theme }) => theme.primary};
  display: flex;
  letter-spacing: 1px;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  font-size: 1.2rem;
`;

const StyledFormElement = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledLabel = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  position: absolute;
  top: -25%;
  text-align: center;
  left: 30%;
  font-size: 0.8rem;
  border-radius: 5px;
  min-width: 35%;
`;

const StyledInput = styled(Field)`
  display: block;
  text-align: center;
  border: none;
  background-color: transparent;
  box-shadow: inset 3px 3px 10px 6px ${({ theme }) => theme.shadow};
  padding: 2vh 3vw;
  border-radius: 5px;
  width: 70vw;
`;

const StyledButton = styled.button`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  background-color: transparent;
  padding: 0.2vh 5vw;
  border-radius: 5px;
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transform: translateY(-50%);
`;

const SignUp = ({ setTypeOfUserPanel }) => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ login: '', password: '' }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <StyledForm onSubmit={handleSubmit}>
          <StyledTitle>sign up</StyledTitle>
          <StyledFormElement>
            <StyledLabel>login</StyledLabel>
            <StyledInput
              name='login'
              component='input'
              type='text'
              placeholder='login'
            />
          </StyledFormElement>
          <StyledFormElement>
            <StyledLabel>password</StyledLabel>
            <StyledInput
              name='password'
              component='input'
              type='password'
              placeholder='password'
            />
          </StyledFormElement>
          <StyledSubmit type='submit'>sign up</StyledSubmit>
          <StyledButton
            type='button'
            onClick={() => setTypeOfUserPanel('login')}
          >
            I have account
          </StyledButton>
        </StyledForm>
      )}
    />
  );
};

export default SignUp;
