function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out = "";

    const arr = JSON.parse(input);
    const times = JSON.parse(input2);
    let outputArr = [];
    for( let i = 0; i < times; i++ ){
        outputArr.push( arr[i] );
    }
    out= outputArr;
    output.innerText = out;
}