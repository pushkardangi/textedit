import { useTheme, useStyles } from "../context/ThemeContext";
import FeatureButtons from "./FeatureButtons";

import "../fonts/inter.css";
import "../styles/scrollbar.css"

function Aside() {

  const UI = useStyles();
  const theme = useTheme();

  return (
    <aside className={`md:w-1/5 py-2 ${UI.textColor}`}>
      <div className={`rounded-lg shadow-lg h-2/4 sm:h-full overflow-auto hide-scrollbar ${UI.sectionColor} ${UI.border} ${UI.borderColor}`}>
        <div className={`p-3 border-b-2 text-lg hidden md:block ${theme == "light" ? "border-[#e5e7eb]" : UI.borderColor}`}>
          Features
        </div>

        <div className="mx-2 my-3">
          <FeatureButtons />
        </div>

      </div>
    </aside>
  )
}

export default Aside;
