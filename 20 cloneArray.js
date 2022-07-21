let array = [1, 2, 3, 4, 5];

function cloneArray(array) {
  let newArray = array.slice();
  return newArray;
}
console.log(cloneArray(array));
