import React, { useState } from 'react';
import './App.css';

function App() {
  const [colors, setColors] = useState([])
  const possibleColors = ['black', 'silver', 'gray', 'maroon', 'red',
    'purple', 'fuchsia', 'green', 'lime', 'olive',
    'yellow', 'navy', 'blue', 'teal', 'aqua']

  const generateStyleObj = index => {
    const styleObj = {
      background: colors[index],
    }
    return styleObj
  }

  const handleRandomize = () => {
    const newColors = [
      possibleColors[Math.floor(Math.random() * possibleColors.length)],
      possibleColors[Math.floor(Math.random() * possibleColors.length)],
      possibleColors[Math.floor(Math.random() * possibleColors.length)]
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
