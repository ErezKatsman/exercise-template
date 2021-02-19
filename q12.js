function computeArr(arr) {
  let newArr = arr.flat(Infinity);
  let sum = 0,
    p = 1;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
    p *= newArr[i];
  }
  return `sum: ${sum} | ! : ${p} `;
}

console.log(computeArr([1, 2, 3, 4, [5, 6, [7, 8]]]));
