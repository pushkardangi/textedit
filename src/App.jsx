import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Section from "./components/Section";

import React, { useState } from 'react';

export const ThemeContext = React.createContext();

function App() {

  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  }

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
