import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HomeIcon from '../../assets/home.png';
import UserIcon from '../../assets/human.png';
import SearchIcon from '../../assets/search.png';

const StyledWrapper = styled.div`
  width: 90vw;
  height: 12vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  padding: 2vh 5vw;
  box-shadow: 5px 5px 20px 1px ${({ theme }) => theme.shadow},
    -4px -4px 7px 3px ${({ theme }) => theme.secondary};
`;

const StyledList = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
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
  height: 100%;
  display: block;

  a {
    display: block;
    margin-top: 50%;
    height: 50%;
    align-items: center;
  }
  img {
    height: 100%;
  }
`;

const SideBar = () => {
  return (
    <StyledWrapper>
      <StyledList>
        <StyledHome>
          <Link to='/'>
            {' '}
            <img
              src={HomeIcon}
              alt='Icon made by Freeplk from www.flaticon.com'
            />{' '}
            Home
          </Link>
        </StyledHome>
        <StyledIcon>
          <Link to='/'>
            <img
              src={UserIcon}
              alt='Icon made by Freeplk from www.flaticon.com'
            />{' '}
          </Link>
        </StyledIcon>
        <StyledIcon>
          <Link to='/'>
            <img
              src={SearchIcon}
              alt='Icon made by Freeplk from www.flaticon.com'
            />{' '}
          </Link>
        </StyledIcon>
      </StyledList>
    </StyledWrapper>
  );
};

export default SideBar;
