function ucFirst(str) {
  if (!str) {
    return str
  } else {
    let name = str[0].toUpperCase()
    return name + str.slice(1)
    console.log(name)
  }
}
