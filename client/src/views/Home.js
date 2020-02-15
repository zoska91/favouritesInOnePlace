import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FIND_ALL_GAMES_QUERY } from '../apollo';

import Search from '../components/organism/Search';
import { useQuery } from '@apollo/react-hooks';

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
  padding: 2vh;
  margin-bottom: 2vh;
`;

const Home = ({ activeTypeName }) => {
  const { loading, error, data } = useQuery(FIND_ALL_GAMES_QUERY);
  console.log(loading, error, data);
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
