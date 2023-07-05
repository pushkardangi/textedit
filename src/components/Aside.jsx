import "../fonts/inter.css";
import { features, dragBtn } from "../constants";
import { darkStyles, lightStyles } from "./styles";

function Aside(props) {

  let styles;

  if (props.mode === "dark") {
    styles = darkStyles;
  }
  else {
    styles = lightStyles;
  }

  return (
    <aside className={`w-1/5 overflow-auto ${styles.text}`}>
      {/* h-full kar sakte h niche vale div ki, scroll lane k liye */}
      <div className={`mt-2 rounded-lg h-[40rem] ${styles.sectionColor} ${styles.border} ${styles.borderColor}`}>
        <div className={`p-3 border-b-2 text-lg ${props.mode == "light" ? "border-[#a5a4a4]" : styles.borderColor}`}>
          Features
        </div>

        <div className="mx-2 my-3">

          {features.map((feature) => (
            <div key={feature.title.replace(/\s/g, "_")}
              className={`mb-2 p-2 flex items-center rounded w-full shadow-md ${styles.fnButtonColor}`}
              onClick={()=>feature.function()}
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
