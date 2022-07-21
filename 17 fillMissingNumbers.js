let arr = [1, 2, 2, 3, 3, 3, 8];

function fillMissingNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    let n = arr[i + 1] - arr[i];
    if (n > 1) {
      arr.splice(i + 1, 0, arr[i] + 1);
    }
  }
  return arr;
}
console.log(fillMissingNumbers(arr));
