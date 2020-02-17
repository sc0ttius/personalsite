import React from "react";
import { ThemeProvider } from 'styled-components';

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

const ToggleThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = React.useState({
    mode: localStorage.getItem('mode') || 'light'
  });

  const toggle = () => {
    const mode = (themeState.mode === 'light' ? `dark` : `light`);
    localStorage.setItem('mode', mode);
    setThemeState({ mode: mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider theme={{mode: themeState.mode}}>
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ToggleThemeProvider;
