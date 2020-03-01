import React, { useState } from 'react';
import styled from 'styled-components';
import { SIGNUP_USER } from '../../apollo/auth';
import { useMutation } from '@apollo/react-hooks';

import Submit from '../atoms/Submit';
import Button from '../atoms/Button';
import Error from '../atoms/Error';
import FormElement from '../atoms/FormElement';

const StyledForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledTitle = styled.h2`
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transform: translateY(-50%);
`;

const SignUp = ({ setTypeOfUserPanel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toLogin = () => {
    setTypeOfUserPanel('login');
  };

  const setError = err => {
    console.log(err);
  };

  const [singup, { error }] = useMutation(SIGNUP_USER, {
    onCompleted: toLogin,
    onError: setError
  });

  return (
    <StyledForm
      onSubmit={e => {
        e.preventDefault();
        singup({
          variables: { email: email, password: password }
        });
      }}
    >
      <StyledTitle>sign up</StyledTitle>

      <FormElement
        name='email'
        type='text'
        placeholder='email'
        setValue={setEmail}
      ></FormElement>
      <FormElement
        name='password'
        type='password'
        placeholder='password'
        setValue={setPassword}
      ></FormElement>

      {error && <Error>{error.message.substring(15)}</Error>}
      <Submit type='submit'>sign up</Submit>
      <Button type='button' onClick={() => setTypeOfUserPanel('login')}>
        I have account
      </Button>
    </StyledForm>
  );
};

export default SignUp;

//TODO validation when emil is in db
