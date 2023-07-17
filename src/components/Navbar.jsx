import { useEffect } from "react";
import { useTheme, useThemeUpdate, useStyles } from "../context/ThemeContext";

function Navbar({ getMode }) {

  const UI = useStyles();
  const theme = useTheme();
  const toggleMode = useThemeUpdate();

  useEffect(() => {
    getMode(theme);
  }, [theme]);

  return (
    <nav className={`p-4 shadow-lg rounded-b-lg ${UI.textColor} ${UI.sectionColor} border-b-2 ${UI.borderColor}`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-medium">TextediT</span>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className={`text-base font-semibold w-20 px-3 py-1 rounded border-2 ${theme === "light" ? "border-[#e5e7eb]" : UI.borderColor}`}
            onClick={toggleMode}
          >
            {theme === "dark" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
