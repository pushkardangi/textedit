import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { darkStyles, lightStyles } from "../constants/styles";

import "../fonts/inter.css";
import { features, dragBtn } from "../constants";

function Aside() {

  let UI;
  const theme = useContext(ThemeContext);

  { (theme === "dark") ? (UI = darkStyles) : (UI = lightStyles) }

  return (
    <aside className={`w-1/5 py-2 overflow-auto ${UI.textColor}`}>
      {/* h-full kar sakte h niche vale div ki, scroll lane k liye */}
      <div className={`rounded-lg h-full shadow-lg ${UI.sectionColor} ${UI.border} ${UI.borderColor}`}>
        <div className={`p-3 border-b-2 text-lg ${theme == "light" ? "border-[#e5e7eb]" : UI.borderColor}`}>
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
              <div className="mx-2 text-base">{feature.title}</div>
              <div className="ml-auto">
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
