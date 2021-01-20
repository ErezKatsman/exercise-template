const arr = [1, 2, 3, 4, 5, 7, 8, 9];

function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "There is no number that you searched in array";
    for( let i = 0 ; i < arr.length ; i++){
        if(Number(input) === arr[i]){
            out = i;
        }
    }
    
    output.innerText = out;
}


 
