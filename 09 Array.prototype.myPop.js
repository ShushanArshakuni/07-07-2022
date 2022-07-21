let arr;
Array.prototype.myPop = function () {
  arr = this;
  let lastItem;
  if (arr.length > 0) {
    lastItem = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastItem;
  } else {
    return undefined;
  }
};

console.log([1, 2, 3, 4, 5, 6].myPop());
console.log(arr);
