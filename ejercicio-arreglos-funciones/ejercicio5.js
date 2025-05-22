function countEvenNumbers(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

console.log("Number of even numbers in [1, 2, 3, 4, 5, 6]:", countEvenNumbers([1, 2, 3, 4, 5, 6]));