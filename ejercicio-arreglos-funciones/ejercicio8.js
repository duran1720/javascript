function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.length;
}

console.log("Number of words in 'This is a sentence':", countWords("This is a sentence"));