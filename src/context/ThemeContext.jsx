import React, { useState, useContext, useCallback, useEffect } from "react";
import { darkStyles, lightStyles } from "../constants/styles";

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {

  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState(lightStyles);

  useEffect(() => {
    const localMode = localStorage.getItem("mode");
    if (localMode) {
      setMode(localMode);
      if (localMode === "light") {
        setTheme(lightStyles);
      }
      else {
        setTheme(darkStyles);
      }
    }
    else {
      setMode("dark");
      localStorage.setItem("mode", "light");
    }
  }, []);


  const toggleMode = useCallback(() => {
    switch (mode) {
      case "light":
        setTheme(darkStyles);
        setMode("dark");
        localStorage.setItem("mode", "dark");
        break;

      case "dark":
        setTheme(lightStyles);
        setMode("light");
        localStorage.setItem("mode", "light");
        break;

      default:
        setTheme(lightStyles);
        setMode("light");
        localStorage.setItem("mode", "light");
        break;
    }
  });

  return (
    <ThemeContext.Provider value={{ mode, theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}