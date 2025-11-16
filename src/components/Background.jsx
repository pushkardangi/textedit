import React from 'react';
import { useTheme } from "../context/ThemeContext";

export default function Background({ children }) {

  const { mode } = useTheme();

  return (
    <div className={`flex flex-col h-screen overflow-hidden ${mode === "dark" ? "bg-[#0f0f0f]" : "bg-white"}`}>
      {children}
    </div>
  )
}
