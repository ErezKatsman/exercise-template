function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let out = "";
  const arr = JSON.parse(input);
  let newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > 1) {
      let isBoo = false;
      for (let x = 0; x < newArr.length; x++) {
        if (arr[i] === newArr[x]) {
          isBoo = true;
        }
      }
      if (!isBoo) {
        newArr.push(arr[i]);
      }
    }
  }

  newArr.toString();
  out = newArr;

  output.innerText = out;
}
