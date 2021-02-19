const arr = JSON.parse(prompt("enter an arr"));
function arrayClone(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(arrayClone(arr));
