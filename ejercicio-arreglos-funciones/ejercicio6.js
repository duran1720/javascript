function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log("Sum of array [1, 2, 3, 4, 5]:", sumArray([1, 2, 3, 4, 5]));