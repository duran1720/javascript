function countVowels(text) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  return count;
}

console.log("Number of vowels in 'Hello World':", countVowels("Hello World"));