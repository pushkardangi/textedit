import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { darkStyles, lightStyles } from "../constants/styles";

function Section() {

  let UI;
  const theme = useContext(ThemeContext);

  { (theme === "dark") ? (UI = darkStyles) : (UI = lightStyles) }

  return (
    <section className="flex flex-col flex-1 px-4 md:px-20">
      {/* Toolbar */}
      <div className={`mt-2 mb-4 p-4 ${UI.sectionColor} ${UI.border} ${UI.borderColor} shadow-md rounded-lg`}>
        <button className={`px-3 py-1 ${UI.textColor} ${UI.fnBtnColor} ${UI.fnBtnHoverColor} shadow rounded`}>
          Coming Soon
        </button>
      </div>

      {/* Textarea */}
      <div className="overflow-auto">
        <textarea id="textBox"
          className={`w-full p-4 h-[90rem] text-lg ${UI.textColor} ${UI.bgColor}`}
          placeholder="Start typing or paste text here">
        </textarea>
      </div>
    </section>
  )
}

export default Section;