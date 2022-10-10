// Mine | works | O(n^2)
// function addUpTo(arr, target) {
//   // if (arr.length < 2) {
//   //   return -1;
//   // }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return -1;
// }

function addUpTo(arr, target) {
  const arrMaps = {};

  for (let p = 0; p < arr.length; p++) {
    const currentMapVal = arrMaps[arr[p]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    } else {
      const numToFind = target - arr[p];
      arrMaps[numToFind] = p;
    }
  }
  return -1;
}

console.log(addUpTo([2, 6, 9, 8, 1, 4], 17));
