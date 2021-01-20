function run() {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  let arr = textToArr(input);
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) || arr[i] == 0 || arr[i] === "") {
      arr.splice(i, 1);
      i--;
      console.log(arr);
    }
  }

  output.innerText = arr;
}

function textToArr(input) {
  let out = [];
  let index = 0;
  let temp = "";
  if (input[0] !== "[" || input[input.length - 1] !== "]") {
    out = "NaA";
  } else {
    for (let i = 1; i < input.length; i++) {
      if (input[i] === "," || input[i] === "]") {
        out[index] = temp;
        index++;
        temp = "";
      } else {
        temp += input[i];
      }
    }
  }
  return out;
}
