/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

//Custom Hook
const useTheme = () => useContext(ThemeContext);

export { useTheme, ThemeProvider };
