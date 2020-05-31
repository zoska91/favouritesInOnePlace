import React, { Suspense } from 'react';
import styled from 'styled-components';

import Indicator from '../components/atoms/Indicator';

const StyledWrapper = styled.main`
  width: 100vw;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const FavouritesPage = () => {
  return (
    <Suspense fallback={<Indicator />}>
      <StyledWrapper></StyledWrapper>
    </Suspense>
  );
};

export default FavouritesPage;
