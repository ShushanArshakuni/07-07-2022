let array = [1, 2, 3, 4, 5, 6, 7];
function reverse(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array.pop());
  }
  return reversedArray;
}
console.log(reverse(array));
