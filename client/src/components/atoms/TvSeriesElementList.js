import React from 'react';
import styled from 'styled-components';

import ImgPopcorn from '../../assets/popcorn.png';

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
  width: 15%;

  img {
    width: 100%;
  }
`;

const StyledP = styled.p`
  margin: 0 7%;
  flex-grow: 1;
`;
const StyledSpan = styled.span`
  text-align: right;
`;

const TvSeriesElementList = ({ id, title, year, img, pickOne }) => {
  return (
    <StylesLi key={id} onClick={() => pickOne(id)}>
      <StylesImg>
        <img src={img ? img : ImgPopcorn} alt='foto' />
      </StylesImg>
      <StyledP>{title}</StyledP>
      {year && <StyledSpan>{year.slice(0, 4)}</StyledSpan>}
    </StylesLi>
  );
};

export default TvSeriesElementList;
