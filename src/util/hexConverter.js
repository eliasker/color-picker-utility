/**
 * Utility for splitting RGB Hex -codes into into decimal RGB -values
 * @param {*} hex RGB -code of color
 */

const hexConterver = hex => {
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

export default hexConterver