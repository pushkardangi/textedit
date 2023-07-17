import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Section from "./components/Section";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [mode, setMode] = useState("");

  const getModeFromChild = (data) => {
    setMode(data);
  };

  return (
    <>
      <ThemeProvider>
        <div className={`flex flex-col h-screen ${mode === "dark" ? "bg-[#0f0f0f]" : "bg-white"}`}>
          <Navbar getMode={getModeFromChild} />
          <main className="flex-1 flex flex-row-reverse sm:flex-row overflow-hidden">
            <Aside />
            <Section />
          </main>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App;
