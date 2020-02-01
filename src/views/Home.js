import React from 'react';
import styled from 'styled-components';

import Input from '../components/atoms/Input';

const StyledWrapper = styled.main`
  width: 100vw;
  text-align: center;
`;

const Home = () => {
  return (
    <StyledWrapper>
      <Input />
    </StyledWrapper>
  );
};

export default Home;
