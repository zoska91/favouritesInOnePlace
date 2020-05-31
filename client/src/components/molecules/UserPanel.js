import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';

import { UPDATE_USER } from '../../data/apollo/user';

import ImgLogout from '../../assets/exit.png';
import FormElement from '../atoms/FormElement';
import Submit from '../atoms/Submit';
import Title from '../atoms/Title';
import Error from '../atoms/Error';
import Modal from '../atoms/Modal';

const SyledWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-bottom: 1px solid black;
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

const UserPanel = ({ user, toggleSidebar }) => {
  console.log(user);
  const setError = err => {
    console.log(err);
  };

  const [isSuccefull, setSuccefull] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState('');

  const [updateUser] = useMutation(UPDATE_USER, {
    onError: setError,
  });

  const logOut = () => {
    localStorage.removeItem('token');
    window.location.href = '/home';
  };

  const onSubmit = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrors('Password must be the same');
      console.log(errors);
      return;
    } else {
      updateUser({
        variables: { id: user.id, firstName, lastName, email, password },
      });
      setSuccefull(true);
    }
  };

  return (
    <SyledWraper>
      {isSuccefull && (
        <Modal text='Update succefull' toggleSidebar={toggleSidebar} />
      )}
      <Title>Hello {user.firstName}</Title>
      <p>Do you want to change something?</p>
      <StyledForm onSubmit={e => onSubmit(e)}>
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
        {errors && <Error>{errors}</Error>}
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
  user: user.user,
});

export default connect(mapStateToProps, null)(UserPanel);
