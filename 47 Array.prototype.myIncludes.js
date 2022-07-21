Array.prototype.myIncludes = function (item, from) {
  let arr = this;
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

let arr = [1, 2, 3, 4, 5];
console.log(arr.myIncludes(2, 3));
