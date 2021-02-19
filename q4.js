function lastArr(arr, n) {
  if (n === undefined) {
    return arr[arr.length - 1];
  }
  if (n >= arr.length) {
    return arr;
  }
  let newArr = [];
  for (let i = arr.length - n; i <= n; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(lastArr([7, 9, 0, -2]));
console.log(lastArr([7, 9, 0, -2], 3));
console.log(lastArr([7, 9, 0, -2], 6));
console.log(lastArr([7, 9, 5, -2], 4));
