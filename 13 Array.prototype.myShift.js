Array.prototype.myShift = function () {
  let arr = this;
  let firstItem;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 0) {
      return undefined;
    }
    firstItem = arr.splice(0, 1).join();
    return firstItem;
  }
};
console.log([200, 2, 3, 4, 5, 6, 7, 8].myShift());
