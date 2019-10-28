// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = n => {
  const str = "";
  let last = 1;

  for (let i = 0; i < n; i++) {
    for (let j = last; j <= i + last; j++) {
      str += String(j);
    }
    last = Number(str.slice(str.length - 1));
    str += "/n";
  }
  return str;
};

module.exports = { floydsTriangle };
