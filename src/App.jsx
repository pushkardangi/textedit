import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

import React, { useState } from 'react';

function App() {

  const[mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <>
      <div className="flex flex-col bg-[#0f0f0f] h-screen">
        <Navbar mode={mode} toggleMode={toggleMode} />
        <main className="flex flex-1 overflow-hidden">
          <Aside mode={mode} />
        </main>
      </div>
    </>
  )
}

export default App;
