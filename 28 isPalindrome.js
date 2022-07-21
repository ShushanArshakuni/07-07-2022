let string = "abba";
function checkIfPalindrome(string) {
  let reversed = string.split("").reverse();

  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] === string[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
console.log(checkIfPalindrome(string));
