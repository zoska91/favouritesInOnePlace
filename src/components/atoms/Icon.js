import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledWrapper = styled.li`
  display: block;
  background-color: ${({ theme }) => theme.iconBg};
  color: ${({ theme }) => theme.secondary};
  width: 15vw;
  height: width;
  border-radius: 10px;
`;

const IconLink = styled(NavLink)`
  background-image: url(${({ icon }) => icon});
`;

const Icon = () => {
  return (
    <StyledWrapper>
      <p>link</p>
    </StyledWrapper>
  );
};

export default Icon;
