function isEqual(obj1, obj2) {
  // write your function here
<<<<<<< HEAD
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
=======
  // run your tests by running `jest isEqual`
  // you can also run tests on every save by running
  // `jest --watch isEqual`
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key in obj1) {
    if (!obj2[key] || obj1[key] !== obj2[key]) {
      return false;
    }
  }

>>>>>>> 8432be207daf1864355556d3004c3cd3723c3882
  return true;
}

module.exports = { isEqual };
