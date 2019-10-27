// Caeser Cipher
// https://en.wikipedia.org/wiki/Caesar_cipher
// create a function that takes a string and a shift value and returns an encrypted string

// accept only alphanumeric characters
// shifted values should wrap back around
// z -> a  and 9 -> 0

// example
// str = 'hello'
// shift = 3
// result = 'khoor'

// example
// str = "yolo789"
// shift = 4
// result = "csps123"

const encryptString = (str, shift) => {
  // YOUR CODE
  const abc = "abcdefghijklmnopqrstuwxyz";
  const num = "0123456789";
  return str.split("").map((s, idx) => {
    if (abc.includes(s)) {
      if (abc.length + shift > abc.length) {
        console.log(abc[(abc.length + shift) % abc.length)]);
       return  abc[(abc.length + shift) % abc.length)];
      }
      console.log(abc[idx + shift]);
      return abc[idx + shift];
    } else if (num.includes(s)) {
      return num[idx + shift];
    }
  });
};

module.exports = { encryptString };
