function isEqual(obj1, obj2) {
  // write your function here
  // // run your tests by running `jest isEqual`
  // // you can also run tests on every save by running
  // // `jest --watch isEqual`
  if(obj1==={}&&obj2==={}){
    return true;
  }
  let keys1=Object.keys(obj1);
  let keys2=Object.keys(obj2);
  if(keys1.length!== keys2.length){
    return false;
  }
  for(let key in obj1){
    if(obj1[key]!==obj2[key]){
      return false;
    }
  }
  return true;
}

module.exports = { isEqual };
