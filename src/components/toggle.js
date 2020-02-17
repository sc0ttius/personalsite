import React from "react"
import { useTheme } from './themeContext';
import styled, { withTheme } from 'styled-components';

const ThemeButton = styled.button`
  margin: 0;
  padding: 0 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
`;



const Toggle = (props) => {
  const { theme } = props;
  const isDarkMode = ( theme.mode === 'light' ) ? 'Off' : 'On';
  const themeToggle = useTheme();
  return (
    <ThemeButton onClick={() => themeToggle.toggle()}>
      <strong>Dark Mode:</strong> {isDarkMode}
    </ThemeButton>
  );
}

export default withTheme(Toggle);
