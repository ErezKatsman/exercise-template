const color = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];
const o = ["th", "st", "nd", "rd"];
for (let i = 0; i < color.length; i++) {
  switch (i) {
    case 0:
      console.log(`${i + 1 + o[1]} choice is ${color[i]}`);
      break;
    case 1:
      console.log(`${i + 1 + o[2]} choice is ${color[i]}`);
      break;
    case 2:
      console.log(`${i + 1 + o[3]} choice is ${color[i]}`);
      break;
    default:
      console.log(`${i + 1 + o[0]} choice is ${color[i]}`);
  }
}
