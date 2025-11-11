import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Create a custom hook to make it easier to use the context
export const useTheme = () => useContext(ThemeContext);

// Create the provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme

  // This effect updates the <html> tag based on the theme
  // This is for Tailwind's 'class' dark mode strategy
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the opposite class
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    // Add the current theme class
    root.classList.add(theme);

  }, [theme]); // Rerun this effect whenever the 'theme' state changes

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Pass the theme and toggle function to all children
  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};