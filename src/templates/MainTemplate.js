import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import { theme } from '../themes/mainTheme';
import GlobalStyle from '../themes/GlobalStyle';
import SideBar from '../components/organism/SideBar';

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2vh;
`;

const MainTemplate = ({ children }) => {
  return (
    <StyledWrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {children}
        <SideBar />
      </ThemeProvider>
    </StyledWrapper>
  );
};

//

export default MainTemplate;
