/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/

function sortOrder(arr, sortOrder, name) {
  return arr
    .sort((a, b) => {
      if (a[sortOrder] < b[sortOrder]) {
        return -1;
      }
      if (a[sortOrder] > b[sortOrder]) {
        return 1;
      }
      return 0;
    })
    .map(element => element[name]);
}

module.exports = { sortOrder };
//   return a[sortOrder] - b[sortOrder]; this works for numbers
