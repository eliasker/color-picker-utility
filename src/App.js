import React, { useState } from 'react';

import hexCodes from './data/hexProvider'
import { generateHexColorCode, calculateDifference } from './util/hexUtil'
import './App.css';

function App() {
  const [colors, setColors] = useState([generateHexColorCode(), generateHexColorCode(), generateHexColorCode(),
  generateHexColorCode(), generateHexColorCode(), generateHexColorCode()])

  const [closestColor, setClosestColor] = useState(null)

  const recognizeColor = () => {
    let indexOfClosest = 0
    let smallestDiff = calculateDifference(colors[0], hexCodes[0].code)
    for (let i = 0; i < hexCodes.length; i++) {
      const currDiff = calculateDifference(colors[0], hexCodes[i].code)
      if (currDiff < smallestDiff) {
        indexOfClosest = i
        smallestDiff = currDiff
      }
    }
    setClosestColor(hexCodes[indexOfClosest])
  }

  const generateStyleObj = index => {
    const styleObj = {
      background: colors[index],
    }
    return styleObj
  }

  const handleRandomize = () => {
    const newColors = colors.map(c => generateHexColorCode(c))
    setColors(newColors)
  }

  const Row = () => {
    return (
      <div className='color-row'>
        <span style={generateStyleObj(0)}>foo</span>
        <span style={generateStyleObj(1)}>bar</span>
        <span style={generateStyleObj(2)}>baz</span>
        <span style={generateStyleObj(3)}>foo</span>
        <span style={generateStyleObj(4)}>bar</span>
        <span style={generateStyleObj(5)}>baz</span>
      </div>
    )
  }
  
  return (
    <div className='App'>
      <Row />
      <button onClick={handleRandomize}>Randomize</button>

      <div className='color-row'>
        {closestColor === null ?
          <span>Not yet recognized</span> :
          <div>
            <span>closest to {colors[0]} is {closestColor.name} </span>
            <span style={{ background: closestColor.code }}>foo</span>
            <div>
              <span>with hex  {closestColor.code}</span>
            </div>
          </div>
        }
      </div>
      <button onClick={recognizeColor}>Recognize first</button>
    </div>
  );
}

export default App;
