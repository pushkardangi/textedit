import Stats from "./Stats";

import { useTheme } from "../context/ThemeContext";
import { useText } from "../context/TextContext";

function Section() {

  const { theme } = useTheme();
  const { textColor, bgColor } = theme;

  const { text, textUpdate } = useText();

  const getRowCount = (text) => {
    const lines = text.split('\n');
    return lines.length + 20;
  };

  return (
    <section className={`w-10/12 flex flex-col px-2 md:px-20 ${textColor}`}>
      {/* Stats */}
      <div className={`my-2 flex md:hidden overflow-x-auto whitespace-nowrap`}>
        <Stats />
      </div>

      {/* Textarea */}
      <div className="overflow-auto md:my-4">
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
