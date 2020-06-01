const sentence = prompt("Please enter a sentence");

function firstLastUpper(sentence) {
  const n = sentence.length;
  const firstLast = sentence.charAt(0) + sentence.charAt(n-1);
  const result = firstLast.toUpperCase();
  return result;
};

alert(firstLastUpper(sentence));