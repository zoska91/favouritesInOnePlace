import React from 'react';
import styled from 'styled-components';

import Input from '../components/atoms/Input';
import MainTemplate from '../templates/MainTemplate';

const StyledWrapper = styled.main`
  width: 100vw;
`;

const Home = () => {
  return (
    <StyledWrapper>
      <Input />
    </StyledWrapper>
  );
};

export default Home;
