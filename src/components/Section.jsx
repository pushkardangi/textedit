import { useTheme } from "../context/ThemeContext";
import { useText } from "../context/TextContext";

function Section() {

  const { theme } = useTheme();

  const { text, textUpdate } = useText();

  const getRowCount = (text) => {
    const lines = text.split('\n');
    return lines.length + 20;
  };

  return (
    <section className="flex flex-col flex-1 px-4 md:px-20">
      {/* Toolbar */}
      <div className={`mt-2 mb-4 p-4 ${theme.sectionColor} ${theme.border} ${theme.borderColor} shadow-md rounded-lg`}>
        <button className={`px-3 py-1 ${theme.textColor} ${theme.fnBtnColor} ${theme.fnBtnHoverColor} shadow rounded`}>
          Coming Soon
        </button>
      </div>

      {/* Textarea */}
      <div className="overflow-auto">
        <textarea id="textBox"
          className={`w-full p-4 text-lg ${theme.textColor} ${theme.bgColor}`}
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
