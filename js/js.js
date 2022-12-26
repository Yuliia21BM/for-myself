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
//   { id: "e", parentId: "d" },
// ];

const arr = [
  { id: "a", parentId: null },
  { id: "b", parentId: "a" },
  ,
  { id: "c", parentId: "a" },
  { id: "d", parentId: null },
  { id: "e", parentId: "e" },
  { id: "f", parentId: "b" },
  { id: "q", parentId: "b" },
  { id: "h", parentId: "e" },
];

const newObj = {};
const newArr = [];

function SortArr(arr = []) {
  arr.filter(({ id, parentId }) => {
    if (id === parentId) {
      newObj[id] = { id, parentId, [id]: { id, parentId } };
    }
    if (parentId === null || id === parentId) {
      newObj[id] = { id, parentId };

      arr
        .filter((u) => id === u.parentId)
        .forEach((line) => {
          let ident = line.id;
          newObj[id][ident] = line;
        });
    }
  });
  arr.filter(({ id, parentId }) => {
    if (!Object.keys(newObj).includes(parentId) && parentId !== null) {
      newArr.push({ id, parentId });
    }
  });
  const objValues = Object.values(newObj);
  checking(objValues);
  function checking(arr) {
    arr.forEach((val) => {
      newArr.forEach(({ id, parentId }) => {
        if (Object.keys(val).includes(parentId)) {
          val[parentId][id] = { id, parentId };
          newArr.splice({ id, parentId }, 1);
        }
      });
    });
    if (newArr.length > 0) checking(arr);
  }
}
SortArr(arr);

console.log(newObj);

// if (newArr.length !== 0) {
//   const entries = Object.entries(newObj);
//   newArr.map(({ id, parentId }) => {
//     review(entries);
//     function review(arr) {
//       const newA = arr.map((el) => {
//         if (Object.entries(el)[0].includes(parentId)) {
//           el[parentId][id] = { id, parentId };
//         } else {
//           return;
//         }
//       });
//       if (newArr.length > 0) review(newA);
//     }
// });
// console.log(entries);
// console.log(newArr);
// }

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      const map = L.map("map").setView(coords, 13);

      L.tileLayer("https://tile.openstreetmap.fr/hot//{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      alert("Could not get your position");
    }
  );
}
