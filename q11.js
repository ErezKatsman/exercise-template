function sumSqrArr(arr) {
  let newArr = arr.flat(Infinity);
  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += Math.pow(newArr[i], 2);
  }
  return sum;
}

console.log(sumSqrArr([0, 1, 2, 3, 4, [5, 6, [7, 8]]]));
