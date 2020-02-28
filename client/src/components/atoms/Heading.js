import styled from 'styled-components';

const Heading = styled.h2`
  font-weight: normal;
  padding: 0 0 0 25vw;
  letter-spacing: 2px;
  margin: 2vh 0;

  &:before {
    content: 'never forget.';
    width: 70%;
    display: block;
    font-size: 0.9rem;
    transform: translateX(-25vw);
  }
  &:after {
    content: '';
    width: 110%;
    height: 1px;
    display: block;
    background-color: black;
    transform: translate(-20%, 1vh);
  }
`;

export default Heading;
