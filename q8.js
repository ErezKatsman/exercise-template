function timesOfChar(ch, arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ch) {
      count++;
    }
  }
  return count;
}

function mostFrec(arr) {
  let maxTimes = 0;
  let maxCh = "";
  for (let i = 0; i < arr.length; i++) {
    if (timesOfChar(arr[i], arr) > maxTimes) {
      maxTimes = timesOfChar(arr[i], arr);
      maxCh = arr[i];
    }
  }
  return `${maxCh} (${maxTimes} times)`;
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, 3, 3];
console.log(mostFrec(arr));
