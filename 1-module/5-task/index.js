function truncate(str, maxlength) {
  let strLength = str.length
  let slised = str.slice(0, --maxlength)

  if (strLength > maxlength) {
    return  `${slised}…`
  } else {
    return str
  }
}

// С одним минусом у --maxlength не проходит тест
