Array.prototype.myPush = function (...args) {
  let arr = this;
  for (let arg of args) {
    arr[arr.length] = arg;
  }
  return arr.length;
};

let arr = [1, 2, 3, 4, 5];
console.log(arr.myPush(8, 2, 3));
console.log(arr);
