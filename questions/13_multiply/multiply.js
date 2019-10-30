const multiply = (num1, num2) => {
  const arr = [num1, num2];
  expect(typeof num1).toEqual("number");
  expect(typeof num2).toEqual("number");
  expect(arr.length).tobe(2);
};

module.exports = { multiply };
