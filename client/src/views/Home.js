import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Search from '../components/organism/Search';

const StyledWrapper = styled.main`
  width: 100vw;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SyledTitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1rem;
  padding: 2vh;
  margin: 0;
`;

const Home = ({ activeTypeName }) => {
  return (
    <StyledWrapper>
      <SyledTitle>{activeTypeName}</SyledTitle>
      <Search />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ activeType }) => ({
  activeTypeName: activeType.name
});

export default connect(mapStateToProps, null)(Home);
