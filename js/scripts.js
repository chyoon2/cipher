const sentence = prompt("Please enter a sentence");

// Business Logic

// const string1 = firstLastUpper(sentence);
// const string2 = reverseFirstLast(string1);


function firstLastUpper() {
  const n = sentence.length;
  const firstLast = sentence.charAt(0) + sentence.charAt(n-1);
  const result = firstLast.toUpperCase();
  return result;
};

function reverseFirstLast() {
  return firstLastUpper(sentence).charAt(1) + firstLastUpper(sentence).charAt(0);
};

function getLastTwo() {
  const string1 = firstLastUpper(sentence);
  const string2 = reverseFirstLast(string1);
  return string2;
};

alert(getLastTwo());