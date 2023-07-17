import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Section from "./components/Section";

import React, { useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

function App() {

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
    <>
      <ThemeContext.Provider value={mode}>
        <div className={`flex flex-col h-screen ${mode==="dark"?"bg-[#0f0f0f]":"bg-white"}`}>
          <Navbar toggleMode={toggleMode} />
          <main className="flex-1 flex flex-row-reverse sm:flex-row overflow-hidden">
            <Aside />
            <Section />
          </main>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App;
