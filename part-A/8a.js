function vowelCount(word) {
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  const lowerWord = word.toLowerCase();

  for (const char of lowerWord) {
    if (vowels[char] != undefined) {
      vowels[char] += 1;
    }
  }
  return vowels
}

console.log(vowelCount("Tour de France Earn"))

