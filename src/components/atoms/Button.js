import styled from 'styled-components';

const Button = styled.button`
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 3px ${({ theme }) => theme.shadow};
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
`;

export default Button;
