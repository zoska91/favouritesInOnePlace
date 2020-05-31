import React, { Suspense } from 'react';
import styled from 'styled-components';
import Indicator from '../components/atoms/Indicator';

import Search from '../components/organism/Search';

const StyledWrapper = styled.main`
  width: 100vw;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <StyledWrapper>
      <Suspense fallback={<Indicator />}>
        <Search />
      </Suspense>
    </StyledWrapper>
  );
};

export default Home;
