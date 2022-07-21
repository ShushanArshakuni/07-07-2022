function createPreFilledArray(length, elem) {
  let prefilledArray = [];
  while (prefilledArray.length < length) {
    prefilledArray.push(elem);
  }
  return prefilledArray;
}
console.log(createPreFilledArray(7, "a"));
