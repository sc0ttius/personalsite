import React from "react"
import { useTheme } from './themeContext';
import styled, { withTheme } from 'styled-components';

const ThemeButton = styled.button`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
`;

const Toggle = (props) => {
  const { theme } = props;
  const themeToggle = useTheme();
  return (
    <ThemeButton onClick={() => themeToggle.toggle()}>
      <span>Theme:</span> {theme.mode}
    </ThemeButton>
  );
}

export default withTheme(Toggle);
