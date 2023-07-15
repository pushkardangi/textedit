import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { darkStyles, lightStyles } from "../constants/styles";

import "../fonts/inter.css";
import "../styles/scrollbar.css"
import { features, dragBtn } from "../constants";

function Aside() {

  let UI;
  const theme = useContext(ThemeContext);

  { (theme === "dark") ? (UI = darkStyles) : (UI = lightStyles) }

  return (
    <aside className={`md:w-1/5 py-2 ${UI.textColor}`}>
      <div className={`rounded-lg shadow-lg h-2/4 sm:h-full overflow-auto hide-scrollbar ${UI.sectionColor} ${UI.border} ${UI.borderColor}`}>
        <div className={`p-3 border-b-2 text-lg hidden md:block ${theme == "light" ? "border-[#e5e7eb]" : UI.borderColor}`}>
          Features
        </div>

        <div className="mx-2 my-3">

          {features.map((feature) => (
            <div key={feature.title.replace(/\s/g, "_")}
              className={`mb-2 p-2 flex items-center rounded w-full shadow-md ${UI.fnBtnColor} ${UI.fnBtnHoverColor}`}
              onClick={() => feature.function()}
            >
              <div className="logo">
                <img className="w-8 rounded" src={feature.image} alt={feature.title} />
              </div>
              <div className="mx-2 text-base hidden md:block">{feature.title}</div>
              <div className="ml-auto hidden md:block">
                <img className="w-2.5 mr-1" src={dragBtn} alt="drag-btn" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </aside>
  )
}

export default Aside;
