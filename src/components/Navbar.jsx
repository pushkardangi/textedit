import { darkStyles, lightStyles } from "./styles";

function Navbar (props) {
  
  let styles;

  if(props.mode === "dark"){
    styles = darkStyles;
  }
  else{
    styles = lightStyles;
  }

  return (
    <nav className={`p-4 shadow-2xl ${styles.sectionColor} ${styles.border} ${styles.borderColor} ${styles.text}`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-medium">TextediT</span>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className={`text-base font-semibold w-20 px-3 py-1 rounded border-2 ${props.mode === "light" ? "border-[#e5e7eb]" : styles.borderColor }`}
            onClick={() => {props.toggleMode()}}
          >
            {props.mode === "light" ? "Light" : "Dark"}
          </button>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
