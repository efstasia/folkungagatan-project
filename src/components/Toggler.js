import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.3rem;
  font-family: 'Poppins', sans-serif;
  /* position: relative; */
  margin-top: 5px;
  margin-left: 30px;

  @media (max-width: 768px) {
    left: 10%;
  }

  @media (max-width: 481px) {
    display: none;
  }
`;
const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Ändra tema</Button>;
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
