const trim = obj => {
  let newObj = {};
  for (let key in obj) {
    if (obj[key] !== undefined && obj[key] !== null) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

module.exports = { trim };
