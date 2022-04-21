import { createContext, useEffect } from 'react';
import { useState } from 'react';
export const ThemeContext = createContext();

const themes = {
  darkMode: {
    backgroundColor: '#324955',
    color: '#ffffff',
    textColor: '#63FFF5',
  },
  lightMode: {
    backgroundColor: '#DEFFFD',
    color: 'var(--black)',
    textColor: '#0991B6',
  },
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.darkMode : themes.lightMode;

  useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true';
    setIsDark(isDark);
  }, []);

  const toggleTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDark));
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
