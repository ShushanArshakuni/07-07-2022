Array.prototype.myUnshift = function (...args) {
  let arr = this;

  arr.splice(0, 0, ...args);
  console.log(arr);

  return arr.length;
};
let arr = [4, 11, 6, 7, 9, 20];
console.log(arr.myUnshift(1));
