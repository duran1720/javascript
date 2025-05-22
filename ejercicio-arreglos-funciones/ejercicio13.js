function replaceElement(arr, index, newValue) {
  const newArr = [...arr]; 
  if (index >= 0 && index < newArr.length) {
    newArr[index] = newValue;
  }
  return newArr;
}

console.log("Array with element replaced:", replaceElement([1, 2, 3, 4, 5], 2, 10));