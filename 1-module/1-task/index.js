function factorial(n) {
  if (n!==0) {
    let value = n;
    for (let i = n - 1; i > 1; --i) {
       value = value * i;
    }
    return value;
  } else {
    return 1
  }
}
