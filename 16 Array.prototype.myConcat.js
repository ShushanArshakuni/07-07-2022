Array.prototype.myConcat = function (...args) {
  let arr = this;
  for (let arg of args) {
    if (Array.isArray(arg)) {
      arr.push(...arg);
    } else {
      arr.push(arg);
    }
  }
  return arr;
};
console.log([1, 2, 3].myConcat(15));
