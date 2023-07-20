import { useTheme } from "../context/ThemeContext";

function Navbar() {

  const { mode, theme, toggleMode } = useTheme();

  return (
    <nav className={`p-4 shadow-lg rounded-b-lg ${theme.textColor} ${theme.sectionColor} border-b-2 ${theme.borderColor}`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <span className="text-xl font-medium">TextediT</span>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className={`text-base font-semibold w-20 px-3 py-1 rounded border-2 ${mode === "light" ? "border-[#e5e7eb]" : theme.borderColor}`}
            onClick={toggleMode}
          >
            {mode === "dark" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
