function cache(func) {
  if (typeof func !== "function") {
    throw "Input must be a function.";
  }

  return function(num) {
    return func(num);
  };
}

module.exports = { cache };
