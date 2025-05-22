function findLargestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

console.log("Largest number in [5, 2, 9, 1, 5]:", findLargestNumber([5, 2, 9, 1, 5]));