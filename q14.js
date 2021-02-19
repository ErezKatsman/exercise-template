function removeDuplicate(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeDuplicate([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));
