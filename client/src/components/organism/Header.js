import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Heading from '../atoms/Heading';
import Nav from '../molecules/Nav';
import Title from '../atoms/Title';

const StyledWrapper = styled.header`
  padding: 0 5vw;
  height: auto;
  text-align: center;
`;

//TODO name from DB
const Header = ({ activeTypeName }) => {
  return (
    <StyledWrapper>
      <Heading>heep all here</Heading>
      <Nav />
      <Title>{activeTypeName}</Title>
    </StyledWrapper>
  );
};

const mapStateToProps = ({ activeType }) => ({
  activeTypeName: activeType.name,
});

export default connect(mapStateToProps)(Header);
