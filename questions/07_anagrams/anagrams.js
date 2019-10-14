// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  //YOUR CODE
  const newStr1 = str1
    .split("")
    .sort()
    .join(",");
  const newStr2 = str2
    .split("")
    .sort()
    .join(",");
  if (newStr1 === newStr2) {
    return true;
  } else {
    return false;
  }
};

module.exports = { checkAnagrams };
