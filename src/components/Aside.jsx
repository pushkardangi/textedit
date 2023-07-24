import Stats from "./Stats";
import FeatureButtons from "./FeatureButtons";

import { useTheme } from "../context/ThemeContext";

import "../fonts/inter.css";
import "../styles/scrollbar.css"

function Aside() {

  const { mode, theme } = useTheme();
  const { textColor, border, borderColor, sectionColor } = theme;

  return (
    <aside className={`md:w-1/5 py-2 ${textColor}`}>
      <div className={`rounded-lg shadow-lg h-2/4 sm:h-full overflow-auto hide-scrollbar ${sectionColor} ${border} ${borderColor}`}>
        <div className={`p-3 border-b-2 text-lg hidden md:block ${mode == "light" ? "border-[#e5e7eb]" : borderColor}`}>
          Features
        </div>

        <div className="p-2 hidden md:flex overflow-x-auto whitespace-nowrap">
        <Stats />
        </div>

        <div className="mx-2 my-3">
          <FeatureButtons />
        </div>

      </div>
    </aside>
  )
}

export default Aside;
