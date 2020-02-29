import React from 'react';
import styled from 'styled-components';
import { LOGIN_USER } from '../../apollo/auth';
import { useMutation } from '@apollo/react-hooks';
import { connect } from 'react-redux';

import { setUser } from '../../actions/user';

const StyledForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const StyledSubmit = styled.button`
  background-color: ${({ theme }) => theme.submitButton};
  padding: 1.5vh 20vw;
  border: none;
  border-radius: 5px;
  box-shadow: inset 3px 3px 5px 3px ${({ theme }) => theme.primary};
  display: flex;
  letter-spacing: 1px;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  font-size: 1rem;
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

const StyledInput = styled.input`
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

const StyledError = styled.p`
  color: ${({ theme }) => theme.error};
  padding: 0;
  margin: 0;
`;

const Login = ({ setTypeOfUserPanel, setUserFn }) => {
  let email;
  let password;

  const setToken = data => {
    localStorage.setItem('token', data.loginUser.token);
    setUserFn(data.loginUser.user);
  };

  const setError = err => {
    console.log(err);
  };

  const [loginUser, { error }] = useMutation(LOGIN_USER, {
    onCompleted: setToken,
    onError: setError
  });
  return (
    <StyledForm
      onSubmit={e => {
        e.preventDefault();

        loginUser({
          variables: { email: email.value, password: password.value }
        });
      }}
    >
      <StyledTitle>Log in</StyledTitle>
      <StyledFormElement>
        <StyledLabel>login</StyledLabel>
        <StyledInput
          name='login'
          component='input'
          type='text'
          placeholder='login'
          ref={node => {
            email = node;
          }}
        />
      </StyledFormElement>
      <StyledFormElement>
        <StyledLabel>password</StyledLabel>
        <StyledInput
          name='password'
          component='input'
          type='password'
          placeholder='password'
          ref={node => {
            password = node;
          }}
        />
      </StyledFormElement>
      {error && <StyledError>{error.message.substring(15)}</StyledError>}
      <StyledSubmit type='submit'>log in</StyledSubmit>
      <StyledButton type='button' onClick={() => setTypeOfUserPanel('signup')}>
        create account
      </StyledButton>
    </StyledForm>
  );
};

const mapDispatchToProps = dispatch => ({
  setUserFn: type => dispatch(setUser(type))
});

export default connect(null, mapDispatchToProps)(Login);
