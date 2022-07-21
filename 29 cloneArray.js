let array = ["a", "b", "c", "d"];
function clone(array) {
  let cloned = array.map((item) => item);
  return cloned;
}
console.log(clone(array));
