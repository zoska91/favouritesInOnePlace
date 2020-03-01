import React from 'react';
import styled from 'styled-components';

const StyledFormElement = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledLabel = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  position: absolute;
  top: -25%;
  text-align: center;
  left: 30%;
  font-size: 0.8rem;
  border-radius: 5px;
  min-width: 35%;
  display: ${({ small }) => (small ? 'none' : 'inline')};
`;

const StyledInput = styled.input`
  display: block;
  text-align: center;
  border: none;
  background-color: transparent;
  box-shadow: inset 3px 3px 10px 6px ${({ theme }) => theme.shadow};
  padding: ${({ small }) => (small ? '1vh 3vw ' : '2vh 3vw')};
  margin-bottom: ${({ small }) => (small ? '2vh' : '0')};
  border-radius: 5px;
  width: 70vw;
`;

const FormElement = ({ name, value, type, placeholder, setValue, small }) => {
  const handleSetValue = e => {
    setValue(e.target.value);
  };

  return (
    <StyledFormElement>
      <StyledLabel small={small}>{placeholder}</StyledLabel>
      <StyledInput
        small={small}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={e => handleSetValue(e)}
      />
    </StyledFormElement>
  );
};

export default FormElement;
