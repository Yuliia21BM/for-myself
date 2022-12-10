// const numbers = [1, 5, 6, 2, 3, 4];
// let counter = 0;
// for (let loop = 1; loop < numbers.length - 2; loop += 1) {
//   let wasCandgedElement = false;
//   // console.table(loop);
//   let chandgeElement = false;
//   for (let i = 1; i < numbers.length - loop; i += 1) {
//     // console.log(numbers[i]);
//     let firstElement = numbers[i - 1];
//     let secondElement = numbers[i];
//     // console.log(firstElement, secondElement);
//     if (firstElement > secondElement) {
//       wasCandgedElement = true;
//       firstElement = numbers[i];
//       secondElement = numbers[i - 1];
//     }
//     counter += 1;
//   }
//   if (!wasCandgedElement) break;
// }
// console.log(counter);
// console.table(numbers);

// const arr = [
//   { id: "a", parentId: null },
//   { id: "b", parentId: "a" },
//   { id: "c", parentId: "a" },
//   { id: "d", parentId: null },
//   { id: "e", parentId: "e" },
// ];

const arr = [
  { id: "a", parentId: null },
  { id: "b", parentId: "a" },
  ,
  { id: "q", parentId: "b" },
  { id: "c", parentId: "a" },
  { id: "d", parentId: null },
  { id: "e", parentId: "e" },
];

// const newObg = {};

// function SortArr(arr = []) {
//   arr.map(({ id, parentId }) => {
//     newObg[id] = { id, parentId };
//     arr
//       .filter((u) => id === u.parentId)
//       .forEach((line) => {
//         let ident = line.id;
//         newObg[id][ident] = line;
//       });
//   });
//   console.log(newObg);
// }

// SortArr(arr);

function SortArr(arr = []) {
  const newObj = {};
  arr.map(({ id, parentId }) => {
    newObj[id] = { id, parentId };
    arr
      .filter((u) => id === u.parentId)
      .forEach((line) => {
        let ident = line.id;
        newObj[id][ident] = line;
      });
  });
  console.log(newObj);
  // const entries = Object.entries(newObj);
  // const keys = Object.keys(newObj)
  // for (key of keys) {
  //   for (entrie of entries) {
  //   entrie.include(key) ?
  //   }
  // }
}

SortArr(arr);
