import React from 'react';
import styled, { keyframes } from 'styled-components';

const circle = keyframes`
   0% {
    top: 96px;
    left: 96px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 18px;
    left: 18px;
    width: 156px;
    height: 156px;
    opacity: 0;
  }
`;

const Root = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  overflow: hidden;

  .ldio-qmjujd0lqs9 div {
    position: absolute;
    border-width: 4px;
    border-style: solid;
    opacity: 1;
    border-radius: 50%;
    animation: ${circle} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  .ldio-qmjujd0lqs9 div:nth-child(1) {
    border-color: #93dbe9;
  }

  .ldio-qmjujd0lqs9 div:nth-child(2) {
    border-color: #689cc5;
    animation-delay: -0.5s;
  }

  .ldio-qmjujd0lqs9 {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-qmjujd0lqs9 div {
    box-sizing: content-box;
  }
`;

const Indicator = () => (
  <Root className='loadingio-spinner-ripple-xvso974sx3b'>
    <div class='ldio-qmjujd0lqs9'>
      <div></div>
      <div></div>
    </div>
  </Root>
);

export default Indicator;
