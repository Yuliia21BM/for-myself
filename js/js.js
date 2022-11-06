const numbers = [1, 5, 6, 2, 3, 4];
let counter = 0;
for (let loop = 1; loop < numbers.length - 2; loop += 1) {
  let wasCandgedElement = false;
  // console.table(loop);
  let chandgeElement = false;
  for (let i = 1; i < numbers.length - loop; i += 1) {
    // console.log(numbers[i]);
    let firstElement = numbers[i - 1];
    let secondElement = numbers[i];
    // console.log(firstElement, secondElement);
    if (firstElement > secondElement) {
      wasCandgedElement = true;
      firstElement = numbers[i];
      secondElement = numbers[i - 1];
    }
    counter += 1;
  }
  if (!wasCandgedElement) break;
}
console.log(counter);
console.table(numbers);
