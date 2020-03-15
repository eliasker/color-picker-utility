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

  console.log(hexConverter(hexCodes[Math.floor(Math.random() * hexCodes.length)].code))

  const generateHexColorCode = () => {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
      hex += randomHex()
    }
    console.log(hex + recognizeColor(hex))
    return hex
  }

  const recognizeColor = hex => {
    let colorEstimate = 'green'
    return '...is probably shade of ' + colorEstimate
  }

  const [colors, setColors] = useState([generateHexColorCode(), generateHexColorCode(), generateHexColorCode()])

  const generateStyleObj = index => {
    const styleObj = {
      background: colors[index],
    }
    return styleObj
  }

  const handleRandomize = () => {
    const newColors = [
      generateHexColorCode(), generateHexColorCode(), generateHexColorCode()
    ]
    setColors(newColors)
  }

  const Row = () => {
    return (
      <div className='color-row'>
        <span style={generateStyleObj(0)}>foo</span>
        <span style={generateStyleObj(1)}>bar</span>
        <span style={generateStyleObj(2)}>baz</span>
      </div>
    )
  }
  return (
    <div className='App'>
      <Row />
      <button onClick={handleRandomize}>Randomize</button>
    </div>
  );
}

export default App;
