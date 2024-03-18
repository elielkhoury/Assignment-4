import React, { createContext, useContext, useState } from "react";

// Create a new Context object. This will be used to provide and consume the theme state.
const ThemeContext = createContext();

// This simplifies accessing the context from any component.
export const useTheme = () => useContext(ThemeContext);

// This component initializes the theme state and provides the toggle functionality.
export const ThemeProvider = ({ children }) => {
  // State hook to manage the theme mode (light or dark).
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle the theme state between light and dark.
  const toggleTheme = () => setIsDarkTheme((isDarkTheme) => !isDarkTheme);

  // The provider component from the context is used to wrap children components.
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
