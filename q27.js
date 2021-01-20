function createNew(arr) {
  let newArr = [];
  for (let i = 0; i <= arr.length; i++) {
    if (!isNaN(arr[i])) {
      if (arr[i] != 0) {
        if (arr[i] !== null) {
          if (arr[i] !== "") {
            newArr.push(arr[i]);
          }
        }
      }
    }
  }
  return newArr;
}

let arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

console.log(createNew(arr));
