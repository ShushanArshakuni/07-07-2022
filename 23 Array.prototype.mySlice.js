Array.prototype.mySlice = function (startIndex, endIndex) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 0) {
      if (startIndex < arr.length && endIndex === undefined) {
        newArr.push(arr[startIndex]);
        startIndex++;
      } else if (startIndex === undefined && endIndex === undefined) {
        newArr = arr;
      } else if (startIndex < endIndex && endIndex < arr.length) {
        newArr.push(arr[startIndex]);
        startIndex++;
      }
    }
  }
  return newArr;
};

console.log([5, 6, 9, 25, 87].mySlice(1, 3));
