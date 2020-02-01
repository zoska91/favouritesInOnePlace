import styled from 'styled-components';

const Icon = styled.button`
  display: block;
  border: 5px solid ${({ theme }) => theme.secondary};
  width: 15vw;
  height: 15vw;
  border-radius: 10px;
  box-shadow: inset 3px 3px 5px 2px ${({ theme }) => theme.shadow};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 60%;
  background-color: transparent;

  &:nth-child(${({ activeGroup }) => activeGroup + 1}) {
    border-color: ${({ theme }) => theme.iconActiveBorder};
  }
`;

export default Icon;
