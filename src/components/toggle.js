import React, { useContext } from "react"
import styled from "styled-components";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode"

const ThemeButton = styled.button`
  margin: 0;
  padding: 0 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
`;

const Toggle = () => {
  const themeContext = useContext(ThemeManagerContext)
  const darkMode = themeContext.isDark ? 'On' : 'Off';

  return (
    <ThemeButton onClick={() => themeContext.toggleDark()}>
      <strong>Dark Mode:</strong> {darkMode}
    </ThemeButton>
  );
}

export default Toggle;
