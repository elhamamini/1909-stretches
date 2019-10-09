function times(num1) {
  if (typeof num1 !== "number") {
    throw "Numbers only!";
  }
  return function(num2) {
    return num1 * num2;
  };
}

module.exports = { times };
