let arr1 = [5, 7, 6, 14, 55, 66, 2, 1];
let arr2 = [2, 7, 6, 10, 63, 2, 1, 5];
function findDifference() {
  return arr1.filter(function (item) {
    return arr2.includes(item);
  });
}
console.log(findDifference(arr1, arr2));
