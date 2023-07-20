import { useTheme } from "../context/ThemeContext";
import { useText } from "../context/TextContext";

function Section() {

  const { theme } = useTheme();
  const { textColor, bgColor, fnBtnColor, border, borderColor } = theme;

  const { text, textUpdate } = useText();

  const getRowCount = (text) => {
    const lines = text.split('\n');
    return lines.length + 20;
  };

  return (
    <section className={`w-10/12 flex flex-col px-2 md:px-20 ${textColor}`}>
      {/* Stats */}
      <div className={`my-2 md:py-4 flex overflow-x-auto whitespace-nowrap`}>
        <div>
          <button className={`px-3 py-1.5 mr-2 shadow rounded-md ${fnBtnColor} ${border} ${borderColor}`}>
            {text.length} Characters
          </button>
        </div>
        <div>
          <button className={`px-3 py-1.5 mr-2 shadow rounded-md ${fnBtnColor} ${border} ${borderColor}`}>
            {text.split(' ').filter(word => word).length} Words
          </button>
        </div>
        <div>
          <button className={`px-3 py-1.5 shadow rounded-md ${fnBtnColor} ${border} ${borderColor}`}>
            {((text.split(" ").filter((n) => { return n !== "" }).length) * 0.01).toFixed(1)} Minutes
          </button>
        </div>
      </div>

      {/* Textarea */}
      <div className="overflow-auto">
        <textarea id="textBox"
          className={`w-full p-4 text-lg ${bgColor}`}
          placeholder="Start typing or paste text here"
          value={text}
          rows={getRowCount(text)}
          onChange={(e) => { textUpdate(e.target.value) }}
        >
        </textarea>
      </div>
    </section>
  )
}

export default Section;
