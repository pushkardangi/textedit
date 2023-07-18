import { useStyles } from "../context/ThemeContext";
import { useText, useTextUpdate } from "../context/TextContext";

import {
  undo,
  redo,
  capitalCase,
  sentenceCase,
  lowercase,
  uppercase,
  removeExtraSpace,
  copyText,
  clearText,
  dragBtn,
} from "../assets";

function FeatureButtons() {

  const UI = useStyles();

  const text = useText();
  const textUpdate = useTextUpdate();

  const features = [
    {
      title: "Undo",
      image: undo,
      function: () => {
        console.log("Undo");
      },
    },
    {
      title: "Redo",
      image: redo,
      function: () => {
        console.log("Redo");
      },
    },
    {
      title: "Capital Case",
      image: capitalCase,
      function: () => {
        let newText = "";
        let splitBySpace = text.trim().split(" ");

        for (let i = 0; i < splitBySpace.length; i++)
        {
          let firstChar = splitBySpace[i].charAt(0);
          let restOfWord = splitBySpace[i].slice(1);

          newText += firstChar.toUpperCase() + restOfWord.toLowerCase() + " ";
        }

        let splitByNewline = newText.trim().split("\n");
        newText = "";

        for (let i = 0; i < splitByNewline.length; i++)
        {
          let firstChar = splitByNewline[i].charAt(0);
          let restOfWord = splitByNewline[i].slice(1);

          newText += firstChar.toUpperCase() + restOfWord + "\n";
        }

        textUpdate(newText);
      },
    },
    {
      title: "Sentence Case",
      image: sentenceCase,
      function: () => {
        let char = "";
        let sentence = text.split(/(?<=[.?!])/);

        for (let i = 0; i < sentence.length; i++)
        {
          for (let j = 0; j < sentence[i].length; j++)
          {
            char = sentence[i][j].charCodeAt(0);
            if (( char > 47 && char < 58) || (char > 64 && char < 91))
            {
                break;
            }
            else if (char > 96 && char < 123)
            {
                sentence[i] = sentence[i].substring(0, j) + sentence[i][j].toUpperCase() + sentence[i].substring(j + 1);
                break;
            }
          }
        }

        textUpdate(sentence.join(''));
      },
    },
    {
      title: "Lowercase",
      image: lowercase,
      function: () => {
        textUpdate(text.toLowerCase());
      },
    },
    {
      title: "Uppercase",
      image: uppercase,
      function: () => {
        textUpdate(text.toUpperCase());
      }
    },
    {
      title: "Remove Extra Space",
      image: removeExtraSpace,
      function: () => {
        // remove extra spaces
        let newText = text.split(' ').filter(word => word).join(' ');

        // remove space between word and "." or "?" or "!" (sentence termination)
        newText = newText.replace(/\s\./g, ".");
        newText = newText.replace(/\s\?/g, "?");
        newText = newText.replace(/\s!/g, "!");

        textUpdate(newText);
      }
    },
    {
      title: "Copy Text",
      image: copyText,
      function: () => {
        let textarea = document.getElementById("textBox");
        navigator.clipboard.writeText(textarea.value);
      }
    },
    {
      title: "Clear Text",
      image: clearText,
      function: () => {
        textUpdate("");
       }
    },
  ];

  return (
    <>
      {features.map((feature) => (
        <div key={feature.title.replace(/\s/g, "_")}
          className={`mb-2 p-2 flex items-center rounded w-full shadow-md ${UI.fnBtnColor} ${UI.fnBtnHoverColor}`}
          onClick={() => feature.function()}
        >
          <div className="logo">
            <img className="w-8 rounded" src={feature.image} alt={feature.title} />
          </div>
          <div className="mx-2 text-base hidden md:block">{feature.title}</div>
          <div className="ml-auto hidden md:block">
            <img className="w-2.5 mr-1" src={dragBtn} alt="drag-btn" />
          </div>
        </div>
      ))}
    </>
  )
}

export default FeatureButtons;
