import React from 'react';
import styled from 'styled-components';
import Icon from '../atoms/Icon';

const StyledWrapper = styled.ul`
  display: grid;
  padding: 0;
  margin: 0;
`;

const Nav = () => {
  return (
    <StyledWrapper>
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
      <Icon />
    </StyledWrapper>
  );
};

export default Nav;
