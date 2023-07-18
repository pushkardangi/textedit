import React, { useState,  useContext } from "react";

const TextContext = React.createContext();
const TextUpdateContext = React.createContext();

export function useText() {
  return useContext(TextContext);
}

export function useTextUpdate() {
  return useContext(TextUpdateContext);
}

export function TextProvider({ children }) {

  const [text, setText] = useState("");

  const updateText = (data) => {
    setText(data);
  }

  return (
    <TextContext.Provider value={text}>
      <TextUpdateContext.Provider value={updateText}>
        {children}
      </TextUpdateContext.Provider>
    </TextContext.Provider>
  )

}