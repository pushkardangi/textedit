import React from 'react'
import { useTheme } from "../context/ThemeContext";
import { useText } from "../context/TextContext";


function Stats() {

  const { theme } = useTheme();
  const { border, borderColor, fnBtnColor } = theme;

  const { text } = useText();

  const stats = [
    {
      key: 1,
      title: "Characters",
      logic: text.length,
    },
    {
      key: 2,
      title: "Words",
      logic: text.split(' ').filter(word => word).length,
    },
    {
      key: 3,
      title: "Minutes",
      logic: ((text.split(" ").filter((n) => { return n !== "" }).length) * 0.01).toFixed(1),
    },
  ]

  return (

    stats.map((stat) => (
      <div key={stat.key}>
        <button className={`px-3 py-1.5 mr-2 shadow rounded-md ${fnBtnColor} ${border} ${borderColor}`}>
          {stat.logic} {stat.title}
        </button>
      </div>
    ))

  )

}

export default Stats
