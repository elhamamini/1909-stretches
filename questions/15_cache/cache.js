function cache(cb) {
  if (typeof cb !== "function") {
    throw new Error("Input must be a function.");
  }
  const obj = {};
  return function(...num) {
    if (num in obj) {
      return obj[num];
    } else {
      obj[num] = cb(...num);

      return cb(num);
    }
  };
}

module.exports = { cache };
