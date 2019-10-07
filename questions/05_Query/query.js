const items = [
  {
    id: 1,
    name: "foo",
    price: 2
  },
  {
    id: 3,
    name: "bar",
    price: 4
  },
  {
    id: 66,
    name: "bazz",
    price: 4
  }
];

// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]

function query(arr, obj) {
  const keyArr = Object.keys(obj);

  return arr.filter(objB => {
    const ourKey = Object.keys(objB);
    for (let i = 0; i < keyArr.length; i++) {
      if (ourKey.includes(keyArr[i]) && obj[keyArr[i]] === objB[keyArr[i]]) {
        return objB;
      }
    }
  });
}

module.exports = { query, items };
