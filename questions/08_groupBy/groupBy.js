function groupBy(arr, attr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i].length]) {
      obj[arr[i].length] = [arr[i]];
    } else {
      obj[arr[i].length].push(arr[i]);
    }
  }
}

module.exports = { groupBy };
