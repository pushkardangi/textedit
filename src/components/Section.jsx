import { useStyles } from "../context/ThemeContext";
import { useText, useTextUpdate } from "../context/TextContext";

function Section() {

  const UI = useStyles();

  const text = useText();
  const textUpdate = useTextUpdate();

  const getRowCount = (text) => {
    const lines = text.split('\n');
    return lines.length + 19;
  };

  return (
    <section className="flex flex-col flex-1 px-4 md:px-20">
      {/* Toolbar */}
      <div className={`mt-2 mb-4 p-4 ${UI.sectionColor} ${UI.border} ${UI.borderColor} shadow-md rounded-lg`}>
        <button className={`px-3 py-1 ${UI.textColor} ${UI.fnBtnColor} ${UI.fnBtnHoverColor} shadow rounded`}>
          Coming Soon
        </button>
      </div>

      {/* Textarea */}
      <div className="overflow-auto">
        <textarea id="textBox"
          className={`w-full p-4 text-lg ${UI.textColor} ${UI.bgColor}`}
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
