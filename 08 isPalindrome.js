let string = "abba";

function isPalindrome(string) {
  let str = string.split("");
  console.log(str);
  for (let i = 0; i < str.length / 2; i++) {
    let counter = 0;
    if (str.pop() === str[i]) {
      counter++;
    }
    if (counter === str.length / 2) {
      return true;
    }
  }
  return false;
}
console.log(isPalindrome(string));
