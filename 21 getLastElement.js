let array = [1, 2, 3, 4, 5];

function getLastElement(arr, n) {
  return arr.slice(-n);
}

console.log(getLastElement(array, 1));
