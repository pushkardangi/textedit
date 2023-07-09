import { darkStyles, lightStyles } from "../constants/styles";

function Navbar (props) {
  
  let UI;

  if(props.mode === "dark"){
    UI = darkStyles;
  }
  else{
    UI = lightStyles;
  }

  return (
    <nav className={`p-4 shadow-2xl rounded-b-lg ${UI.sectionColor} border-b-2 ${UI.borderColor} ${UI.textColor}`}>
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-medium">TextediT</span>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className={`text-base font-semibold w-20 px-3 py-1 rounded border-2 ${props.mode === "light" ? "border-[#e5e7eb]" : UI.borderColor }`}
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
