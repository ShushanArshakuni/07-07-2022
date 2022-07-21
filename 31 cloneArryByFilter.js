let array = ["a", "b", "c", "d"];

function cloneArray(array) {
  let clonedArray = array.filter((item) => item);
  return clonedArray;
}
console.log(cloneArray(array));
