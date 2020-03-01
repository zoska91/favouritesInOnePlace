import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HomeIcon from '../../assets/home.png';
import UserIcon from '../../assets/human.png';
import SearchIcon from '../../assets/search.png';
import Login from '../molecules/Login';
import SignUp from '../molecules/SignUp';
import UserPanel from '../molecules/UserPanel';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 99999;
  bottom: 2vh;
  left: 5vw;
  width: 90vw;
  height: ${({ isOpen }) => (!isOpen ? '12vh' : '82vh')};
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  padding: 2vh 5vw;
  box-shadow: 5px 5px 20px 1px ${({ theme }) => theme.shadow},
    -4px -4px 7px 3px ${({ theme }) => theme.secondary};
  transition: 0.4s;
  display: flex;
  flex-direction: column;
`;

const StyledUserPanel = styled.div`
  flex-grow: 1;
  position: relative;
`;

const StyledCloseButton = styled.span`
  position: absolute;
  top: 1vh;
  right: 0;

  display: block;
  height: 5vh;
  width: 5vh;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid ${({ theme }) => theme.closeButton};
  transform: rotate(45deg);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    transform: translate(-10%, 10%) rotate(45deg);
  }
`;

const StyledList = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-basis: 12vh;
`;

const StyledHome = styled.li`
  background-color: ${({ theme }) => theme.lightBg};
  padding: 1vh 5vw;
  border-radius: 5px;
  box-shadow: inset 3px 3px 5px 3px ${({ theme }) => theme.shadow};
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.font};
    text-decoration: none;
    font-weight: bold;
  }

  img {
    height: 60%;
    margin-right: 5vw;
  }
`;

const StyledIcon = styled.li`
  height: 3vh;
  display: block;

  img {
    height: 100%;
  }
`;

const SideBar = ({ isUserLogin }) => {
  let [isOpen, toggleSidebar] = useState(false);
  let [typeOfUserPanel, toggleUserPanel] = useState('login');

  const setTypeOfUserPanel = value => {
    toggleUserPanel((typeOfUserPanel = value));
  };

  return (
    <StyledWrapper isOpen={isOpen}>
      {isOpen && (
        <StyledUserPanel>
          <StyledCloseButton onClick={() => toggleSidebar((isOpen = false))} />
          {isUserLogin ? (
            <UserPanel />
          ) : typeOfUserPanel === 'login' ? (
            <Login setTypeOfUserPanel={setTypeOfUserPanel} />
          ) : (
            <SignUp setTypeOfUserPanel={setTypeOfUserPanel} />
          )}
        </StyledUserPanel>
      )}
      <StyledList>
        <StyledHome>
          <Link to='/'>
            <img
              src={HomeIcon}
              alt='Icon made by Freeplk from www.flaticon.com'
            />
            Home
          </Link>
        </StyledHome>
        <StyledIcon onClick={() => toggleSidebar((isOpen = true))}>
          <img
            src={UserIcon}
            alt='Icon made by Freeplk from www.flaticon.com'
          />
        </StyledIcon>
        <StyledIcon>
          <img
            src={SearchIcon}
            alt='Icon made by Freeplk from www.flaticon.com'
          />
        </StyledIcon>
      </StyledList>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ user }) => ({
  isUserLogin: user.user
});

export default connect(mapStateToProps, null)(SideBar);

//TODO when list is visible - login on top
//TODO when we want to add sth and we're not login sidebar will show on top
