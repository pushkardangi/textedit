import React from "react";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";
import Section from "./components/Section";
import Background from "./components/Background";

import { ThemeProvider } from "./context/ThemeContext";
import { TextProvider } from "./context/TextContext";

function App() {
  return (
    <ThemeProvider>
      <Background>
        <Navbar />
        <main className="flex-1 flex flex-row-reverse sm:flex-row overflow-hidden">
          <TextProvider>
            <Aside />
            <Section />
          </TextProvider>
        </main>
      </Background>
    </ThemeProvider>
  )
}

export default App;
