let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 5, 3, 7, 9, 1];
concatedArr = arr1.concat(arr2);

function filtered(concatedArr) {
  let grouped = {};
  for (let elem of concatedArr) {
    let prop = elem;
    if (grouped[prop] === undefined) {
      grouped[prop] = 1;
    } else {
      grouped[prop]++;
    }
  }
  return Object.keys(grouped);
}
console.log(filtered(concatedArr));
