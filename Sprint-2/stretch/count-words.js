function countWordsAdvanced(string) {
  if (!string) return{};
  
  const cleanWords = string
    .toLowerCase()
    .replace(/[.,!?]/g, "")
    .split(" ");
  
    const counts = {};

  for (const word of cleanWords) {
    if (word === "") {
      continue;
    }
    counts[word] = (counts[word] || 0) + 1;
   }
  return counts;
}

function getMostCommon(counts) {
  const entries = Object.entries(counts);
  entries.sort((a, b) => b[1] - a[1]);
  return entries;
}

const text = "You! and me, and you. and you you!"
const myCounts = countWordsAdvanced(text);
const sorted = getMostCommon(myCounts);
console.log(sorted[0]);
/*
  Count the number of times a word appears in a given string.

  Write a function called countWords that
    - takes a string as an argument
    - returns an object where
          - the keys are the words from the string and
          - the values are the number of times the word appears in the string

  Example
  If we call countWords like this:

  countWords("you and me and you") then the target output is { you: 2, and: 2, me: 1 }

  To complete this exercise you should understand
    - Strings and string manipulation
    - Loops
    - Comparison inside if statements
    - Setting values on an object

## Advanced challenges

1. Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results

2. Ignore the case of the words to find more unique words. e.g. (A === a, Hello === hello)

3. Order the results to find out which word is the most common in the input
*/
