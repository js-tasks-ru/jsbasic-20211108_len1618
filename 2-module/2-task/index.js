function isEmpty(obj) {
  // ваш код...
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}
