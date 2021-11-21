function camelize(str) {
  // ваш код...
  let letters = str.split('-').join('')
  letters = str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  return letters
}
camelize('background-color')
