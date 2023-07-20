import React, { useState, useContext } from "react";

const TextContext = React.createContext();

export function useText() {
  return useContext(TextContext);
}

export function TextProvider({ children }) {

  const [text, setText] = useState("");

  const textUpdate = (data) => {
    setText(data);
  }

  return (
    <TextContext.Provider value={{ text, textUpdate }}>
      {children}
    </TextContext.Provider>
  )

}