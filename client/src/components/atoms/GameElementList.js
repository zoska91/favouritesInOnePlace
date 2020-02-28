import React from 'react';
import styled from 'styled-components';

import ImgGameboy from '../../assets/gameboy.png';

const StylesLi = styled.li`
  width: 90vw;
  margin: 1vh;
  background-color: ${({ theme }) => theme.listElementBg};
  border-radius: 7px;
  height: 10vh;
  display: flex;
  padding: 1vh 5vw;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 3px 3px 10px ${({ theme }) => theme.font};
  text-align: left;
  cursor: pointer;
`;

const StylesImg = styled.div`
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  /* width: 15%; */

  img {
    height: 100%;
  }
`;

const StyledP = styled.p`
  margin: 0 7%;
  flex-grow: 1;
`;

const GameElementList = ({ id, title, img, pickOne }) => {
  return (
    <StylesLi key={id} onClick={() => pickOne(id)}>
      <StylesImg>
        <img src={img ? img : ImgGameboy} alt='foto' />
      </StylesImg>
      <StyledP>{title}</StyledP>
    </StylesLi>
  );
};

export default GameElementList;
