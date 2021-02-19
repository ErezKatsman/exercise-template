const arr1 = [1, 0, 2, 3, 4, 5, 6, 7];
const arr2 = [3, 5, 6, 7, 8, 13];
let sumArr = [];
const l = arr1.length > arr2.length ? arr1.length : arr2.length;

for (let i = 0; i < l; i++) {
  if (!arr1[i]) {
    sumArr.push(arr2[i]);
  } else if (!arr2[i]) {
    sumArr.push(arr1[i]);
  } else {
    sumArr.push(arr1[i] + arr2[i]);
  }
}
console.log(sumArr);
