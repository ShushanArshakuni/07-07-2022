Array.prototype.myJoin = function (separator) {
  let arr = this;
  let string = "";
  for (let item of arr) {
    if (arr.length === 1) {
      return (string = arr[0]);
    } else if (arr.length === 0) {
      return (string = "");
    }

    if (separator === undefined) {
      string += item + ",";
    } else if (separator === "") {
      string += item;
    } else if (item === arr[arr.length - 1]) {
      string += item;
    } else {
      string += item + separator;
    }
  }
  return string;
};

let str = ["Mari", "Elen", "Lucia"].myJoin();
console.log(str);
