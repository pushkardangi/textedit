import React, { useState, useEffect, useContext } from "react";
import { darkStyles, lightStyles } from "../constants/styles";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();
const StylesContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function useStyles() {
  return useContext(StylesContext);
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("");

  const toggleMode = () => {
    let newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("mode", newMode);
  }
  
  useEffect(() => {
    const localMode = localStorage.getItem("mode");
    if (localMode) {
      setMode(localMode);
    }
    else {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={mode}>
      <ThemeUpdateContext.Provider value={toggleMode}>
        <StylesContext.Provider value={mode === "dark" ? darkStyles : lightStyles}>
        {children}
        </StylesContext.Provider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )

}