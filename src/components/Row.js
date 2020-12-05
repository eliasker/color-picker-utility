import React, { useState } from "react"
import { generateHexColorCode, findMultipleClosest } from "../util/hexUtil"

const Row = () => {
  const [colors, setColors] = useState(findMultipleClosest(generateHexColorCode(), 6))

  const ColorElement = ({ color }) => {
    return (
      <span className="clickable"
        style={{ background: color }}
        onClick={() => selectTheme(color)}>
        {color}
      </span>
    )
  }

  const createTheme = () => {
    const hex = generateHexColorCode()
    setColors(findMultipleClosest(hex, 6))
  }

  const selectTheme = (hex) => {
    setColors(findMultipleClosest(hex, 6))
  }

  return (
    <div className="row-container">
      <div className="color-row">
        <button className="clickable" onClick={() => createTheme()}>Random</button>
        {colors.map(c => <ColorElement color={c} key={c} />)}
      </div>

    </div>
  )
}

export default Row
