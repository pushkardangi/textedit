import Navbar from "./components/Navbar";

import React, { useState } from 'react';

function App() {

  const[mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  }

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
    </>
  )
}

export default App;
