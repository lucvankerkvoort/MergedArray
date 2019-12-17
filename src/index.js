const string = "hello WORLD";

const reverseVowels = string => {
  console.log(string);
  const vowels = [];
  const indeces = [];

  // const vowelArray = ;
  const wordArray = string.split("");

  for (let i = 0; i < wordArray.length; i++) {
    if (
      ["a", "A", "e", "E", "o", "O", "u", "U", "i", "I"].indexOf(
        wordArray[i]
      ) !== -1
    ) {
      vowels.unshift(wordArray[i]);
      indeces.push(i);
    }
  }

  for (let j = 0; j < indeces.length; j++) {
    wordArray.splice(indeces[j], 1, vowels[j]);
  }

  console.log(wordArray.join(""));
};

reverseVowels(string);
