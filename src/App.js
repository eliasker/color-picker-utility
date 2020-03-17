import React, { useState } from 'react';
import hexCodes from './data/hexProvider'
import hexConverter from './util/hexConverter'
import './App.css';

function App() {
  const randomHex = () => {
    const options = ['0', '1', '2', '3', '4', '5', '6',
      '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    return options[Math.floor(Math.random() * options.length)]
  }

  const generateHexColorCode = () => {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
      hex += randomHex()
    }
    return hex
  }

  const [colors, setColors] = useState([generateHexColorCode(), generateHexColorCode(), generateHexColorCode(),
  generateHexColorCode(), generateHexColorCode(), generateHexColorCode()])

  const [closestColor, setClosestColor] = useState(null)

  const calculateDifference = (hex1, hex2) => {
    const rgb1 = hexConverter(hex1)
    const rgb2 = hexConverter(hex2)
    const diff = Math.abs(rgb1[0] - rgb2[0]) + Math.abs(rgb1[1] - rgb2[1]) + Math.abs(rgb1[2] - rgb2[2])
    return diff
  }

  /**
   * placeholder
   * @param {*} hex 
   */
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
    const newColors = colors.map(c => generateHexColorCode())
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
