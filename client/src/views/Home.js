import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Search from '../components/organism/Search';
import Title from '../components/atoms/Title';

const StyledWrapper = styled.main`
  width: 100vw;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Home = ({ activeTypeName }) => {
  return (
    <StyledWrapper>
      <Title>{activeTypeName}</Title>
      <Search />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ activeType }) => ({
  activeTypeName: activeType.name
});

export default connect(mapStateToProps, null)(Home);
