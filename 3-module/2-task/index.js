function filterRange(arr, a, b) {
  // ваш код...
  let numbers = arr.filter(item => item <= b && item >= a);
  return numbers
}
