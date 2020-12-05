import hexCodes from "../data/hexProvider";

const hexConverter = hex => {
  const first = hex.substring(1, 3)
  const second = hex.substring(3, 5)
  const third = hex.substring(5)

  const convertToNumber = value => {
    if (Number.isInteger(+value)) return Number(value)
    else if (value === 'A') return 10
    else if (value === 'B') return 11
    else if (value === 'C') return 12
    else if (value === 'D') return 13
    else if (value === 'E') return 14
    else if (value === 'F') return 15
  }

  const parseIntFromHex = hex => {
    const first = convertToNumber(hex.substring(0, 1)) * Math.pow(16, 1)
    const second = convertToNumber(hex.substring(1)) * Math.pow(16, 0)
    return first + second
  }

  return [parseIntFromHex(first), parseIntFromHex(second), parseIntFromHex(third)]
}

const options = ['0', '1', '2', '3', '4', '5', '6',
  '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

const randomHex = () => {
  return options[Math.floor(Math.random() * options.length)]
}

const generateHexColorCode = () => {
  let hex = '#'
  for (let i = 0; i < 6; i++) {
    hex += randomHex()
  }
  return hex
}

const calculateDifference = (hex1, hex2) => {
  const rgb1 = hexConverter(hex1)
  const rgb2 = hexConverter(hex2)
  const diff = Math.abs(rgb1[0] - rgb2[0]) + Math.abs(rgb1[1] - rgb2[1]) + Math.abs(rgb1[2] - rgb2[2])
  return diff
}

const findClosest = (hex) => {
  let indexOfClosest = 0;
  let smallestDiff = calculateDifference(hex, hexCodes[0].code)
  for (let i = 0; i < hexCodes.length; i++) {
    const currDiff = calculateDifference(hex, hexCodes[i].code);
    if (currDiff < smallestDiff) {
      indexOfClosest = i;
      smallestDiff = currDiff;
    }
  }
  return hexCodes[indexOfClosest];
}

const findMultipleClosest = (hex, amount) => {
  const found = [hex]
  while (found.length < amount) {
    let smallestDiff = calculateDifference(hex, hexCodes[0].code);
    let indexOfClosest = 0;
    for (let i = 0; i < hexCodes.length; i++) {
      const currDiff = calculateDifference(hex, hexCodes[i].code)
      if (currDiff < smallestDiff && !found.includes(hexCodes[i].code)) {
        indexOfClosest = i;
        smallestDiff = currDiff;
      }
    }
    found.push(hexCodes[indexOfClosest].code)
  }
  return found;
}

export { hexConverter, generateHexColorCode, calculateDifference, findClosest, findMultipleClosest }
