Array.prototype.myToString = function () {
  let arr = this;
  arr = String(arr);
  return arr;
};

let arr = ["Mari", "Elen", "Lucia"].myToString();
console.log(typeof arr);
