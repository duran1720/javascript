function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log("Array with duplicates removed:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));