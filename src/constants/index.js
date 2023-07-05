import {
  undo,
  redo,
  capitalCase,
  sentenceCase,
  lowercase,
  uppercase,
  removeExtraSpace,
  dragBtn,
} from "../assets";

const features = [
  {
    title: "Undo",
    image: undo,
    function: ()=>{console.log("Undo")}
  },
  {
    title: "Redo",
    image: redo,
    function: ()=>{console.log("Redo")}
  },
  {
    title: "Capital Case",
    image: capitalCase,
    function: ()=>{console.log("Capital Case")}
  },
  {
    title: "Sentence Case",
    image: sentenceCase,
    function: ()=>{console.log("Sentence Case")}
  },
  {
    title: "Lowercase",
    image: lowercase,
    function: ()=>{console.log("Lowercase")}
  },
  {
    title: "Uppercase",
    image: uppercase,
    function: ()=>{console.log("Uppercase")}
  },
  {
    title: "Remove Extra Space",
    image: removeExtraSpace,
    function: ()=>{console.log("Remove Extra Space")}
  },
];

export { features, dragBtn };
