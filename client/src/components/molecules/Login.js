import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { connect } from 'react-redux';

import { setUser } from '../../data/actions/user';
import { LOGIN_USER } from '../../data/apollo/auth';

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

const Login = ({ setTypeOfUserPanel, setUserFn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setToken = data => {
    localStorage.setItem('token', data.loginUser.token);
    setUserFn(data.loginUser.user);
  };

  const setError = err => {
    console.log(err);
  };

  const [loginUser, { error }] = useMutation(LOGIN_USER, {
    onCompleted: setToken,
    onError: setError,
  });

  const onSubmit = e => {
    e.preventDefault();
    loginUser({
      variables: { email, password },
    });
  };

  return (
    <StyledForm onSubmit={e => onSubmit(e)}>
      <StyledTitle>Log in</StyledTitle>

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
      <Submit type='submit'>log in</Submit>
      <Button type='button' onClick={() => setTypeOfUserPanel('signup')}>
        create account
      </Button>
    </StyledForm>
  );
};

const mapDispatchToProps = dispatch => ({
  setUserFn: type => dispatch(setUser(type)),
});

export default connect(null, mapDispatchToProps)(Login);
