import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ImgLogout from '../../assets/exit.png';

import FormElement from '../atoms/FormElement';
import Submit from '../atoms/Submit';
import Title from '../atoms/Title';

const SyledWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 4vh;
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8rem;
`;

const StyledLogout = styled.button`
  height: 5vh;
  background-color: transparent;
  border: none;
  margin-left: 2vw;

  img {
    height: 100%;
  }
`;

const UserPanel = ({ user }) => {
  console.log(user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const logOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/home';
  };

  return (
    <SyledWraper>
      <Title>Hello {user.firstName}</Title>
      <p>Do you want change something?</p>
      <StyledForm action=''>
        <FormElement
          value={firstName}
          name='firstName'
          type='text'
          placeholder='first name'
          setValue={setFirstName}
          small
        ></FormElement>

        <FormElement
          value={lastName}
          name='lastName'
          type='text'
          placeholder='lastName'
          setValue={setLastName}
          small
        ></FormElement>

        <FormElement
          value={email}
          name='email'
          type='text'
          placeholder='email'
          setValue={setEmail}
          small
        ></FormElement>

        <FormElement
          name='password'
          type='password'
          placeholder='password'
          setValue={setPassword}
          small
        ></FormElement>

        <FormElement
          name='confirm password'
          type='password'
          placeholder='confirm password'
          setValue={setConfirmPassword}
          small
        ></FormElement>

        <Submit>Confirm</Submit>
      </StyledForm>

      <StyledFooter>
        <p>Enjoy your life!</p>
        <StyledLogout onClick={logOut}>
          <img src={ImgLogout} alt='logout' />
        </StyledLogout>
      </StyledFooter>
    </SyledWraper>
  );
};

const mapStateToProps = ({ user }) => ({
  user: user.user
});

export default connect(mapStateToProps, null)(UserPanel);
