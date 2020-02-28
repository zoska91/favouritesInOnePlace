import React from 'react';
import styled from 'styled-components';

import Heading from '../atoms/Heading';
import Nav from '../molecules/Nav';

const StyledWrapper = styled.header`
  padding: 0 5vw;
  height: auto;
`;

//TODO name from DB
const Header = () => {
  return (
    <StyledWrapper>
      <Heading>heep all here</Heading>

      <Nav />
    </StyledWrapper>
  );
};

export default Header;
