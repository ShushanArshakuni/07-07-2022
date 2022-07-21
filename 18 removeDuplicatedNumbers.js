let array = [1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7];
function removeDuplicatedNumbers(array) {
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1] && array[i] === array[i + 1]) {
      array.splice(i, 2);
    } else if (array[i] === array[i - 1]) {
      array.splice(i, 1);
    } else if (array[i] === array[i + 1]) {
      array.splice(i + 1, 1);
    } else if (array[i] === array[i - 1] && array[i] === array[i - 2]) {
      array.splice(-i, 2);
    }
  }
  return array;
}
console.log(removeDuplicatedNumbers(array));

// let array = [1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7];
// function removeDuplicatedNumbers(array) {
//   let object = {};
//   for (let item of array) {
//     let count = 0;
//     if (object[item]) {
//       object[item]++;
//     } else {
//       object[item] = 1;
//     }
//   }
//   return Object.keys(object);
// }
// console.log(removeDuplicatedNumbers(array));
