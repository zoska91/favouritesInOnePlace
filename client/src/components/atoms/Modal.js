import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import Submit from '../atoms/Submit';

const StyledSubmit = styled(Submit)`
  width: 80%;
  padding: 2vh;
  text-align: center;
  justify-content: center;
`;

const StyledWrapper = styled(animated.div)`
  position: fixed;
  top: 50vh;
  left: 50vw;
  width: 60vw;
  height: 50vh;
  padding: 5vh 3vw;
  background-color: white;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 10px solid ${({ theme }) => theme.iconActiveBorder};
`;

const Modal = ({ text, toggleSidebar }) => {
  const appear = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });

  return (
    <StyledWrapper style={appear}>
      <p>{text}</p>
      <StyledSubmit onClick={() => toggleSidebar(false)}>close</StyledSubmit>
    </StyledWrapper>
  );
};

export default Modal;
