function getMinMax(str) {
  // ваш код...
  let string =  str.split(' ').map(item => parseFloat(item)).filter(Boolean)
  let min = string.sort((a, b) => a - b).shift();
  let max = string.pop();
  return result = {min, max}
}
