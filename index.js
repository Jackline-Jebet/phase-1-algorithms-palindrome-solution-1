function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = reverseString(word);
  return word === reverseWord
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("EXpecting: true");
  console.log("=>", isPalindrome("a"));
  console.log("");

  console.log("EXpecting: true");
  console.log("=>", isPalindrome("abba"));
  console.log("");

  console.log("EXpecting: false");
  console.log("=>", isPalindrome("dab"));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"))
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
