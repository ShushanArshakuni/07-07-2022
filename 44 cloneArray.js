function cloneArray(arr) {
  let newArr = [];
  newArr = Array.from(arr);
  return newArr;
}
console.log(cloneArray([1, 5, 9, 70, 56]));
