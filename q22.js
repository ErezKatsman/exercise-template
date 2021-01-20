function sortTheArrs(arr1, arr2) {
  let arr = arr1.concat(arr2);
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];
console.log(sortTheArrs(arr1, arr2));
