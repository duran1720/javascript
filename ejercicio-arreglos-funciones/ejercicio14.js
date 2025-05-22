function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log("Average of [1, 2, 3, 4, 5]:", calculateAverage([1, 2, 3, 4, 5]));