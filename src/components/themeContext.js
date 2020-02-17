import React, { useState, useEffect } from "react";
import { ThemeProvider } from 'styled-components';

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

const ToggleThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = useState({
    mode: 'light'
  });

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    const storedMode = localStorage.getItem('mode' );
    if ( storedMode && isFirstRender ) {
      setThemeState({ mode: storedMode });
      setIsFirstRender(false);
    }
  }, [isFirstRender]);

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
