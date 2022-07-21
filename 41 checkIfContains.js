let array = [1, 2, 6, 8, 15, 20, 72];
function checkIfContains(array, elem) {
  if (array.indexOf(elem) === -1) {
    return false;
  }
  return true;
}
console.log(checkIfContains(array, 72));
