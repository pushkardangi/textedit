import { useStyles } from "../context/ThemeContext";

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

  const features = [
    {
      title: "Undo",
      image: undo,
      function: () => { console.log("Undo") }
    },
    {
      title: "Redo",
      image: redo,
      function: () => { console.log("Redo") }
    },
    {
      title: "Capital Case",
      image: capitalCase,
      function: () => { console.log("Capital Case") }
    },
    {
      title: "Sentence Case",
      image: sentenceCase,
      function: () => { console.log("Sentence Case") }
    },
    {
      title: "Lowercase",
      image: lowercase,
      function: () => { console.log("Lowercase") }
    },
    {
      title: "Uppercase",
      image: uppercase,
      function: () => { console.log("Uppercase") }
    },
    {
      title: "Remove Extra Space",
      image: removeExtraSpace,
      function: () => { console.log("Remove Extra Space") }
    },
    {
      title: "Copy Text",
      image: copyText,
      function: () => { console.log("Copy Text") }
    },
    {
      title: "Clear Text",
      image: clearText,
      function: () => { console.log("Clear Text") }
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
