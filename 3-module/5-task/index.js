function getMinMax(str) {
  // ваш код...
  let string =  str.split(' ').map(item => parseFloat(item)).filter(Boolean)
  let min = string.sort((a, b) => a - b).shift();
  let max = string.sort((a, b) => a - b).pop();
  return result = {min, max}
}
