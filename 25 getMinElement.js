let array = [1, 9, 6, 8, 7, 2, 11, 25];
function getMinElement(array) {
  return array.sort((a, b) => b - a);
}
console.log(getMinElement(array));
