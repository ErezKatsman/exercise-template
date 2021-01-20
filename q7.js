function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
    let arr = JSON.parse(input);
    arr.sort(function(a, b){return a-b});
    out= arr;
    output.innerText = out;
}


 
