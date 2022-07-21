let number = 1679924;
function getEvenNumbers(number) {
  let evenDigits = [];
  let str = number.toString();
  for (let item of str) {
    if (item % 2 === 0) {
      let digit = Number(item);
      evenDigits.push(digit);
    }
  }
  return evenDigits;
}

console.log(getEvenNumbers(number));
