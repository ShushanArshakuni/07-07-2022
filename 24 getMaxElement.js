let array = [3, 9, 6, 8, 7, 2, 10, 45];
function getMaxElement(array) {
  return array.sort((a, b) => a - b);
}
console.log(getMaxElement(array));
