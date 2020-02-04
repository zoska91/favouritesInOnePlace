import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Input from '../components/atoms/Input';

const StyledWrapper = styled.main`
  width: 100vw;
  text-align: center;
  flex-grow: 1;
`;

const SyledTitle = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 5px 10px 10px 4px ${({ theme }) => theme.titleBg};
  padding: 2vh;
  margin-bottom: 5vh;
`;

const Home = ({ activeTypeName }) => {
  return (
    <StyledWrapper>
      <SyledTitle>{activeTypeName}</SyledTitle>
      <Input />
    </StyledWrapper>
  );
};

const mapStateToProps = ({ activeType }) => ({
  activeTypeName: activeType.name
});

export default connect(mapStateToProps, null)(Home);
