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
      <div className={`my-4 md:my-2 flex justify-around md:gap-2 md:justify-start md:overflow-visible whitespace-nowrap md:relative md:top-0 absolute top-16 left-0 right-0 z-10`}>
        <Stats />
      </div>

      {/* Textarea */}
      <div className="overflow-auto md:my-4 pt-14 md:pt-0 custom-scrollbar">
        <textarea id="textBox"
          className={`w-full p-4 text-lg ${bgColor}`}
          placeholder="Start typing or paste text here"
          value={text}
          rows={getRowCount(text)}
          onChange={(e) => { textUpdate(e.target.value) }}
        />
      </div>
    </section>
  )
}

export default Section;
