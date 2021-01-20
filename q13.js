const arr = [];
let count = 0;

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "Element " + count + ": " +input + "\n";
    arr.push(input);
    count++;
    output.innerText += out;
}






 
