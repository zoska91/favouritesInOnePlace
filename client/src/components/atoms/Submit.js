import styled from 'styled-components';

const Submit = styled.button`
  background-color: ${({ theme }) => theme.submitButton};
  padding: 1.5vh 20vw;
  border: none;
  border-radius: 5px;
  box-shadow: inset 3px 3px 5px 3px ${({ theme }) => theme.primary};
  display: flex;
  letter-spacing: 1px;
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  font-size: 1rem;
`;

export default Submit;
